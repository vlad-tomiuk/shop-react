// Гарне форматування для виводу ціни
export function viewPrice(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

// Функція для збереження товарів в кошику
export function setSavedProducts() {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
}

// Очистити текст для виводу в атрибуті
export function cleanForAttr(text = '') {
    return text.replace(/"/g, '&#34;');
}

// Задачаємо пусте значення
export function noResult(text = 'Результатів не знайдено', img = 'no-result-v2.png', type) {
    return `<span class="no-result no-result--inline">
                <img src="img/no-result/${img}" alt="No results" class="no-result__img">
                <span class="no-result__title">${text}</span>
            </span>`;
}

// Записуємо потрібні дата атрибути для карточки товару
export function setProductAttr(product) {
    
    // Деструктуризація об'єкту продукту для легкого доступу до його властивостей.
    const { img, title, price, id } = product;

    // Повертаємо дата атрибути для карточки товару
    return `data-cart-add-id="${id}" data-title="${cleanForAttr(title)}" data-price="${price}" data-img="${img}" data-count="1"`;
}