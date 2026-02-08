import { getMenuData } from "../../constants/menuData";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./aside.css"; 

const Aside = ({ setIsLoggedIn }) => {
    const [isMembershipOpen, setIsMembershipOpen] = useState(false);
    const navigate = useNavigate();
    const menuData = getMenuData();
    const { t } = useTranslation();

    const handleMembersClick = (e) => {
        e.preventDefault();
        setIsMembershipOpen(!isMembershipOpen);
        navigate('/members');
    };
    const [isGarBrandtOpen, setIsGarBrandtOpen] = useState(false);
    const navigates = useNavigate();

    const handleGarBrandtClick = (e) => {
        e.preventDefault();
        setIsGarBrandtOpen(!isGarBrandtOpen);
        navigates('/garbrandt');
    };
    

    return <aside>
        <div className="aside-logo">
            <img src="./public/logo.png" alt="" />
        </div>
        <div className="aside-navbar">
            {menuData.map((route, index) => (
                <div key={index}>
                    {route.path === "/members" ? (
                        <a className='link' onClick={handleMembersClick}>
                            <img src={route.img} alt={route.name} />
                            {route.name}
                            <span className={`arrow ${isMembershipOpen ? 'rotated' : ''}`}>▼</span>
                        </a>
                    ) : (
                        <Link className='link' to={route.path}>
                            <img src={route.img} alt={route.name} />
                            {route.name}
                        </Link>
                    )}
                    {route.path === "/members" && (
                        <div className={`membership-submenu ${isMembershipOpen ? 'open' : ''}`}>
                            <Link className='link' to="/membership">
                                <img src="./public/members.png" alt={t('membership')} />
                                {t('membership')}
                            </Link>
                            
                        </div>
                    )}
                    {route.path === "/members" && (
                        <div className={`garbrandt-submenu ${isGarBrandtOpen ? 'open' : ''}`}>
                            <Link className='link' to="/garbrandt">
                                <img src="./public/members.png" alt={t('garbrant')} />
                                {t('garbrant')}
                            </Link>
                            
                        </div>
                    )}
                </div>
            ))}
        </div>
        <div className="exit">
            <a href="#" onClick={() => setIsLoggedIn(false)}>
                <img src="./public/log-out.png" alt="exit" />
            </a>
                {t('logout')}
        </div>
    </aside>;
};

export default Aside;
