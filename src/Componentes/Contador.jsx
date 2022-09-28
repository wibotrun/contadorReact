import React, { useEffect, useState } from "react";
function Contador() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  return (
    <div className="divMayor">
        
      <div className="contador">{contador}</div>
      <div className="buttons">
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
      </div>
    </div>
  );
}

export default Contador;
