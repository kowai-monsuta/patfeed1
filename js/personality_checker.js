function checkIt() {
  // Initialize scores
  var nerd = 0;
  var jock = 0;
  var cheer = 0;
  var emo = 0;
  var typical = 0;
  var idc = 0;
  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'nerd') {
        nerd++;
      }
      else if (e.value == 'jock') {
        jock++;
      }
      else if (e.value == 'cheer') {
        cheer++;
      }
      else if (e.value == 'emo') {
        emo++;
      }
      else if (e.value == 'typical') {
        typical++;
      }
      else if (e.value == 'idc') {
        idc++;
      }
    }

  }

  // Determine result
  var counts = "Nerd: " + nerd + ", " +
               "Jock: " + jock  + ", " +
               "Cheer: " + cheer + ", " +
               "Emo: " + emo + ", " +
               "Typical: " + typical + ", " +
               "Idc: " + idc;

  // What is the highest value?
  var max = Math.max(nerd, jock, cheer, emo, typical, idc);

  // Form a message
  var message;

  if (max == nerd) {
    message = "Wow. You just like to choose the lamest things ever. You like to think that you're pretty cool, hate to burst your bubble, but you're just not cool. You're only popular because you like to embarrasse yourself but that's okay nerds are pretty smart, too. Here's some advice that I hope you will use some day and that's to not try so hard at being popular and stop acting like you know every little thing about anything.  Also if someone ever asks for something like copying your homework or something like that, then it means that they're taking advantage of you and making you think that you're one of them or that they're your friends, but you're not sweetie. So open your eyes, stop trying to be involved with every thing and just sit back and chill, and don't think just because your so smart and you make good grades all the time it means that you're a loser or you're lame. Don't let anyone say something like that to you. You're smart and that's the best thing in the world.";
  }
  else if (max == jock) {
    message = "Hmmm. Seems like you're pretty popular and you must be fit, well at least you better be if you're a jock. You probably even play a sport or just go to the gym a lot. And if you're dating someone, I sure hope you're treating them with respect and giving them all of your attention unless they don't do that to you. If I'm wrong about how fit you are then I hope you're still healthy.  Stay fit and healthy, that usually helps you live longer but who knows. Just don't smoke because that's stupid and it's just not cool at all. If anyone thinks something like that is cool then they're stupid and pathetic and probably won't even live that long anyways but oh well that's their choice and their lives that they're wasting.  Just don't do it.";
  }
  else if (max == cheer) {
    message = "Well, well, well. Looks like you're the kind of person that's pretty much a prep and you like to be on your phone. If your a guy, then you probably like to wear khaki shorts with bright colored t-shirts or long sleeve shirts(even when it's hot outside).  And if you're a girl, then you're probably the kind that likes to wear shirts that are 10x bigger than your original size with shorts or tights and you like that messy bun hair style, don't you.  Yes you do don't lie. And you're probably the kind to have selfies as their background for their phones, which pretty much shows how pathetic and full of yourself you are. I don't judge but that's pretty annoying.  You probably even have snapchat with like a thousand streaks or something and I bet your pretty proud of that because you have no other talent or way to waste your time."
    " You probably even hang out with your friends a lot during the weekends because you have no life. And by the way you may say it's your phone but you only have the right to say that if you bought it with your own money that you worked so hard for, but if you didn't and say the things that your parents bought is yours then you're just lying to yourselves. All of that stuff you have is borrowed, honey. Your parents bought it with their money so you're only just borrowing it. Unless you do have a part-time job or something and you bought most of your stuff with your own hard earned money.";
  }
  else if (max == emo) {
    message = "You're such an emo, no offense. Every single item in your closet is from Hot Topic. Where else can you buy black band tees and all the eyeliner you could ever want? That's okay I don't judge. You're probably the kind of person who cuts themselves for no reason, only for attention maybe, but I doubt you do that because your life sucks because it probably doesn't. Or maybe you're not emo, maybe you're the kind of person who says that your life sucks for no reason. Don't be mad or sad because you didn't get what you want or your crush doesn't like you back. Who cares about that, it's not the end of the world or anything so shut up you depressing idiot. Just move on with your life and be happy otherwise don't say anything at all and keep your mouth shut. And if someone is kind enough to ask you what's wrong then don't tell them it's nothing or you're okay because you're obviously lying to them and yourself."
    "Stop saying that no body cares about you because it's not their fault that you're so ungrateful or act like you're so miserable. Who knows maybe that person who asked you or acts happy probably has a hard time or is actually miserable but they don't want people to worry about them because they are better than that and hide their sadness with a smile. And not trying to be mean or anything but people who are sad for no reason are just the worst type of people and you're probably going to be sad for the rest of your life but that's your own fault.";
  }
  else if (max == typical) {
    message = "How typical. You're not unique so don't think that you're so special because you're not. You're just like any other normal teenager. You like to play on your phone and text your friends a lot. I bet you even talk just to hear yourself speak, but trust me it's annoying. I sure hope you don't have a selfie of yourself just like any other teenager would, but if you don't then you either have a picture with your friends, a picture of nature, or some other rediculous picture for your wallpaper. And there's nothing else that's interesting or different about you so I'm not even going to waste my time trying to guess what you do that makes you a typical teenager. That's okay though, don't change who you are because of what I say.";
  }
  else if (max == idc) {
    message = "So you're the kind of person who just doesn't care. You probably just do anything to get by. Maybe you watch a lot of netflix or youtube videos. If you're like me, then all you ever want to do is just sleep and eat and not have to worry about any problems or drama. That's too bad though because you still have to go to school and get a good education for yourself. And if you're the kind of person who's cool with working at Walmart or something, then I'm guessing you're also cool with getting paid less which means you can't buy all of the food and stuff you want because you have to worry about paying your rent and phone bills and all of that stuff."
    "I'm also guessing you like to wake up early just to get to your dead end job, but you're also afraid that your car will break down along the way, and because you're probably the lazy kind of person then you most definetly would not like to push your broken down car all the way to your destination or wait in the cold or hot weather for someone to come help you out. So unless you want that to happen to you then I would suggest that you start caring a little bit more for your life and school education, you idiot.";
  }

  // Display result
  //document.getElementById('result-text').innerHTML = counts;
  document.getElementById('result-text').innerHTML = message;
}
