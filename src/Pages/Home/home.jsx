import "./home.css"
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className="home">
                <h1>{t("receivedMoney")}</h1>
                <div className="stats">
                    <img src="./public/stat.png" alt="" />
                </div>
                <div className="stats-cards">
                    <div className="stats-card">
                        
                    </div>
                    <div className="stats-card">

                    </div>
                    <div className="stats-card">

                    </div>
                    <div className="stats-card">

                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;