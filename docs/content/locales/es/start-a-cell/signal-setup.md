# Configuración de Signal

Signal es la plataforma de comunicación recomendada para las células Soteria. Proporciona cifrado de extremo a extremo, mensajes que desaparecen, y es ampliamente confiado por profesionales de seguridad.

## ¿Por Qué Signal?

| Característica | Por Qué Importa |
|---------------|-----------------|
| Cifrado de extremo a extremo | Solo el remitente y destinatario pueden leer mensajes |
| Código abierto | El código puede ser auditado por seguridad |
| Mensajes que desaparecen | Reduce datos si el dispositivo es confiscado |
| Sin metadatos de mensajes almacenados | Signal no guarda registros de a quién envías mensajes |
| Seguridad de pantalla | Puede prevenir capturas de pantalla |
| Bloqueo de registro | Previene ataques de intercambio de SIM |

## Configuración Individual

Cada miembro debe configurar Signal correctamente:

### Paso 1: Instalar Signal

Descarga solo de fuentes oficiales:
- [signal.org](https://signal.org/download/)
- Tiendas de aplicaciones oficiales (iOS App Store, Google Play)

Nunca descargues de sitios de terceros.

### Paso 2: Registrarse

- Usa un número de teléfono que controles
- Considera usar un número no vinculado a tu identidad (prepago, Google Voice)

### Paso 2.5: Establecer tu Nombre de Perfil

**No uses tu nombre completo real en Signal.**

Al configurar tu perfil de Signal:
- **Usa solo el primer nombre** (ej., "María" no "María Rodríguez")
- **Usa un apodo o alias** (ej., "Jay" en lugar de "James")
- **Usa iniciales** (ej., "MK" en lugar de "Michael Kim")
- **Nunca uses tu nombre legal completo** (crea exposición innecesaria si el dispositivo es confiscado)

**Por qué esto importa:**
- Si tu teléfono es confiscado, tu lista de contactos de Signal se convierte en un registro de membresía
- Los nombres reales facilitan identificar y atacar a los miembros
- Reduce la exposición si ocurren capturas de pantalla o acceso al dispositivo
- Los primeros nombres o alias proporcionan suficiente identificación dentro de grupos de confianza

::: warning PROTECCIÓN DE IDENTIDAD
Tu nombre de perfil de Signal es visible para todos en tus grupos. Asume que podría ser visto por las fuerzas del orden si cualquier dispositivo en el grupo está comprometido. **Nunca uses tu nombre legal completo.**
:::

### Paso 3: Configurar Ajustes de Seguridad

Abre Configuración de Signal y configura:

**Configuración de Privacidad:**
- [x] Bloqueo de Pantalla: ACTIVADO (con PIN o biométrico)
- [x] Seguridad de Pantalla: ACTIVADO (previene capturas de pantalla)
- [x] Bloqueo de Registro: ACTIVADO (previene secuestro por intercambio de SIM)
- [x] Siempre Retransmitir Llamadas: Considera ACTIVADO (oculta dirección IP)

**Configuración de Chat:**
- [x] Mensajes que Desaparecen por Defecto: 1 semana (o más corto para grupos sensibles)

### Paso 4: Verificar Números de Seguridad

Cuando te comuniques con otros miembros de la célula, verifica los números de seguridad:
1. Abre la conversación
2. Toca el nombre del contacto arriba
3. Toca "Ver Número de Seguridad"
4. Compara los números en persona o por videollamada

Esto confirma que estás hablando con la persona correcta, no un impostor.

## Estructura de Grupos

### Grupos Recomendados

Crea grupos separados para cada segmento y función:

```
Grupos de la Célula
├── Coordinación de Guías (solo fundadores + guías)
├── Segmento Centinelas
├── Segmento Transportadores
├── Segmento Recursos
├── Segmento Aliados de Negocios
├── Segmento Observadores Legales
└── Anuncios (unidireccional, toda la célula)
```

**Regla Crítica: Una Persona, Un Grupo de Segmento**

Cada miembro solo debe estar en:
1. Su grupo de segmento asignado (Centinelas, Transportadores, etc.)
2. El grupo de Anuncios de toda la célula (si tu célula usa uno)

**Nunca agregues a alguien a múltiples grupos de segmentos.** Esto rompe la compartimentación y crea vulnerabilidades de seguridad.

### Verificación Antes de Agregar a Grupos

Antes de agregar a alguien a un grupo de segmento, verifica:

- [ ] Han sido avalados por un miembro de confianza
- [ ] Han completado el proceso de incorporación
- [ ] Han sido asignados a este segmento específico
- [ ] Entienden la compartimentación y la regla de "un segmento"
- [ ] Su Signal está configurado correctamente (mensajes que desaparecen, bloqueo de pantalla, etc.)

**Si alguno de estos no está completo, no los agregues al grupo.**

### Nombres de Grupos

**No uses nombres obvios.** En lugar de "Austin Soteria Transportadores," usa:
- Nombres código neutrales
- Temas no relacionados (clubes de lectura, equipos deportivos, grupos de pasatiempos)
- Números o letras

Acuerda la convención de nombres dentro de tu célula.

### Configuración de Grupos

Para cada grupo:
- **Mensajes que desaparecen**: ACTIVADO (1 semana o menos)
- **Enlace del grupo**: DESACTIVADO (previene unirse sin aprobación de admin)
- **Añadir miembros**: Solo admin
- **Editar info del grupo**: Solo admin

### Prácticas de Administrador

Los administradores de grupo son **guardianes de seguridad**, no solo coordinadores. Las responsabilidades del administrador incluyen:

**Gestión de Membresía:**
- **Verificar antes de agregar**: Solo agregar miembros que hayan sido avalados correctamente y completado la incorporación para ese segmento específico
- **Un segmento por persona**: Nunca agregar a alguien a múltiples grupos de segmentos. La compartimentación requiere que cada persona esté en UN segmento solamente
- **Eliminación inmediata**: Eliminar miembros inmediatamente cuando dejen la célula o cambien de segmentos
- **Revisiones regulares**: Revisión mensual de la membresía del grupo para asegurar que todos aún deberían tener acceso

**Protocolos de Seguridad:**
- **Al menos 2 admins por grupo**: Asegura continuidad si un admin no está disponible o está comprometido
- **Los dispositivos de admin deben tener la más alta seguridad**: Bloqueos de pantalla, mensajes que desaparecen, bloqueos de registro todos habilitados
- **Sin capturas de pantalla**: Recordar a los miembros que la seguridad de pantalla debe estar habilitada
- **Monitorear violaciones de seguridad**: Observar miembros compartiendo información entre segmentos o discutiendo detalles sensibles
- **Verificar nombres de perfil**: Asegurar que los miembros no estén usando nombres legales completos en sus perfiles de Signal
  - Si alguien se une con un nombre completo, pedirles privadamente que lo cambien a solo primer nombre o alias
  - Explicar la razón de seguridad: dispositivos confiscados crean registros de membresía

**Higiene de Grupo:**
- **Auditar membresía trimestralmente**: Verificar que cada miembro aún esté activo y correctamente avalado
- **No documentar nada**: No mantener listas de quién fue agregado cuándo o por qué se fueron
- **Confiar en tus instintos**: Si algo se siente mal sobre un miembro, discutir con otros guías

::: warning RESPONSABILIDAD DEL ADMINISTRADOR
Como administrador de grupo, tienes las llaves de la seguridad de tu segmento. Una cuenta de administrador comprometida o una adición descuidada puede exponer todo el segmento. Toma este rol en serio.
:::

## Protocolos de Comunicación

### Qué Discutir en Signal

- Coordinación y logística
- Programación
- Actualizaciones generales
- Información de entrenamiento

### Qué NO Discutir en Signal

Incluso con cifrado, sé cauteloso sobre:
- Ubicaciones específicas de individuos vulnerables
- Información personal detallada
- Cualquier cosa que sería dañina si la leen las autoridades
- Nombres de miembros de la comunidad indocumentados

**Asume que los mensajes podrían ser comprometidos.** El cifrado protege el tránsito — no un dispositivo confiscado.

### Palabras Código (Opcional)

Algunas células desarrollan palabras código para situaciones comunes:
- "El clima está cambiando" = actividad de aplicación observada
- "El club de lectura está cancelado" = alto, preocupación de seguridad
- "Necesito una receta" = solicitando transporte

Mantén los sistemas de código simples. Los códigos complejos se olvidan.

---

[← Equipo Fundador](/locales/es/start-a-cell/founding-team) | [Proceso de Incorporación →](/locales/es/start-a-cell/onboarding)

