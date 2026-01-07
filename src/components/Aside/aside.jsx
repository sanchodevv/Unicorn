import { menuData } from "../../constants/menuData";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./aside.css"; 

const Aside = () => {
    const [isMembershipOpen, setIsMembershipOpen] = useState(false);
    const navigate = useNavigate();

    const handleMembersClick = (e) => {
        e.preventDefault();
        setIsMembershipOpen(!isMembershipOpen);
        navigate('/members');
    };

    return <aside>
        <div className="aside-logo">
            <img src="./public/logo.png" alt="" />
        </div>
        <div className="aside-navbar">
            {menuData.map((route, index) => (
                <div key={index}>
                    {route.name === "Members" ? (
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
                    {route.name === "Members" && (
                        <div className={`membership-submenu ${isMembershipOpen ? 'open' : ''}`}>
                            <Link className='link' to="/membership">
                                <img src="./public/members.png" alt="Membership" />
                                Membership
                            </Link>
                        </div>
                    )}
                </div>
            ))}
        </div>
        <div className="exit">
            <a href="#">
                <img src="./public/log-out.png" alt="exit" />
            </a>
                Logout
        </div>
    </aside>;
}
export default Aside;