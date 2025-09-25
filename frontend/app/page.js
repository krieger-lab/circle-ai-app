'use client';
import ChatWindow from "./components/ChatWindow";
import SidebarDrawer from "./components/SidebarDrawer";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen">
      <SidebarDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <ChatWindow toggleSidebar={() => setIsOpen(!isOpen)} />
    </div>
  );
}