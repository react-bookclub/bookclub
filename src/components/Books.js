import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery'
import Book from './Book'

class Books extends Component {


  createBook(book){
    return <Book book={book} onClick={this.props.onClick}/>
  }

  render() {

    return (
      <div className="Books">
        <section className='books-home-page'>
          <nav className='all-books'>
            <ul>
              {this.props.books.map((book)=> this.createBook(book))}
            </ul>
          </nav>
        </section>
      </div>
    );
  }
}

export default Books;
