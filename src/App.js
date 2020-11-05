import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json"



class App extends React.Component {

  constructor(){

    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    };

  }

  sortProducts= (event) => {
    console.log(event.target.value)
    const sortValue = event.target.value;
    this.setState((state) =>({

      sort: event.target.value,
      products: this.state.products.slice().sort((a,b) => (
        sortValue === "lowest"?
        ((a.price > b.price)? 1 : -1):
        sortValue === "highest"?
        ((a.price < b.price)? 1 : -1):
        ((a._id > b._id)? 1 : -1)
      ))

    }));

  }

  filterProducts = (event)=>{
    console.log(event.target.value)

    if(event.target.value === "") {

      this.setState({
        size: event.target.value,
        products: data.products
      })

    } else {

    this.setState({
      size: event.target.value,
      products: data.products.filter(product => product.size.indexOf(event.target.value) >= 0)

    })
  }
}

  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/"> Shopping cart</a>
        </header> 
        <main>
          <div className="content">
            <div className="main"> 
              <Filter count={this.state.products.length} 
                      size={this.state.products.size}
                      sort={this.state.sort}
                      filterProducts={this.filterProducts}
                      sortProducts={this.sortProducts}
              >
              </Filter>
              <Products products={this.state.products}></Products>
             </div>
            <div className="sidebar"> Cart Items </div>
          </div>
        </main>
        <footer>
          asiwlk @ cart
        </footer>
      </div>
    );
  }
}

export default App;
