## Templater Delux

A simple messaging app. Allows a user to fill premade templates with guest and company data, or enter in a new message template.

### Directions
To initialize the project, clone or download the repo, then from command line:
```sh
npm install
npm start
```

Then go to localhost:5000 in your browser to view the project.

Thanks for taking the time to review!

### A Couple Notes On Choices
I wrote the app using Node/Express server-side, and React on the front end. This stack allowed easy interaction with the json data, and provides easy scalability in the future.

I built the http calls with scalability and security in mind as well; by retrieving only name data on page load (for dropdown menus), I reduced the amount of data retrieved, and exposed guest information only when necessary.

There were a number of things I would've liked to implement given more time on this project. A short list of them:
* Implement tests for Node/Express using Mocha/Chai and for React using Jest
* Figure out a way to implement template literals for template storage (I got stuck trying to figure out how to change a string stored in json into a template literal, and decided not to sink too much time into it).
* Implement a "send" button that would've then stored a log of sent messages in a state.history object, which then could've been mapped into another component.
