export default function ChatWindow({ toggleSidebar }) {
  const messages = [
    { sender: "Usuario", text: "Hola, ¿cómo están?" },
    { sender: "Gemini", text: "[Gemini] analizó: respuesta simulada..." },
    { sender: "ChatGPT", text: "[ChatGPT] analizó: propuesta dummy..." }
  ];
  return (
    <div className="flex flex-col flex-1">
      <header className="p-4 bg-blue-500 text-white flex justify-between">
        <h1>Círculo de Conversación</h1>
        <button onClick={toggleSidebar}>☰</button>
      </header>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2">
            <span className="font-bold">{msg.sender}:</span>{" "}
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <footer className="p-4 bg-gray-200">
        <input type="text" placeholder="Escribe un mensaje..." className="w-full p-2 border rounded" />
      </footer>
    </div>
  );
}