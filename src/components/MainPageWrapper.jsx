import { useParams } from "react-router-dom";


const MainPageWrapper = ({children, className = ""}) => {
    return (
        <main className={`p-5 ${className} [grid-area:main]`}>
            {children}
        </main>
    )
}

export default MainPageWrapper;