import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavToolTip = ({title}) => (
  <span className="pointer-event-none absolute left-20 text-white bg-purple-600 py-1 px-3 rounded-md opacity-0 group-hover:opacity-100">
    {title}
  </span>
);

const NavItem = ({
    to,
    title, 
    icon 
}) => {
    return (
        <NavLink
            to={to}
            className={({isActive})=>`group relative flex h-12 w-12 items-center justify-center rounded-xl ${isActive ? 'bg-purple-100 text-purple-600 hover:bg-purple-100' : 'bg-transparent text-black hover:bg-gray-100'} `}
        >
            <FontAwesomeIcon icon={icon} />
            <NavToolTip title={title} />
        </NavLink>
    );
}

export default NavItem;