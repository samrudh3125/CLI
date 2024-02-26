#!/usr/bin/env node

const commander = require('commander');
const {prompt}=require('inquirer');
const {addCustomer,findCustomer, updateCustomer, removeCustomer,listCustomers}=require('./index');

const questions=[
    {
        type:'input',
        name:'firstname',
        message:'Customer First Name'
    },
    {
        type:'input',
        name:'lastname',
        message:'Customer Last Name'
    },
    {
        type:'input',
        name:'phone',
        message:'Customer Phone Number'
    },
    {
        type:'input',
        name:'email',
        message:'Customer Email Address'
    }
];

commander.program
    .version("1.0.0")
    .description('Client Management System');

// commander.program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a new customer')
//     .action((firstname,lastname,phone,email)=>{
//         addCustomer({firstname,lastname,phone,email})
//     })

commander.program
    .command('add')
    .alias('a')
    .description('Add a new customer')
    .action(()=>{
        prompt(questions).then(answers=>addCustomer(answers));
    })

commander.program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action((name)=>{
        findCustomer(name);
    })

commander.program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action((_id)=>{
        prompt(questions).then(answers=>updateCustomer(_id,answers));
    })

commander.program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a customer')
    .action((_id)=>{
        removeCustomer(_id);
    })

commander.program
    .command('list')
    .alias('l')
    .description('List all customers')
    .action(()=>{
        listCustomers();
    })

commander.program.parse(process.argv);

