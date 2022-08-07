import React from "react";

const PokeMonData = (props) => {
  const { pokemon, pokeId, onSelection } = props;
  return (
    <tr key={pokeId}>
     <td>{pokeId}</td>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(" ", " ")}</td>
      <td>{pokemon.base.HP}</td>
      <td>
        <button onClick={() => onSelection(pokemon)}>Select</button>
      </td>
    </tr>
  );
};

export default PokeMonData;
