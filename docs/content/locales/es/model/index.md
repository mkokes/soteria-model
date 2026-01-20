# El Modelo Soteria

El Modelo Soteria es un marco para la ayuda mutua y protección organizada por la comunidad. Está diseñado para ser **seguro**, **escalable** y **replicable** — cualquier comunidad puede adoptarlo.

## Visión General de la Arquitectura

```
                    ┌─────────────────────────────┐
                    │   SOTERIAMODEL.COM          │
                    │   (Modelo Público)          │
                    └──────────────┬──────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
    ┌──────▼──────┐         ┌──────▼──────┐         ┌──────▼──────┐
    │  Ciudad A   │         │  Ciudad B   │         │  Tu Ciudad  │
    │  Célula     │         │  Célula     │         │  Célula     │
    └──────┬──────┘         └──────┬──────┘         └──────┬──────┘
           │                       │                       │
     ┌─────┴─────┐           ┌─────┴─────┐           ┌─────┴─────┐
     │ Segmentos │           │ Segmentos │           │ Segmentos │
     │ Guías     │           │ Guías     │           │ Guías     │
     └───────────┘           └───────────┘           └───────────┘
```

Cada **célula** es una red local y autónoma. Dentro de cada célula hay **segmentos** — equipos especializados con roles distintos. Los **guías** coordinan actividades sin cruzar límites de seguridad.

## Componentes Clave

| Componente | Propósito |
|-----------|---------|
| [**Células**](/locales/es/model/cells) | Redes autónomas locales, basadas en geografía o comunidad |
| [**Segmentos**](/locales/es/model/segments) | Equipos funcionales (Centinelas, Transportadores, Recursos, etc.) |
| [**Guías**](/locales/es/model/stewards) | Roles de coordinación (Líderes de Segmento, Logística, Incorporación) |
| [**Niveles de Confianza**](/locales/es/model/trust) | Sistema de aval y progresión de prospecto a miembro de confianza |

## Modelo de Seguridad

El Modelo Soteria está construido sobre la **compartimentación**:

- Los segmentos están aislados entre sí
- Un miembro en un segmento no conoce a los miembros de otro
- Si una persona es comprometida, el daño está contenido
- Los coordinadores conocen a otros coordinadores, no a todos los miembros

Esto no es paranoia — es protección. En ambientes de alto riesgo, lo que la gente no sabe, no puede revelar.

## Tecnología

Toda la coordinación ocurre a través de **comunicación encriptada fuera de plataforma**:

- **Signal** para mensajería grupal (grupos separados por segmento)
- **Sin bases de datos centralizadas** de miembros de la comunidad o personas vulnerables
- **Este sitio es público** — contiene solo el modelo, nunca detalles operativos

## Próximos Pasos

<div class="tip custom-block">

**¿Nuevo en el modelo?** Comienza con [Principios Fundamentales](/locales/es/model/principles) para entender los valores que guían todo.

**¿Listo para construir?** Salta a [Iniciar una Célula](/locales/es/start-a-cell/) para orientación paso a paso.

</div>

