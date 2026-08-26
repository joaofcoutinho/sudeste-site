import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// SMTP precisa do runtime Node (não roda no Edge)
export const runtime = "nodejs";

type Lead = {
  nome?: string;
  empresa?: string;
  cidade?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
};

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 14px;background:#f7f5f2;font:600 13px/1.4 Arial,sans-serif;color:#6c6962;white-space:nowrap;vertical-align:top">${label}</td>
    <td style="padding:8px 14px;font:400 15px/1.5 Arial,sans-serif;color:#23231f">${esc(value)}</td>
  </tr>`;
}

export async function POST(req: Request) {
  let data: Lead;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const nome = (data.nome || "").trim();
  const email = (data.email || "").trim();

  // Campos obrigatórios (mesmos do formulário)
  if (!nome || !email) {
    return NextResponse.json(
      { ok: false, error: "Nome e e-mail são obrigatórios." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "E-mail inválido." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_TO } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !LEAD_TO) {
    console.error("Variáveis SMTP ausentes.");
    return NextResponse.json(
      { ok: false, error: "Servidor de e-mail não configurado." },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // 465 = SSL; 587 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const empresa = (data.empresa || "").trim();
  const cidade = (data.cidade || "").trim();
  const telefone = (data.telefone || "").trim();
  const mensagem = (data.mensagem || "").trim();

  const html = `
  <div style="background:#f1eee9;padding:28px">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e8e5df">
      <div style="background:#16161a;padding:20px 24px">
        <div style="font:700 18px/1.2 Arial,sans-serif;color:#fff">Novo lead pelo site</div>
        <div style="font:400 13px/1.4 Arial,sans-serif;color:#9b978e;margin-top:4px">Formulário "Monte seu pedido" — sudesteatacado.com.br</div>
      </div>
      <table style="width:100%;border-collapse:collapse">
        ${row("Nome", nome)}
        ${row("Empresa", empresa)}
        ${row("Cidade", cidade)}
        ${row("E-mail", email)}
        ${row("Telefone", telefone)}
        ${row("Mensagem", mensagem || "(não informada)")}
      </table>
      <div style="padding:16px 24px;border-top:1px solid #e8e5df;font:400 12px/1.5 Arial,sans-serif;color:#9b978e">
        Responda este e-mail para falar direto com o contato.
      </div>
    </div>
  </div>`;

  const text = [
    "Novo lead pelo site (formulário Monte seu pedido)",
    "",
    `Nome: ${nome}`,
    empresa && `Empresa: ${empresa}`,
    cidade && `Cidade: ${cidade}`,
    `E-mail: ${email}`,
    telefone && `Telefone: ${telefone}`,
    "",
    `Mensagem: ${mensagem || "(não informada)"}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      // A Locaweb exige que o remetente seja a mesma conta autenticada
      from: `"Site Sudeste Atacado" <${SMTP_USER}>`,
      to: LEAD_TO,
      replyTo: `"${nome}" <${email}>`,
      subject: `Novo lead pelo site: ${nome}${empresa ? ` (${empresa})` : ""}`,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Falha ao enviar e-mail do lead:", err);
    return NextResponse.json(
      { ok: false, error: "Não foi possível enviar o e-mail." },
      { status: 502 }
    );
  }
}
