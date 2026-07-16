# 📱 React Native interview starter

Managed Expo (SDK 57) + Expo Router shell for an **AI-assisted machine coding** interview.

You may use **any AI tools** you prefer during the round (Cursor, ChatGPT, Claude, Copilot, etc.). This repo is only a local shell so you can swap in the interview `src` and keep building on a real device or simulator.

---

## ✅ Before the interview (required)

Do this **ahead of time** so the session can start immediately.

### 🧰 Prerequisites

Install these **before** you try to run the app:

1. **Node.js** — use a current LTS (Node 20+ recommended). Check with `node -v`.
2. Pick **one** platform and install its toolchain:
   - **iOS (macOS only):** [Xcode](https://developer.apple.com/xcode/) from the Mac App Store, then open Xcode once and install the extra components / iOS Simulator when prompted.
   - **Android (macOS, Windows, or Linux):** [Android Studio](https://developer.android.com/studio), with an emulator (AVD) set up and able to boot.
3. **Physical device (optional):** install [Expo Go](https://expo.dev/go) on the phone, and keep the phone on the **same Wi‑Fi** as your computer.
4. **[Create a CodeSandbox account](https://codesandbox.io/signin)** (or confirm you can log in). You will need this during the interview.

> `npm run ios` only works on a Mac with Xcode. On Windows or Linux, use Android.

### 🚀 Set up this project

**Prefer GitHub’s template button** (not a plain clone, and not a fork). That gives you your **own** repo with the same starter files and **no git link** back to this interview template — so you won’t accidentally push to Headout, and you won’t have an `upstream` remote pointing here.

1. On the GitHub page for this repo, click **Use this template** → **Create a new repository**.
   - Create it under **your** GitHub account (private is fine).
   - Do **not** click **Fork**. Forks stay linked to the original repo.
2. Clone **your new repo** (the one under your account), not this template repo:

   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

3. Open a terminal **inside the project folder** (the folder that contains `package.json`) and run:

   ```bash
   npm install
   npm run ios
   # or
   npm run android
   ```

4. Confirm the app opens on a simulator/emulator or a physical device. Leave it in a working state.

#### 🔧 If you already cloned this template repo by mistake

Your `origin` will point at the Headout template. Fix that before the interview:

```bash
# see where origin points
git remote -v

# remove the Headout remote so you are not attached to it
git remote remove origin
```

Then either:

- create a new empty repo under **your** GitHub account and add that as `origin`, or
- just keep working locally with no remote (fine for the interview — you do not need to push anywhere)

```bash
# optional: attach YOUR repo instead
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

You do **not** need to build any features beforehand. The checked-in `src` is only a tiny placeholder — you will **replace the whole `src` folder** during the interview.

---

## 🎯 During the interview (swap in the real `src`)

The interviewer will send you either a **direct question link** or a **CodeSandbox** link. That link has the real interview code. Your only job is to put that code into **this** project.

### ⚡ Option A — direct question link (fastest)

If the interviewer sends a plain link (not a CodeSandbox page), run this in your **project root** (the folder with `package.json`):

```bash
npm run question "<link>"
```

It downloads the question, swaps in the new code, runs `npm install` if needed, and commits — all in one go. Then restart the app (see [Restart the app](#5️⃣-restart-the-app)) and you're done. **Skip the CodeSandbox steps below.**

> If the link fails or has expired, tell your interviewer and they will send a fresh one.

### 🏖️ Option B — CodeSandbox link

If you got a CodeSandbox link instead, follow the steps below.

### 1️⃣ Open the sandbox

1. Click the CodeSandbox link the interviewer sends.
2. **[Sign up / log in to CodeSandbox](https://codesandbox.io/signin)** if asked.
3. Wait until you can see a file tree on the left. You should see a folder named `src`.

### 2️⃣ Download the `src` folder from CodeSandbox

1. In the left file tree, find the folder named `src`.
2. Right-click `src` → choose **Download** (CodeSandbox downloads it as a **folder**, not a zip).
3. Your browser saves that folder into **Downloads** (or whichever folder you chose).
4. Open **Downloads** and find the folder named `src`.
   - Inside it you should see things like `app/` (and maybe other files). That is the good folder.
   - If you already had a download, your browser may name it `src (1)`, `src 2`, etc. **Rename that folder to `src`** (delete any older unused `src` in Downloads first if needed so the name is free).
   - Leave the final name as exactly `src`. Do not call it `src-2`, `interview-src`, etc.

> If the UI looks different: download/export the project however CodeSandbox allows, then open what you got and copy out the inner `src` folder (the one that contains `app/`).

### 3️⃣ Find your local interview project

On your computer, open the folder for **this** repo (the one you cloned/set up earlier).

You should see something like:

```text
ho-rn-interview-starter/          ← this is your project root
  package.json
  app.json
  src/                            ← THIS is the folder you will replace
  assets/
  ...
```

**Important:** work inside this project root — the same folder that has `package.json`.  
Do **not** put the new `src` on your Desktop, in Downloads, or inside `assets/`.

Tips:

- In Cursor / VS Code: right-click the project root in the sidebar → **Reveal in Finder** (Mac) or **Reveal in File Explorer** (Windows).
- If GitHub nested the clone (`.../ho-rn-interview-starter/ho-rn-interview-starter/`), use the **inner** folder that actually contains `package.json`.

### 4️⃣ Delete the old `src`, then put the new one in

Do this in order. Do **not** skip step 1.

1. In the project root (next to `package.json`), **delete** the existing `src` folder completely.
   - Mac: move it to Trash
   - Windows: Delete
   - Linux: delete the folder
2. **Confirm `src` is gone.** The project root should show `package.json`, `app.json`, `assets/`, etc. — and **no** `src` folder yet.
3. Take the `src` folder from Downloads (the one from CodeSandbox).
4. **Move** it into the project root so it sits next to `package.json`.
   - If Finder/Explorer asks to merge or replace, stop: you probably still have an old `src`. Go back to step 1.
   - Drag onto the **project root**, not into another folder.

When you are done, it should look like this:

```text
ho-rn-interview-starter/
  package.json
  app.json
  src/                 ← the NEW one from CodeSandbox
    app/               ← must exist
    ...
  assets/
```

Checklist (do not continue until all pass):

- [ ] Old `src` was deleted before you moved the new one
- [ ] New `src` is directly inside the project root (next to `package.json`)
- [ ] You can open `src/app/` (if that path is missing, you grabbed the wrong folder)
- [ ] You did **not** end up with `src/src/...` (if you did: move the **inner** `src` up one level, then delete the empty outer folder)

### 5️⃣ Restart the app

1. In the terminal that was running the app, stop it first: `Ctrl + C`.
2. From the project root, start again:

   ```bash
   npm start
   # then press i for iOS or a for Android
   # or:
   npm run ios
   npm run android
   ```

3. If the screen looks wrong or Metro seems stuck, stop it (`Ctrl + C`) and start with a cleared cache: `npx expo start -c`. You can also press `r` in the terminal to reload.

If the interview `src` asks for packages that are not installed yet, run `npm install` again in the project root, then restart.

Still broken? Nuke everything and reinstall:

```bash
npm run clean
npm install
```

That is the whole setup: **this local Expo shell + the `src` from CodeSandbox**.

If local setup is broken before the call, fix it early. Interview time should go to the coding task, not environment debugging.
