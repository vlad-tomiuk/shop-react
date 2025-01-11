import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Order from "./pages/Order";
import Search from "./pages/Search";
import About from "./pages/About";
import ResetPassword from "./pages/ResetPassword";
import CartProvider from "./components/CartProvider";

export default function App() {

	return (
		<CartProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="category/:catid" element={<Home />} />
						<Route path="contacts" element={<Contacts />} />
						<Route path="delivery" element={<Delivery />} />
						<Route path="search" element={<Search />} />
						<Route path="order" element={<Order />} />
						<Route path="about" element={<About />} />
						<Route path="reset-password" element={<ResetPassword />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}