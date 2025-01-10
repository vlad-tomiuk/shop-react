import getData, { apiUrl } from "../api/getData.js"; // Імпортуємо функцію getData і об'єкт api з відповідних модулів
import { imgFolder } from "./helpers/config.js"; // Імпортуємо необхідні параметри
import { viewPrice, setProductAttr, cleanForAttr } from "./helpers/utils.js"; // Імпортуємо додаткові функції помічники
import { boxHotOfferBlock, boxHotOfferProducts } from "./helpers/elements.js"; // Імпортуємо необхідні елементи з модулю elements

// Функція для відображення продуктів на сторінці.
export default function viewHotOffers() {

   // Викликаємо функцію getData з URL каталогу API.
   getData(apiUrl.hotOffer).then(products => {

      // Перевіряємо блок на існування
      if (boxHotOfferBlock) {
         
         // Перебираємо товари
         if (products.length === 0) {

            // Ховаємо блок гарячих пропозицій
            boxHotOfferBlock.classList.add('hidden');

         } else {

            // Показуємо блок гарячих пропозицій
            boxHotOfferBlock.classList.remove('hidden');

            // Наповнюємо змінну масивом в вигляді html
            const productsHtml = products.map(product => {

               // Деструктуризація об'єкту продукту для легкого доступу до його властивостей.
               const { img, title, price, oldprice, id } = product;

               return `<div class="card-product">
                        <div class="card-product__img-hold">
                           <img src="${imgFolder + img}" alt="${cleanForAttr(title)}" class="card-product__img" ${setProductAttr(product)}>
                        </div>
                        <div class="card-product__text-hold">
                           <a href="#" class="card-product__title-link" ${setProductAttr(product)}>${title}</a>
                           <span class="card-product__price">${viewPrice(price)} грн <small>${viewPrice(oldprice)} грн</small></span>
                           <a href="#" class="card-product__btn-add" ${setProductAttr(product)}><svg class='icon icon-cart'><use href='#icon-cart-add'></use></svg></a>
                        </div>
                     </div>`;
            });

            // Виводимо одним махом
            boxHotOfferProducts.innerHTML = productsHtml.join('');
		   }
		}
   })
} 
