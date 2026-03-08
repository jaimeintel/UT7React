import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ChatbotComponent from "./components/ChatbotComponent";
import Chat from './pages/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Chatbot Inteligente para orgniazar tu viaje</h1>
              <h3>Jaime Arenal Rocha</h3>
              <Link to="/chat">Ir al chatbot</Link>
            </>
          }
        />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
