import NavItem from "./NavItem.jsx";

import { faLayerGroup, faPieChart } from "@fortawesome/free-solid-svg-icons";
import { faFileLines, faSquareMinus, faSquarePlus } from "@fortawesome/free-regular-svg-icons";

const navData = [
    {
        to : "/app/",
        title : "Dashboard",
        icon : faPieChart,
    },
    {
        to : "/app/incomes",
        title : "Incomes",
        icon : faSquarePlus,
    },
    {
        to : "/app/expenses",
        title : "Expenses",
        icon : faSquareMinus,
    },
    {
        to : "/app/categories",
        title : "Categories",
        icon : faLayerGroup,
    },
    {
        to : "/app/statements",
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