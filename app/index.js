var MKAppGenerator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends MKAppGenerator {

    async prompting() {

        const DEFAULT_APPLICATION_TYPE = 'monolith';
        const DEFAULT_APPLICATION_SECURITY_TYPE = 'formLogin';
        const applicationTypeChoices = [
            {
                value: DEFAULT_APPLICATION_TYPE,
                name: 'Monolithic application (recommended for simple projects)'
            },
            {
                value: 'microservice',
                name: 'Microservice application'
            }
        ];
        const applicationSecurityTypeChoices = [
            {
                value: DEFAULT_APPLICATION_SECURITY_TYPE,
                name: 'Form Login - Session based authentication(recommended for simple projects)'
            },
            {
                value: 'token',
                name: 'Oauth2 - Token-Based Authentication'
            },
            {
                value: 'kerberose',
                name: 'Kerberose - Based Authentication'
            }
        ];

        const prompts = [
            {
                type: "input",
                name: "applicationName",
                message: "What is your application name ?",
                default: 'mk-sample-webapp' // Default to current folder name
            },
            {
                type: 'list',
                name: 'applicationType',
                message: `Which ${chalk.yellow('*type*')} of application would you like to create?`,
                choices: applicationTypeChoices,
                default: DEFAULT_APPLICATION_TYPE
            },
            {
                type: 'list',
                name: 'applicationSecurityType',
                message: `Which ${chalk.yellow('*type*')} of application security would you like to create?`,
                choices: applicationSecurityTypeChoices,
                default: DEFAULT_APPLICATION_SECURITY_TYPE
            }
        ];

        return this.prompt(prompts).then(props => {
            this.applicationName = props.applicationName;
            this.applicationType = props.applicationType;
            this.applicationSecurityType = props.applicationSecurityType;
        });
    }


    writing() {
        this.log("this.applicationName",  this.applicationName);
    }
};