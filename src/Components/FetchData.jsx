import React from "react"

class FetchData extends React.Component{
  constructor(){
    super()
    this.state = {loading: true, Dat: []}
  }

  componentDidMount(){
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/4')
    .then( (response) => response.json())
    .then( (data) =>{
      this.setState({Dat: data, loading: false})
    })
  }

  render(){
    let h = (this.state.loading)?<h1>Loading...</h1>:<div>
      <h1>{this.state.Dat[2].name}</h1>
      <img src={this.state.Dat[2].image} />
    </div>
    
    return(
      <div>
        {h}
      </div>
    )
  }
}

export default FetchData