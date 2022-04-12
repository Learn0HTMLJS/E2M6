const http = require('http');
const port = 3000;
const server = http.createServer((reqest, response) => {
    //console.log(reqest.read());
    let numers = reqest.headers;
    let number1 = numbers['number1'];
    let number2 = numbers['number2'];
    if(number1 == undefined || number2 == undefined)
        response.statusCode = 400;
    else
    {
        response.statusCode = 200;
        response.setHeader('name', 'Roman');
        response.setHeader('number1', '3');
        response.setHeader('number2', '5');
        response.setHeader('sum', number1+number2);
        response.setHeader('minus', number1-number2);
        response.setHeader('multiply', number1*number2);
        response.setHeader('div', number1/number2);
    }
    response.write('Hello, World!');
    response.end();
});
server.listen(port, '127.0.0.1', () => {
    console.log(`Слушает порт ${port}`);
});