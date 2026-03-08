import { useState, useEffect } from "react";

function ChatbotComponent() {

  const [paso, setPaso] = useState(0);
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    setMensajes(["Hola, soy tu asistente de viajes"]);
  }, []);

  function elegirDestino(destino) {

    setMensajes([...mensajes, "Destino: " + destino, "¿Qué prefieres hacer?"]);
    setPaso(1);

  }

  function elegirActividad(act) {

  let recomendacion = "";

  if (act === "Comida") {
    recomendacion = "Te recomiendo probar la comida local, intentando evitar los sitios más turísticos";
  }

  if (act === "Monumentos") {
    recomendacion = "Te recomiendo dar una vuelta por el centro y visitar los sitios más emblemáticos.";
  }

  setMensajes([...mensajes, "Actividad: " + act, recomendacion]);

  setPaso(2);
}

  return (
    <div className="card">

      {/* mostramos los mensajes */}
      {mensajes.map((mensaje, i) => (
        <p key={i}>{mensaje}</p>
      ))}

      {/* dependiendo de la opcion y ek paso en el que estemos */}
      {paso == 0 && (
        <div>
          <button onClick={() => elegirDestino("Santa Pola")}>Santa Pola</button>
          <button onClick={() => elegirDestino("Roma")}>Roma</button>
          <button onClick={() => elegirDestino("Madrid")}>Madrid</button>
        </div>
      )}

      {paso == 1 && (
        <div>
          <button onClick={() => elegirActividad("Comida")}>Comida</button>
          <button onClick={() => elegirActividad("Monumentos")}>Monumentos</button>
        </div>
      )}

    </div>
  );
}

export default ChatbotComponent;