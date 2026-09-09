// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
// routing
import { Link } from "react-router-dom";
// navbar component
import NavBar from "./NavBar";
const Sidebar = () => {
  return (
    <aside className="[grid-area:sidebar] flex flex-col items-center border-r border-gray-200 bg-white py-4 fixed w-24 h-screen">
      
      {/* Logo */}
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-lg font-bold text-white">
        <FontAwesomeIcon icon={faMoneyBillTransfer} />
      </div>

      {/* Navigation */}
      <NavBar />

      {/* Bottom */}
      <div className="mt-auto">
        <Link
          to="/app/settings"
          className="flex h-12 w-12 items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100"
        >
          <FontAwesomeIcon icon={faGear} />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;