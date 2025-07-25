import { ReactNode } from "react";
import Draggable from "react-draggable";

interface Props {
  show: boolean;
  onClose: () => void;
  title?: string;
  component: ReactNode;
  x: number;
  y: number;
  z: number;
}

export const Popup = ({ title, show, onClose, component, x, y, z }: Props) => {
  if (!show) return null;

  return (
    <Draggable handle="#header" defaultPosition={{ x: x, y: y }}>
      <div
        id="popup"
        className="absolute bg-w98Gray emboss p-2"
        style={{ zIndex: z }}
      >
        <div
          id="header"
          className="bg-gradient-to-r from-[#000d8a] to-[#167acd] w-full h-[15%] flex flex-row justify-between items-center p-1 cursor-move"
        >
          <div
            id="title"
            className="font-tahoma font-bold text-white text-sm pl-2"
          >
            {title}
          </div>
          <div id="title-buttons" className="flex items-center">
            <div
              id="close"
              className="emboss bg-w98Gray w-[20px] h-[20px] flex items-center justify-center cursor-pointer ml-2 p-2"
              onClick={onClose}
              onTouchStart={onClose} // mobile's `onClick`
              style={{
                fontFamily: "Tahoma, sans-serif",
                fontWeight: "bold",
                color: "black",
                border: "1px solid black",
                boxShadow: "inset 1px 1px white, inset -1px -1px #7a7a7a",
              }}
            >
              X
            </div>
          </div>
        </div>
        <div id="body" className="p-1">
          {component}
        </div>
      </div>
    </Draggable>
  );
};
