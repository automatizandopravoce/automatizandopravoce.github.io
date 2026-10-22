@echo off
cd /d "%~dp0"
echo ========================================================
echo Iniciando Servidor Vite da Landing Page...
echo ========================================================
if not exist "node_modules" (
    echo Instalando dependencias pela primeira vez...
    call npm install
)
call npm run dev
pause
