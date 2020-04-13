import React, { useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import { checkOut } from './api';
import { mockedItems } from './mocks';

const EcommerceContext = React.createContext({
  items: [],
  cart: {
    items: []
  }
});

function Cart() {
  const { cart: { items = {} } } = useContext(EcommerceContext);

  const quantity = Object.values(items).reduce((agg, val) => agg + val, 0);

  return (
    <div>
      <div><Link to="/checkout">Cart</Link></div>
      <div>Items Quantity: {quantity}</div>
    </div>
  )
}

function Home() {
  const { items } = useContext(EcommerceContext);

  return (
    <div className="home">
      <h1 style={{ marginLeft: '1rem' }}>Items</h1>
      {
        items.map(({ id, name }) => (
          <div
            key={id}
            style={{
              border: '1px solid', padding: '1rem', margin: '1rem 0'
            }}
          >
            <Link to={`/item/${id}`}>
              {name}
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
      <a href={about} target="_blank" rel="noopener noreferrer">Learn more</a>
      <img
        src={image}
        style={{
          width: '100%',
          maxWidth: '200px',
          height: 'auto',
        }}
        alt={`Item ${name} illustration`}
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

function Checkout({ onCartItemChange, onClearCart, history }) {
  const [loading, setLoading] = useState(false);

  const {
    items = [],
    cart: {
      items: cartItemsMap
    }
  } = useContext(EcommerceContext);

  const handleCheckOut = () => {
    const checkOutOrder = async () => {
      setLoading(true);

      try {
        await checkOut();
        setLoading(false);

        onClearCart();
        history.push('/');
        alert('Order created successfully!')
      } catch (error) {
        console.error(error);
        setLoading(false)
      }
    }

    checkOutOrder();
  }

  if (loading) return <div>Checking Out... </div>;

  const cartItemsIds = Object.keys(cartItemsMap);

  if (!cartItemsIds.length) return <div role="alert" style={{ padding: '1rem' }}>Empty cart</div>;

  const cartItems = items
    .filter(({ id }) => cartItemsIds.includes(String(id))).map((item) => {
      const { id, price } = item;
      const quantity = cartItemsMap[id];

      return {
        ...item,
        quantity,
        total: Number(price * quantity).toFixed(2)
      }
    });

  const totalAmount = cartItems.map(({ total }) => total).reduce((agg, val) => agg + Number(val), 0).toFixed(2);
  const totalQuantity = Object.values(cartItemsMap).reduce((agg, val) => agg + val, 0);

  return (
    <div style={{ padding: '1rem' }}>
      <div>
        {
          cartItems.map(({ id, name, price, quantity, total }) => (
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
              <button type="button" onClick={() => onCartItemChange(id, -quantity)}>Remove</button>
            </div>
          ))
        }
      </div>
      <div>
        <p>Total: {totalAmount}</p>
        <p>Total items quantity: {totalQuantity}</p>
        <button onClick={handleCheckOut} type="submit">Check Out</button>
      </div>
    </div>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops Something went wrong</h1>;
    }

    return this.props.children; 
  }
}

function App() {
  const items = mockedItems;
  const [cartItems, setCartItems] = useState({});

  const handleClearCart = () => setCartItems({});
  const handleCartItemChange = (itemId, quantity) => {
    const cartItemQuantity = cartItems[itemId] || 0;
    const newQuantity = Number(cartItemQuantity + Number(quantity));

    const newCartItems = {
      ...cartItems,
      ...(newQuantity > 0 && { [itemId]: newQuantity })
    };

    if (newQuantity <= 0) {
      delete newCartItems[itemId];
    }

    setCartItems(newCartItems);
  }

  return (
    <ErrorBoundary>
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
              <Cart />
            </header>
            <Switch>
              <Route
                path="/item/:itemId"
                component={(routeProps) => <Details onAddToCart={handleCartItemChange} {...routeProps}/>}
              />
              <Route
                path="/checkout"
                component={(routeProps) => (
                  <Checkout onCartItemChange={handleCartItemChange} onClearCart={handleClearCart} {...routeProps}/>
                )}
              />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </EcommerceContext.Provider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
