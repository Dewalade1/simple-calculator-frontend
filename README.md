# simple-calculator-frontend

## Tools used

- [ReactJS](https://reactjs.org) - to build the app
- [NextJS](https://nextjs.org) - for preview and production deployment
- [Vercel](https://vercel.com) - for hosting the app
- [Git and GitHub](https://git-scm.com) - for tracking, storage and version control

## How I worked on this Project

* I built the app based on the `Kahoot` website design: [Link to website](https://kahoot.it/)
* I used feature branches and pull requests in this Project
    * [Example PRs](https://github.com/Dewalade1/simple-calculator-frontend/pulls?q=is%3Apr+is%3Aclosed)
    * [Example Branches](https://github.com/Dewalade1/simple-calculator-frontend/branches)
* I worked documented and fixed bugs using GitHub Issues: [Example Issues](https://github.com/Dewalade1/simple-calculator-frontend/issues)

## Why I built the Project this way

- I didn't use a state management library like Redux on purpose. For this app `useState` and `useReducer` hooks were sufficient. I realized that more and more projects don't use Redux anymore since GraphQL or react-query are often used for data management.

- UI libraries are a great place to find ready-made components that help speed up the dev process. They can also be handy if one only needs a few cusom components. For these reasons, I used `Styled-Componends` to create and style the buttons, inputs and cards used in this project.

## How to setup the app

### Option 1

- The app has been setup and deployed on [Vercel](https://vercel.com)

### Option 2

Alternatively, you can do the following to setup the app locally. Run the commands below in your terminal or CMD:

1 Clone the repo using this command

```
git clone https://github.com/Dewalade1/simple-calculator-frontend.git
```

2. Change directory to the repo folder

```
cd <path-to-repository>/simple-calculator-frontend
```

3. Install the dependencies using npm

```
npm i
```

4. See `Option 2` in the `How to start the app` section below to start the app

## How to start the app

### Option 1

- The easiest way to start up the app is to [click here](https://simple-calculator-frontend.vercel.app/)

### Option 2

You can start the app locally or run it on a development environment using the following commands:

- **Start app locally**

```
npm start
```

- **Run on a local dev environment**

```
npm run dev
```

## Available Scripts

Most available scripts are NextJS built-in scripts but the most useful ones are:

- **Start app**

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view it.
The page will refresh if you make edits to the code.
You will also see any compile and lint errors in the console.

- **Start app using a dev environment**

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view it.
The page will refresh if you make edits to the code.
You will also see any compile and lint errors in the console.

- **Check app for lint errors**

```
npm run lint
```

- **Build the app locally**

```
npm run build
```
