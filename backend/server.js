const express = require('express');
const helmet = require("helmet");
const cors = require('cors');
const mongoose = require('mongoose');
const noteRoutes = require('./Notes/noteRoutes');
const UserRouter = require('./Users/UserRoutes');

const server = express();

server.use(express.json())
server.use(cors({}));
server.use(helmet());
server.use('/notes', noteRoutes);
// server.use('/users', UserRouter);


mongoose
	.connect('mongodb+srv://justin:fau11jus@cluster0.toc1z.mongodb.net/Note?retryWrites=true&w=majority', {dbName: 'Note'})
	.then(() => console.log('==connected=='))
	.catch(() => console.log('==error connecting=='))

server.get('/', (req, res) => {
	res.json('=Server is connected=')
})

const port = process.env.PORT || 3333;
server.listen(port, err => {
	if (err) console.log(err);
	console.log(`==Running on ${port}==`);
});