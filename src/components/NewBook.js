import React from 'react';

const AddNewBook = () => (
  <div>
    <h2>Add New Book</h2>
    <input type="text" placeholder="Book title" />
    <form action="#">
      <select name="books" id="books">
        <option value="">Category</option>
        <option value="biography">Biography</option>
        <option value="romance">Romance</option>
        <option value="action">Action</option>
        <option value="health">Health</option>

      </select>

      <button type="submit">Add Book</button>
    </form>
  </div>
);
export default AddNewBook;
