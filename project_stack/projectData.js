module.exports = function() {
  return { 
    projectData: function(){
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
  }
}