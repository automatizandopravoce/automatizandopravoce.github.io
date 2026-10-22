@echo off
cd /d "%~dp0"
echo ========================================================
echo Compilando Projeto para Producao (pasta dist)...
echo ========================================================
call npm run build
echo.
echo ========================================================
echo Iniciando Preview de Producao...
echo ========================================================
call npm run preview
pause
