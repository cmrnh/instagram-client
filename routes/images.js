var https = require('https');

exports.media = function(req, res) {
  var shortcode = req.params.shortcode;

  var options = {
    hostname: 'api.instagram.com',
    port: 443,
    path: '/v1/media/shortcode/' + shortcode + '?client_id=' + kInstagramClientId,
    method: 'GET'
  };

  https.get(options, function(instagramRes) {
    // Note: setEncoding is required to process the raw data
    // Otherwise, data will appear as a Buffer object
    instagramRes.setEncoding('utf8');

    var data = "";
    instagramRes.on('data', function(chunk) {
      data += chunk;
    });

    instagramRes.on('end', function() {
      var instagramData = JSON.parse(data);
      var url = instagramData.data.images.standard_resolution.url;
      res.render('instagram', {
        src: url
      });
    });

  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
};