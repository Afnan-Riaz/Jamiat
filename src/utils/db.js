import mongoose from "mongoose";
const {name,password}=process.env;
export const connectionStr=`mongodb+srv://${name}:${password}@cluster0.ovilnum.mongodb.net/Jamiat?retryWrites=true&w=majority`;

const connection = {isConnected:0}

const connectDB = async () => {
    if (connection.isConnected){
        return;
    }
    const db = await mongoose.
        connect(connectionStr)

    connection.isConnected = db.connections[0].readyState
}

export { connectDB};