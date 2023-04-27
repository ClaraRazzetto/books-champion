import "./BookFilter.css";

const BookFilter = ({onYearChanged, selectedYear}) => {
  
  const selectChangeHander = (event) => {
    onYearChanged(event.target.value);
  }

  return (
    <div className="Books-filter">
      <div className="Books-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={selectChangeHander}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default BookFilter;