import loading from "../../public/images/loading.gif";
const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-imageAccent text-white z-50">
      <img src={loading.src} alt="Loading..."></img>
    </div>
  );
};

export default Loading;
