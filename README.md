# 🚀 Landing Page: Método Funil Anti-Vácuo para Estética

Landing Page de Alta Conversão com reprodutor de vídeo Full HD (1080p) integrado, pronta para rodar com **NPM** e hospedar gratuitamente no **GitHub Pages**!

---

## 📦 Como Rodar no Computador (Modo Desenvolvimento)

Se você quiser testar ou fazer alterações localmente no seu computador:

1. Abra o terminal (PowerShell ou Prompt de Comando) nesta pasta:
```bash
npm install
```

2. Inicie o servidor local:
```bash
npm run dev
```
O navegador abrirá automaticamente em `http://localhost:3000`.

3. Para gerar os arquivos finais de produção (pasta `dist/`):
```bash
npm run build
```

---

## 🌐 Como Subir para o GitHub e Ativar o GitHub Pages (Passo a Passo)

### Passo 1: Criar o Repositório no GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Dê um nome para o repositório (ex: `landing-page-estetica`).
3. Deixe o repositório como **Público (Public)**.
4. **Não marque** a opção de adicionar README ou .gitignore (já criamos tudo para você).
5. Clique em **Create repository**.

---

### Passo 2: Conectar e Enviar os Arquivos pelo Terminal
No terminal, dentro desta pasta (`pasta 3`), execute os comandos abaixo substituindo pelo link do seu repositório:

```bash
git init
git add .
git commit -m "feat: landing page funil automatico com videos 1080p"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

---

### Passo 3: Ativar o GitHub Pages com 1 Clique (Automático via GitHub Actions)
Este projeto já possui o arquivo `.github/workflows/deploy.yml` configurado!

1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment > Source**, selecione **GitHub Actions**.
4. Pronto! O GitHub irá compilar o projeto e gerar o link do seu site no topo da página:
   `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`

---

## ⚡ Método Alternativo: Deploy com 1 Comando (`npm run deploy`)
Se preferir subir diretamente sem Actions:
```bash
npm run deploy
```
Esse comando compila o projeto e cria automaticamente a branch `gh-pages` com a Landing Page online.

---

## 📁 Estrutura do Projeto
- `index.html`: A Landing Page principal de alta conversão.
- `public/`: Pasta contendo os vídeos em 1080p (`video_vsl_3minutos.mp4`, `video_express_40s.mp4`, `video_tutorial_manychat.mp4`) e o PDF.
- `vite.config.js`: Configuração com `base: './'` que garante que o site funcione em qualquer URL do GitHub Pages.
- `package.json`: Scripts do NPM (`dev`, `build`, `preview`, `deploy`).
- `.github/workflows/deploy.yml`: Automação de deploy contínuo do GitHub.
