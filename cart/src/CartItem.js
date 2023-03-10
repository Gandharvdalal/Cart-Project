import React from 'react';

const CartItem=(props)=>{
    // constructor(){
    //     super(); //this will call the constructor of the component class
    //     this.state={
    //         price:999,
    //         title:'Mobile Phone',
    //         qty:1,
    //         img:''
    //     }
    //     //this.increaseQuantity=this.increaseQuantity.bind(this);
    // }
    // increaseQuantity=()=>{
    //     //console.log('test',this.state);
    //     //this.state.qty=this.state.qty+1;

    //     //setState form 1


    //     // this.setState({
    //     //     qty:this.state.qty+1
    //     // });

    //     //setState form 2-----> if prevState required use this
    //     this.setState((prevState)=>{
    //         return {
    //             qty:prevState.qty+1
    //         }

    //     });


    // }
    // decreaseQuantity=()=>{
    //     this.setState((prevState)=>{
    //         const{qty}=this.state;
    //         if(qty==0){
    //             return;
    //         }
    //         return{qty:prevState.qty-1};


    //         //-------------also works-----

    //         // if(prevState.qty>0){
    //         //     return{qty:prevState.qty-1}
    //         // }
            
            
    //     })
    // }
   
        const{price,title,qty}=props.product;
        const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
        return(
            <div className="cart-item">
              <div className="left-block">
                <img style={styles.image} src={product.img}/>
              </div>
              <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/*Buttons*/}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png"
                        onClick={()=>onIncreaseQuantity(product)}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                        onClick={()=>onDecreaseQuantity(product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                        onClick={()=>onDeleteProduct(product.id)}
                    />
                </div>
              </div>  
            </div>
        );
    
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
} 
export default CartItem;