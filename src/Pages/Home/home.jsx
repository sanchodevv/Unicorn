import "./home.css"
import { useTranslation } from "react-i18next";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from "react";

const Home = () => {
    const { t } = useTranslation();
    const [selectedPeriod, setSelectedPeriod] = useState('weekly');
    
    // Data for different periods
    const periodData = {
      
        weekly: {
            chartData: [
                { name: 'ЯНВ', value: 4000 },
                { name: 'ФЕБ', value: 1398 },
                { name: 'МАР', value: 9800 },
                { name: 'АПР', value: 3908 },
                { name: 'МАЙ', value: 4800 },
                { name: 'ИЮНЬ', value: 3800 },
                { name: 'ИЮЛЬ', value: 4300 },
                { name: 'АВГ', value: 2300 },
                { name: 'СЕНТ', value: 2300 },
                { name: 'ОКТ', value: 4300 },
                { name: 'НОЯБРЬ', value: 2300 },
                { name: 'ДЕК', value: 2300 },
            ],
            amount: '12,7 млн. сум',
            percentage: '+12%',
            stats: [
                { label: 'ACTIVE MEMBERS', value: '8', icon: '👥', color: '#a78bfa' },
                { label: 'EXPIRED MEMBERS', value: '8', icon: '⏰', color: '#a78bfa' },
                { label: 'TODAY VISITS', value: '8', icon: '👁️', color: '#60a5fa' },
                { label: 'OUT OF STOCK PRODUCTS', value: '8', icon: '🛒', color: '#a78bfa' },
            ]
        },
        monthly: {
            chartData: [
                { name: 'ЯНВ', value: 15400 },
                { name: 'ФЕБ', value: 12398 },
                { name: 'МАР', value: 18800 },
                { name: 'АПР', value: 16908 },
                { name: 'МАЙ', value: 14800 },
                { name: 'ИЮНЬ', value: 10800 },
                { name: 'ИЮЛЬ', value: 17300 },
                { name: 'АВГ', value: 15300 },
                { name: 'СЕНТ', value: 16300 },
                { name: 'ОКТ', value: 14300 },
                { name: 'НОЯБРЬ', value: 3000 },
                { name: 'ДЕК', value: 10300 },
            ],
            amount: '45,2 млн. сум',
            percentage: '+28%',
            stats: [
                { label: 'ACTIVE MEMBERS', value: '156', icon: '👥', color: '#a78bfa' },
                { label: 'EXPIRED MEMBERS', value: '42', icon: '⏰', color: '#a78bfa' },
                { label: 'TODAY VISITS', value: '287', icon: '👁️', color: '#60a5fa' },
                { label: 'OUT OF STOCK PRODUCTS', value: '23', icon: '🛒', color: '#a78bfa' },
            ]
        },
        yearly: {
            chartData: [
                { name: '2015', value: 25000 },
                { name: '2016', value: 52000 },
                { name: '2017', value: 58000 },
                { name: '2018', value: 62000 },
                { name: '2019', value: 68000 },
                { name: '2020', value: 100000 },
                { name: '2021', value: 68000 },
                { name: '2022', value: 85000 },
                { name: '2023', value: 92000 },
                { name: '2024', value: 98000 },
                { name: '2025', value: 165000 },
            ],
            amount: '750,5 млн. сум',
            percentage: '+45%',
            stats: [
                { label: 'ACTIVE MEMBERS', value: '1,245', icon: '👥', color: '#a78bfa' },
                { label: 'EXPIRED MEMBERS', value: '342', icon: '⏰', color: '#a78bfa' },
                { label: 'TODAY VISITS', value: '3,456', icon: '👁️', color: '#60a5fa' },
                { label: 'OUT OF STOCK PRODUCTS', value: '187', icon: '🛒', color: '#a78bfa' },
            ]
        }
    };

    const currentData = periodData[selectedPeriod];
    
    return (
        <>
            <div className="home">
                <h1 className="home-title">ПОЛУЧЕННЫЕ ДЕНЬГИ</h1>
                
                {/* Top Stats Section */}
                <div className="top-stats">
                    <div className="top-stats-content">
                        <p className="stats-period">Продажи 2022</p>
                        <div className="stats-amount">
                            <span className="amount">{currentData.amount}</span>
                            <span className="percentage">{currentData.percentage} ПО СРАВНЕНИЮ С ПРОШЛЫМ ГОДОМ</span>
                        </div>
                    </div>
                    
                    {/* Period Toggle Buttons */}
                    <div className="period-buttons">
                        
                        <button 
                            className={`period-btn ${selectedPeriod === 'weekly' ? 'active' : ''}`}
                            onClick={() => setSelectedPeriod('weekly')}
                        >
                            Еженедельно
                        </button>
                        <button 
                            className={`period-btn ${selectedPeriod === 'monthly' ? 'active' : ''}`}
                            onClick={() => setSelectedPeriod('monthly')}
                        >
                            Ежемесячно
                        </button>
                        <button 
                            className={`period-btn ${selectedPeriod === 'yearly' ? 'active' : ''}`}
                            onClick={() => setSelectedPeriod('yearly')}
                        >
                            Ежегодно
                        </button>
                    </div>
                </div>

                {/* Chart Section */}
                <div className="chart-container">
                    <ResponsiveContainer width="100%" height={280}>
                        <LineChart data={currentData.chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={true} />
                            <XAxis 
                                dataKey="name" 
                                stroke="#999" 
                                tick={{ fill: '#999', fontSize: 12 }}
                            />
                            <YAxis 
                                stroke="#999" 
                                tick={{ fill: '#999', fontSize: 12 }}
                            />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: '#9B74F0', 
                                    border: 'none', 
                                    borderRadius: '8px',
                                    color: 'white',
                                    padding: '8px 12px'
                                }}
                                formatter={(value) => [`${value}`, 'Revenue']}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="value" 
                                stroke="#ffffff" 
                                dot={false}
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Stats Cards Section */}
                <div className="bottom-stats-cards">
                    {currentData.stats.map((card, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-card-header">
                                <span className="stat-card-icon" style={{ color: card.color }}>
                                    {card.icon}
                                </span>
                                <span className="stat-card-label">{card.label}</span>
                            </div>
                            <p className="stat-card-value">{card.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}   
export default Home;