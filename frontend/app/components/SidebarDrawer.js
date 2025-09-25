export default function SidebarDrawer({ isOpen, setIsOpen }) {
  return (
    <div className={\`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform $\{isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform\`}>
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="font-bold">Menú</h2>
        <button onClick={() => setIsOpen(false)}>✕</button>
      </div>
      <div className="p-4 space-y-4">
        <p>⚪ Lista de Círculos</p>
        <p>⚪ IAs y Grupos</p>
        <p>⚪ Configuraciones</p>
        <p>⚪ Historial de Chats</p>
      </div>
    </div>
  );
}