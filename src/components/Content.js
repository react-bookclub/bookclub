import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';

import Books from './Books';

class Content extends Component {
  constructor(){
    super();
    this.state = {
      bookdata: [],
      target: null
    }
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount(){
    this.getBooks()
  }

  getBooks(){
    $.ajax({
      url: 'https://react-is-awesome-backend.herokuapp.com/books/'
    })
    .done((response)=>{
      this.setState({
        bookdata: response
      })
    })
  }
  go(){

  }
  onClick(e){
    console.log(e);
    this.setState({target: e.target.id});
  }
  render() {
    console.log(this.state.target);
    return (
      <div className="Content">
        <main>
          <Books books={this.state.bookdata} onClick={this.onClick}/>
        </main>
      </div>
    );
  }
}

export default Content;
