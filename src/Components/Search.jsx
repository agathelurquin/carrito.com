import { Input } from "antd";

function Search(props) {
  return (
    <div className="search-bar">
      <label>Search</label>
      <Input
        name="search"
        value={props.searchString}
        type="text"
        onChange={(e) => {
          props.handleSubmit(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
