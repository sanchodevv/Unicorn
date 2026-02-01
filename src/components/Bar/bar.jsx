import { useState } from "react";
import { useTranslation } from "react-i18next";
import LangSelect from "./select";

const Bar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const { t } = useTranslation();

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
                            <p>{t('settings')}</p>
                            <p>{t('theme')}</p>
                            <p>{t('notifications')}</p>
                            <button onClick={toggleSettings}>×</button>
                        </div>
                    )}
               </div>
               <div className="profile" onClick={toggleProfile}>
                <img src="./public/profile.png" alt="dd" />
                 {isProfileOpen && (
                    <div className="profile-dropdown">
                        <p>{t('profileInfo')}</p>
                        <p>{t('name')}</p>
                        <p>{t('email')}</p>
                        <button onClick={toggleProfile}>×</button>
                    </div>
                )}
               </div>
            </div>
        </>
    );
}
export default Bar;