import React from "react";

const SelectedItemStats = (props) => {
  console.log("name,base", props.name.english);
  const { id, name, type, base } = props;
  return (
    <div>
      <h1>The Pokemon stats for {props.name.english} are:</h1>
      <table class="table" width="100%">
        <thead>
          <tr>
            <th>Pokemon type</th>
            <th>Pokemon base power</th>
          </tr>
        </thead>
        <tbody>
          <td>{type.join(" ", " ")}</td>
          <td>
            {Object.keys(base).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{base[key]}</td>
              </tr>
            ))}
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default SelectedItemStats;
