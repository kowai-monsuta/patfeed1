function checkIt() {
  // Initialize scores
  var dc_fan = 0;
  var marvel_fan = 0;
  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'dc fan') {
        dc_fan++;
      }
      else if (e.value == 'marvel fan') {
        marvel_fan++;
      }
    }

  }

  // Determine result
  var counts = "Dc Fan: " + dc_fan +
               "Marvel Fan: " + marvel_fan;

  // What is the highest value?
  var max = Math.max(dc_fan, marvel_fan);

  // Form a message
  var title = "Are you a marvel or dc fan"
  var message;

  if (max == dc_fan) {
    heading = "You Got: Dc Universe fan"
    message = "Yay! Dc comics are just the best, right? Most of the movies are done correctly and that makes a lot of fans so happy. Tbh I like dc comics more than marvel. Everything about it is just awesome. Am I right or am I right?";
    image = "<img src='img/end7.jpg'>"
  }
  else if (max == marvel_fan) {
    heading = "You Got: Marvel fan"
    message = "Yay! Marvel is just the best, right? Most of the movies are pretty cool, they're different from the comic books but at least they come up with cool stuff. ";
    image = "<img src='img/end8.png'>"
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = heading;
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('image').innerHTML = image;
}
