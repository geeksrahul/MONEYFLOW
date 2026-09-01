import { useEffect } from "react";

const Profile = () => {
    
    useEffect(()=>{
        document.title = "Profile | MoneyFlow";
    }, []);
    return (
        <section>
            Profile Page
        </section>
    )
}

export default Profile;