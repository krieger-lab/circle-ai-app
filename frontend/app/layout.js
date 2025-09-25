import "./globals.css";

export const metadata = {
  title: "Círculo de Conversación",
  description: "Chat grupal con múltiples IAs"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}