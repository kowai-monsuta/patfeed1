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
  var message;

  if (max == dc_fan) {
    message = "Yay! Dc comics are just the best, right? Most of the movies are done correctly and that makes a lot of fans so happy. Tbh I like dc comics more than marvel. Everything about it is just awesome. Am I right or am I right?";
  }
  else if (max == marvel_fan) {
    message = "Yay! Marvel is just the best, right? Most of the movies are pretty cool, they're different from the comic books but at least they come up with cool stuff. ";
  }

  // Display result
  //document.getElementById('result-text').innerHTML = counts;
  document.getElementById('result-text').innerHTML = message;
}
