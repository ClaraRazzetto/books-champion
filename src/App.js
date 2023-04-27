import { useState } from 'react';
import './App.css';
import Books from './components/Books/Books';
import Newbook from './components/NewBook/Newbook';


  // DUMMY_BOOKS constante global es un arreglo con 4 objetos
  const DUMMY_BOOKS = [
    {
      id: Math.random().toString(),
      title: "100 años de soledad",
      author: "Gabriel García Marquez",
      dateRead: new Date(2021, 8, 12),
      pageCount: 410,
    },
    {
      id: Math.random().toString(),
      title: "Todos los fuegos el fuego",
      author: "Julio Cortazar",
      dateRead: new Date(2020, 6, 11),
      pageCount: 197,
    },
    {
      id: Math.random().toString(),
      title: "Asesinato en el Orient Express",
      author: "Agatha Christie",
      dateRead: new Date(2021, 5, 9),
      pageCount: 256,
    },
    {
      id: Math.random().toString(),
      title: "Las dos torres",
      author: "J.R.R Tolkien",
      dateRead: new Date(2020, 3, 22),
      pageCount: 352,
    },
  ];

function App() {
  //Creo un estado para books, en funcion de agregar nuevos
  const [books,setBooks] = useState(DUMMY_BOOKS);

  //Pasar data de HIJO A PADRE
  //Creo una función para guardar un nuevo libro
  //Esta función será enviada como props a NewBook => BookForm 
  //En BookForm vamos a invocar la función y enviarle como parámetro el nuevo libro
  const onBookDataSaved = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };
    setBooks(bookData);
  };

  return (
    <div className="App">
      <Books books={books}/>
      <Newbook onBookDataSaved = {onBookDataSaved} />
    </div>
  );
}

export default App;
