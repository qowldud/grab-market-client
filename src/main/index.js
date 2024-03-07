import './index.css';
import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';

function MainPageComponent(){
    const [prodcuts, setProducts] = React.useState([]);
    React.useEffect(
        function(){
            axios.get('https://3d24300d-653b-4dfb-ab8b-7e14a308355c.mock.pstmn.io/products').then(function(result){
        const products = result.data.products;
        setProducts(products);
        }).catch(function(error){
            console.error('에러발생 : ',error);
        })
        },[])
    return (   
    <div>    
            <div id="banner">
                <img src="images/banners/banner1.png" />
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
                {
                    prodcuts.map(function(product, index){
                        return (
                        <div className='product-card'>
                        <Link className="product-link" to={`/products/${product.id}`}>
                            <div>
                                <img className='product-img' src={product.imgeUrl} />
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>
                                    {product.name}
                                </span>
                                <span className='product-price'>
                                    {product.price}원
                                </span>
                                <div className='product-seller'>
                                    <img className='product-avatar' src='images/icons/avatar.png' />
                                    <span>{product.seller}</span>
                                </div>
                            </div>
                        </Link>
                    </div>);
                    })
                }
                
            </div>
    </div> );
}

export default MainPageComponent;