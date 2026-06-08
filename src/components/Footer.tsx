import { IconLinkedIn, IconInstagram, IconFacebook } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-about">
            <a className="logo on-dark" href="#top" aria-label="Sudeste Atacado">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="footer-logo-img"
                src="/logos/logo-footer.png"
                alt="Sudeste Atacado"
              />
            </a>
            <p>
              Distribuidor de tecnologia em segurança, redes e automação. Estoque
              imediato e suporte para a sua revenda no ES, RJ e MG.
            </p>
            <div className="footer-social">
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
          <div>
            <h4>Produtos</h4>
            <ul>
              <li><a href="#categorias">CFTV &amp; Monitoramento</a></li>
              <li><a href="#categorias">Controle de Acesso</a></li>
              <li><a href="#categorias">Redes &amp; Conectividade</a></li>
              <li><a href="#categorias">Energia &amp; No-breaks</a></li>
            </ul>
          </div>
          <div>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#revenda">Para Revenda</a></li>
              <li><a href="#avaliacoes">Avaliações</a></li>
              <li><a href="#lojas">Nossas Lojas</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href="tel:+552732990200">(27) 3299-0200</a></li>
              <li><a href="mailto:contato@sudesteatacado.com.br">contato@sudesteatacado.com.br</a></li>
              <li>Aribiri, Vila Velha — ES</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sudeste Atacado. Todos os direitos reservados.</span>
          <span>Aribiri, Vila Velha — ES, 29120-575</span>
        </div>
      </div>
    </footer>
  );
}
