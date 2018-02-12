// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  currency : 'INR',
  firebase : {
    apiKey: "AIzaSyAZdFOJizv9D4tT346Mk9myfd9u7GIVD4E",
    authDomain: "angularjs5-kodiak.firebaseapp.com",
    databaseURL: "https://angularjs5-kodiak.firebaseio.com",
    projectId: "angularjs5-kodiak",
    storageBucket: "angularjs5-kodiak.appspot.com",
    messagingSenderId: "550428642687"
  }
};

// databaseurl/data.json - post