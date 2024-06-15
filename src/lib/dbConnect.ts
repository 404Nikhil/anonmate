import mongoose from "mongoose";
type ConnectionObject = {
    isConnected?: number; // optional
}
const connection: ConnectionObject = {};

// async function to connect to the database

async function dbConnect() : Promise<void> {
    if (connection.isConnected) {
       console.log("Already connected to the database");  // check for existing databse, optimization check
       return;
    }
    // connect to the database
   try {
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {})
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to the database");
   }
   catch (err) {
       console.error("Error connecting to the database", err);
       process.exit(1);
   }
}

export default dbConnect;