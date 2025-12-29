import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="flex w-full items-center justify-center absolute">
      <h1
        className={`${
          location.pathname === "/details" ? "bg-none" : "bg-gray-500/15"
        } text-center mt-7 tracking-wider text-sm text-(--white) blur-[0.5px] cursor-default z-50 px-2 py-0.5 rounded-lg`}
      >
        MonoShare
      </h1>
    </div>
  );
};

export default Header;
