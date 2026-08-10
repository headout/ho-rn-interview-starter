# 📱 React Native interview starter

Managed Expo (SDK 57) + Expo Router shell for an **AI-assisted machine coding** interview.

You may use **any AI tools** you prefer during the round (Cursor, ChatGPT, Claude, Copilot, etc.). This repo is only a local shell — the interviewer sends the real question at interview time, and one command loads it into this project.

---

## ✅ Before the interview (required)

Do this **ahead of time** so the session can start immediately.

### 🏖️ 1. CodeSandbox account

**[Create a CodeSandbox account](https://codesandbox.io/signin)** (free) or confirm you can log in. Part of the round may run in a CodeSandbox link the interviewer shares; you need an account to edit it.

### 🧰 2. Toolchain

1. **Node.js** — current LTS (Node 20+). Check with `node -v`.
2. Pick **one** platform and install its toolchain:
   - **iOS (macOS only):** [Xcode](https://developer.apple.com/xcode/), then open it once and install the iOS Simulator when prompted.
   - **Android (macOS, Windows, Linux):** [Android Studio](https://developer.android.com/studio) with an emulator (AVD) that boots.
3. **Physical device (optional):** [Expo Go](https://expo.dev/go) on the phone, same Wi‑Fi as your computer.

> `npm run ios` only works on a Mac with Xcode. On Windows or Linux, use Android.

### 🚀 3. Get this project running

```bash
git clone https://github.com/headout/ho-rn-interview-starter.git
cd ho-rn-interview-starter
npm install
npm run ios      # or: npm run android
```

Confirm the app opens on a simulator/emulator or device, then leave it in a working state. The checked-in `src` is a placeholder — it gets replaced during the interview.

You do **not** need to build any features beforehand, and you will not push anything anywhere. Working locally with no remote is fine.

---

## 🎯 During the interview

The interviewer sends a **question link**. From your project root (the folder with `package.json`):

```bash
npm run question "<link>"
```

That downloads the question, swaps in the new `src`, runs `npm install` if needed, and commits.

Then restart the app:

```bash
# stop the running app with Ctrl + C, then
npm run start    # press i for iOS, a for Android
```

> If the link fails or has expired, tell your interviewer and they will send a fresh one.

---

## 🔧 Troubleshooting

- Screen looks wrong or Metro is stuck: `Ctrl + C`, then `npx expo start -c` (cleared cache). Pressing `r` in the terminal reloads.
- Missing packages after loading the question: `npm install`, then restart.
- Still broken:

  ```bash
  npm run clean
  npm install
  ```

Fix local setup **before** the call. Interview time should go to the coding task, not environment debugging.
