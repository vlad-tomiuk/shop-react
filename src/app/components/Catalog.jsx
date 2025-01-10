import { useEffect, useState } from "react"
import Product from "./Product";
import { getCategory, getProducts, getProductsByCategory, getProductsByName } from "../hooks/Hooks";
import { Link, useParams } from "react-router-dom";
import CartProvider from "./CartProvider";

export default function Catalog({ page = 'catalog' }) {
    const [dropdown, setDropdown] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [productList, setProductList] = useState([]);
	const [searchName, setSearchName] = useState('');
	let timeOutInit = '';
	const { catid } = useParams();	

    useEffect(() => {
		getCategory(setCategoryList);
    }, []);

    useEffect(() => {
		getProducts(setProductList, catid);
    }, [catid]);

	// function handleProductByCategory(event) {
	// 	getProductsByCategory(event, setProductList);
	// }

	function handleSearch(event) {		
		setSearchName(event.target.value)
		
		// clearTimeout(timeOutInit);
		// timeOutInit = setTimeout(function(){
		// 	getProductsByCategory(event, setProductList);
		// }, 1000);
		
	}

    return (
        <div className="catalog" id="catalog">
            <div className="container">

                <div className="catalog__header">
					{
						page === 'search' ? (
							<div className="catalog__form form-style">
								<input 
									type="text" 
									className="form-control catalog__form-search" 
									id="input-search" 
									placeholder="Що будемо шукати?" 
									value={searchName}
									onChange={handleSearch}
								/>
								<button className="catalog__form-btn" id="btn-search" onClick={() => getProductsByName(setProductList, searchName) }>
									<svg className='icon icon-search'><use href='#icon-search'></use></svg>
								</button>
							</div> 
						) : (
							<div className={`catalog__select-category dropdown ${dropdown ? 'show' : ''}`} id="dropdown-category-list">
								<h3 className="dropdown-btn" onClick={() => setDropdown(!dropdown)}>
									Вибрати категорію
								</h3>
								<div className="dropdown-content" id="category-list">
									<Link to={`/`} className="dropdown-item">Скинути вибір</Link> 
									{
											categoryList.map(element => <Link to={`/category/${element.id}`} key={element.id} className={`dropdown-item ${catid == element.id ? 'active' : '' }`}>{element.title}</Link>)
									}
								</div>
							</div>
						)
					}
                    <h3 className="catalog__products-summ">Знайдено товарів: {productList.length}</h3>
                </div>

                <div className="catalog__content" id="catalog-products">

                    {
						productList.length > 0 ? (
							productList.map(product => (
								<Product product={product} key={product.id} />
							))
						) : (
							<h2>Результатів не знайдено!</h2>
						)
                    }

                </div>

            </div>
        </div>
    )
}
