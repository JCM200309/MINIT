import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home-page";
import { ProductsPage } from "./pages/products-page";
import { ProductDetailPage } from "./pages/product-detail-page";
import { AboutPage } from "./pages/about-page";
import { ContactPage } from "./pages/contact-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/products",
    Component: ProductsPage,
  },
  {
    path: "/products/:id",
    Component: ProductDetailPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);