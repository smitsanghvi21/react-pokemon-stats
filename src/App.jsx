import { useState } from "react";
import "./App.css";
import myjson from "./myjson";
import PokeMonData from "./PokeData";
import SelectedItemStats from "./SelectedItemStats";

function App() {
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState(null);

  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const onSelection = (pokemon) => {
    setSelected(pokemon);
  };

  return (
    <div className="App">
      <h1 className="title">Pokemon search</h1>
      <input value={filter} onChange={onFilterChange} placeholder="search" />
      <table class="table"width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>HP</th>
          </tr>
        </thead>
        <tbody>
          {myjson
            .filter((item) => item.name.english.toLowerCase().includes(filter))
            .slice(0, 20)
            .map((item) => (
              <PokeMonData
                pokemon={item}
                pokeId={item.id}
                onSelection={onSelection}
              />
            ))}
        </tbody>
      </table>
      {selected ? <SelectedItemStats {...selected} /> : ""}
    </div>
  );
}

export default App;
