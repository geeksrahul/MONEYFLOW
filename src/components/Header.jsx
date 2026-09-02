import { Link } from "react-router-dom";
import { useUser } from "../contexts";

const Header = () => {
  const {user} = useUser();
  return (
    <header className="[grid-area:header] flex items-center justify-between border-b border-gray-200 px-6 w-full border bg-white">
      <div>
        <h1 className="text-xl font-medium text-gray-900">
          MoneyFlow
        </h1>
        <p className="text-sm text-gray-500">
          Manage your money, simply.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Link 
          to="/profile"
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-700">
            R
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900">{user?.personalData?.username}</p>
            <p className="text-xs text-gray-500"> {user?.personalData?.email} </p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;