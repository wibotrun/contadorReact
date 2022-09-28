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
      <div >
        <button onClick={restar} className="buttons">-</button>
        <button onClick={reset}className="reset">Reset</button>
        <button onClick={sumar} className="buttons">+</button>
      </div>
    </div>
  );
}

export default Contador;
