import { WHATSAPP_NUMBER } from "@/lib/data";
import { IconWhatsApp } from "./Icons";

export default function WaFloat() {
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
    >
      <span className="pulse" />
      <IconWhatsApp />
      Como posso te ajudar?
    </a>
  );
}
