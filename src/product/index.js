import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css';

function ProductPage(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(function(){
    axios.get(`https://3d24300d-653b-4dfb-ab8b-7e14a308355c.mock.pstmn.io/products/${id}`).then(function(result){
        setProduct(result.data);
    }).catch(function(error){
        console.error(error);
    })
    },[]);
    
    if(product == null){
        return <h1>상품 정보를 받고 있습니다...</h1>
    }
    return (
        <div>
            <div id="image-box">
                <img src={`/${product.imgeUrl}`} />
            </div>
            <div id='profile-box'>
                <img src='/images/icons/avatar.png' />
                <span>{product.seller}</span>
            </div>
            <div id='contents-box'>
                <div id='name'>{product.name}</div>
                <div id='price'>{product.price}원</div>
                <div id='createdAt'>2020년 12월 8일</div>
                <div id='description'>{product.description}</div>
            </div>
        </div>
    );
}

export default ProductPage;