import { useState } from "react";
import LangSelect from "./select";

const Bar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        setIsSettingsOpen(false); // Close settings if open
    };

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
        setIsProfileOpen(false); // Close profile if open
    };

    return (
        <>
            { (isProfileOpen || isSettingsOpen) && <div className="overlay" onClick={() => { setIsProfileOpen(false); setIsSettingsOpen(false); }}></div> }
            <div className="bar">
               <div className="select">
                 <LangSelect />
               </div>
               <div className="settings" onClick={toggleSettings}>
                    <img src="./public/settings.png" alt="settings" />
                    {isSettingsOpen && (
                        <div className="settings-dropdown">
                            <p>Settings</p>
                            <p>Theme: Light</p>
                            <p>Notifications: On</p>
                            <button onClick={toggleSettings}>×</button>
                        </div>
                    )}
               </div>
               <div className="profile" onClick={toggleProfile}>
                <img src="./public/profile.png" alt="dd" />
                 {isProfileOpen && (
                    <div className="profile-dropdown">
                        <p>Profile Information</p>
                        <p>Name: Sanjar Komilov</p>
                        <p>Email: sancho@gmail.com</p>
                        <button onClick={toggleProfile}>×</button>
                    </div>
                )}
               </div>
            </div>
        </>
    );
}
export default Bar;