// src/App.js
import { useState, useEffect } from "react";

function App() {
  const [WS, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const wsServer = new WebSocket("ws://localhost:4000");

    wsServer.onopen = () => {
      console.log("Conectado al servidor");
      setWs(wsServer);
    };

    wsServer.onmessage = (event) => {
      console.log(event.data);
      setMessages([...messages, event.data]);
    };

    wsServer.onclose = () => {
      console.log("Desconecto del servidor");
    };

    return () => {
      if (wsServer) {
        wsServer.close();
      }
    };
  }, [messages]);

  const handleSendMessage = () => {
    if (WS && currentMessage.trim() !== "") {
      WS.send(currentMessage);
      setMessages([...messages, "YO: " + currentMessage]);
      setCurrentMessage("");
    }
  };

  return (
    <div>
      <div>
        <h2>Chat Anónimo</h2>
        <div
          style={{
            border: "1px solid #ccc",
            minHeight: "200px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
        <div>
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
