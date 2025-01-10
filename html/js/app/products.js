import getData, { apiUrl } from "../api/getData.js"; // Імпортуємо функцію getData і об'єкт api з відповідних модулів
import { imgFolder } from "./helpers/config.js"; // Імпортуємо необхідні параметри
import { viewPrice, setProductAttr, cleanForAttr } from "./helpers/utils.js"; // Імпортуємо додаткові функції помічники
import { boxCountProducts, boxCatalog } from "./helpers/elements.js"; // Імпортуємо необхідні елементи з модулю elements

// Функція для відображення продуктів на сторінці.
export default function viewProducts(url = apiUrl.catalog) {

    // Викликаємо функцію getData з URL каталогу API.
    getData(url).then(catalog => {

        // Встановлюємо кількість товарів у boxCountProducts.
        boxCountProducts.innerHTML = catalog.length;

        // Перевіряємо, чи є товари у каталозі.
        if (catalog.length) {

            // Очищуємо контейнер для каталогу перед додаванням нових елементів.
            boxCatalog.innerHTML = '';

            // Ітерація по кожному продукту в каталозі.
            catalog.forEach(product => {

                // Деструктуризація об'єкту продукту для легкого доступу до його властивостей.
                const { img, title, price, oldprice, id } = product;

                // Додавання HTML для кожного продукту в boxCatalog.
                boxCatalog.insertAdjacentHTML(
                    'afterbegin',
                    `<div class="card-product">
                            <div class="card-product__img-hold">
                                <img src="${imgFolder + img}" alt="${cleanForAttr(title)}" class="card-product__img" ${setProductAttr(product)}>
                            </div>
                            <div class="card-product__text-hold">
                                <a href="#" class="card-product__title-link" ${setProductAttr(product)}>${title}</a>
                                <span class="card-product__price">${viewPrice(price)} грн<small>${viewPrice(oldprice)} грн</small></span>
                                <a href="#" class="card-product__btn-add" ${setProductAttr(product)}>
                                    <svg class='icon icon-cart'><use href='#icon-cart-add'></use></svg>
                                </a>
                            </div>
                        </div>`)
            });

        } else {
            // Якщо продуктів немає, виводимо повідомлення про це.
            boxCatalog.innerHTML = '<h1 class="no-result">Товарів не знайдено...</h1>'
        }
    })
} 
