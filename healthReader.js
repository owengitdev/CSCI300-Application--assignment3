const fs = require('fs');
const path = require('path');

const healthFilePath = path.join(__dirname, 'healthData.json');

console.log('Reading health data from healthData.json...');

function counthealthentries(){
    try {
        const data = fs.readFileSync(healthFilePath, 'utf-8');
        const healthData = JSON.parse(data);
        return healthData.length;
    }
    catch (error){
        console.error('Error reading health data:', error);
        return 0;
    }
}


function realhealth(){
    try {
        const data = fs.readFileSync(healthFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading health data:', error);
        return null;
    }
}