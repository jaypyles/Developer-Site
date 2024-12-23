import { useReducer, useState, useEffect } from "react";
import { PopupAction, PopupState } from "@/lib/types";
import useIsMobile from "@/hooks/useMobile";

const initialState: PopupState = {
  programmingLanguages: false,
  hobbies: false,
};

const initialPositions = {
  programmingLanguages: { x: -200, y: 20, z: 10 },
  hobbies: { x: -200, y: 20, z: 20 },
};

const mobilePositions = {
  programmingLanguages: { x: -50, y: 10, z: 10 },
  hobbies: { x: -50, y: 10, z: 20 },
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

export const usePopup = () => {
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
      ...Object.values(positions).map((position) => position.z)
    );

    setPositions((prev) => {
      const updatedPositions = { ...prev };

      const currentX =
        Math.max(...Object.values(prev).map((pos) => pos.x)) + 20;
      const currentY =
        Math.max(...Object.values(prev).map((pos) => pos.y)) + 20;

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
      [popup]: isMobile ? mobilePositions[popup] : initialPositions[popup],
    }));

    dispatch({ type: "CLOSE_POPUP", popup: popup });
  };

  return { state, positions, handleOpen, handleClose };
};
