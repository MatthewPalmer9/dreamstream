# DreamStream
- Production: N/A (for now)
- Staging: N/A

## Developers
[Matthew Palmer](https://github.com/matthewpalmer9)

## About
DreamStream is a video streaming application. It is a passion project for fun and with the ultimate goal of upgrading my knowledge around video streaming, user accounts, cookies, security and more.

## Objectives
- To learn about video streaming.
- To establish a stable stream from server to client
- Implement full tests

## Challenges encountered
- #1 - The first challenge I encountered was with the initial signup form. The problem came to be when it was time to make my landing page responsive. I realized that I didn't structure the form well enough for this task, so I solved it by refactoring style properties until the intended behavior was achieved.

- #2 - I have worked with JWT tokens and password encryption before in Ruby on Rails and Spring Boot, but the approach is slightly different in JavaScript-based APIs. Learning how best to compare passwords with a schema that hides a password from being selected in a query was interesting. This issue was solved with research and review.

- #3 - On the front-end, I needed to establish a login form with validations and needed to check for buggy behavior. Unfortunately, I spend a good amount of time working through this and didn't give myself a break for about 4 hours. This lead to burnout. I learned that even with tasks I've accomplished before, sometimes taking a step away is required to return with a clear mind. This was also a great way to learn more about cookies instead of using unsecure methods like localStorage. I made it through this challenge by slowing down, taking a break, and thinking more carefully about the way logic flows.

## Key Features
- Video Streaming
- Front-end (React)
- Back-end (Express/Mongo DB Cloud)

## Tech Stack
- MongoDB 
- React.js
- Express
- Node.js
- JavaScript
- SCSS/CSS
- HTML

## Dependencies 
| Dependency | URL       | 
|------------|-----------|
| express                              | [Link](https://www.jsdelivr.com/package/npm/express)  |
| mongoose                             | [Link](https://www.jsdelivr.com/package/npm/mongoose) |
| dotenv                               | [Link](https://www.jsdelivr.com/package/npm/dotenv)   |
| prettier                             | [Link](https://www.jsdelivr.com/package/npm/prettier) |
| eslint (+Plugins - See package.json) | [Link](https://www.jsdelivr.com/package/npm/eslint)   |
| nodemon                              | [Link](https://www.jsdelivr.com/package/npm/nodemon)  |
| morgan                               | [Link](https://www.jsdelivr.com/package/npm/morgan)   |

## Back-end Documentation
TBA

## Getting started
To get the site running locally:
- Clone this repo
- `cd` into `dream-stream-server`
- Run `npm install` to ensure the dependencies are installed
- Run `npm start` to run the application in a production environment
- Copy the `localhost` URL. You will need it in the client.
- In your terminal, type `cd ../dream-stream-client/dream-stream-client/dream-stream
- `touch .env`
- inside of your .env file, type `REACT_APP_API_URL=<YOUR_SERVER_URL_HERE>`
- Start application => `npm start`

**Note: You may find trouble using this project if you don't have the back-end running locally on your machine.**

## Scripts 
- `npm run` - Runs the environment on your system

## Testing Documentation
TBA

## Making Contributions
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Issue/Bug Request
If you are having an issue with the existing project code, please submit a bug report under the following guidelines:
-Check first to see if your issue has already been reported.
-Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
-Create a live example of the problem.
-Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests
I would love to hear from you about new features which would improve this app and further the aims of my project. Please provide as much detail and information as possible to show me why you think your new feature should be implemented.

### Pull Requests
If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

**Pull Request Guidelines**

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of the developer(s).

