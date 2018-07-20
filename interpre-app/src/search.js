import React, { Component } from 'react';
import './App.css';



class Search extends Component {
constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

handleSubmit(event) {
  	event.preventDefault();
  console.log ("search.js handleSubmit value = " + this.state.value);
}

handleSubmit2 = (e) =>{
  	e.preventDefault();
  //      alert('search.js  id = ' + e.target[0].value);
        this.props.onIdSubmit(e.target[0].value);
}

  render() {

    return (
     
        <div className="Search"> 
         {/*}    
           <form onSubmit={this.handleSubmit}>
             <i className="fa fa-search fa-2x" aria-hidden="true"></i>
            <input type="search" className="searchId" placeholder="Search Interpretation" ref="id" value={this.state.value} onChange={this.handleChange}></input>
            <button type="submit" value="Submit">Submit</button>
            </form>
*/}
            <div>
							<form onSubmit={this.handleSubmit2}>
								<div className="form-group">
									<label>Product ID</label>
									<input type="text" className="form-control" placeholder="Enter ID" ref="id" />
								</div>
							
								<button type="submit">Submit</button>
							</form>
						</div>
        </div>
    );
  }
}

export default Search;