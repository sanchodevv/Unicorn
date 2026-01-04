import { menuData } from "../../constants/menuData";
import { Link } from "react-router-dom";
import "./aside.css"; 

const Aside = () => {
    return <aside>
        <div className="aside-logo">
            <img src="./public/logo.png" alt="" />
        </div>
        <div className="aside-navbar">
            {menuData.map((route, index) => (
                    <Link className='link' key={index} to={route.path}>
                        
                        <img src={route.img} alt={route.name} />
                        {route.name}
                    </Link>
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