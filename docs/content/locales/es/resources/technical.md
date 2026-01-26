# Herramientas Técnicas

**Plataformas y tecnologías seguras para coordinación segura de células.**

Las herramientas correctas hacen que la coordinación sea más segura y efectiva. Esta página cubre plataformas recomendadas para operaciones de células, junto con consideraciones de seguridad para cada una.

---

## Comunicación Principal

### Signal

**Qué es:** Aplicación de mensajería cifrada para comunicación segura.

**Usar para:**
- Toda la coordinación y comunicación de células
- Grupos específicos de segmentos
- Llamadas de voz durante operaciones activas
- Compartir fotos (con mensajes que desaparecen)

**Características de seguridad:**
- Cifrado de extremo a extremo (solo el remitente y el destinatario pueden leer)
- Mensajes que desaparecen (se eliminan automáticamente después de un tiempo establecido)
- Bloqueo de pantalla y seguridad de pantalla
- Bloqueo de registro (previene ataques de intercambio de SIM)
- Retención mínima de metadatos

**Qué evitar:**
- No compartas direcciones específicas en texto (usa el método de foto)
- No mantengas mensajes sensibles indefinidamente (usa mensajes que desaparecen)
- No tomes capturas de pantalla de información sensible
- No uses para anuncios públicos (usa otros canales)

**Guía de configuración:** Consulta [Configuración de Signal](/locales/es/start-a-cell/signal-setup) para configuración detallada.

::: tip HERRAMIENTA PRINCIPAL
Signal es la columna vertebral de la comunicación de células. Cada miembro debe tenerlo configurado correctamente antes de unirse a cualquier segmento.
:::

**Descargar:**
- iOS: [App Store](https://apps.apple.com/us/app/signal-private-messenger/id874139669)
- Android: [Google Play](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms)
- Desktop: [signal.org/download](https://signal.org/download/)

---

## Colaboración Segura

### CryptPad

**Qué es:** Plataforma de documentos colaborativos y formularios cifrados de conocimiento cero.

**Usar para:**
- Crear formularios de admisión seguros para miembros de la comunidad
- Edición colaborativa de documentos (notas de reuniones, documentos de planificación)
- Encuestas y sondeos dentro de la célula
- Hojas de cálculo para coordinación (no para almacenar datos sensibles)

**Características de seguridad:**
- Cifrado de extremo a extremo
- No se requiere cuenta (se puede usar de forma anónima)
- Arquitectura de conocimiento cero (CryptPad no puede leer tus datos)
- Opción de documentos que se autodestruyen
- Sin seguimiento ni análisis

**Qué evitar:**
- No almacenes listas de miembros vulnerables de la comunidad
- No mantengas registros permanentes de actividades
- No uses para almacenamiento de datos a largo plazo
- No compartas enlaces de CryptPad en plataformas públicas

**Acceso:** [cryptpad.fr](https://cryptpad.fr) (gratis) o auto-hospeda para máxima seguridad

---

## Navegación Anónima

### Tor Browser

**Qué es:** Navegador que enruta el tráfico a través de múltiples servidores para ocultar tu ubicación e identidad.

**Usar para:**
- Investigar temas sensibles
- Acceder a recursos sin revelar tu ubicación
- Comunicarse cuando necesitas máximo anonimato
- Acceder a esta documentación si te preocupa la vigilancia

**Características de seguridad:**
- Enruta el tráfico a través de múltiples relés cifrados
- Oculta tu dirección IP y ubicación
- Bloquea rastreadores y huellas digitales
- Aísla cada sitio web que visitas

**Qué evitar:**
- No inicies sesión en cuentas personales mientras usas Tor
- No descargues archivos a través de Tor (puede revelar identidad)
- No uses para operaciones sensibles al tiempo (es más lento)
- No asumas que te hace completamente invisible

**Descargar:** [torproject.org](https://www.torproject.org/download/)

---

## Privacidad Financiera

### Efectivo

**Qué es:** Moneda física. Sin rastro digital.

**Usar para:**
- Toda la distribución de recursos a miembros de la comunidad
- Reembolsar a voluntarios por gastos
- Comprar suministros para la célula
- Cualquier transacción donde la privacidad importa

**Por qué importa:**
- Sin registros bancarios para citar
- Sin historial de transacciones para rastrear
- Sin nombres adjuntos a pagos
- Inmediato y final

**Mejores prácticas:**
- Mantén recibos mínimos o destrúyelos
- No uses cuentas bancarias personales para fondos de células
- Distribuye efectivo en persona, nunca lo envíes por correo
- Usa billetes pequeños para distribución más fácil

---

## Qué NO Usar

### ❌ Evita Estas Plataformas

**Facebook / Productos Meta**
- Seguimiento y recopilación de datos extensivos
- Coopera con las fuerzas del orden
- Los metadatos revelan relaciones y patrones
- No cifrado de extremo a extremo por defecto

**SMS / Mensajes de Texto**
- No cifrado
- Almacenado por operadores telefónicos
- Fácilmente interceptado
- Sujeto a citación

**Correo Electrónico (para comunicación operacional)**
- Los metadatos revelan remitente, destinatario, hora
- Sujeto a citación
- A menudo almacenado indefinidamente
- No diseñado para coordinación en tiempo real

**Zoom / Google Meet (para discusiones sensibles)**
- La empresa puede acceder al contenido
- Metadatos registrados
- Sujeto a citación
- Usa voz/video de Signal en su lugar

**Venmo / PayPal / Cash App**
- Crea registros de transacciones permanentes
- Nombres y cantidades se registran
- Sujeto a citación
- Usa efectivo en su lugar

---

## Comparación de Herramientas

| Herramienta | Propósito | Cifrado | Anonimato | Mejor Para |
|------|---------|------------|-----------|----------|
| **Signal** | Mensajería | ✅ E2E | ⚠️ Número de teléfono | Coordinación diaria |
| **CryptPad** | Documentos | ✅ E2E | ✅ Anónimo | Edición colaborativa |
| **Tor Browser** | Navegación | ✅ Por capas | ✅ Anónimo | Investigación, acceso |
| **Efectivo** | Pagos | N/A | ✅ Anónimo | Todas las transacciones |

---

## Principios de Seguridad para Uso de Herramientas

### 1. Usa la Herramienta Correcta para el Trabajo

No uses Signal para anuncios públicos. No uses CryptPad para almacenamiento permanente. No uses Tor para operaciones sensibles al tiempo. Cada herramienta tiene un propósito.

### 2. Asume que Todo lo Digital Puede Ser Comprometido

Incluso con cifrado, asume que adversarios determinados eventualmente pueden acceder a los datos. Usa mensajes que desaparecen. No almacenes lo que no necesitas.

### 3. Los Metadatos Importan

Incluso si el contenido está cifrado, los metadatos (quién, cuándo, con qué frecuencia) revelan patrones. Minimiza las huellas digitales donde sea posible.

### 4. Capacita a Todos

Las herramientas solo son seguras si se usan correctamente. Cada miembro debe completar capacitación de seguridad antes de unirse a cualquier segmento.

---

## Comenzando

**Para células nuevas:**

1. **Configura Signal primero** — Esto no es negociable. Consulta [Guía de Configuración de Signal](/locales/es/start-a-cell/signal-setup)
2. **Crea una cuenta de CryptPad** — Usa para planificación colaborativa durante la fase fundacional
3. **Instala Tor Browser** — Tenlo listo para investigación y acceso anónimo
4. **Establece protocolos de efectivo** — Decide cómo se manejarán los fondos antes de necesitarlos

**Para células existentes:**

1. **Audita herramientas actuales** — ¿Estás usando algo de la lista de "evitar"?
2. **Revisa configuración de Signal** — Asegúrate de que todos los miembros tengan la configuración adecuada
3. **Prueba comunicación de respaldo** — ¿Qué pasa si Signal se cae?
4. **Documenta uso de herramientas** — Crea guías simples para tu contexto específico

---

::: warning RECUERDA
**La regla de oro:** Usa la herramienta correcta para el trabajo correcto. Signal para coordinación, CryptPad para colaboración temporal, efectivo para máxima privacidad financiera.
:::

---

[← Volver al Centro de Recursos](./) | [Materiales Imprimibles →](./printable)

