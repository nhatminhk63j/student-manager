const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = require(path.join(__dirname, 'app.js'));

app.listen(process.env.PORT, () => {
    console.log(`connect to port ${process.env.PORT}`);
})


