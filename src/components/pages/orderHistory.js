import React from 'react';
import { OrderHistory } from '../templates/templates';

const OrderPage = () => {
    const order = {
        status:{
            order_id: '12345',
            status: 'Pending',
            date: '2020-01-01',
            total: '$12.50',
        },
        orderlist:[
            {
                image: 'https://d30fs77zq6vq2v.cloudfront.net/product/100x150/24062022/17804_936_1655974215_62b4294798c2e-68591146197.jpg',
                text: 'Mens Polo Shirt',
            },
            {
                image: 'https://d30fs77zq6vq2v.cloudfront.net/product/100x150/24062022/17804_936_1655974215_62b4294798c2e-68591146197.jpg',
                text: 'Mens Polo Shirt',
            }
        ]
    }
    return(
        <OrderHistory orders={[order, order]}/>
    );
}

export default OrderPage;