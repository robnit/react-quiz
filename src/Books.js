import React, { Component } from 'react';
import { addBook } from './actions';
import AddBook from './AddBook';



export default class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        { title: 'test', author: 'test' }
      ],
    };
  }

  handleAddBook(newBook) {
    const newState = addBook(this.state, newBook);
    console.log('new state is', newState);
    return this.setState(newState);
  }


  render() {
    const { books } = this.state;

    return (
      <div>
        <AddBook books={books} addBook={book =>this.handleAddBook(book)}/>
        <ul>
          {books.map((book, i) => <li key={i} >Title: {book.title}    Author:{book.author}</li>)}
        </ul>
      </div>
    );
    
  }
}