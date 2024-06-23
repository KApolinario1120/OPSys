const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) =>{
    res.status(200);
    res.send("Connected to root URL of server");
});

app.get('/hello', (req, res) =>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello! This is a formatted response!</h1>");
});

app.post('/orders', (req, res) =>{
    const order = req.body;
    // TODO - setup API Gateway and connect endpoint here
    res.status(200).send({ message: 'Order Recieved', order });
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is successfully running, and app is listening on port " + PORT)
    else
        console.log("Error occured, server can't start: " + error);
}
);
