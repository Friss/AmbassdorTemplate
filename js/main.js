backgrounds = ["charlotte.jpg", "charlotte2.jpg", "charlotte3.jpg"];

setInterval(function() {
  image = backgrounds[Math.floor(Math.random()*backgrounds.length)]
  $('.header, .footer').css({
    background: "url(img/"+image+") no-repeat center center fixed",
    backgroundSize: "cover"
  });
}, 10000);
