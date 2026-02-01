import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./pos.css";
import { Input } from "antd";

const Pos = () => {
    const { t } = useTranslation();

    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => {
      setCart(prev => [...prev, { ...product, qty: 1 }]);
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
           <img src="./pos.png" alt="" />({cart.length})
        </button>
       </div>
        <div  className="inp">

          <img src="/search.png" alt="" />
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
      <button><img src="/pos.png" alt="" onClick={() => addToCart(product)} />{t('addToCart')} ({cart.length})</button>
    </div>
  ))}
  {isCartOpen && (
  <div className="sale-panel">
    <h3>{t('saleSummary')}</h3>

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

    <button className="pay-btn">MAKE PAYMENT</button>
  </div>
)}

</div>

</>
);
}
export default Pos;