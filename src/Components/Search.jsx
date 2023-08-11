import { Input } from "antd";
import "./../App.css";

function Search(props) {
  return (
    <div className="search-bar">
      <label className="search-area">Search Product</label>
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
