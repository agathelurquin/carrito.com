function Filter(props) {
  let filter = props.filter;
  let filterOptions = props.filterOptions;
  let setFilter = props.setFilter;
  console.log(filterOptions);
  return (
    <div className={`${filter}`}>
      <select
        name={`${filter}`}
        id={`${filter}`}
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      >
        <option value="-1" disabled>
          Please select an option
        </option>
        {filterOptions.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
}

export default Filter;
