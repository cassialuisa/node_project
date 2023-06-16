import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://cassialdsp:cassiaalura123@alura.iljmcne.mongodb.net/?')

let db = mongoose.connection;

export default db;