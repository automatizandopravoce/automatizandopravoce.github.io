// ==============================================================================
// CONFIGURAÇÃO DO PAGAMENTO PIX & SISTEMA ANTI-FRAUDE
// Edite os dados abaixo com as suas informações:
// ==============================================================================

window.PIX_CONFIG = {
  // 1. LINK DE CHECKOUT AUTOMÁTICO (KIWIFY / KIRVANO / HOTMART)
  // Se você cadastrou o produto na Kiwify por R$ 67, cole o link de pagamento aqui:
  // Exemplo: checkoutUrl: "https://pay.kiwify.com.br/seu-codigo"
  // Quando preenchido, o botão leva para a Kiwify, que é 100% automática e só entrega o PDF após o Pix compensar!
  checkoutUrl: "",

  // 2. SUA CHAVE PIX PESSOAL (TIPO E-MAIL)
  chavePixEmail: "seu-email-pix@exemplo.com",

  // 3. SEU PIX COPIA E COLA (GERADO NO APP DO SEU BANCO COM VALOR DE R$ 67,00)
  pixCopiaECola: "00020126580014br.gov.bcb.pix0136seu-email-pix@exemplo.com520400005303986540567.005802BR5925METODO FUNIL ESTETICA6009SAO PAULO62070503***6304E8A2",

  // 4. SEU NÚMERO DE WHATSAPP PARA RECEBER O COMPROVANTE (Com DDD)
  // Exemplo: "5511999998888"
  whatsappSuporte: "5511999999999",

  // 5. MODO DE LIBERAÇÃO:
  // "comprovante": Exige confirmação real com ID de transação ou envio do comprovante para liberar o download.
  // "automatico": Simula a checagem bancária em 4 segundos e libera na tela.
  modoVerificacao: "comprovante"
};
