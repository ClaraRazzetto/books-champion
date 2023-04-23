import { useState } from 'react';
import './BookForm.css';

const BookForm = () => {

    //Creamos un estado para la variable titlo que ingresa el usuario
    //El estado inicial es '' xq los input devuelven siempre string aunque sea un numero date
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [enteredPageCount, setEnteredPageCount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    //Esta función se va a ejecutar cada vez q ingresemos una letra, numero, etc
    //Todas las props nativas de JSX que invocan un evento, 
    //adhieren automaticamente el objeto event a a función asociada
    //event se pasa como parámetro y contiene la informacion del evento que se disparo
    const changeTitleHandler = (event) => {
        //obtenemos el valor ingresado x el usuario con event.target.value
        //y se lo setteamos a enteredTitle
        setEnteredTitle(event.target.value); 
    }

    const changeAuthorHandler =(event) =>{
        setEnteredAuthor(event.target.value);
    }
    
    const changePageCountHandler =(event) =>{
        setEnteredPageCount(event.target.value);
    }

    const changeDateHandler =(event) =>{
        setEnteredDate(event.target.value);
    }

    const submitBookHandler = (event) => {
        //previene que se dispare un evento automaticamente, evitamos un reload
        event.preventDefault();
        //Creo un objeto con los datos obtenidos
        const bookData = {
            title: enteredTitle,
            author: enteredAuthor,
            pageCount: enteredPageCount,
            dateRead: Date(enteredDate).toString(),
        };
        //Setteamos en '' los values de los input
        //Esto se llama two-way binding
        enteredTitle('');
        enteredAuthor('');
        enteredPageCount('');
        enteredDate('');
    }

  return (
    //Agregamos onSubmit para agregar la lectura una vez q el usuario
    //clickea el boton
    <form onSubmit={submitBookHandler}>
        <div className='new-book-controls'>
            <div className='new-book-control'>
                <label>Título</label>
                <input type="text" 
                    //Asignamos enteredTitle a la prop value para poder limpiar el input
                    value={enteredTitle}
                    onChange={changeTitleHandler}
                />
            </div>
            <div className='new-book-control'>
                <label>Autor</label>
                <input type="text" 
                    value={enteredAuthor}
                    onChange={changeAuthorHandler} 
                />
            </div>
            <div className='new-book-control'>
                <label>Páginas</label>
                <input type="number" 
                    min='1' 
                    step='1'
                    value={enteredPageCount}
                    onChange={changePageCountHandler} 
                />
            </div>
            <div className='new-book-control'>
                <label>¿Cuándo terminaste de leerlo?</label>
                <input type="date" 
                    min='2019-01-01' 
                    max='2022-12-31' 
                    value={enteredDate}
                    onChange={changeDateHandler}
                />
            </div>
        </div>

        <div className='new-book-control'>
            <button type='submit'>Agregar lectura</button>
        </div>
            
    </form>
  )
}

export default BookForm