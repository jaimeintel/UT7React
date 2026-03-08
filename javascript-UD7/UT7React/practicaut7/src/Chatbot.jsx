import React from "react";
import ChatbotComponent from '/components/ChatbotComponent';

const Chatbot = () => {
  return (
    <main>
      <h2>Chatbot para organizar tu viaje</h2>
      <section>
        <p>Bienvenido</p>
        <ChatbotComponent></ChatbotComponent>
      </section>
    </main>
  );
};

export default Chatbot;