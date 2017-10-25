import React, { Component } from 'react';
import '../App.css';

class Book extends Component {
  onClick(){

  }
  render(){
    return(
      <li onClick={this.props.onClick} id={this.props.book.id}>
        <aside className="">
          <h2>{this.props.book.title}</h2>
          <p>{this.props.book.author}</p>
          <p>{this.props.book.genre}</p>
          <p>{this.props.book.publisher}</p>
        </aside>
      </li>
    )
  }
}

export default Book;
