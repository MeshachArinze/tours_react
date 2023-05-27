import React, { useState, useEffect } from "react";

import List from "./List";

function App() {
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MeshachArinze/space_x_clone/name"
    )
      .then((res) => res.json())
      .then((json) => {
        setdatas(json);
      });
  }, [datas]);
  
  return (
    <main>
      <section className="container">
        <h3>{datas.length} birthdays today</h3>
        
        <List datas={datas} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
