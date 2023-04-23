import DateRead from '../DateRead/DateRead';
import BookCard from '../BookCard/BookCard';
import { useState } from 'react';

const BookItem = ({title, author, dateRead, pageCount}) => {
  
  const[titleBook, setTitleBook] = useState(title);

  const clickHandler = () => {
    setTitleBook('Actualizado');
    //Esto se muestra con el valor anterior xq setTitleBook() es asincrona 
    // y demora en ejecutarse
    console.log(titleBook);
  };
  
  return (
    <BookCard>
        <h2>{titleBook}</h2>
        <h3>{author}</h3>
        <div>
          <DateRead dateRead={dateRead}/>
        </div>
        <p>{pageCount} páginas</p>
        <button onClick={clickHandler}>Cambiar Titulo</button>
    </BookCard>
  )
}

export default BookItem