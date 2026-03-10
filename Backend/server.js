const app = require('./src/app');
require('dotenv').config();
const connectDB = require('./src/config/database');

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server is running on port ${PORT}`);
});
