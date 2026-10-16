# App de campo NLC — versión 2026-10-15-e

Formulario de campo de tasaciones de NLC Arquitectos (Arq. Nelson de León C.). Funciona en el teléfono, también sin internet, y guarda cada expediente como un paquete `.zip` que se sube a OneDrive › `NLC_Integral_V1_3` › `Recepcion`.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa (formulario, croquis, fotos, cola de expedientes). |
| `sw.js` | Hace que la app abra sin internet y se actualice sola. |
| `manifest.webmanifest` | Permite instalarla como app («📲 Instalar como app»). |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | Iconos. |
| `.nojekyll` | Archivo vacío: le dice a GitHub Pages que publique los archivos tal cual. |

## Publicar en GitHub Pages

1. Sube **todos** estos archivos (incluido `.nojekyll`) a la raíz de un repositorio.
2. En el repositorio: **Settings › Pages › Build and deployment › Source: Deploy from a branch**, rama `main`, carpeta `/ (root)` → **Save**.
3. A los pocos minutos la app queda en `https://<usuario>.github.io/<repositorio>/index.html`. Comparte siempre ese enlace (con `index.html`).

Todas las rutas son relativas: la app funciona dentro de la subcarpeta del repositorio.

## Actualizar a una versión nueva

Reemplaza los archivos en el repositorio. Quien tenga la app abierta verá la franja amarilla «🔄 Hay una versión nueva… toca para actualizar». No se pierde nada de lo capturado.

## Enlace de subida a Recepcion (opcional)

Si creas en OneDrive una «Solicitud de archivos» sobre la carpeta `Recepcion`, pega su enlace en `index.html`, en la línea `let ENLACE_RECEPCION="";`. Aparecerá el botón «☁ Subir a Recepción» en la lista de expedientes guardados.
