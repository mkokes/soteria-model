# OpSec de Comunicación

Cómo te comunicas es tan importante como qué comunicas. Esta guía cubre prácticas de comunicación segura.

## Signal: El Canal Principal

Toda comunicación celular ocurre en Signal. No mensajes de texto. No WhatsApp. No correo electrónico. Signal.

### ¿Por Qué Solo Signal?

| Plataforma | Problema |
|----------|---------|
| SMS/Texto | No cifrado, almacenado por operador |
| WhatsApp | Propiedad de Meta, metadatos recopilados |
| Telegram | No cifrado por defecto |
| Correo electrónico | No cifrado, almacenado en servidores |
| DMs de redes sociales | Monitoreados, almacenados, a menudo obligados |

Signal proporciona cifrado de extremo a extremo, mensajes que desaparecen y retención mínima de metadatos.

### Cuando Signal No Está Disponible

Si debes comunicarte fuera de Signal:
- Mantenlo vago y breve
- No menciones la célula, actividades o miembros
- Muévete a Signal tan pronto como sea posible
- Considera una llamada telefónica (aún vulnerable, pero menos permanente que texto)

## Qué Comunicar — y Qué No

### Seguro para Discutir

- Horarios de reunión y logística general
- Actualizaciones generales y chequeos
- Información de entrenamiento
- Información pública de conoce tus derechos
- Necesidades de recursos (generalmente, no individuos específicos)

### Nunca Discutir

Incluso en Signal, evita:

| Tema | Por Qué |
|-------|-----|
| Nombres específicos de miembros de la comunidad recibiendo ayuda | Los protege si el dispositivo es incautado |
| Ubicaciones detalladas (direcciones, casas seguras) | La información de ubicación es de alto riesgo |
| Información futura de aplicación | Podría ser malinterpretado como conspiración |
| Actividades de otros segmentos | Compartimentación |
| Fotografías de actividades o personas | La evidencia visual persiste |

### La Prueba

Antes de enviar, pregunta:
> "Si este mensaje fuera leído por ICE, ¿pondría a alguien en riesgo?"

Si sí, no lo envíes — o reformúlalo.

## Mensajes que Desaparecen

Todas las conversaciones celulares deben tener mensajes que desaparecen habilitados:

| Contexto | Temporizador Recomendado |
|---------|------------------|
| Coordinación diaria | 1 semana |
| Discusiones sensibles | 1 día |
| Altamente sensible | 1 hora |
| Anuncios | 1 semana - 1 mes |

Los mensajes que desaparecen no pueden ser usados en tu contra.

## Llamadas de Voz y Video

Signal también proporciona llamadas cifradas:

- Usa para discusiones sensibles no apropiadas para texto
- Habilita "Siempre Retransmitir Llamadas" para ocultar tu dirección IP
- Aún ten cuidado — estás hablando en voz alta, puedes ser escuchado

## Comunicación Grupal

### Protección de Identidad en Grupos

**No uses nombres completos reales en grupos de Signal.**

Cada miembro en un grupo de Signal puede ver:
- Nombres de perfil de todos los miembros
- Números de teléfono (si no están ocultos en configuración de privacidad)
- Cuándo estás en línea (si no está deshabilitado)

**Si cualquier dispositivo en el grupo es incautado o comprometido, esa información se convierte en una lista de membresía.**

**Prácticas de nomenclatura seguras:**
- ✓ Solo primeros nombres ("María," "James")
- ✓ Apodos o alias ("Jay," "Alex")
- ✓ Iniciales ("MK," "TR")
- ✗ Nombres legales completos ("María Rodríguez," "James Thompson")
- ✗ Nombres que identifican profesión o rol ("Oficial Mike," "Abogada Sarah")

**Configuraciones de privacidad adicionales:**
- Oculta tu número de teléfono de no-contactos (Configuración de Signal → Privacidad → Número de Teléfono → Nadie)
- Deshabilita "Confirmaciones de Lectura" e "Indicadores de Escritura" (reduce metadatos)
- Usa una foto de perfil que no te identifique (o ninguna foto)

::: warning LAS LISTAS DE MEMBRESÍA SON PELIGROSAS
Un grupo de Signal con los nombres reales de todos es una lista de membresía lista para las fuerzas del orden. Protege a tus compañeros miembros protegiendo tu propia identidad. **Solo primeros nombres o alias.**
:::

### Higiene de Grupo

Gestión de grupo adecuada es crítica para mantener compartimentación y seguridad:

**Gestión de Membresía:**
- **Elimina miembros prontamente cuando se van**: No esperes. Elimínalos el mismo día si es posible
- **Revisa la membresía regularmente**: Auditorías mensuales para asegurar que todos deberían tener acceso
- **Verifica antes de agregar**: Solo agrega miembros que hayan completado la incorporación para ese segmento específico
- **Un segmento por persona**: Nunca agregues a alguien a múltiples grupos de segmentos
- **Los administradores deben ser administradores**: Los administradores de grupo tienen responsabilidad de seguridad, no solo coordinación

**Aislamiento de Segmentos en Grupos:**
- Cada segmento tiene su propio grupo de Signal
- Los miembros solo están en su grupo de segmento asignado
- No publiques entre grupos de segmentos
- No discutas actividades de otros segmentos en tu grupo

::: danger COMPARTIMENTACIÓN EN LA PRÁCTICA
Si estás en el grupo de Transportadores, nunca deberías ver mensajes sobre observaciones de Centinelas. Si estás en el grupo de Centinelas, nunca deberías ver mensajes sobre rutas de transporte. **Grupos separados = conocimiento separado = seguridad.**
:::

### Anuncios Unidireccionales

Para anuncios a nivel de célula:
- Considera un grupo de "anuncios" separado
- Solo los administradores pueden publicar
- Reduce ruido y potencial de errores

### Responde Cuidadosamente

En chats grupales:
- No cites-respondas mensajes que deberían haber desaparecido
- No reenvíes mensajes entre grupos
- Ten en cuenta que todos en el grupo ven tu mensaje

## Consideraciones de Metadatos

Incluso con cifrado, alguna información es visible:

| Metadatos | Visibilidad |
|----------|------------|
| Con quién estás mensajeando | Tu teléfono, su teléfono |
| Cuándo estás mensajeando | Servidores de Signal (brevemente) |
| Con qué frecuencia mensajeas | Tu teléfono |
| Membresía de grupo | Miembros del grupo |

Signal minimiza la recopilación de metadatos, pero no es cero. Considera:
- El bloqueo de pantalla de tu teléfono (previene acceso casual)
- Quién podría mirar tu teléfono (familia, empleador, policía)

## Comunicación en Persona

A veces el canal más seguro es ningún canal:

- Las decisiones sensibles deben ocurrir en persona cuando sea posible
- Sin dispositivos presentes (o en otra habitación)
- Sin notas tomadas
- Resumen acordado compartido después si es necesario

## Medios y Comunicación Pública

**Política General: No hables con los medios sobre la célula.**

Todos los miembros de la célula deben abstenerse de hablar con los medios sobre la célula, su estructura, actividades o miembros. Esto protege la seguridad operativa y la seguridad de los miembros vulnerables de la comunidad.

### Por Qué Importa el Silencio Mediático

| Riesgo | Impacto |
|--------|---------|
| **Exposición operativa** | Describir cómo funciona la célula ayuda a las autoridades a entenderla y contrarrestarla |
| **Identificación de miembros** | Incluso descripciones vagas pueden ayudar a identificar participantes |
| **Exposición de miembros de la comunidad** | Discutir a quién ayudas pone a personas vulnerables en riesgo |
| **Responsabilidad legal** | Las declaraciones públicas pueden usarse como evidencia en investigaciones |
| **Oportunidades de infiltración** | La cobertura mediática atrae atención de quienes quieren interrumpir |

### Si Te Contactan los Medios

Cuando un reportero, periodista o medio de comunicación te contacta:

**HACER:**
- ✓ **Declinar comentar** sobre operaciones celulares, membresía o actividades específicas
- ✓ **Redirigir al problema más amplio**: Describe lo que las agencias de aplicación están haciendo y qué derechos/leyes están siendo violados
- ✓ **Hablar sobre información públicamente conocida**: Preocupaciones generales de la comunidad, derechos legales, recursos públicos
- ✓ **Referirlos a recursos públicos**: ACLU, National Lawyers Guild, organizaciones de derechos de inmigrantes
- ✓ **Ser cortés pero firme**: "No puedo hablar de eso, pero puedo contarte sobre las preocupaciones más amplias en nuestra comunidad"

**NO HACER:**
- ✗ Identificarte como parte de la red
- ✗ Nombrar a otros miembros o describir roles
- ✗ Discutir casos específicos o individuos siendo ayudados
- ✗ Describir detalles operativos (cómo coordinan, dónde se reúnen, qué herramientas usan)
- ✗ Confirmar o negar la existencia de actividades específicas
- ✗ Proporcionar fotos o videos que muestren miembros o actividades

## Redes Sociales

### Cuentas Personales

- No discutas actividades celulares
- No publiques sobre actividades, ubicaciones o miembros
- No te identifiques como parte de la red
- Ten en cuenta que tus asociaciones son visibles

### Redes Sociales de la Célula

Generalmente, las células no deben tener redes sociales públicas. Si lo haces:
- Nunca menciones actividades específicas
- Nunca publiques fotos que identifiquen personas
- Mantenlo en información general de conoce tus derechos
- Ten una política para lo que puede ser publicado

---

[← Seguridad de Dispositivos](/locales/es/security/devices) | [Seguridad Física →](/locales/es/security/physical)

