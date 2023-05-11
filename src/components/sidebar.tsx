import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-[10%] fixed h-screen left-0 bg-blue-500">
      <div className="flex flex-col w-full items-center gap-5 mt-4">
        <Link to={"/"} className="w-3/4">
          {" "}
          <button className="p-5 w-full bg-white rounded-md shadow-md active:bg-slate-400">
            Contacts
          </button>
        </Link>
        <Link to={"/charts"} className="w-3/4">
          <button className="p-5 w-full  bg-white rounded-md shadow-md active:bg-gray-400">
            Charts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
