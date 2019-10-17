var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  iam_apikey: 'uVRCkcG4a9LcrUpaYLQcMIV_7uT95f09tp6JKkAq_npl'
});

var url= 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg';

var params = {
  url: url,
};

visualRecognition.classify(params, function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(response, null, 2))
  }
});
