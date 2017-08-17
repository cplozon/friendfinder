// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends.js");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/survey", function(req, res) {
    res.json(friendData);
    console.log("in api-routes for survey");
  });


var match;
var sum = 0;
  app.post("/api/survey", function (req,res){
    friendData.push(req.body);
    var totalDifference = 0;
    for (var i = 0; i < friendData.length - 1; i++){

      var oldUserName = friendData[i].name;
      //console.log(oldUserName);
      var oldUserPhoto = friendData[i].photo;
      //console.log(oldUserPhoto);
      var oldUserScore = friendData[i].scores;
      //console.log(oldUserScore);
      var newUserName = req.body.name;
      //console.log(newUserName);
      var newUserPhoto = req.body.photo;
      //console.log(newUserPhoto);
      var newUserScores = req.body.scores;
      //console.log(newUserScores);


      for (var j = 0; j < req.body.scores[j]; j++){  // only get my info to compare
        var myScores = req.body.scores[j];
        var sum =0;

          for (var k =0; k < friendData[i].scores[k]; k++) {  // only get others info
            
            var fScores = (friendData[i].scores[k]);
            //console.log("friend scores" + fScores);
            totalDifference = myScores - fScores;
            totalDifference = Math.abs(totalDifference);
            //console.log("total diff" + totalDifference);
            sum += parseInt(totalDifference);
            //console.log("the sum" + sum);
            //console.log("old" + oldUserName);
            match = oldUserName;

        }   
    }
  }    
        res.sendStatus(match);   
    res.json(true);
  });

}

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friendData = [];
  

//     console.log(friendData);
//   });
// };