# Tools & Resources

The right tools make coordination safer and more effective. This page covers recommended platforms and technologies for cell operations, along with security considerations for each.

## Core Communication

### Signal

**What it is**: Encrypted messaging app for secure communication.

**Use for**:
- All cell coordination and communication
- Segment-specific groups
- Voice calls during active operations
- Sharing photos (with disappearing messages)

**Security features**:
- End-to-end encryption (only sender and recipient can read)
- Disappearing messages (auto-delete after set time)
- Screen lock and screen security
- Registration lock (prevents SIM-swap attacks)
- Minimal metadata retention

**What to avoid**:
- Don't share specific addresses in text (use photo method)
- Don't keep sensitive messages indefinitely (use disappearing messages)
- Don't screenshot sensitive information
- Don't use for public announcements (use other channels)

**Setup guide**: See [Signal Setup](/start-a-cell/signal-setup) for detailed configuration.

::: tip PRIMARY TOOL
Signal is the backbone of cell communication. Every member must have it properly configured before joining any segment.
:::

---

## Secure Collaboration

### CryptPad

**What it is**: Encrypted, zero-knowledge collaborative documents and forms platform.

**Use for**:
- Creating secure intake forms for community members
- Collaborative document editing (meeting notes, planning docs)
- Polls and surveys within the cell
- Spreadsheets for coordination (not for storing sensitive data)

**Security features**:
- End-to-end encryption
- No account required (can use anonymously)
- Zero-knowledge architecture (CryptPad can't read your data)
- Self-destructing documents option
- No tracking or analytics

**What to avoid**:
- Don't store lists of vulnerable community members
- Don't keep permanent records of activities
- Don't use for long-term data storage
- Don't share CryptPad links on public platforms

**Access**: [cryptpad.fr](https://cryptpad.fr) (free) or self-host for maximum security

::: warning TEMPORARY USE ONLY
CryptPad is excellent for temporary collaboration, but remember: the safest data is data that doesn't exist. Delete documents when no longer needed.
:::

---

## Fundraising & Financial Support

### GoFundMe (or similar platforms)

**What it is**: Crowdfunding platform for raising money for community members in need.

**Use for**:
- Emergency funds for legal fees, bail, rent
- Medical expenses for community members
- Supporting families after detention or deportation
- Business recovery after harassment

**Security considerations**:
- **Public platform**: Assume anything posted is visible to everyone, including law enforcement
- **Use general language**: "Supporting a local family in need" not "Bail fund for ICE detention"
- **Don't name individuals**: Protect the identity of who you're helping
- **Separate from cell identity**: Don't link fundraisers directly to your cell's name or structure

**Alternatives**:
- **Mutual aid networks**: Direct cash transfers through trusted community members
- **Cash-based systems**: For maximum privacy, though harder to scale
- **Cryptocurrency**: For tech-savvy cells, offers more anonymity (but has learning curve)

::: tip FINANCIAL PRIVACY
The more public the fundraising, the less operational detail you should share. Keep fundraising general and separate from specific cell activities.
:::

---

## Language Access

### Google Translate

**What it is**: Free translation tool for text, speech, and images.

**Use for**:
- Real-time translation during community interactions
- Translating documents and forms
- Communication with multilingual community members
- Understanding written materials in different languages

**Security considerations**:
- **Not private**: Google can see everything you translate
- **Don't translate sensitive information**: Names, addresses, operational details
- **Use for general communication only**: Know Your Rights info, general coordination
- **Offline mode available**: Download language packs for offline translation (more secure)

**Best practices**:
- Use offline mode when possible
- Translate general concepts, not specific operational details
- Have multilingual members review important translations
- Consider hiring professional translators for critical documents

**Alternatives**:
- **DeepL**: Often more accurate, but still not private
- **Offline dictionaries**: For basic word lookup without internet
- **Community translators**: Most secure option for sensitive content

---

## Additional Tools

### Secure Email (for external communication)

**Recommended**: ProtonMail, Tutanota
- End-to-end encrypted
- Based outside US jurisdiction
- Use for external communication only (not internal cell coordination)

### Password Managers

**Recommended**: Bitwarden, 1Password
- Store complex passwords securely
- Essential for admins managing multiple accounts
- Enable two-factor authentication

### VPN Services

**Recommended**: Mullvad, ProtonVPN
- Hides your IP address and location
- Useful for admins accessing sensitive systems
- Not necessary for most members (Signal already encrypts)

---

## Tool Selection Principles

When evaluating any new tool, ask:

1. **Is it encrypted?** End-to-end encryption is non-negotiable for sensitive communication
2. **Who can access our data?** Zero-knowledge systems are best
3. **What metadata is collected?** Less is better
4. **Is it widely used?** Popular tools are less suspicious than obscure ones
5. **Can we use it anonymously?** No account or minimal information is ideal
6. **What happens if it's compromised?** Assume any tool can be breached

**The golden rule**: Use the right tool for the right job. Signal for coordination, CryptPad for temporary collaboration, cash for maximum financial privacy.

---

[← Onboarding Process](/start-a-cell/onboarding) | [Templates →](/start-a-cell/templates)

