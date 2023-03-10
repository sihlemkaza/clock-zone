# Clock Zone
A digital clock that displays the date and time for different timezones.

__Made with ReactJS__

[Demo Url](https://sihlemkaza.github.io/clock-zone/)

This project was created to test the use of [luxon](https://www.npmjs.com/package/luxon) for obtaining timezones and dates for different regions in the world.

![Example Image](/images/image1.jpg?raw=true)


## Project Structure

```
  .
  ├── public                  
  ├── src
  │   ├── components     # UI components
  │   ├── redux          # redux state slice for timezone
  │   ├── utils          # helper functions
  │   ├── App.jsx
  │   └── main.jsx       # redux store 
```            

## Main Dependencies Used
- [Luxon](https://www.npmjs.com/package/luxon)
- [Redux](https://www.npmjs.com/package/redux)
- [Redux Toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)
- [React Redux](https://www.npmjs.com/package/react-redux)

## Running the code

### `npm run dev`

Runs the app in the development mode.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`
Shows a preview of the production build using files found in the `dist` folder.

## Deploying to GitHub-Pages

Update the `homepage` property in the package.json file to this format: `https://{username}.github.io/clock-zone` where username is your github username.

```
  npm run deploy
```
This will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.

Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `dist`. Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.

[More deployment steps](https://github.com/gitname/react-gh-pages#readme)