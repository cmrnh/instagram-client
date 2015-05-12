// `Search` is its own file since you could imagine implementing search
//  by a variety of parameters, like tags, latitude and longitude, etc.

module.exports.location = function(req, res) {
  // Note: this is a stub implementation. 
  // This should be filled out with a request to the Instagram API at this endpoint:
  // https://api.instagram.com/v1/media/search?lat=...&lng=...&client_id=...
  res.send({
    url: "https://scontent-iad.cdninstagram.com/hphotos-xaf1/t51.2885-15/10785054_449194008564403_1097459197_n.jpg"
  });
}