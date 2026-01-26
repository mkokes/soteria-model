# Translation Changes Summary

**Date:** 2026-01-26  
**Purpose:** Document specific changes needed for translation updates

## Overview

This document details the specific content changes in English source files that need to be reflected in Spanish (es), Somali (so), and Arabic (ar) translations.

---

## 🆕 NEW FILES (Need complete translation)

### 1. model/decentralization.md
**Created:** 2026-01-26  
**Size:** 171 lines  
**Content:** Comprehensive explanation of why decentralization is critical to the Soteria Model

**Key sections:**
- The Problem with Centralization (with comparison diagrams)
- How Decentralization Works in Soteria (3 levels)
- Real-World Scenarios (centralized vs decentralized)
- Security Benefits table
- Trade-offs discussion
- Requirements for decentralization

**Translation notes:**
- Contains ASCII diagrams that should remain in English/ASCII
- Has comparison tables that need careful formatting
- Technical security terminology needs accurate translation

### 2. start-a-cell/tools-and-resources.md
**Created:** 2026-01-25  
**Size:** 173 lines  
**Content:** Comprehensive guide to tools and platforms for cell operations

**Key sections:**
- Core Communication (Signal)
- Secure Collaboration (CryptPad)
- Fundraising & Financial Support (GoFundMe)
- Language Access (Google Translate)
- Additional Tools (Email, Password Managers, VPNs)
- Tool Selection Principles

**Translation notes:**
- Tool names (Signal, CryptPad, etc.) should remain in English
- URLs should remain unchanged
- Security warnings and tips are critical - must be accurate

---

## 📝 UPDATED FILES (Need translation updates)

### 1. model/principles.md
**Updated:** 2026-01-25 13:39  
**Previous translation:** 2026-01-20 13:45  
**Change type:** MAJOR EXPANSION

**What changed:**
- Section 1 (Compartmentalization) massively expanded from ~4 lines to ~40 lines
- Added new subsection: "Pick a Lane — And Stay In It"
- Added new subsection: "Consequences of Breaking Compartmentalization" (with table)
- Added new subsection: "What Compartmentalization Looks Like in Practice" (with examples)

**Current EN:** 126 lines  
**Current ES:** 85 lines  
**Missing content:** ~41 lines of new material

**Translation priority:** HIGH - This is core security guidance

### 2. model/segments.md
**Updated:** 2026-01-26 12:35  
**Previous translation:** 2026-01-20 13:45  
**Change type:** MAJOR EXPANSION

**What changed:**
- File expanded from ~150 lines to 338 lines
- Likely added new segment types or expanded existing descriptions
- Need to compare in detail to identify specific changes

**Translation priority:** HIGH - Core operational content

### 3. security/communication.md
**Updated:** 2026-01-25 14:06  
**Previous translation:** 2026-01-20 13:45  
**Change type:** MODERATE UPDATE

**What changed:**
- Need to compare to identify specific changes
- Likely security protocol updates or clarifications

**Translation priority:** HIGH - Security-critical content

### 4. start-a-cell/index.md
**Updated:** 2026-01-25 15:38  
**Previous translation:** 2026-01-20 13:45  
**Change type:** MODERATE UPDATE

**Translation priority:** MEDIUM

### 5. start-a-cell/signal-setup.md
**Updated:** 2026-01-25 14:02  
**Previous translation:** 2026-01-20 13:45  
**Change type:** MODERATE UPDATE

**Translation priority:** HIGH - Setup instructions must be accurate

### 6. security/physical.md
**Updated:** 2026-01-20 15:43  
**Previous translation:** 2026-01-20 13:45  
**Change type:** MINOR UPDATE (2 hour difference)

**Translation priority:** LOW - Likely minor edits

---

## Translation Workflow Recommendation

### Phase 1: New Files (Priority 1)
1. ✅ model/decentralization.md → es, so, ar
2. ✅ start-a-cell/tools-and-resources.md → es, so, ar

**Effort:** 2 files × 3 languages = 6 translations  
**Estimated time:** 4-6 hours with AI assistance

### Phase 2: Major Updates (Priority 2)
1. ✅ model/principles.md → es, so, ar (expand Section 1)
2. ✅ model/segments.md → es, so, ar (identify and translate changes)
3. ✅ security/communication.md → es, so, ar

**Effort:** 3 files × 3 languages = 9 translations  
**Estimated time:** 6-8 hours

### Phase 3: Moderate Updates (Priority 3)
1. ✅ start-a-cell/index.md → es, so, ar
2. ✅ start-a-cell/signal-setup.md → es, so, ar

**Effort:** 2 files × 3 languages = 6 translations  
**Estimated time:** 3-4 hours

### Phase 4: Minor Updates (Priority 4)
1. ✅ security/physical.md → es, so, ar

**Effort:** 1 file × 3 languages = 3 translations  
**Estimated time:** 1 hour

---

## Total Effort

**Total translations needed:** 24 (6 new + 18 updates)  
**Estimated total time:** 14-19 hours with AI assistance  
**Estimated total time (manual):** 40-60 hours

---

## Next Steps

1. ✅ Review this summary
2. ⬜ Decide on translation approach (AI-assisted vs professional)
3. ⬜ Begin Phase 1 (new files)
4. ⬜ Update VitePress config to include new files in navigation
5. ⬜ Test translations for accuracy
6. ⬜ Update TRANSLATION_ROADMAP.md when complete

