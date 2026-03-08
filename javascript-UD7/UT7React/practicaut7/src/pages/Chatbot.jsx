import React from "react";
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ChatbotComponent from '../components/ChatbotComponent';

const Chatbot = () => {
  return (
    <main>
      <HeaderComponent></HeaderComponent>
      <h2>Chatbot para organizar tu viaje</h2>
      <section>
        <p>Bienvenido</p>
        <ChatbotComponent></ChatbotComponent>
      </section>
      <FooterComponent></FooterComponent>
    </main>
  );
};

export default Chatbot;