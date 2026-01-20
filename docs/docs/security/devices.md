# Device Security

Your phone is your most vulnerable point. If seized, it contains messages, contacts, location history, and more. Secure it.

## Phone Lock

### Enable a Strong Lock

Your phone must have a lock screen. Options:

| Method | Strength | Notes |
|--------|----------|-------|
| 6+ digit PIN | Good | Avoid obvious patterns (123456, birthdate) |
| Alphanumeric password | Better | Harder to shoulder-surf |
| Biometric + PIN | Best | Convenient but can be compelled |

::: warning BIOMETRICS AND THE LAW
In some jurisdictions, you can be compelled to unlock your phone with fingerprint or face, but not with a PIN. Consider disabling biometrics in high-risk situations.
:::

### Auto-Lock

Set your phone to lock quickly:
- **iPhone**: Settings → Display → Auto-Lock → 30 seconds
- **Android**: Settings → Security → Screen Lock → Auto-lock → 15-30 seconds

### Emergency Lock

Know how to quickly lock/disable your phone:
- **iPhone**: Press side button 5 times (requires PIN, disables Face ID)
- **Android**: Varies by device — learn yours

## Encryption

Modern phones are encrypted by default, but verify:

- **iPhone**: Enabled automatically when you set a passcode
- **Android**: Settings → Security → Encryption (should say "Encrypted")

Encryption means data is unreadable without your PIN — but only if your phone is locked.

## Signal Configuration

Signal is our primary communication tool. Configure it for security:

### Required Settings

Open Signal → Settings → Privacy:

- [x] **Screen Lock**: Require PIN/biometric to open Signal
- [x] **Screen Security**: Block screenshots
- [x] **Registration Lock**: Prevent SIM-swap attacks
- [ ] **Read Receipts**: Consider OFF (reduces metadata)
- [ ] **Typing Indicators**: Consider OFF

### Disappearing Messages

Set a default for all conversations:
- Signal Settings → Privacy → Default Disappearing Messages → **1 week** (or less)

For sensitive conversations, use 1 day or 1 hour.

### Safety Number Verification

Verify safety numbers with key contacts (in person or video call):
1. Open conversation
2. Tap contact name
3. Tap "View Safety Number"
4. Compare numbers

This confirms you're talking to the real person, not an impersonator.

## Other Apps

### Remove Unnecessary Apps

Apps collect data. Only keep what you need.

### Review App Permissions

Regularly check which apps have access to:
- Location
- Contacts
- Camera/Microphone
- Storage

Remove permissions that aren't necessary.

### Location Services

Be intentional about location:
- Disable location for apps that don't need it
- Consider disabling entirely during sensitive activities
- Remember: phones can still be located via cell towers

## Cloud Backups

### The Risk

Cloud backups (iCloud, Google) can be accessed by law enforcement with proper legal process. This includes your message history.

### Signal and Backups

- **iOS**: Signal messages are NOT included in iCloud backups (good)
- **Android**: Signal has its own encrypted backup system — don't use Google's

### Consider Disabling Cloud Backup

For highest security, disable cloud backups entirely — but know you'll lose data if you lose your phone.

## Device for Cell Activities

### Separate Device (Ideal)

If possible, use a separate phone for cell activities:
- Prepaid phone purchased with cash
- Registered to a Google Voice or similar number
- Contains only Signal and necessary apps
- Never connected to your identity

### Shared Device (Reality)

Most people use their personal phone. That's okay if you:
- Follow all security practices strictly
- Are comfortable with the risk
- Keep cell activities compartmentalized from personal life

## If Your Phone is Lost or Seized

See [If Compromised](/security/compromise) for detailed response.

Immediate steps:
1. Alert your segment lead via alternate means
2. Assume all content on the phone is accessible
3. Other members should be notified if necessary

---

[← Security Overview](/security/) | [Communication OpSec →](/security/communication)

