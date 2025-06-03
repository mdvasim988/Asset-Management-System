import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if(!MONGO_URI) 
{
    throw new Error('Please define the MONGO_URI environment variable');
}

let cached = global.mongoose;

if(!cached) 
{
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbconnection() 
{
    if (cached.conn) 
        return cached.conn;

    if (!cached.promise) 
    {
        cached.promise = await mongoose
        .connect(MONGO_URI, { bufferCommands: false })
        .then((mongoose) => {
            console.log('Database connected successfully');
            return mongoose;
        })
        .catch((error) => {
            console.error('MongoDB connection error:', error);
            process.exit(1); 
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbconnection;












// import mongoose from 'mongoose';

// let conn = null;

// export default async function dbconnection()
// {
//     try
//     {
//         if(conn)
//         {
//             return conn;
//         }

//         conn = await mongoose.connect(process.env.MONGO_URI);
//         console.log('database connected');
//         return conn;
//     }
//     catch(err)
//     {
//         console.error(err);
//     }
// }
