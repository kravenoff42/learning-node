module.exports = function(/*maxValue*/) {
  return {
    seedData: function(){
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
    },

    getProjectValues: function(projArray){
      let totalArray = [];
      for ( let i = 0 ; i < 10 ; i ++){
        let total =1*projArray[i].dateCreated*projArray[i].dueDate*projArray[i].easyMoney*projArray[i].easyWork*projArray[i].interesting*projArray[i].paidWork*projArray[i].preReq*projArray[i].teamWork*projArray[i].tool;
        totalArray.push(total);
      }
      let sorted = totalArray.sort(sortNumber).reverse();
      return sorted;
    },

//     renderValues: function(valArray){
//       let m = maxValue;
//       let s = 0;
//       for ( let i = 0, len=valArray.length ; i < len ; i ++){
//         if(s+valArray[i]<max){
//           response.write(valArray[i]+"<br/>\n\r");
//           s = s+valArray[i];
//         }
//       }
//       response.write("Total: "+s+"<br/>\n\r");
//     }, 

    sortNumber: function(a,b) {
        return a - b;
    }
  };
}