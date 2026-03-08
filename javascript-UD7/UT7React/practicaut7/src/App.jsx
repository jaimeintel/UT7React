import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ChatbotComponent from "./components/ChatbotComponent";

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
            </>
          }
        />
        <Route path="/chat" element={<ChatbotComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
