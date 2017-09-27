const http = require('http');
let dt = require('./my-module');
const server = http.createServer((request, response) => {
    
const { headers, method, url } = request;
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'GET' && request.url === '/echo') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    let dataArray = [];
    for ( let i = 0 ; i < 10 ; i ++){
      let d = {};
 /*x1-2 */ d.dateCreated = 1+Math.random();
//bool    -last modifed anything inactive for more than 3 months gets archived
      if(Math.random()>0.5){
/*x1.1*/   d.easyMoney = 1.1;
      }else{
           d.easyMoney = 1;
      }
      if(Math.random()>0.5){
/*x1.1 */  d.easyWork = 1.1;
      }else{
           d.easyWork = 1;
      }
      if(Math.random()>0.5){
/*x1.2 */  d.interesting = 1.2;
      }else{
           d.interesting = 1;
      }
      if(Math.random()>0.5){
/*x1.2*/   d.teamWork = 1.2;
      }else{
           d.teamWork = 1;
      }
//bool    -already outlined (deal breaker)
/*x1-2*/   d.dueDate = 1+Math.random();
      if(Math.random()>0.5){
/*x1.5*/   d.tool = 1.5;
      }else{
           d.tool = 1;
      }
      if(Math.random()>0.5){
/*x1.2*/   d.preReq = 1.2;
      }else{
           d.preReq = 1;
      }
      if(Math.random()>0.5){
/*x2.0*/   d.paidWork = 2;
      }else{
           d.paidWork = 1;
      }
      dataArray.push(d);
    }
    let totalArray = [];
    for ( let i = 0 ; i < 10 ; i ++){
      let total = dataArray[i].dateCreated*dataArray[i].dueDate*dataArray[i].easyMoney*dataArray[i].easyWork*dataArray[i].interesting*dataArray[i].paidWork*dataArray[i].preReq*dataArray[i].teamWork*dataArray[i].tool;
      totalArray.push(total);
      //response.write(total+"<br/>\n\r");
    }
    let sorted = totalArray.sort(sortNumber).reverse();
    let max = 25;
    let sum = 0;
    for ( let i = 0, len=sorted.length ; i < len ; i ++){
      if(sum+sorted[i]<max){
        response.write(sorted[i]+"<br/>\n\r");
        sum = sum+sorted[i];
      }
    }
    response.write("Total: "+sum+"<br/>\n\r");
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(process.env.PORT, process.env.IP);

function sortNumber(a,b) {
    return a - b;
}
