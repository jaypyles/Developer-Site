import React, { useReducer, useState, useEffect } from "react";
import Navbar from "src/common/Navbar";
import Homepage from "src/common/Homepage";
import CurrentTheme from "src/common/CurrentTheme";
import Popup from "src/components/Popup";
import ProgrammingLanguages from "src/components/popups/ProgrammingLanguages";
import Hobbies from "src/components/popups/Hobbies";
import { PopupAction, PopupState } from "src/lib/types";
import Draggable from "react-draggable";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const initialState: PopupState = {
  programmingLanguages: false,
  coolBox: false,
};

const initialPositions = {
  programmingLanguages: { x: -200, y: 20, z: 10 },
  coolBox: { x: -200, y: 20, z: 20 },
};

const mobilePositions = {
  programmingLanguages: { x: -50, y: 10, z: 10 },
  coolBox: { x: -50, y: 10, z: 20 },
};

const popupReducer = (state: PopupState, action: PopupAction) => {
  switch (action.type) {
    case "TOGGLE_POPUP":
      return {
        ...state,
        [action.popup]: !state[action.popup],
      };
    case "CLOSE_POPUP":
      return {
        ...state,
        [action.popup]: false,
      };
    case "OPEN_POPUP":
      return {
        ...state,
        [action.popup]: true,
      };
    default:
      return state;
  }
};

const Home: React.FC = () => {
  const isMobile = useIsMobile();
  const [state, dispatch] = useReducer(popupReducer, initialState);
  const [positions, setPositions] = useState(
    isMobile ? mobilePositions : initialPositions
  );

  useEffect(() => {
    setPositions(isMobile ? mobilePositions : initialPositions);
  }, [isMobile]);

  const handleOpen = (popup: keyof PopupState) => {
    const maxZIndex = Math.max(
      positions.programmingLanguages.z,
      positions.coolBox.z
    );

    setPositions((prev) => {
      const updatedPositions = { ...prev };

      // calculate new positions for cascading effect
      const offsetX = 20;
      const offsetY = 20;
      const currentX =
        Math.max(prev.programmingLanguages.x, prev.coolBox.x) + offsetX;
      const currentY =
        Math.max(prev.programmingLanguages.y, prev.coolBox.y) + offsetY;

      // update the position and z-index for the clicked popup
      updatedPositions[popup] = {
        x: currentX,
        y: currentY,
        z: maxZIndex + 10,
      };

      return updatedPositions;
    });

    dispatch({ type: "OPEN_POPUP", popup: popup });
  };

  const handleClose = (popup: keyof PopupState) => {
    setPositions((prev) => ({
      ...prev,
      [popup]: isMobile ? mobilePositions[popup] : initialPositions[popup], // reset position to the initial state
    }));

    dispatch({ type: "CLOSE_POPUP", popup: popup });
  };

  return (
    <>
      <Navbar />
      <Homepage handleOpen={handleOpen} popupState={state} />
      <CurrentTheme />

      <Popup
        title="Programming Languages"
        show={state.programmingLanguages}
        onClose={() => handleClose("programmingLanguages")}
        x={positions.programmingLanguages.x}
        y={positions.programmingLanguages.y}
        z={positions.programmingLanguages.z}
      >
        <ProgrammingLanguages />
      </Popup>

      <Popup
        title="Hobbies"
        show={state.coolBox}
        onClose={() => handleClose("coolBox")}
        x={positions.coolBox.x}
        y={positions.coolBox.y}
        z={positions.coolBox.z}
      >
        <Hobbies />
      </Popup>
    </>
  );
};

export default Home;
