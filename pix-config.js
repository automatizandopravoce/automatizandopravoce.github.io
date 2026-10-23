// ==============================================================================
// CONFIGURAÇÃO DO PAGAMENTO PIX & SISTEMA ANTI-FRAUDE
// Edite os dados abaixo com as suas informações:
// ==============================================================================

window.PIX_CONFIG = {
  // 1. LINK DE CHECKOUT AUTOMÁTICO (PAGSEGURO / KIWIFY / KIRVANO)
  // Quando preenchido, o botão leva diretamente para a página de pagamento seguro!
  checkoutUrl: "https://pag.ae/82gVcc5TJ",

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
  modoVerificacao: "comprovante",

  // 6. LINK DO PACOTE ZIPADO (.ZIP)
  zipDownloadUrl: "https://drive.google.com/file/d/1iqy2qxmNLG06gN_bNaN_KUh-U22l4GK-/view?usp=sharing",

  // 7. LINKS DOS MATERIAIS PARA ENVIO E DOWNLOAD
  pdf1Url: "https://drive.google.com/file/d/1dC08KVjYIeE-7_oPD_g9BqVXGG5h20vg/view?usp=drive_link",
  pdf2Url: "https://drive.google.com/file/d/1ZW6qEQRftiDwNUV_VMQWgEQj1vZi5q-R/view?usp=drive_link",
  scriptsUrl: "https://drive.google.com/file/d/1QMBSMaus1GOEBGzpv-Jd64aWk2_0g1vw/view?usp=drive_link",

  // 8. CONFIGURAÇÃO DE DISPARO DE E-MAIL DIRETO (EMAILJS)
  emailjsServiceId: "service_mqydhoj",
  emailjsTemplateId: "template_sy1d6tr",
  emailjsPublicKey: "mT4h95O5q423b38K8"
};

