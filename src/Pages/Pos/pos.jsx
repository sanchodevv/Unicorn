import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ShoppingCart, Search } from "lucide-react";
import "./pos.css";
import { Input } from "antd";

const Pos = () => {
    const { t } = useTranslation();

    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => {
      setCart(prev => {
        const existing = prev.find(item => item.id === product.id);
        if (existing) {
          return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
        }
        return [...prev, { ...product, qty: 1 }];
      });
    };

    const increaseQty = (id) => {
  setCart(prev =>
    prev.map(p =>
      p.id === id ? { ...p, qty: p.qty + 1 } : p
    )
  );
};

const decreaseQty = (id) => {
  setCart(prev =>
    prev
      .map(p =>
        p.id === id ? { ...p, qty: p.qty - 1 } : p
      )
      .filter(p => p.qty > 0)
  );
};
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);


  const [products, setProduct] = useState([]);

useEffect(() => {
  fetch("https://dummyjson.com/products?limit=10")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProduct(data.products);
    });
}, []);
    const [searchText, setSearchText] = useState('');
    const filteredData = products.filter(item =>
    (item.title && item.title.toLowerCase().includes(searchText.toLowerCase()))
    );    
    return (
<>
       <div className="sav">
         <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
           <ShoppingCart size={22} /> ({cart.reduce((sum, item) => sum + item.qty, 0)})
         </button>
       </div>
        <div  className="inp">

          <Search size={18} style={{ color: '#9B74F0', marginLeft: '16px', marginRight: '8px', alignSelf: 'center' }} />
          <Input
          placeholder={t('searchByName')}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          style={{ width: 424, marginRight: 16 }}
        />
        </div>
        <div className="cards">
  {filteredData.map(product => (
    <div className="card" key={product.id}>
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{t('brand')}: {product.brand}</p>
      <p>{t('quality')}: {product.category}</p>
      <button onClick={() => addToCart(product)}>
        <ShoppingCart size={16} style={{ marginRight: '8px' }} />
        {t('addToCart')} ({cart.find(item => item.id === product.id)?.qty || 0})
      </button>
    </div>
  ))}
  {isCartOpen && (
  <div className="sale-panel">
    <h3>{t('saleSummary')}</h3>
    <button className="close-btn" onClick={() => setIsCartOpen(false)}>✕</button>

    {cart.map(item => (
      <div key={item.id} className="sale-item">
        <img src={item.thumbnail} alt="" />

        <div className="info">
          <b>{item.title}</b>
          <span>{t('brand')}: {item.brand}</span>
          <p>${item.price}</p>
        </div>

        <div className="qty">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>
      </div>
    ))}

    <div className="total">
      <b>{t('total')}:</b> <span>${total.toFixed(2)}</span>
    </div>

    <button className="pay-btn" onClick={() => alert("payment succesfully done")}>MAKE PAYMENT</button>
  </div>
)}

</div>

</>
);
}
export default Pos;