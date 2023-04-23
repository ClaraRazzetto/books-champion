const DateRead = ({dateRead}) => {
    
    const year = dateRead.getFullYear();
    const month = dateRead.toLocaleString("es-AR", { month: "long" });
    const day = dateRead.toLocaleString("es-AR", { dat: "2-digit" });

    return (
        <div>
            <div>{year}</div>
            <div>{month}</div>
            <div>{day}</div>
        </div>
    )
}

export default DateRead