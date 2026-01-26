# Herramientas y Recursos

Las herramientas correctas hacen que la coordinación sea más segura y efectiva. Esta página cubre plataformas y tecnologías recomendadas para operaciones de células, junto con consideraciones de seguridad para cada una.

## Comunicación Principal

### Signal

**Qué es**: Aplicación de mensajería encriptada para comunicación segura.

**Usar para**:
- Toda la coordinación y comunicación de la célula
- Grupos específicos de segmentos
- Llamadas de voz durante operaciones activas
- Compartir fotos (con mensajes que desaparecen)

**Características de seguridad**:
- Encriptación de extremo a extremo (solo el remitente y destinatario pueden leer)
- Mensajes que desaparecen (se eliminan automáticamente después del tiempo establecido)
- Bloqueo de pantalla y seguridad de pantalla
- Bloqueo de registro (previene ataques de intercambio de SIM)
- Retención mínima de metadatos

**Qué evitar**:
- No compartir direcciones específicas en texto (usar método de foto)
- No mantener mensajes sensibles indefinidamente (usar mensajes que desaparecen)
- No tomar capturas de pantalla de información sensible
- No usar para anuncios públicos (usar otros canales)

**Guía de configuración**: Ver [Configuración de Signal](/locales/es/start-a-cell/signal-setup) para configuración detallada.

::: tip HERRAMIENTA PRINCIPAL
Signal es la columna vertebral de la comunicación de la célula. Cada miembro debe tenerlo configurado correctamente antes de unirse a cualquier segmento.
:::

---

## Colaboración Segura

### CryptPad

**Qué es**: Plataforma de documentos colaborativos y formularios encriptados con conocimiento cero.

**Usar para**:
- Crear formularios de admisión seguros para miembros de la comunidad
- Edición colaborativa de documentos (notas de reuniones, documentos de planificación)
- Encuestas y sondeos dentro de la célula
- Hojas de cálculo para coordinación (no para almacenar datos sensibles)

**Características de seguridad**:
- Encriptación de extremo a extremo
- No se requiere cuenta (se puede usar anónimamente)
- Arquitectura de conocimiento cero (CryptPad no puede leer tus datos)
- Opción de documentos autodestructivos
- Sin seguimiento ni análisis

**Qué evitar**:
- No almacenar listas de miembros vulnerables de la comunidad
- No mantener registros permanentes de actividades
- No usar para almacenamiento de datos a largo plazo
- No compartir enlaces de CryptPad en plataformas públicas

**Acceso**: [cryptpad.fr](https://cryptpad.fr) (gratis) o auto-alojar para máxima seguridad

::: warning USO TEMPORAL SOLAMENTE
CryptPad es excelente para colaboración temporal, pero recuerda: los datos más seguros son los datos que no existen. Elimina documentos cuando ya no sean necesarios.
:::

---

## Recaudación de Fondos y Apoyo Financiero

### GoFundMe (o plataformas similares)

**Qué es**: Plataforma de crowdfunding para recaudar dinero para miembros de la comunidad necesitados.

**Usar para**:
- Fondos de emergencia para honorarios legales, fianza, alquiler
- Gastos médicos para miembros de la comunidad
- Apoyar familias después de detención o deportación
- Recuperación de negocios después de acoso

**Consideraciones de seguridad**:
- **Plataforma pública**: Asume que cualquier cosa publicada es visible para todos, incluidas las fuerzas del orden
- **Usar lenguaje general**: "Apoyando a una familia local necesitada" no "Fondo de fianza para detención de ICE"
- **No nombrar individuos**: Protege la identidad de a quién estás ayudando
- **Separar de la identidad de la célula**: No vincular recaudaciones de fondos directamente al nombre o estructura de tu célula

**Alternativas**:
- **Redes de ayuda mutua**: Transferencias de efectivo directas a través de miembros de la comunidad de confianza
- **Sistemas basados en efectivo**: Para máxima privacidad, aunque más difícil de escalar
- **Criptomoneda**: Para células expertas en tecnología, ofrece más anonimato (pero tiene curva de aprendizaje)

::: tip PRIVACIDAD FINANCIERA
Cuanto más pública sea la recaudación de fondos, menos detalles operativos debes compartir. Mantén la recaudación de fondos general y separada de actividades específicas de la célula.
:::

---

## Acceso a Idiomas

### Google Translate

**Qué es**: Herramienta de traducción gratuita para texto, voz e imágenes.

**Usar para**:
- Traducción en tiempo real durante interacciones comunitarias
- Traducir documentos y formularios
- Comunicación con miembros de la comunidad multilingües
- Entender materiales escritos en diferentes idiomas

**Consideraciones de seguridad**:
- **No es privado**: Google puede ver todo lo que traduces
- **No traducir información sensible**: Nombres, direcciones, detalles operativos
- **Usar solo para comunicación general**: Información de Conoce Tus Derechos, coordinación general
- **Modo sin conexión disponible**: Descargar paquetes de idiomas para traducción sin conexión (más seguro)

**Mejores prácticas**:
- Usar modo sin conexión cuando sea posible
- Traducir conceptos generales, no detalles operativos específicos
- Hacer que miembros multilingües revisen traducciones importantes
- Considerar contratar traductores profesionales para documentos críticos

**Alternativas**:
- **DeepL**: A menudo más preciso, pero tampoco es privado
- **Diccionarios sin conexión**: Para búsqueda básica de palabras sin internet
- **Traductores comunitarios**: Opción más segura para contenido sensible

---

## Herramientas Adicionales

### Correo Electrónico Seguro (para comunicación externa)

**Recomendado**: ProtonMail, Tutanota
- Encriptado de extremo a extremo
- Basado fuera de la jurisdicción de EE.UU.
- Usar solo para comunicación externa (no coordinación interna de la célula)

### Gestores de Contraseñas

**Recomendado**: Bitwarden, 1Password
- Almacenar contraseñas complejas de forma segura
- Esencial para administradores que gestionan múltiples cuentas
- Habilitar autenticación de dos factores

### Servicios VPN

**Recomendado**: Mullvad, ProtonVPN
- Oculta tu dirección IP y ubicación
- Útil para administradores que acceden a sistemas sensibles
- No necesario para la mayoría de los miembros (Signal ya encripta)

---

## Principios de Selección de Herramientas

Al evaluar cualquier herramienta nueva, pregunta:

1. **¿Está encriptada?** La encriptación de extremo a extremo es innegociable para comunicación sensible
2. **¿Quién puede acceder a nuestros datos?** Los sistemas de conocimiento cero son mejores
3. **¿Qué metadatos se recopilan?** Menos es mejor
4. **¿Es ampliamente utilizada?** Las herramientas populares son menos sospechosas que las oscuras
5. **¿Podemos usarla anónimamente?** Sin cuenta o información mínima es ideal
6. **¿Qué pasa si se compromete?** Asume que cualquier herramienta puede ser violada

**La regla de oro**: Usa la herramienta correcta para el trabajo correcto. Signal para coordinación, CryptPad para colaboración temporal, efectivo para máxima privacidad financiera.

---

[← Proceso de Incorporación](/locales/es/start-a-cell/onboarding) | [Plantillas →](/locales/es/start-a-cell/templates)

