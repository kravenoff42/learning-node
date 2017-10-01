var express = require('express');
var router = express.Router();
// let seeds = projectStack.seedData();
// console.log('Seeds returned: ',seeds);
// let values = projectStack.getProjectValues(seeds);
// console.log('Values returned: ',values);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Project Stack',
    desc: 'This is a simple one page app that allows the user to enter and track a list of and the relative importance of their projects'
//     projectValues: values
  });
});

module.exports = router;
