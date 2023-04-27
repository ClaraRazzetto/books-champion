import BookForm from "../BookForm/BookForm";
import "./NewBook.css";

const Newbook = ({onBookDataSaved}) => {
  return (
    <div className="new-book">
        {/* Pasamos como props una funcion que declaramos en el componente padre */}
        <BookForm onBookDataSaved={onBookDataSaved}/>
    </div>
  )
}

export default Newbook