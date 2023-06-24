const { mongoose } = require("mongoose");
require ("colors")

// connectDB function

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected ${conn.connection.host}`.bgYellow);
    } catch (error) {
        console.log(`Error : ${error.message}`.bgRed)
        process.exit(1)
    }
}

// export
module.exports = connectDb