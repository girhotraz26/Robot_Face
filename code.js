var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

background(rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255)));
var r = randomNumber(1, 255);
var g = randomNumber(1, 255);
var b = randomNumber(1, 255);
var eyeshape = randomNumber(3,10);
var antx = (randomNumber(50,300));
var feeling;

fill(rgb(r,g,b));
rect(50, 100, 300, 200);


line(200, 100, antx, 30);
line(200, 100, 400-antx, 30);
fill("Chartreuse");
ellipse(antx, 30, 30, 30);
ellipse(400-antx, 30, 30, 30);

fill("grey");
regularPolygon(125, 150, eyeshape, 30);
regularPolygon(275, 150, eyeshape, 30);

for (feeling = 0; feeling <4; feeling++){
  fill("white");
  rect(100+feeling*50,randomNumber (200,250), 50, 50);
}








// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
