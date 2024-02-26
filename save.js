const inquirer = require('inquirer');
const fs = require('fs');

async function mainPrompt() {
    const mainPrompt = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'The purpose of this repository is to ',
        name: 'purpose',
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
        message: 'The purpose of this repository is to ',
        name: 'acceptanceCriteria',
    }, 
    {
        type:'input',
        message: 'Give a description of your project',
        name: 'description',
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
        type: 'confirm',
        message: 'Would you like to add a table of contents?',
        name: 'tableOfContents',
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
    
];

const mainAnswers = await inquirer.prompt(mainPrompt)};

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

    return mainAnswers;

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
    
    const repeatAnswers = await inquirer.prompt(nestedPrompts);
    answersArray.push(repeatAnswers);

    if (repeatAnswers.addMore) {
        await ask();
    } 
}

await ask();

console.log('Answers:', answersArray);
return answersArray;
}

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

async function run() {
    const mainAnswers = await mainPrompt();
    console.log('Main Answers:', mainAnswers);

    const whenThenAnswers = await repeatPrompt();
    const improvementAnswers = await bulletPoints();
    const addSources = await credits();
    // const optionalAnswers = await optionalSections();

    const readmeContent = generateREADME(mainAnswers, whenThenAnswers, improvementAnswers, addSources);
    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err): console.log('Success')
    );

}


const generateREADME = ({ projectName, purpose, reason, because, action, acceptanceCriteria, description, link, usage}, whenThenAnswers, improvementAnswers, addSources) => {

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

    return `# ${projectName}

## Your Task

The purpose of the repository is to ${purpose}

## Description

${description}

## Table of Contents

## User Story

\`\`\`
AS A person who ${reason}
I WANT ${action}
SO THAT ${because}
\`\`\`

## Acceptance Criteria

\`\`\`
GIVEN ${acceptanceCriteria}
${whenThenAnswers.map(answers => `WHEN ${answers.when}\nTHEN ${answers.then}`).join('\n')}
\`\`\`

## Future Implementations

${improvementAnswers.map(answers => answers.improvements).join('\n')}

## Access

To access this site, please visit: ${link}


${installationSection}${badgeSection}${contributionSection}


## Features


## Usage

${usage}

## Credits

With thanks to:

${addSources.map(source => source.credit).join('\n')}

${licenseSection}`;

};
