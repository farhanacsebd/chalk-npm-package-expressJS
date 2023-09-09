const express = require('express');
const chalk = require('chalk');
const app = express();

const PORT = 5000;


app.get("/products",(req,res) => {
    res.send("list all the products")
})


app.listen(PORT,() => {
    console.log(chalk.underline.bgRed.bold(`Server is running at http://localhost${PORT}`));
})

console.log(chalk.blue('Hello world!'));
