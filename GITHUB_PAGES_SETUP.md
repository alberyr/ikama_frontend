# GitHub Pages Deployment Setup

## ✅ Configuración Completada

Este proyecto está configurado para despliegue automático en GitHub Pages usando GitHub Actions.

### 📍 URL de Despliegue
```
https://alberyr.github.io/ikama_frontend/
```

## 🚀 Cómo Funciona

### Despliegue Automático
Cada vez que haces **push** a las ramas `main` o `master`:

1. GitHub Actions construye el proyecto automáticamente
2. Ejecuta linting (opcional)
3. Genera la build optimizada
4. Despliega a GitHub Pages

**No requiere intervención manual.**

### Monitorear el Despliegue
1. Ve a tu repositorio en GitHub
2. Haz clic en la pestaña **Actions**
3. Verás el workflow `Deploy to GitHub Pages`
4. El despliegue toma ~1-2 minutos

## 🛠️ Despliegue Manual (si lo necesitas)

Si quieres desplegar manualmente:

```bash
npm run deploy
```

Este comando:
1. Construye la aplicación para producción
2. Despliega usando `angular-cli-ghpages`

## 📋 Configuración Técnica

### Cambios Realizados

1. **Workflow de GitHub Actions** (`.github/workflows/deploy.yml`)
   - Build automático con cada push
   - Tests y linting
   - Despliegue a GitHub Pages

2. **angular.json**
   - Agregada configuración `baseHref: /ikama_frontend/`
   - Necesario para que las rutas funcionen en GitHub Pages

3. **package.json**
   - Script `build:prod` para builds de producción
   - Script `deploy` para despliegue manual

## ⚙️ Configuración de GitHub Pages en GitHub

Tu repositorio debe estar configurado así:

1. Ve a **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` con carpeta `/ (root)`
4. **Save**

*Nota: El workflow crea y actualiza la rama `gh-pages` automáticamente*

## 🔍 Troubleshooting

### El despliegue no aparece
1. Verifica en **Actions** que el workflow corrió exitosamente
2. Verifica que la rama `gh-pages` existe en tu repositorio
3. Espera 1-2 minutos y recarga la página

### Errores en el build
1. Revisa los logs en **Actions**
2. Asegúrate de que `npm install` funciona localmente
3. Verifica que no hay errores de linting

### Las rutas no funcionan
- Asegúrate que tienes `baseHref: /ikama_frontend/` en angular.json
- Las rutas internas deben ser relativas

## 📚 Recursos

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Angular Deployment Guide](https://angular.dev/guide/deployment)
- [angular-cli-ghpages](https://github.com/angular-cli-ghpages/angular-cli-ghpages)

---

**Configuración completada**: 2026-10-09
