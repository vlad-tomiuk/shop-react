import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CartPinButton from "../components/CartPinButton";

export default function Layout() {
	const location = useLocation();
	const isOrderPage = location.pathname === '/order';

	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
			{!isOrderPage && <CartPinButton />}
		</>
	)
}