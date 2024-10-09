#!/usr/bin/env node

'use strict';

import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open';
import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import ora from 'ora';
import cliSpinners from 'cli-spinners';

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      {
        name: `Send me an ${chalk.green.bold('email')}?`,
        value: () => {
          open('mailto:kayalennian10@gmail.com');
          console.log('\nDone, see you soon in the inbox.\n');
        }
      },
      {
        name: `Download my ${chalk.magentaBright.bold('Resume')}?`,
        value: () => {
          // Open the resume link directly in the browser
          open('https://drive.google.com/file/d/1W-wDL8EJ094zj8JNtQp2AKZ2ULVVn0ps/view?usp=sharing');
          console.log('\nOpening resume in your browser...\n');
        }
      },
      {
        name: `Schedule a ${chalk.redBright.bold('Meeting')}?`,
        value: () => {
          open('https://calendly.com/kayalennian10/30min');
          console.log('\nSee you at the meeting\n');
        }
      },
      {
        name: 'Just quit.',
        value: () => {
          console.log('Goodbye!\n');
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.red('                       KAYAL ENNIAN A G'),
  handle: chalk.white('@kayalennian'),
  Quote: `${chalk.white('    Throughout Heaven And Earth, I Alone Am ')}${chalk.hex('#04d3f7').bold('The Honored One.')}`,
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('kayalennian'),
  github: chalk.gray('https://github.com/') + chalk.green('iamendless10'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('kayal-ennian-a-g-80b515245'),
  web: chalk.cyan('https://vuega.net'),
  npx: chalk.red('npx') + ' ' + chalk.white('kayal'),

  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.Quote}`, // Directly include the quote without the label
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic('I am currently looking for new opportunities,')}`,
    `${chalk.italic('my inbox is always open. Whether you have a')}`,
    `${chalk.italic('question or just want to say hi, I will try ')}`,
    `${chalk.italic('my best to get back to you!')}`
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'green'
  }
);

console.log(me);

const tip = [
  `Tip: Try ${chalk.cyanBright.bold('cmd/ctrl + click')} on the links above`,
  ''
].join('\n');
console.log(tip);

prompt(questions).then((answer) => answer.action());