import "./App.css";
import HomePage from "./components/homePage/HomePage";
import { Switch, Route } from "react-router-dom";
import OrderPage from "./components/orderPage/OrderPage";
import OrderDetail from "./components/orderDetailPage/OrderDetail";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/order" component={OrderPage} />
      <Route path="/orderDetail" component={OrderDetail} />
    </Switch>
  );
}

export default App;
