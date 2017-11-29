import React, { Component } from 'react';
import { addBook } from './actions';
import AddBook from './AddBook';



export default class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  handleAddBook(newBook) {
    const newState = addBook(this.state, newBook);
    this.setState(newState);
  }


  render() {
    const { books } = this.state;

    return (
      <div>
        <AddBook books={books} addBook={book =>this.handleAddBook(book)}/>
      </div>
    );
    
  }
}