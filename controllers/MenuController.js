const inquirer = require('inquirer');

module.exports = class MenuController{
    constructor(){
        this.mainMenuQuestions = [
            {
                type:'list',
                name:'mainMenuChoice',
                message:'Please choose from an option below: ',
                choices:['Add new contact', 'Exit', 'Current time']
            }
        ];
        this.contacts=[];
    }

    main(){
        console.log('Welcome to AddressBloc!');
        inquirer.prompt(this.mainMenuQuestions).then((response)=>{
            switch(response.mainMenuChoice){
                case 'Add new contact':
                    this.addContact();
                    break;
                case 'Exit':
                    this.exit();
                case 'Current time':
                    this.getDate();
                    break;
                default:
                    console.log('Invalid input');
                    this.main();
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    clear(){
        console.log('\x1Bc');
    }

    addContact(){
        this.clear();
        console.log('addContact called');
        this.main();
    }

    exit(){
        console.log('Thanks for using AddressBloc!');
        process.exit();
    }

    getDate(){
        console.log('Date called');
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date+' '+time;
        console.log(dateTime);
    }

    getContactCount(){
        return this.contacts.length;
    }
}