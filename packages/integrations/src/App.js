import React, { useEffect, useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import { fetchItems } from './api';

const EcommerceContext = React.createContext({
  items: [],
  cart: {
    items: []
  }
});

function Home() {
  const { items } = useContext(EcommerceContext);

  return (
    <div className="home">
      <h1 style={{ marginLeft: '1rem' }}>Items</h1>
      {
        items.map(item => (
          <div key={item.id} style={{ border: '1px solid', padding: '1rem', margin: '1rem 0' }}>
            <Link to={`/item/${item.id}`}>
              {item.name}
            </Link>
          </div>
        ))
      }
    </div>
  );
}

const Details = ({ onAddToCart, match } ) => {
  const { params: { itemId } } = match;
  const { items = [] } = useContext(EcommerceContext);
  const [quantity, setQuantity] = useState(0);

  const item = items.find(({ id }) => id === Number(itemId));

  if (!item) {
    return <div role="alert">Item not found</div>;
  }

  const { name, price, about, image } = item;

  const handleAddToCart = () => onAddToCart(itemId, quantity);
  const handleQuantityChange = ({ target: { value }}) => setQuantity(value);

  return (
    <div style={{
      display: 'flex',
      padding: '1rem',
      flexDirection: 'column'
    }}>
      <h1>Item: {name}</h1>
      <p>Price: {price}</p>
      <a href={about}>Learn more</a>
      <img
        src={image}
        style={{
          width: '100%',
          maxWidth: '200px',
          height: 'auto',
        }}
        alt={`Item ${name} picture`}
      />
      <form onSubmit={(e) => {
        e.preventDefault();
        handleAddToCart()
      }}>
        <label htmlFor="quantity">Quantity</label>
        <input id="quantity" type="number" value={quantity} onChange={handleQuantityChange} />
        <button type="submit" onClick={handleAddToCart}>Add to cart</button>
      </form>
    </div>
  );
};

function Cart() {
  const {
    items = [],
    cart: {
      items: cartItemsMap
    }
  } = useContext(EcommerceContext);

  const cartItemsIds = Object.keys(cartItemsMap);

  if (!cartItemsIds.length) return <div role="alert">Empty cart</div>;

  const cartItems = items.filter(({ id }) => cartItemsIds.includes(String(id)));

  console.log({ cartItems, cartItemsIds });

  return (
    <div>
      {
        cartItems.map(({ id, name, price}) => {
          const quantity = cartItemsMap[id];
          const total = Math.round(price * quantity);

          return (
            <div
              key={id}
              style={{
                display: 'flex',
                padding: '1rem',
                justifyContent: 'space-between',
              }}
            >
              <span>Name: {name}</span>
              <span>Price: {price}</span>
              <span>Total: {total}</span>
              <span>Quantity: {quantity}</span>
            </div>
          );
        })
      }
    </div>
  )
}

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newItems = await fetchItems();

        setItems(newItems);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (itemId, quantity) => {
    const cartItemQuantity = cartItems[itemId] || 0;
    const newQuantity = Number(cartItemQuantity + quantity);

    setCartItems({
      ...cartItems,
      ...(newQuantity > 0 && { [itemId]: newQuantity })
    })
  }

  if (!items.length) return <div>Loading...</div>;

  return (
    <div className="app">
      <EcommerceContext.Provider value={{
        items,
        cart: {
          items: cartItems
        }
      }}>
        <Router>
          <header style={{
            display: 'flex',
            padding: '1rem',
            justifyContent: 'space-between',
          }}>
            <Link to="/">Pocket eCommerce</Link>
            <Link to="/cart">Cart</Link>
          </header>
          <Switch>
            <Route
              path="/item/:itemId"
              component={(routeProps) => <Details onAddToCart={handleAddToCart}{...routeProps}/>}
            />
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </EcommerceContext.Provider>
    </div>
  );
}

export default App;
