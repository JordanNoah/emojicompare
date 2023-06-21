const flutterEmoji = require('./emojis/flutter.json');
const moodle = require('./emojis/moodle.json');
var fs = require('fs');

var existonflutter = []
var missingFlutter = [];

var moodleEntries = Object.values(moodle);
var flutterEmojiEntries = Object.keys(flutterEmoji);

var existcounter = 0;
var missingcounter = 0;

for (let index = 0; index < moodleEntries.length; index++) {
    const element = moodleEntries[index];
    if (flutterEmojiEntries.find(e => e == element)) {
        existonflutter.push(element)
        existcounter++;
    }else{
        missingFlutter.push(element)
        missingcounter++;
    }
    console.info(`Progress ${index}/${moodleEntries.length}`)
}

console.log("existcounter",existcounter);
console.log("missingcounter",missingcounter);

fs.writeFile("missing.json", missingFlutter.toString(),function(err,result){
    if(err) console.log('error', err);
});
fs.writeFile("exist.json", existonflutter.toString(),function(err,result){
    if(err) console.log('error', err);
});