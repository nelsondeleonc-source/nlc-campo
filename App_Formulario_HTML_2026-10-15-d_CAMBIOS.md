# App de campo NLC · versión 2026-10-15-d (sobre la 2026-10-15-c)

Dos cambios, nada más. Claves, opciones, rutas y datos.json quedan iguales.

1. **Nombres de fotos con el número entre paréntesis**: `Interior 1er nivel (1).jpg`, `Terraza (2).jpg`.
   Antes era `Terraza 2.jpg`. Las macros de las plantillas (NLA_Clasificar) solo quitan el número suelto en
   Entorno, Fachada, Interior, Patio, Linderos, Carrocería, Tablero, Motor y Vistas aéreas. Por eso Interior por nivel,
   Áreas comunes, Terraza, Azotea, Terreno, Edificaciones, Mejoras productivas, Chasis y Detalles salían
   una foto por página con el título «TERRAZA 2». Con «(N)» las 6 plantillas agrupan bien (simulado con las reglas
   copiadas del VBA). El receptor v2.4 solo mira la extensión y el validador v5 ya quita «(N)»: no cambia nada del lado del motor.
2. **ENLACE_RECEPCION** relleno con la «Solicitud de archivos» de la carpeta Recepcion (creada 15/10).
   Aparece el botón «☁ Subir a Recepción».

Contrato del paquete: pasa a v1.3 solo en el ejemplo de nombres (sección 2: `Entorno (1).jpg`).
