import {
  IconPin,
  IconMail,
  IconPhone,
  IconLinkedIn,
  IconInstagram,
  IconFacebook,
} from "./Icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="topbar-info">
          <span className="hide-sm">
            <IconPin />
            Aribiri, Vila Velha — ES, 29120-575
          </span>
          <a href="mailto:contato@sudesteatacado.com.br">
            <IconMail />
            contato@sudesteatacado.com.br
          </a>
          <a href="tel:+5527992328081">
            <IconPhone />
            (27) 99232-8081
          </a>
        </div>
        <div className="topbar-social">
          <a href="#" aria-label="LinkedIn">
            <IconLinkedIn />
          </a>
          <a href="#" aria-label="Instagram">
            <IconInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <IconFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}
