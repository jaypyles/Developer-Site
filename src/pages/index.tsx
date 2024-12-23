import React from "react";
import { Homepage, CurrentTheme } from "@/components/homepage";
import { Popup, ProgrammingLanguages, Hobbies } from "@/components/popups";
import { usePopup } from "@/hooks/usePopup";

const Home: React.FC = () => {
  const { state, positions, handleOpen, handleClose } = usePopup();

  return (
    <>
      <Homepage handleOpen={handleOpen} popupState={state} />
      <CurrentTheme />

      <Popup
        title="Programming Languages"
        component={<ProgrammingLanguages />}
        show={state.programmingLanguages}
        onClose={() => handleClose("programmingLanguages")}
        x={positions.programmingLanguages.x}
        y={positions.programmingLanguages.y}
        z={positions.programmingLanguages.z}
      />

      <Popup
        title="Hobbies"
        component={<Hobbies />}
        show={state.hobbies}
        onClose={() => handleClose("hobbies")}
        x={positions.hobbies.x}
        y={positions.hobbies.y}
        z={positions.hobbies.z}
      />
    </>
  );
};

export default Home;
