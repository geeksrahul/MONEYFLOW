import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NavToolTip = ({title}) => {
    return (
        <span className="absolute left-20 text-white bg-purple-600 py-1 px-3 rounded-md">
            {title}
        </span>
    );
}

const NavItem = ({
    to,
    title, 
    icon 
}) => {
    const [tooltip, setTooltip] = useState(false)
    return (
        <NavLink
            to={to}
            className={({isActive})=>`relative flex h-12 w-12 items-center justify-center rounded-xl ${isActive ? 'bg-purple-100 text-purple-600 hover:bg-purple-100' : 'bg-transparent text-black hover:bg-gray-100'} `}
            onMouseEnter={()=>{
                setTooltip(true)
            }}
            onMouseLeave={()=>{
                setTooltip(false)
            }}
        >
            <FontAwesomeIcon icon={icon} />
            {tooltip && <NavToolTip title={title} />}
        </NavLink>
    );
}

export default NavItem;