# Translation Roadmap - Soteria Model Documentation

## Overview

This document tracks the translation progress of the Soteria Model documentation site across multiple languages. The site contains **33 total pages** (32 content pages plus `offline.md`) per language.

---

## Translation Progress by Language

### ✅ Tier 1: Active Languages

| Language | Code | Progress | Files Translated | Files Remaining | Completion % |
|----------|------|----------|------------------|-----------------|--------------|
| **Somali** | `so` | 🟢 Complete | 33/33 | 0 | **100%** |
| **Arabic** | `ar` | 🟢 Complete | 33/33 | 0 | **100%** |
| **Spanish** | `es` | 🟨 Nearly Complete | 30/33 | 3 | **91%** |

#### Remaining Missing Files in Spanish (`es`):
- `business-support/index.md` - Business Support page
- `get-support/index.md` - Get Support page
- `rights/print-cards.md` - Printable Rights Cards

---

### 🔄 Tier 2: High Priority Languages (Not Started)

| Language | Code | Progress | Files Translated | Files Remaining | Completion % |
|----------|------|----------|------------------|-----------------|--------------|
| **Hindi** | `hi` | 🔴 Not Started | 0/32 | 32 | **0%** |
| **Vietnamese** | `vi` | 🔴 Not Started | 0/32 | 32 | **0%** |
| **Chinese (Simplified)** | `zh-Hans` | 🔴 Not Started | 0/32 | 32 | **0%** |
| **Chinese (Traditional)** | `zh-Hant` | 🔴 Not Started | 0/32 | 32 | **0%** |

**Rationale**: Large immigrant populations in the United States with significant need for rights information.

---

### 📋 Tier 3: Medium Priority Languages (Not Started)

| Language | Code | Progress | Files Translated | Files Remaining | Completion % |
|----------|------|----------|------------------|-----------------|--------------|
| **Hmong** | `hmn` | 🔴 Not Started | 0/32 | 32 | **0%** |
| **Korean** | `ko` | 🔴 Not Started | 0/32 | 32 | **0%** |
| **Amharic** | `am` | 🔴 Not Started | 0/32 | 32 | **0%** |
| **Oromo** | `om` | 🔴 Not Started | 0/32 | 32 | **0%** |

**Rationale**: Growing communities with specific regional concentrations in the US.

---

### 🌍 Tier 4: Additional Languages (Not Started)

| Language | Code | Progress | Files Translated | Files Remaining | Completion % |
|----------|------|----------|------------------|-----------------|--------------|
| **French** | `fr` | 🔴 Not Started | 0/32 | 32 | **0%** |
| **Russian** | `ru` | 🔴 Not Started | 0/32 | 32 | **0%** |

**Rationale**: Significant immigrant populations, particularly from French-speaking Africa and former Soviet states.

---

## Content Structure (32 Pages Total)

### 📄 Site Pages by Section

#### **Root** (1 page)
- `index.md` - Homepage

#### **Model** (8 pages)
- `model/index.md` - Model Overview
- `model/cells.md` - Cell Structure
- `model/decentralization.md` - Decentralization ✅ *Recently added*
- `model/principles.md` - Core Principles
- `model/scaling.md` - Scaling Strategy
- `model/segments.md` - Population Segments
- `model/stewards.md` - Stewardship
- `model/trust.md` - Trust Building

#### **Rights** (7 pages)
- `rights/index.md` - Rights Overview
- `rights/at-home.md` - Rights at Home
- `rights/at-work.md` - Rights at Work
- `rights/if-detained.md` - If Detained
- `rights/in-public.md` - Rights in Public
- `rights/print-cards.md` - Printable Rights Cards ⚠️ *Not yet translated*
- `rights/traffic-stop.md` - Traffic Stop Rights

#### **Security** (5 pages)
- `security/index.md` - Security Overview
- `security/communication.md` - Secure Communication
- `security/compromise.md` - If Compromised
- `security/devices.md` - Device Security
- `security/physical.md` - Physical Security

#### **Start a Cell** (6 pages)
- `start-a-cell/index.md` - Getting Started
- `start-a-cell/founding-team.md` - Founding Team
- `start-a-cell/onboarding.md` - Member Onboarding
- `start-a-cell/signal-setup.md` - Signal Setup
- `start-a-cell/templates.md` - Templates & Resources
- `start-a-cell/tools-and-resources.md` - Tools and Resources ✅ *Recently added*

#### **Support** (2 pages)
- `business-support/index.md` - Business Support ⚠️ *Not yet translated*
- `get-support/index.md` - Get Support ⚠️ *Not yet translated*

#### **Resources** (3 pages)
- `resources/index.md` - Resources Overview ⚠️ *Not yet translated*
- `resources/printable.md` - Printable Resources ⚠️ *Not yet translated*
- `resources/technical.md` - Technical Resources ⚠️ *Not yet translated*

---

## Translation Workflow

### Phase 1: Complete Tier 1 Languages (Spanish, Somali, Arabic)
**Priority**: 🔴 **URGENT**
**Status**: Somali (`so`) and Arabic (`ar`) are 100% complete (33/33); **3 pages remain in Spanish (`es`)**

**Remaining Spanish (`es`) tasks**:
1. ⬜ Translate `business-support/index.md` to Spanish
2. ⬜ Translate `get-support/index.md` to Spanish
3. ⬜ Translate `rights/print-cards.md` to Spanish

**Completed**:
- ✅ `resources/index.md`, `resources/printable.md`, `resources/technical.md` in Spanish, Somali, and Arabic
- ✅ `business-support/index.md`, `get-support/index.md`, `rights/print-cards.md` in Somali and Arabic
- ✅ `offline.md` in English, Spanish, Somali, and Arabic

---

### Phase 2: Launch Tier 2 Languages (Hindi, Vietnamese, Chinese)
**Priority**: 🟡 **HIGH**
**Effort**: 32 pages × 4 languages = **128 pages**

**Tasks**:
1. Create directory structure for `hi`, `vi`, `zh-Hans`, `zh-Hant`
2. Add the new locales to `docs/astro.config.mjs`
3. Translate all 32 pages for each language
4. Test builds and navigation

**Timeline**: 3-4 months
**Impact**: Reaches major immigrant populations in the US

---

### Phase 3: Launch Tier 3 Languages (Hmong, Korean, Amharic, Oromo)
**Priority**: 🟢 **MEDIUM**
**Effort**: 32 pages × 4 languages = **128 pages**

**Tasks**:
1. Create directory structure for `hmn`, `ko`, `am`, `om`
2. Add the new locales to `docs/astro.config.mjs`
3. Translate all 32 pages for each language
4. Test builds and navigation

**Timeline**: 3-4 months
**Impact**: Serves regional communities with specific needs

---

### Phase 4: Launch Tier 4 Languages (French, Russian)
**Priority**: 🔵 **LOW**
**Effort**: 32 pages × 2 languages = **64 pages**

**Tasks**:
1. Create directory structure for `fr`, `ru`
2. Add the new locales to `docs/astro.config.mjs`
3. Translate all 32 pages for each language
4. Test builds and navigation

**Timeline**: 2-3 months
**Impact**: Completes comprehensive language coverage

---

## Total Translation Effort

### Summary Statistics

| Metric | Count |
|--------|-------|
| **Total Languages** | 13 |
| **Languages Active** | 3 (Spanish, Somali, Arabic) |
| **Languages Planned** | 10 |
| **Pages per Language** | 33 (32 content pages + `offline.md`) |
| **Total Pages to Translate** | 429 pages (13 languages × 33 pages) |
| **Pages Already Translated** | 96 pages (`so` 33 + `ar` 33 + `es` 30) |
| **Pages Remaining** | 333 pages (3 in `es` + 330 in planned languages) |
| **Overall Completion** | **22%** |

### Effort Breakdown by Phase

| Phase | Languages | Pages | Estimated Time |
|-------|-----------|-------|----------------|
| **Phase 1** | 1 remaining (`es`) | 3 | < 1 week |
| **Phase 2** | 4 (new languages) | 132 | 3-4 months |
| **Phase 3** | 4 (new languages) | 132 | 3-4 months |
| **Phase 4** | 2 (new languages) | 66 | 2-3 months |
| **Total** | 13 languages | 333 remaining | 8-12 months |

---

## Technical Implementation

### Directory Structure

```
docs/src/content/docs/
│   ├── (English pages at the root)
│   ├── es/          # Spanish (91% complete - 30/33)
│   ├── so/          # Somali (100% complete - 33/33)
│   ├── ar/          # Arabic (100% complete - 33/33)
│   ├── hi/          # Hindi (planned)
│   ├── vi/          # Vietnamese (planned)
│   ├── zh-Hans/     # Chinese Simplified (planned)
│   ├── zh-Hant/     # Chinese Traditional (planned)
│   ├── hmn/         # Hmong (planned)
│   ├── ko/          # Korean (planned)
│   ├── am/          # Amharic (planned)
│   ├── om/          # Oromo (planned)
│   ├── fr/          # French (planned)
│   └── ru/          # Russian (planned)
```

### Astro/Starlight Configuration Updates Needed

For each new language, update `docs/astro.config.mjs`:

1. Add an entry to `locales` with its `label`, `lang`, and `dir: 'rtl'` for right-to-left scripts (Arabic, Urdu if added)
2. Add the language to the `title` map and to each sidebar group's `translations`
3. Add its code to `LOCALES` if old `/locales/<lang>/` URLs ever existed for it
4. Run `npm run build` — it fails on any broken internal link

Page labels in the sidebar come from each translated page's `title`, so pages need no extra navigation config. Untranslated pages fall back to English automatically.

### Translation Quality Guidelines

1. **Consistency**: Use consistent terminology across all pages
2. **Cultural Adaptation**: Adapt examples and references to be culturally relevant
3. **Legal Accuracy**: Ensure rights information is legally accurate
4. **Native Review**: Have native speakers review translations
5. **Regular Updates**: Keep translations in sync with English updates

---

## Priority Recommendations

### Immediate Actions (Next 2-3 Weeks)
1. ⬜ Complete Spanish, Somali, and Arabic translations (6 missing pages each)
2. ⬜ Create printable rights cards in all 3 languages
3. ⬜ Translate new resources section in all 3 languages
4. ⬜ Test and verify all links work correctly

### Short-term Goals (Next 3 Months)
1. Launch Hindi translation (large population, high need)
2. Launch Vietnamese translation (significant community)
3. Launch Chinese Simplified and Traditional (major immigrant group)

### Long-term Goals (6-12 Months)
1. Complete all Tier 3 languages (Hmong, Korean, Amharic, Oromo)
2. Complete all Tier 4 languages (French, Russian)
3. Establish translation maintenance process
4. Consider additional languages based on community feedback

---

## Translation Resources Needed

### Human Resources
- **Professional Translators**: For legal accuracy and cultural appropriateness
- **Native Speaker Reviewers**: For quality assurance
- **Community Liaisons**: To validate relevance and usefulness

### Tools & Services
- **Translation Management System**: To track progress and maintain consistency
- **Glossary**: Standardized terminology across languages
- **Style Guide**: Consistent voice and tone guidelines

### Budget Considerations
- Professional translation: ~$0.10-0.25 per word
- Average page: ~500-1000 words
- Estimated cost per language: $1,600-$8,000 (32 pages × 500-1000 words × $0.10-0.25)
- **Total estimated cost**: $14,400-$72,000 for all 9 remaining languages

---

## Success Metrics

### Quantitative Metrics
- Translation completion percentage by language
- Page views by language
- User engagement by language
- Time to complete translations

### Qualitative Metrics
- Community feedback and testimonials
- Translation quality reviews
- Cultural appropriateness assessments
- Impact on community safety and awareness

---

## Maintenance Plan

### Ongoing Translation Maintenance
1. **Update Tracking**: Monitor English content changes
2. **Sync Translations**: Update all languages when English content changes
3. **Version Control**: Track translation versions alongside English versions
4. **Community Feedback**: Collect and incorporate user feedback
5. **Regular Reviews**: Quarterly review of translation quality and accuracy

---

**Last Updated**: 2026-01-26
**Document Owner**: Soteria Model Team
**Next Review Date**: 2026-02-26

---

## Recent Updates (2026-01-26)

### Content Additions
- Added `model/decentralization.md` (171 lines) - Explains why decentralization is critical for security
- Added `start-a-cell/tools-and-resources.md` (173 lines) - Comprehensive guide to Signal, CryptPad, GoFundMe, etc.
- Added `resources/` section (3 new pages) - Printable and technical resources

### Translation Updates Completed
- Updated all existing translations (Spanish, Somali, Arabic) to reflect recent English content changes
- Added translations for `model/decentralization.md` and `start-a-cell/tools-and-resources.md`
- Updated `model/principles.md` with new compartmentalization subsections
- Updated `security/communication.md` with identity protection and media policy sections
- Updated `start-a-cell/signal-setup.md` with profile name security and admin practices

### Outstanding Translation Work
- 6 pages still need translation in Spanish, Somali, and Arabic (see Phase 1 above)
- Total: 18 pages remaining to complete Tier 1 languages


