import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./context/language-context";
import { WhatsAppButton } from "./components/whatsapp-button";

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
      <WhatsAppButton />
    </LanguageProvider>
  );
}