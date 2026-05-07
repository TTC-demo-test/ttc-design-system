# Trident Tech Design System

This is a Storybook site to house our Design System Components and brand elements for `https://www.tridenttech.edu`


## Storybook Local Setup

This project uses [Storybook](https://storybook.js.org/) to preview and document our design system components locally.

You do **not** need to be a developer to run this project, but you will need to install **Node.js**, which includes **npm**. npm is the tool that installs and runs the project dependencies.

---

### What You Need

Before running Storybook, install:

- **Node.js LTS**
- **npm**, which comes bundled with Node.js
- Access to this repository

---

### 1. Install Node.js

#### Mac

1. Go to the official Node.js website:  
   https://nodejs.org/

2. Download the **LTS** version.

3. Open the downloaded installer package.

4. Follow the installation steps.

5. After installation finishes, open **Terminal**.

6. Confirm Node.js and npm were installed:

   ```bash
   node -v
   npm -v
   ```

You should see version numbers for both commands.

Example:
```bash
node -v
v24.x.x

npm -v 
11.x.x
```
---
#### Windows
1. Go to the official Node.js website: https://nodejs.org
2. Download the LTS version for Windows.
3. Open the downloaded installer.
4. Follow the installation steps. During installation, you can keep the deault options selected.
5. After installation finishes, open ~Command Prompt~ (CMD), Powershell, or Windows Terminal.
6. Confirm Node.js and npm were installed:
```bash
node -v
npm -v
```
You should see version numbers for both commands.

Example:
```bash
node -v
v24.x.x

npm -v
11.x.x
```

---

### 2. Get the project files
If you already have the peroject folder on your computer, open it.

If you are cloning from Github, run following commands in your terminal:
```bash
git clone https://github.com/tridenttech-web/ttc-design-system.git
```

Then move into the project folder:
```bash
cd ttc-design-system/
```

---
### 3. Install project dependencies
From inside the project folder, run:
```bash
npm install
```

This mayt takea few minutes the first time.  It creates a `node_modules/` folder, which contains the packages Storybook needs to run locally.

---
### 4. Run Storybook
Start Storybook with: 
```bash
npm run storybook
```

After it starts, Storybook should automatically open in your browser.
If it doesn't open automatically, visit: `http://localhost:6006`

---

### 5. Stop Storybook
When you are done viewing the storybook, you can turn off the server by going back to the terminal it's running in and pressing `Ctrl + C`
On both Mac and Windows, this keyboard shortcut will stop the local Storybook server.

---
### Common Issues

#### "node is not recognized" or "npm is not recognized"
This usually mewans Node.js was not installd correctly, or the terminal was already open before node was installed.

If this is the case, try:
1. Close the terminal
2. Open a new terminal
3. Run:
```bash
node -v
npm -v
```
These commands should work and you should see a resultant version number, but if you do not, you will need to try and reinstall node with the official LTS installer mentioned previous on the https://nodejs.org

#### Port 6006 is already in use
This usually means that someing is already using the Strobybook default local address/port number, likely storybook is running (because it wasnt turned off previous).  

Try stopping the other running Storybook process by going to the terminal and combining keys `Ctrl + C`.
Then run:

```bash
npm run storybook
```

---
#### Dependencies seem broken
Try deleting the installed dependencies and reinstalling them:

Mac:
```bash
rm -rf node_modules package-lock.json
npm install
```

Windows Powershell:
```bash
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

Then run storybook again:
```bash
npm run storybook
```

---

### Quick Start Summary

Once Node.js is installed, the usual steps are:
```bash
cd ttc-design-system/
npm install
npm run storybook
```
** Note: You should only need to `npm install` upon first starting the project, unless you're adding another dependency.
