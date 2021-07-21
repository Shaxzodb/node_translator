const translate = require('@vitalets/google-translate-api');

translate(`Salom Hammahga`, {from:'uz',to: 'en'})
.then(data => {
    console.log(data.text)
    console.log(data.from.language.iso);   

}).catch(err => {
    console.error(err);
});

//console.log(Object.keys(translate.languages))
