# Onboard

## Steps

1. git clone git@github.com:cse110-sp24-group28/cse110-sp24-group28-final-project.git
2. follow Setup Instructions to setup the environment
3. make your change to the code
4. test manually by run: npm run dev
5. push to a new branch
6. create a pull request and add reviewers
7. CI/CD pipeline will automatically run format-checker(Prettier), linter(eslint), unit tests(jest), e2e tests(puppeteer)
8. at least one code approval
9. merge to main branch 
10. CI/CD pipeline will automatically generate jsdoc, code coverage report(jest) and deploy to GitHub Page 

## Build Process Showcase 
Private Video: 2'53'' to 6'47'' https://youtu.be/NcwiX0UadJo 

--- 
## Setup Instructions

After cloning the repository, please install npm:
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm

Then, run `npm i` to install packages.

If you want prettier to format on save, you also need to configure your IDE to run it:
- For vscode, install the prettier extension: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- For webstorm, go to preferences and enable format on save.

In order to run the application, just run the command ```npm run dev``` rather than using vscode's live server extension (to keep things consistent between team members).

If you want the latest documentation, run ```npm run document``` and it will generate in a folder called documentation.

If you want an up to date coverage report, run ```npm run coverage``` and it will generate in a folder called coverage.


