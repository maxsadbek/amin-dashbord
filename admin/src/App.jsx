import { RouterProvider, createBrowserRouter } from "react-router";

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

const router = createBrowserRouter([
  {
    path: '/'
  }
])

const App = () => {
  return <div></div>;
};

export default App;
