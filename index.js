const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt ([
    {type: 'input',
    message: 'What is the name of your project?',
    name: 'projectName',
    },
    {type: 'input',
    message: 'The purpose of this repository is to ',
    name: 'purpose',
    },
    {type: 'input',
    message: 'As a person who ',
    name: 'reason',
    } ,
    {type: 'input',
    message: 'I want ',
    name: 'because',
    },
    // {type: 'input',
    // message: 'so that ',
    // name: 'purpose',
    // },
    // {type: 'input',
    // message: 'The purpose of this repository is to ',
    // name: 'purpose',
    // },

])

.then((data) => {
    const readmeContent = generateREADME(data);
    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err): console.log('Success')
    );
});

const generateREADME = ({ projectName, purpose, reason, because }) => `

# ${projectName}

## Your Task

The purpose of the repository is to ${purpose} 

## User Story

\`\`\`
AS A person who ${reason}
I WANT ${because}
SO THAT
\`\`\`

## Acceptance Criteria

\`\`\`
GIVEN
WHEN
THEN
WHEN
THEN
WHEN
THEN
WHEN
THEN
\`\`\`

## Description



## Future Implementations



## Access

To access this site, please visit:

## Usage



## Credits

With thanks to:

## License`;
