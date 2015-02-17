Application = require('../source/application.js');
View = require('../source/view.js');
Canvas = require('../source/canvas.js');
Debug =  require('../source/debug.js');
$ = require('jquery');
Layer = require('../source/layer.js');

var app = new Application(new Canvas($('#mainCanvas')));

// Equivalent to calling a static method
var masterView = new View({
  origin: {
    x: 0,
    y: 0
  },
  size: {
    width: 10,
    height: 10
  }
});

//view.layer.set('backgroundColor') = 'rgba(0,0,0,1)';
app.addSubview(masterView);
var appDebugger = new Debug(app);
app.afterLoop = function() {
  appDebugger.out('fps: ' + Math.round(1000/app.deltaTime));
};

masterView.layer.addSublayer(new Layer({}));