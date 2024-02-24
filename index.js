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
    }
];
    return await inquirer.prompt(mainPrompt)}

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

    const readmeContent = generateREADME(mainAnswers, whenThenAnswers, improvementAnswers, addSources);
    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err): console.log('Success')
    );
}

const generateREADME = ({ projectName, purpose, reason, because, action, acceptanceCriteria, description, link, usage}, whenThenAnswers, improvementAnswers, addSources) =>

`# ${projectName}

## Your Task

The purpose of the repository is to ${purpose} 

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

## Description

${description}

## Future Implementations

${improvementAnswers.map(answers => answers.improvements).join('\n')}

## Access

To access this site, please visit: ${link}

## Usage

${usage}

## Credits

With thanks to:

${addSources.map(source => source.credit).join('\n')}

## License`;

run();