import getData, { apiUrl } from "../api/getData.js"; // Імпортуємо функцію getData і об'єкт api з відповідних модулів
import viewProducts from "./products.js";          // Імпортуємо функцію виводу товарів
import { boxCategory } from "./helpers/elements.js";      // Імпортуємо необхідні елементи з модулю elements

// Функція для відображення продуктів на сторінці.
export default function viewCategory() {

    // Викликаємо функцію getData з URL каталогу API.
    getData(apiUrl.category).then(categoryList => {

        // Перевіряємо, чи є категорії у каталозі.
        if (boxCategory) {
            if (categoryList.length) {

                // Очищуємо контейнер для каталогу перед додаванням нових елементів.
                boxCategory.innerHTML = '<a href="0" class="dropdown-item">Скинути вибір</a>';

                // Ітерація по кожному продукту в каталозі.
                categoryList.forEach(product => {

                    // Деструктуризація об'єкту продукту для легкого доступу до його властивостей.
                    const { title, id } = product;
                    
                    // Додавання HTML для кожного продукту в boxCategory.
                    boxCategory.insertAdjacentHTML(
                        'beforeend',
                        `<a href="${id}" class="dropdown-item">${title}</a>`)
                });

            } else {
                // Якщо продуктів немає, виводимо повідомлення про це.
                boxCategory.innerHTML = '<a href="#" class="dropdown-item">Не знайдено...</a>'
            }
        }
    })
}



// Виводимо товари по кліку категорії
if (boxCategory) {
    boxCategory.onclick = function (e) {
        e.preventDefault();

        // Відображаємо товари по категорії, яка клікнули
        const catId = Number(e.target.getAttribute('href'));

        // Формуємо url до якого потрібно звернутися
        const url = (!catId) ? apiUrl.catalog : apiUrl.catalogByCategory + catId;

        // Викликаємо функцію viewProducts з вибраною категорією
        viewProducts(url);
    }
}