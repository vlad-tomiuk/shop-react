import { apiUrl, getData } from "../utils/utils";

export async function getCategory(setCategoryList){
    const category = await getData(apiUrl.category);
    setCategoryList(category);
}

export async function getProducts(setProductList, catid) {
	try {
		const products = await getData(catid ? apiUrl.productsByCat + catid : apiUrl.products);
		if (!products || products === 'Not found') {
			setProductList([]);
		} else {
			setProductList(products);
		}
	} catch (error) {
		console.error("Error fetching products:", error);
		setProductList([]);
	}
}


export async function getHotProducts(setHotProductOfferList) {
    const products = await getData(apiUrl.productsHotOffers);
    setHotProductOfferList(products);
}

export async function getProductsByName(setProductList, name) {
	const trimmedName = name?.trim();
	try {
		if (!trimmedName) {
			await getProducts(setProductList);
			return;
		}
		const products = await getData(`${apiUrl.productsSearch}${encodeURIComponent(trimmedName)}`);
		if (Array.isArray(products) && products.length > 0) {
			setProductList(products);
		} else {
			setProductList([]);
		}
	} catch (error) {
		setProductList([]);
	}
}
export async function getProductsByCategory(event, setProductList, categoryId) {
	event.preventDefault();

	try {
		if (!categoryId) {
			await getProducts(setProductList);
			return;
		}
		const products = await getData(apiUrl.productsByCat + categoryId);
		if (Array.isArray(products) && products.length > 0) {
			setProductList(products);
		} else {
			setProductList([]);
		}
	} catch (error) {
		setProductList([]);
	}
}