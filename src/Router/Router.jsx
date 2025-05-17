import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import Spinner from "../components/Spinner";
import CoffeeDetails from "../pages/CoffeeDetails";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/coffees"),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "coffees/:id",
        Component: CoffeeDetails,
        loader: ({params}) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
      {
        path: "updateCoffee/:id",
        Component: UpdateCoffee,
        loader: ({params}) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
    ],
  },
]);
export default router;
