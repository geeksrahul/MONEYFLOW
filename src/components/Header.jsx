import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="[grid-area:header] flex items-center justify-between border-b border-gray-200 px-6 w-full border-1 bg-white">
      <div>
        <h1 className="text-xl font-medium text-gray-900">
          MoneyFlow
        </h1>
        <p className="text-sm text-gray-500">
          Manage your money, simply.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
        >
          <FontAwesomeIcon icon={faBell}/>
        </button>

        <Link 
          to="/profile"
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-700">
            R
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900">Rahul</p>
            <p className="text-xs text-gray-500">Personal</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;