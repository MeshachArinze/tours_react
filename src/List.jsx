import React from "react";

const List = ({ datas }) => {
  return (
    <>
      {datas.map((data) => {
        const { id, name, age, image } = data;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
