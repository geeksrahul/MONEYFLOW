import NavItem from "./NavItem.jsx";

import { faLayerGroup, faPieChart } from "@fortawesome/free-solid-svg-icons";
import { faFileLines, faSquareMinus, faSquarePlus } from "@fortawesome/free-regular-svg-icons";

const navData = [
    {
        to : "/dashboard",
        title : "Dashboard",
        icon : faPieChart,
    },
    {
        to : "/incomes",
        title : "Incomes",
        icon : faSquarePlus,
    },
    {
        to : "/expenses",
        title : "Expenses",
        icon : faSquareMinus,
    },
    {
        to : "/categories",
        title : "Categories",
        icon : faLayerGroup,
    },
    {
        to : "/statements",
        title : "Statements",
        icon : faFileLines,
    },
]

const NavBar = () => {
    return (
        <nav className="flex flex-col items-center gap-3">
            {navData.map(link => (
                <NavItem 
                    key={link.to}
                    to={link.to}
                    title={link.title}
                    icon={link.icon}
                />
            ))}
        </nav>
    );
}

export default NavBar;