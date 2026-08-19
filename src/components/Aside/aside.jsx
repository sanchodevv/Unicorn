import { getMenuData } from "../../constants/menuData";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { 
    Home, 
    Users, 
    ShoppingCart, 
    Boxes, 
    Package, 
    History, 
    CreditCard, 
    LogOut 
} from "lucide-react";
import "./aside.css"; 

const IconMap = {
    Home,
    Users,
    ShoppingCart,
    Boxes,
    Package,
    History,
    CreditCard
};

const renderIcon = (iconName) => {
    const IconComponent = IconMap[iconName];
    return IconComponent ? <IconComponent size={20} className="sidebar-icon" /> : null;
};

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

    return (
        <aside>
            <div className="aside-logo">
                <img src="./public/logo.png" alt="" />
            </div>
            <div className="aside-navbar">
                {menuData.map((route, index) => (
                    <div key={index}>
                        {route.path === "/members" ? (
                            <a className='link' onClick={handleMembersClick}>
                                {renderIcon(route.icon)}
                                {route.name}
                                <span className={`arrow ${isMembershipOpen ? 'rotated' : ''}`}>▼</span>
                            </a>
                        ) : (
                            <Link className='link' to={route.path}>
                                {renderIcon(route.icon)}
                                {route.name}
                            </Link>
                        )}
                        {route.path === "/members" && (
                            <div className={`membership-submenu ${isMembershipOpen ? 'open' : ''}`}>
                                <Link className='link' to="/membership">
                                    <Users size={16} className="sidebar-icon" />
                                    {t('membership')}
                                </Link>
                            </div>
                        )}
                        {route.path === "/members" && (
                            <div className={`garbrandt-submenu ${isGarBrandtOpen ? 'open' : ''}`}>
                                <Link className='link' to="/garbrandt">
                                    <Users size={16} className="sidebar-icon" />
                                    {t('garbrant')}
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="exit">
                <a href="#" onClick={(e) => { e.preventDefault(); setIsLoggedIn(false); }}>
                    <LogOut size={20} className="sidebar-icon" />
                </a>
                {t('logout')}
            </div>
        </aside>
    );
};

export default Aside;
