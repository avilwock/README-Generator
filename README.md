 # README-Generator

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). Review the [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) as a reminder of everything that a high-quality, professional README should contain. 

The application will be invoked by using the following command:

```bash
node index.js
```

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video _and_ add it to the README of your project.

## Description

This project's purpose is to create a template to generate a README document by asking a series of questions that a user answers. Their answers are placed into the document.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Future Implementations

In the future I can make specifications that require specific types of text input
I can also add bullet points and dashes in front of content where multiple answers are provided

## Access

To access this site, please visit: http://www.github.com/avilwock/README-Generator

## Usage

To use this repository: To use this program, open up the integrated terminal using the index.js file. Type in "node index" and then start answering the questions that appear on the screen.

![alt text](<Images/README-Generator Image 1.png>) ![alt text](<Images/README-Generator Image 2.png>) ![alt text](<Images/README-Generator Image 3.png>)

https://drive.google.com/file/d/1NbJWMw9JL2W4dAFNqFoB9YZgvPLIYutE/view?usp=sharing

## Credits

With thanks to:

https://stackoverflow.com/questions/66958602/how-to-write-special-characters-in-template-literals

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

https://www.clouddefense.ai/code/javascript/example/inquirer

https://www.tabnine.com/code/javascript/functions/inquirer/Inquirer/prompt

https://www.reddit.com/r/node/comments/9q3chw/looping_inquirerjs_prompts/

https://snyk.io/advisor/npm-package/inquirer/functions/inquirer.prompt

https://www.npmjs.com/package/inquirer

Logan Garland, Coding Bootcamp, University of Irvine California

## License

MIT License