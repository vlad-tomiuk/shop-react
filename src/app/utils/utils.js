// Функція отримування даних з апі
export async function getData(url) {
    const res = await fetch(url);
    return await res.json();
}

export const apiUrl = {
    category: 'https://677161ed2ffbd37a63ceece9.mockapi.io/category',
    products: 'https://677161ed2ffbd37a63ceece9.mockapi.io/products',
    productsByCat: 'https://677161ed2ffbd37a63ceece9.mockapi.io/products?catid=',
    productsHotOffers: 'https://677161ed2ffbd37a63ceece9.mockapi.io/products?hotoffer=yes',
    productsSearch: 'https://677161ed2ffbd37a63ceece9.mockapi.io/products?search='
}
