var maxValue = 26;
var output;
var ranges;

window.onload = function(){
  output = window.document.getElementById('output');
  ranges = defineRanges(maxValue);
  let seeds = seedData();
  let vals = getProjectValues(seeds);
  renderValues(vals);
  //setInterval(function(){location.reload();},1000);
}

function seedData(){
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
  return dataArray;
}

function getProjectValues(projArray){
  let totalArray = [];
  for ( let i = 0 ; i < 10 ; i ++){
    let total =1*projArray[i].dateCreated*projArray[i].dueDate*projArray[i].easyMoney*projArray[i].easyWork*projArray[i].interesting*projArray[i].paidWork*projArray[i].preReq*projArray[i].teamWork*projArray[i].tool;
    totalArray.push(total);
  }
  let sorted = totalArray.sort(sortNumber).reverse();
  return sorted;
}

function defineRanges(maxValue){
  let top = maxValue/2;
  let mid = top/2;
  let bot = mid/2;
  let ranges = {
    min: 1,
    sml: (bot+mid)/2,
    med: (mid+top)/2,
    lrg: (top+maxValue)/2,
    max: maxValue,
  }
  return ranges;
}

// function setSize(projValue){
       
//   switch(true){
//       case(projValue<ranges.min):
//         return false;
//       case(projValue<ranges.sml):
//         return "small 0.125";
//       case(projValue<ranges.med):
//         return "medium 0.25";
//       case(projValue<ranges.lrg):
//         return "large 0.5";
//       case(projValue>ranges.lrg):
//         return "full 01";
//   }
// }

function renderValues(valArray) {
  let m = maxValue;
  let s = 0;
  let fractions = [];
  for ( let i = 0, len=valArray.length ; i < len ; i ++){
    if(s+valArray[i]<m){
      let div = window.document.createElement('div');
      let h = Math.floor(valArray[i])*1.2;
      let w = h*1.61803399;
      div.classList.add('projectTile');
      div.setAttribute('style',"height: "+h+"em; width: "+w+"em;");
//       let size = setSize(valArray[i]);
      div.innerHTML = valArray[i];//+ " Size: "+ size;
      s = s+valArray[i];
      output.appendChild(div);
//       let f = size.split('0');
//       fractions.push("0"+f[1]);
    }
  }
//   let fSum = fractions.reduce(function(sum, value) {
//     return parseFloat(sum) + parseFloat(value);
//   }, 0);
  let tot = window.document.createElement('p');
  tot.innerHTML = "Total: "+s;//+" "+fSum+"/1";
  output.appendChild(tot);
}

function sortNumber(a,b) {
    return a - b;
}
