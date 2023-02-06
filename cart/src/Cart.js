import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
        super(); //this will call the constructor of the component class
        this.state={
            products:[
                {
                    price:99,
                    title:'Watch',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    price:999,
                    title:'Mobile Phone',
                    qty:1,
                    img:'',
                    id:2,
                },
                {
                    price:69,
                    title:'Tablet',
                    qty:1,
                    img:'',
                    id:4
                }
            ]
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    render(){
        const {products}=this.state;
        return(
            <div className="cart">
                
                {products.map((product)=>{
                    return <CartItem product={product} key={product.id}/>

                })}
                
            </div>
        );
    }
}

export default Cart;