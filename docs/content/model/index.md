# The Soteria Model

The Soteria Model is a framework for community-organized mutual aid and protection. It's designed to be **secure**, **scalable**, and **replicable** — any community can adopt it.

## Architecture Overview

```
                    ┌─────────────────────────────┐
                    │   SOTERIAMODEL.COM          │
                    │   (Public Blueprint)        │
                    └──────────────┬──────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
    ┌──────▼──────┐         ┌──────▼──────┐         ┌──────▼──────┐
    │  City A     │         │  City B     │         │  Your City  │
    │  Cell       │         │  Cell       │         │  Cell       │
    └──────┬──────┘         └──────┬──────┘         └──────┬──────┘
           │                       │                       │
     ┌─────┴─────┐           ┌─────┴─────┐           ┌─────┴─────┐
     │ Segments  │           │ Segments  │           │ Segments  │
     │ Stewards  │           │ Stewards  │           │ Stewards  │
     └───────────┘           └───────────┘           └───────────┘
```

Each **cell** is a local, autonomous network. Within each cell are **segments** — specialized teams with distinct roles. **Stewards** coordinate activities without crossing security boundaries.

## Key Components

| Component | Purpose |
|-----------|---------|
| [**Cells**](/model/cells) | Local autonomous networks, geographically or community-based |
| [**Segments**](/model/segments) | Functional teams (Sentinels, Transporters, Resources, etc.) |
| [**Stewards**](/model/stewards) | Coordination roles (Segment Leads, Logistics, Onboarding) |
| [**Trust Levels**](/model/trust) | Vouching system and progression from prospect to trusted member |

## Security Model

The Soteria Model is built on **compartmentalization**:

- Segments are isolated from each other
- A member in one segment doesn't know members of another
- If one person is compromised, the damage is contained
- Coordinators know other coordinators, not all members

This is not paranoia — it's protection. In high-risk environments, what people don't know, they cannot reveal.

## Technology

All coordination happens through **encrypted, off-platform communication**:

- **Signal** for group messaging (separate groups per segment)
- **No centralized databases** of community members or vulnerable individuals
- **This site is public** — it contains only the blueprint, never operational details

## Next Steps

<div class="tip custom-block">

**New to the model?** Start with [Core Principles](/model/principles) to understand the values that guide everything.

**Ready to build?** Jump to [Start a Cell](/start-a-cell/) for step-by-step guidance.

</div>

