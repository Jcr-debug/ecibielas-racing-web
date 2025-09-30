# Script para actualizar la página web de Ecibielas Racing
# Automatiza el proceso de subir cambios a GitHub Pages

Write-Host "🚀 Script de Actualización - Ecibielas Racing" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host ""

# Verificar si estamos en el directorio correcto
if (!(Test-Path "index.html")) {
    Write-Host "❌ Error: No se encuentra index.html" -ForegroundColor Red
    Write-Host "   Asegúrate de ejecutar este script desde la carpeta del proyecto" -ForegroundColor Yellow
    pause
    exit 1
}

# Verificar estado de Git
Write-Host "📋 Verificando cambios..." -ForegroundColor Cyan
git status

Write-Host ""
Write-Host "¿Continuar con la actualización? (s/n): " -ForegroundColor Yellow -NoNewline
$respuesta = Read-Host

if ($respuesta -ne "s" -and $respuesta -ne "S") {
    Write-Host "❌ Actualización cancelada" -ForegroundColor Red
    pause
    exit 0
}

# Solicitar mensaje de commit
Write-Host ""
Write-Host "📝 Describe los cambios realizados:" -ForegroundColor Yellow
$mensaje = Read-Host "Mensaje"

if ([string]::IsNullOrWhiteSpace($mensaje)) {
    $mensaje = "Actualización de la página web"
}

Write-Host ""
Write-Host "🔄 Procesando actualización..." -ForegroundColor Cyan

# Agregar todos los cambios
Write-Host "   • Agregando archivos modificados..." -ForegroundColor Gray
git add .

# Hacer commit
Write-Host "   • Creando commit..." -ForegroundColor Gray
git commit -m "$mensaje"

# Verificar si hay cambios para subir
$gitStatus = git status --porcelain
if ($LASTEXITCODE -eq 0) {
    # Subir cambios a GitHub
    Write-Host "   • Subiendo cambios a GitHub..." -ForegroundColor Gray
    git push
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ ¡Actualización completada exitosamente!" -ForegroundColor Green
        Write-Host "🌐 Tu página se actualizará en 1-3 minutos en:" -ForegroundColor Green
        Write-Host "   https://jcr-debug.github.io/ecibielas-racing-web" -ForegroundColor Blue
        Write-Host ""
        Write-Host "💡 Consejos:" -ForegroundColor Yellow
        Write-Host "   • Espera 1-3 minutos para ver los cambios online" -ForegroundColor Gray
        Write-Host "   • Refresca la página con Ctrl+F5 si no ves cambios" -ForegroundColor Gray
    } else {
        Write-Host ""
        Write-Host "❌ Error al subir cambios a GitHub" -ForegroundColor Red
        Write-Host "   Revisa tu conexión a internet e inténtalo de nuevo" -ForegroundColor Yellow
    }
} else {
    Write-Host ""
    Write-Host "ℹ️  No hay cambios nuevos para subir" -ForegroundColor Yellow
    Write-Host "   Todos los archivos están actualizados" -ForegroundColor Gray
}

Write-Host ""
Write-Host "Presiona cualquier tecla para continuar..." -ForegroundColor Gray
pause