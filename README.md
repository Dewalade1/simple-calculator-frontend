# Simple Calculator Frontend

## Contents

[TOC]

## Tools used

- [ReactJS](https://reactjs.org) - to build the app
- [NextJS](https://nextjs.org) - for preview and production deployment
- [Vercel](https://vercel.com) - for hosting the app
- [Git and GitHub](https://git-scm.com) - for tracking, storage and version control

## How I worked on this Project

- I built the app based on these mockups:
  - [Both Display Fields Empty Mockup](https://res.cloudinary.com/hellodewa/image/upload/v1629132698/Simple%20Calculator/mockups/mockup-1_vcbdnx.png)
  - [Previous and Current Display Fields Filled Mockup](https://res.cloudinary.com/hellodewa/image/upload/v1629132691/Simple%20Calculator/mockups/mockup-6_qbdha5.png)
  - [Only Current Display Field Only Filled Mockup](https://res.cloudinary.com/hellodewa/image/upload/v1629132693/Simple%20Calculator/mockups/mockup-7_bicdvt.png)
  - [Both Display Fields Filled Mockup](https://res.cloudinary.com/hellodewa/image/upload/v1629132690/Simple%20Calculator/mockups/mockup-3_pzwsev.png)
  - [Button Pressed Mockup](https://res.cloudinary.com/hellodewa/image/upload/v1629132689/Simple%20Calculator/mockups/mockup-2_dha1zg.png)
- I used feature branches and pull requests in this Project
  - [Example PRs](https://github.com/Dewalade1/simple-calculator-frontend/pulls?q=is%3Apr+is%3Aclosed)
  - [Example Branches](https://github.com/Dewalade1/simple-calculator-frontend/branches)
- I worked documented and fixed bugs using GitHub Issues: [Example Issues](https://github.com/Dewalade1/simple-calculator-frontend/issues)

## Why I built the Project this way

- I didn't use a state management library like Redux on purpose. For this app, the `useState` hook was sufficient. I realized that more and more projects don't use Redux anymore since `GraphQL` or `react-query` are often used for `data management`.

- UI libraries are a great place to find ready-made components that help speed up the dev process. They can also be handy if one only needs a few custom components. For these reasons, I used `Styled-Components` to create and style the buttons, inputs and cards used in this project.

## How to setup the app

### Setup 1

- The app has been setup and deployed on [Vercel](https://vercel.com)

### Setup 2

Alternatively, you can do the following to setup the app locally. Run the commands below in your terminal or CMD:

1 Clone the repo using this command

```bash
git clone https://github.com/Dewalade1/simple-calculator-frontend.git
```

2 Change directory to the repo folder

```bash
cd <path-to-repository>/simple-calculator-frontend
```

3 Install the dependencies using npm

```bash
npm i
```

4 See `Option 2` in the `How to start the app` section below to start the app

## How to start the app

### Option 1

- The easiest way to start up the app is to [click here](https://simple-calculator-frontend.vercel.app/)

### Option 2

You can start the app locally or run it on a development environment using the following commands:

- `npm start`

**Start app locally**

- `npm run dev`

*Run on a local dev environment*

## Available Scripts

Most available scripts are NextJS built-in scripts but the most useful ones are:

- `npm start`

### Start app

Open [http://localhost:3000](http://localhost:3000) in your browser to view it.
The page will refresh if you make edits to the code.
You will also see any compile and lint errors in the console.

- `npm run dev`

### Start app using a dev environment

Open [http://localhost:3000](http://localhost:3000) in your browser to view it.
The page will refresh if you make edits to the code.
You will also see any compile and lint errors in the console.

- `npm run lint`

### Check app for lint errors

Runs `eslint` on all your files by default. It formats your code based on your `eslint` specifications

- `npm run build`

### Build the app locally

Builds the static files for your app locally. Its a local simulation of the build command used by React hosting services. Use this to test whether your app will build successfully when deployed on a server.