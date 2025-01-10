import viewCart from "./app/cart.js";
import viewCategory from "./app/сategory.js";
import viewProducts from "./app/products.js";
import viewHotOffers from "./app/hotOffers.js";
import searchProducts from "./app/search.js";

// Виводимо список товарів
viewProducts();
viewCategory();
viewHotOffers();
searchProducts();
viewCart();

// Мобільне меню
document.querySelector('.hamburger input').onchange = () => document.querySelector('.js-mobile-menu').classList.toggle('show');