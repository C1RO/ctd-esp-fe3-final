import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  var a = JSON.parse(window.localStorage.getItem('Favs')) || []
  return (
    <>
      {<h1 style={{ color: "#1976d2", fontFamily: "fantasy", marginTop: "2.2%", marginBottom: "2%" }}>Dentist Favs</h1>}
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}


        {a.map((Dentist) => (
          <Card key={Dentist.id} props={Dentist}>
          </Card>
        ))}




      </div>
    </>
  );
};

export default Favs;
