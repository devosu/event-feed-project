# Event Feed Project

Node.js 18 x React web application to inform OSU students of the various club activities happing across campus. 

> [!CAUTION]
> **DO NOT** commit/upload **ANY** credentials/secrets such as: `firebase credentials`, `gcloud service account keys`, and anything that should be left in your local `env` or `.env` file. 
>
> You can now find and use the firebase init module at `firebase/firebase.js` along with `firebase.test.js`. The `.env.exmaple` file is **NOT** a placeholder and is essential to loading the env vars correctly. Copy the `.env.example` to a `.env` file in your own `firebase` dir and keep your credentials offline.
>
> Read more on `dotenv-safe`: https://www.npmjs.com/package/dotenv-safe

| Project Health | | |
|---|---|---|
| Main Status | [![Node 18, 20 Main](https://github.com/devosu/event-feed-project/actions/workflows/main-status.yml/badge.svg)](https://github.com/devosu/event-feed-project/actions/workflows/main-status.yml) ||
| Prod Status | [![Node 18, 20 Production](https://github.com/devosu/event-feed-project/actions/workflows/production-status.yml/badge.svg)](https://github.com/devosu/event-feed-project/actions/workflows/production-status.yml) | [![GCloud Deploy](https://github.com/devosu/event-feed-project/actions/workflows/production-deploy.yml/badge.svg)](https://github.com/devosu/event-feed-project/actions/workflows/production-deploy.yml) |
| Code Quality | [![CodeQL](https://github.com/devosu/event-feed-project/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/devosu/event-feed-project/actions/workflows/github-code-scanning/codeql) | [![codecov](https://codecov.io/gh/devosu/event-feed-project/graph/badge.svg?token=N56MUQG4NS)](https://codecov.io/gh/devosu/event-feed-project) |

View the "**Sunburst**" CodeCov report below. (The inner-most circle is the entire project, moving away from the center are folders then, finally, a single file. The size and color of each slice is representing the number of statements and the coverage, respectively.)

![CodeCov report for this repo, visualized in Sunburst format.](https://codecov.io/gh/devosu/event-feed-project/graphs/sunburst.svg?token=N56MUQG4NS)

## User Stories

```bash
Feature: View same-day/week/month... club events

  Scenario: Trevor wants to find a recycling-themed club event after class at 3pm today 
    
    Given Trevor has access to the Internet and some mobile device (Android/iOS)
    When Trevor opens URL https://findevents.osu.dev on his phone and applies the reclycing tag filter
    Then The website will respond with either a list of recycling events (plus details) or related events if not found

```

## Developers

:heart: This project is made with passion and love by students of DEV at OSU:

| Name          | Email                      | Role         |
|---------------|----------------------------|--------------|
| Trevor Gerald | tmgerald04@gmail.com       | Sr SWE       |
| Ekumjyot Kaur | kaur.271@osu.edu           | Sr SWE       |
| Aryan Tyagi   | aryantyagi1117@gmail.com   | Sr SWE       |
| Ziqi Ou       | ou.152@buckeyemail.osu.edu | Jr SWE       |
| Yakob Getu    | bo.ding2@icloud.com        | Jr SWE       |
| Bo Ding       | bo.ding2@icloud.com        | Jr SWE       |
| William An    | an.407@osu.edu             | Designer     |
| Keming He     | keminghe.career@gmail.com  | Cloud DevOps |

:star: Documented on 04/02/24 by Keming He as the DevOps consultant for this project. Connect with me at 

> LinkedIn Profile: https://linkedin.com/in/keminghe  

This table is generated using Tables Generator
> Official Site: https://www.tablesgenerator.com/markdown_tables

## Quickstart Guide

### 0. Set up Node.js and Git

Using the links below. First download and install the **Node.js 18 LTS** (long-term-support) version compatible with your operating system. Then do the same with Git version control.

> Node.js offcial release: https://nodejs.org/en/download

```bash
# Open either VSCode, Windows Powershell, or macOS terminal,
# and confirm Node.js 18 LTS is successfully installed by typing:
node --version

# you should then be getting outputs like this:
# v18.20.0
```

> Git official release: https://git-scm.com/downloads

```bash
# Again, once installed, type in terminal:
git --version

# you should then be getting output like this:
# git version 2.44.0
```

### 1. Clone the repo and create your own branch

```sh
# Open either VSCode, Windows Powershell, or macOS terminal,
# and navigate to dir of your choice. The clone the repo.

# Change this command:
cd /path/to/your/dir

# Then run:
git clone https://github.com/devosu/event-feed-project.git
cd event-feed-project
```

> [!IMPORTANT]
> Make sure you **create your own branch** both remote and locally by:
> ```bash
> # Create your own branch locally, then immediately push to remote.
> # Change the featurename and yourname accordingly.
> 
> git checkout -b dev-featurename-yourname
> git push -u origin dev-featurename-yourname
> ```

### 2. Install dev dependencies

```sh
npm install
```

### 3. Run the project as dev

```sh
# The dev server should be accessible at: 
# http://localhost:3000
npm start
```

### 4. Perform auto-code review and testing

```sh
# This will re-format your code to the team standard.
npm run review
```

### 5. Conrtibute to main

**After making sure your code is formatted, lint, and tested** push to your own remote branch `dev-featurename-yourname` and open a pull request to the `main` branch. **Tag one of the sr devs for review.**

> Open pull-request: https://github.com/devosu/event-feed-project/pulls
