//adds the inquirer and fs node.js modules
const inquirer = require('inquirer');
const fs = require('fs');

//creates the variable mainAnswers
let mainAnswers;

//creates an async function named main prompt with types of input and confirm, adding questions
//for the terminal to ask and giving each prompt a unique name
async function mainPrompt() {
    const mainPrompt = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName',
    },
    {
        type:'input',
        message: 'Give a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the project challenge?',
        name: 'task',
    },
    {
        type: 'input',
        message: 'As a person who ',
        name: 'reason',
    } ,
    {
        type: 'input',
        message: 'I want ',
        name: 'action',
    },
    {
        type: 'input',
        message: 'so that ',
        name: 'because',
    }, 
    {
        type: 'input',
        message: 'Please add a link to your repository',
        name: 'link',
    },
    {
        type: 'input',
        message: 'How do you use this program?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter your github username',
        name: 'question',
    },
    {
        type: 'confirm',
        message: 'Would you like to add an installation guide?',
        name: 'installation',
    },
    {
        type: 'confirm',
        message: 'Would you like to add any badges?',
        name: 'badges',
    },
    {
        type: 'confirm',
        message: 'Would you like to explain how to contribute?',
        name: 'contribution',
    },
    {
        type: 'confirm',
        message: 'Would you like to include a license?',
        name: 'license',
    },
    {
        type:'confirm',
        message: 'Would you like to include a feature section?',
        name: 'feature',
    },
    {
        type: 'confirm',
        message: 'Would you like to include a test section?',
        name: 'test',
    },
    {
        type: 'confirm',
        message: 'Would you like to add a table of contents?',
        name: 'tableOfContents',
    },
    {
        type: 'input',
        message: 'The purpose of this repository is to: GIVEN ',
        name: 'acceptanceCriteria',
    },
    
];
    //this creates an await prompt that interacts differently depending on whether the
    //prompt was confirmed or not in the terminal
    mainAnswers = await inquirer.prompt(mainPrompt);

    if (mainAnswers.tableOfContents) {
        const tableOfContentsText = await inquirer.prompt([
        ]);
        mainAnswers.tableOfContentsText = tableOfContentsText.tableOfContentsText;
    }

    if (mainAnswers.installation) {
        const installationText = await inquirer.prompt([
            {
                type: 'input',
                message: 'Please provide installation instructions:',
                name: 'installationText',
            },
        ]);
        mainAnswers.installationText = installationText.installationText;
    }

    if (mainAnswers.badges) {
        const badgeInput = await inquirer.prompt([
            {
                type: 'input',
                message: 'Please provide badges:',
                name: 'badgeInput',
            },
        ]);
        mainAnswers.badgeInput = badgeInput.badgeInput;
    }

    if (mainAnswers.contribution) {
        const contributionText = await inquirer.prompt([
            {
                type: 'input',
                message: 'Please explain how people can contribute to this project',
                name: 'contributionText',
            },
        ]);
        mainAnswers.contributionText = contributionText.contributionText;
    }

    if (mainAnswers.license) {
        const licenseText = await inquirer.prompt([
            {
                type: 'input',
                message: 'Please enter the license you are using',
                name: 'licenseText',
            },
        ])
        mainAnswers.licenseText = licenseText.licenseText;
    }

    if (mainAnswers.feature) {
        const featureText = await inquirer.prompt([
            {
                type: 'input',
                message: 'Please add any additional features',
                name: 'featureText',
            },
        ])
        mainAnswers.featureText = featureText.featureText;
    }

    if (mainAnswers.test) {
        const testText = await inquirer.prompt([
            {
                type: 'input',
                message: 'Please explain how tests can be performed with examples',
                name: 'testText',
            },
        ])
        mainAnswers.testText = testText.testText;
    }

    return mainAnswers;

}

//This creates an async function of repeatPrompt. It allows for the same two questions to be
//repeated one right after the other
async function repeatPrompt() {
    const answersArray = [];
    
    async function ask() {
    const nestedPrompts = [
        {
            type:'input',
            message: 'When:',
            name: 'when',
        },
        {
            type:'input',
            message:'Then:',
            name: 'then',
        },
        {
            type: 'confirm',
            message: 'Do you want to add anything more?',
            name: 'addMore',
        },
    ];
    
    //this pushes the prompt answers to be nested one after the other
    const repeatAnswers = await inquirer.prompt(nestedPrompts);
    answersArray.push(repeatAnswers);

    if (repeatAnswers.addMore) {
        await ask();
    } 
}
//this calls for the question to be repeated
await ask();

console.log('Answers:', answersArray);
return answersArray;
}

//this creates a function to ask for credits
async function credits () {
    const creditsArray = [];

    async function ask() {
    const creditPrompt = [
        {
            type: 'input',
            message: 'What sources did you use to make this project?',
            name: 'credit',
        },
        {
            type: 'confirm',
            message: 'do you have any more sources to add?',
            name: 'moreSources',
        }
    ];

    const repeatSources = await inquirer.prompt(creditPrompt);
    creditsArray.push(repeatSources);

    if (repeatSources.moreSources) {
        await ask();
    }
}

await ask();

return creditsArray;
}

//this creates a function to repeat the question for improvements
async function bulletPoints () {

    const improvementsArray = [];

    async function ask() {
    const futurePrompt = [
        {
            type: 'input',
            message: 'What are some improvements you can make to this project in the future?',
            name: 'improvements',
        },
        {
            type: 'confirm',
            message: 'Do you want to add anything more?',
            name: 'addMore',
        },
    ];

    const repeatFuture = await inquirer.prompt(futurePrompt);
    improvementsArray.push(repeatFuture);

    if (repeatFuture.addMore) {
        await ask();
    }
}

await ask();

console.log('Improvements', improvementsArray);
return improvementsArray;

}

//this runs the program
async function init() {
    const mainAnswers = await mainPrompt();
    console.log('Main Answers:', mainAnswers);

    const whenThenAnswers = await repeatPrompt();
    const improvementAnswers = await bulletPoints();
    const addSources = await credits();
    // const optionalAnswers = await optionalSections();

    const readmeContent = generateREADME(mainAnswers, whenThenAnswers, improvementAnswers, addSources);
    fs.writeFile('README-Generated.md', readmeContent, (err) =>
    err ? console.log(err): console.log('Success')
    );

}
 init();

 //this creates the readme, with the specified variables listed.
 //this also makes sure that the confirm functions will be asked and only populate if the user says yes
const generateREADME = ({ projectName, task, reason, because, action, acceptanceCriteria, description, link, usage, tableOfContentsText, featureText, question, testText, licenseText}, whenThenAnswers, improvementAnswers, addSources) => {

    let badgeIcon ='';
    if (licenseText) {
        const badgeIconURL = `https://img.shields.io/badge/license-${encodeURIComponent(licenseText)}-blue`;
        badgeIcon = `![License](${badgeIconURL})`
    } 
    
    let installationSection = '';
    if (mainAnswers.installationText) {
        installationSection = `\n## Installation\n\n${mainAnswers.installationText || ''}`;
    }

    let badgeSection = '';
    if (mainAnswers.badges) {
        badgeSection = `\n## Badges\n\n${mainAnswers.badgeInput || ''}`;
    }

    let contributionSection = '';
    if (mainAnswers.contribution) {
        contributionSection = `\n## Contribution\n\n${mainAnswers.contributionText || ''}`;
    }

    let licenseSection = '';
    if (mainAnswers.license) {
        licenseSection = `\n## License\n\n${mainAnswers.licenseText || ''}`;
    }

    let featureSection = '';
    if (featureText) {
        featureSection = `\n## Feature\n\nAdditional Features: ${mainAnswers.featureText || ''}`;
    }

    let testSection = '';
    if (testText) {
        testSection = `\n## Test\n\n${mainAnswers.testText || ''}`;
    }

    // These variables control what is populated into the template
    const descriptionSection = `\n## Description\n\n${description}`;
    
    const acceptanceSection = `## Acceptance Criteria\n\n\`\`\`\nGIVEN ${acceptanceCriteria}\n${whenThenAnswers.map(answers => `WHEN ${answers.when}\nTHEN ${answers.then}`).join('\n')}\n\`\`\``;

    const futureSection = `## Future Implementations\n\n${improvementAnswers.map(answers => answers.improvements).join('\n\n')}`;

    const accessSection = `## Access\n\nTo access this site, please visit: ${link}`;

    const questionSection = `## Questions\n\nFor any questions, please visit: https://github.com/${question}`;
    
    const usageSection = `## Usage\n\nTo use this repository: ${usage}`;
    
    const creditsSection = `## Credits\n\nWith thanks to:\n\n${addSources.map(source => source.credit).join('\n\n')}`;

    //This ensures that the table of contents information is populated within the README document with links to the location within the document
    let links = [];
    if (tableOfContentsText) {
        links = links.concat(tableOfContentsText.split('\n').map(line => line.trim()));
    }

    links.push('User Story', 'Acceptance Criteria', 'Future Implementations', 'Access','Usage', 'Credits');

    if (mainAnswers.feature) links.push('Feature');
    if (mainAnswers.installation) links.push('Installation');
    if (mainAnswers.badges) links.push('Badges');
    if (mainAnswers.contribution) links.push('Contribution');
    if (mainAnswers.license) links.push('License');
    if (mainAnswers.test) links.push('Test')

    let tableOfContentsSection;

    tableOfContentsSection = `\n## Table of Contents\n\n${links.map(link => `- [${link}](#${link.toLowerCase().replace(/ /g, '-')})`).join('\n')}`;
    
    // This is the start of the template
    return ` # ${projectName}   ${badgeIcon}


## Your Task

${task}

${descriptionSection}

${tableOfContentsSection}

## User Story

\`\`\`
AS A person who ${reason}
I WANT ${action}
SO THAT ${because}
\`\`\`

${acceptanceSection}

${futureSection}

${accessSection}

${installationSection}${badgeSection}${contributionSection}

${featureSection}

${usageSection}

${testSection}

${creditsSection}

${questionSection}

${licenseSection}`;

};