@echo off
setlocal enabledelayedexpansion

:: 1. Verificar na mesma pasta do .bat (quando estiverem juntos)
if exist "%~dp0Painel_de_Scripts_CopyPaste.html" (
    start "" "%~dp0Painel_de_Scripts_CopyPaste.html"
    exit /b
)

:: 2. Verificar na subpasta pasta 3
if exist "%~dp0pasta 3\Painel_de_Scripts_CopyPaste.html" (
    start "" "%~dp0pasta 3\Painel_de_Scripts_CopyPaste.html"
    exit /b
)

:: 3. Verificar na pasta pai
if exist "%~dp0..\Painel_de_Scripts_CopyPaste.html" (
    start "" "%~dp0..\Painel_de_Scripts_CopyPaste.html"
    exit /b
)

:: 4. Verificar no Desktop do usuario
if exist "%USERPROFILE%\Desktop\pasta 3\Painel_de_Scripts_CopyPaste.html" (
    start "" "%USERPROFILE%\Desktop\pasta 3\Painel_de_Scripts_CopyPaste.html"
    exit /b
)
if exist "%USERPROFILE%\Desktop\Painel_de_Scripts_CopyPaste.html" (
    start "" "%USERPROFILE%\Desktop\Painel_de_Scripts_CopyPaste.html"
    exit /b
)

:: 5. Busca automatica inteligente caso tenha sido movido
for /f "delims=" %%F in ('powershell -NoProfile -Command "(Get-ChildItem -Path $env:USERPROFILE -Filter 'Painel_de_Scripts_CopyPaste.html' -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1).FullName"') do (
    if exist "%%F" (
        start "" "%%F"
        exit /b
    )
)

echo [ERRO] O arquivo Painel_de_Scripts_CopyPaste.html nao foi encontrado.
pause

