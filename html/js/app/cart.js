import setCartProduct from './cart/setCartProduct.js'; // Імпортуємо добавлення товару в корзину
import viewCartProducts from './cart/viewCartProducts.js'; // Імпортуємо вивід товарів в корзину
import cartAddedEvents from './cart/cartAddedEvents.js'; // Імпортуємо події, які є в корзині
import { boxCartProducts, cartAddedBtn, boxCatalog, boxHotOfferProducts } from "./helpers/elements.js"; // Імпортуємо необхідні елементи з модулю elements

// Вивід корзини
export default function cart() {
    
    // Підраховуємо кількість добавлених товарів
    viewCartProducts();
    
    // Добавлення товару в корзину
    if (boxCatalog) boxCatalog.onclick = setCartProduct;
    
    // Добавлення товару в корзину
    if (boxHotOfferProducts) boxHotOfferProducts.onclick = setCartProduct;
    
    // Маніпулюжмо карточками добавлених товарів
    if (boxCartProducts) boxCartProducts.onclick = cartAddedEvents;

    // Ховаємо і показуємо корзину
    cartAddedBtn.onclick = () => boxCartProducts.classList.toggle("show");
}
