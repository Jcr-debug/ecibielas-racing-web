@echo off
title Actualizar Página Web - Ecibielas Racing
color 0A

echo.
echo ================================================
echo Script de Actualización - Ecibielas Racing
echo ================================================
echo.

REM Verificar si estamos en el directorio correcto
if not exist "index.html" (
    echo ERROR: No se encuentra index.html
    echo    Asegúrate de ejecutar este script desde la carpeta del proyecto
    pause
    exit /b 1
)

REM Verificar estado de Git
echo Verificando cambios...
git status
echo.

set /p continuar="¿Continuar con la actualización? (s/n): "
if /i not "%continuar%"=="s" (
    echo Actualización cancelada
    pause
    exit /b 0
)

REM Solicitar mensaje de commit
echo.
set /p mensaje="Describe los cambios realizados: "
if "%mensaje%"=="" set mensaje=Actualización de la página web

echo.
echo Procesando actualización...

REM Agregar todos los cambios
echo    - Agregando archivos modificados...
git add .

REM Hacer commit
echo    - Creando commit...
git commit -m "%mensaje%"

REM Subir cambios a GitHub
echo    - Subiendo cambios a GitHub...
git push

if %errorlevel% equ 0 (
    echo.
    echo EXITO: Actualización completada exitosamente!
    echo Tu página se actualizará en 1-3 minutos en:
    echo    https://jcr-debug.github.io/ecibielas-racing-web
    echo.
    echo CONSEJOS:
    echo    - Espera 1-3 minutos para ver los cambios online
    echo    - Refresca la página con Ctrl+F5 si no ves cambios
) else (
    echo.
    echo ERROR: Error al subir cambios a GitHub
    echo    Revisa tu conexión a internet e inténtalo de nuevo
)

echo.
pause