# Seguridad de Dispositivos

Tu teléfono es tu punto más vulnerable. Si es incautado, contiene mensajes, contactos, historial de ubicación y más. Asegúralo.

## Bloqueo de Teléfono

### Habilitar un Bloqueo Fuerte

Tu teléfono debe tener una pantalla de bloqueo. Opciones:

| Método | Fortaleza | Notas |
|--------|-----------|-------|
| PIN de 6+ dígitos | Bueno | Evita patrones obvios (123456, fecha de nacimiento) |
| Contraseña alfanumérica | Mejor | Más difícil de espiar |
| Biométrico + PIN | Mejor | Conveniente pero puede ser obligado |

::: warning BIOMÉTRICOS Y LA LEY
En algunas jurisdicciones, puedes ser obligado a desbloquear tu teléfono con huella o rostro, pero no con PIN. Considera deshabilitar biométricos en situaciones de alto riesgo.
:::

### Bloqueo Automático

Configura tu teléfono para bloquearse rápidamente:
- **iPhone**: Ajustes → Pantalla → Bloqueo Automático → 30 segundos
- **Android**: Ajustes → Seguridad → Bloqueo de Pantalla → Bloqueo automático → 15-30 segundos

### Bloqueo de Emergencia

Aprende cómo bloquear/deshabilitar rápidamente tu teléfono:
- **iPhone**: Presiona el botón lateral 5 veces (requiere PIN, deshabilita Face ID)
- **Android**: Varía según el dispositivo — aprende el tuyo

## Cifrado

Los teléfonos modernos están cifrados por defecto, pero verifica:

- **iPhone**: Habilitado automáticamente cuando estableces un código
- **Android**: Ajustes → Seguridad → Cifrado (debería decir "Cifrado")

El cifrado significa que los datos son ilegibles sin tu PIN — pero solo si tu teléfono está bloqueado.

## Configuración de Signal

Signal es nuestra herramienta principal de comunicación. Configúralo para seguridad:

### Ajustes Requeridos

Abre Signal → Ajustes → Privacidad:

- [x] **Bloqueo de Pantalla**: Requiere PIN/biométrico para abrir Signal
- [x] **Seguridad de Pantalla**: Bloquea capturas de pantalla
- [x] **Bloqueo de Registro**: Previene ataques de intercambio de SIM
- [ ] **Confirmaciones de Lectura**: Considera DESACTIVAR (reduce metadatos)
- [ ] **Indicadores de Escritura**: Considera DESACTIVAR

### Mensajes que Desaparecen

Establece un valor predeterminado para todas las conversaciones:
- Ajustes de Signal → Privacidad → Mensajes que Desaparecen Predeterminados → **1 semana** (o menos)

Para conversaciones sensibles, usa 1 día o 1 hora.

### Verificación de Número de Seguridad

Verifica números de seguridad con contactos clave (en persona o videollamada):
1. Abre conversación
2. Toca nombre del contacto
3. Toca "Ver Número de Seguridad"
4. Compara números

Esto confirma que estás hablando con la persona real, no un impostor.

## Otras Apps

### Eliminar Apps Innecesarias

Las apps recopilan datos. Solo mantén lo que necesitas.

### Revisar Permisos de Apps

Revisa regularmente qué apps tienen acceso a:
- Ubicación
- Contactos
- Cámara/Micrófono
- Almacenamiento

Elimina permisos que no sean necesarios.

### Servicios de Ubicación

Sé intencional sobre la ubicación:
- Deshabilita ubicación para apps que no la necesitan
- Considera deshabilitar completamente durante actividades sensibles
- Recuerda: los teléfonos aún pueden ser localizados vía torres celulares

## Copias de Seguridad en la Nube

### El Riesgo

Las copias de seguridad en la nube (iCloud, Google) pueden ser accedidas por las fuerzas del orden con proceso legal apropiado. Esto incluye tu historial de mensajes.

### Signal y Copias de Seguridad

- **iOS**: Los mensajes de Signal NO están incluidos en copias de seguridad de iCloud (bueno)
- **Android**: Signal tiene su propio sistema de copia de seguridad cifrada — no uses el de Google

### Considera Deshabilitar Copia de Seguridad en la Nube

Para máxima seguridad, deshabilita las copias de seguridad en la nube completamente — pero ten en cuenta que perderás datos si pierdes tu teléfono.

## Dispositivo para Actividades Celulares

### Dispositivo Separado (Ideal)

Si es posible, usa un teléfono separado para actividades celulares:
- Teléfono prepago comprado en efectivo
- Registrado a un número de Google Voice o similar
- Contiene solo Signal y apps necesarias
- Nunca conectado a tu identidad

### Dispositivo Compartido (Realidad)

La mayoría de las personas usan su teléfono personal. Está bien si:
- Sigues todas las prácticas de seguridad estrictamente
- Te sientes cómodo con el riesgo
- Mantienes las actividades celulares compartimentadas de la vida personal

## Si Tu Teléfono se Pierde o es Incautado

Ver [Si Comprometido](/es/security/compromise) para respuesta detallada.

Pasos inmediatos:
1. Alerta a tu líder de segmento vía medios alternativos
2. Asume que todo el contenido del teléfono es accesible
3. Otros miembros deben ser notificados si es necesario

---

[← Resumen de Seguridad](/es/security/) | [OpSec de Comunicación →](/es/security/communication)

