const dataprocessor = {
    processdata: function(data) {
        switch (data.type) {
            case 'health':
                return realHealth();
        }
    }
}



USER_NAME=james
WEEKLY_GOAL=1000


require('dotenv').config();
console.log(process.env.USER_NAME);
console.log(process.env.WEEKLY_GOAL);