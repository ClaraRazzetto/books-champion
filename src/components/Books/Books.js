import { useState } from "react"
import BookItem from "../BookItem/BookItem"
import BookFilter from "../Filter/BookFilter"
import './Books.css'

const Books = ({books}) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const onYearChanged = (newSelectedYear) =>{
        setSelectedYear(newSelectedYear);
    };

    const bookList = books
        .filter((book) => book.dateRead.getFullYear().toString() === selectedYear)
        .map((book) => (
            <BookItem
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    dateRead={book.dateRead}
                    pageCount={book.pageCount}
            />
        ))

    return (
        <>
            <BookFilter onYearChanged = {onYearChanged} year={selectedYear}/>
            <div>
                {bookList.lenght === 0 ? 
                    (<p>No leiste libros en {selectedYear}</p>) 
                    : 
                    (bookList)
                }
            </div>

        </>
    )
}

export default Books