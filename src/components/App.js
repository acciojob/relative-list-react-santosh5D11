import React from "react";

const App = () => {
  const relatives = ["Grandparents", "Uncle", "Aunt", "Cousin", "Brother"];

  return (
    <div id="main">
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
