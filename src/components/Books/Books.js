import React, { Fragment } from 'react'
import Book from 'components/Book/Book'
import AddBook from 'components/AddBook/AddBook'


const Books = () => (
  <Fragment>
    <AddBook/>
    <Book/>
  </Fragment>
)

export default Books