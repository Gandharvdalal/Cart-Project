
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
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

  handleIncreaseQuantity=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      products[index].qty+=1;
      this.setState({
          products:products
      })

  }
  handleDecreaseQuantity=(product)=>{
    
      const {products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty==0){
          return ;
      }
      products[index].qty-=1;
      this.setState({
          products:products
      })
  }
  handleDeleteProduct=(id)=>{
      const {products}=this.state;
      const items=products.filter((item)=>item.id!==id);
      this.setState(
          {
              products:items
          }
      )
  }
  getCount=()=>{
    const {products}=this.state;
    let count=0;
    {
      products.map((product)=>{
        count+=product.qty;
      })
    }
    return count;
  }
  render(){
    const {products}=this.state;
    return (
      <div className="App">
        
          <Navbar count={this.getCount()}/>
          <Cart
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
          />
        
      </div>
    );
  }
}

export default App;
