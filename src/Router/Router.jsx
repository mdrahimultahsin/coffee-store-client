import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import Spinner from "../components/Spinner";
import CoffeeDetails from "../pages/CoffeeDetails";
import UpdateCoffee from "../pages/UpdateCoffee";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://coffee-store-server-lovat-eight.vercel.app/coffees"),
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
          fetch(
            `https://coffee-store-server-lovat-eight.vercel.app/coffees/${params.id}`
          ),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "updateCoffee/:id",
        Component: UpdateCoffee,
        loader: ({params}) =>
          fetch(
            `https://coffee-store-server-lovat-eight.vercel.app/coffees/${params.id}`
          ),
        hydrateFallbackElement: <Spinner />,
      },
    ],
  },
]);
export default router;
