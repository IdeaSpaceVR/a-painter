window.saveAs = require('../vendor/saveas.js').saveAs;

//TWEEN = require('../vendor/Tween.js');

require('./atlas.js');
require('./dragndrop.js');
require('./binarymanager.js');
//require('../vendor/OrbitControls.js');
require('./sharedbuffergeometrymanager.js');
require('./sharedbuffergeometry.js');

require('./utils.js');
require('./ui2d.js');

require('./systems/brush.js');
require('./systems/ui.js');
require('./systems/painter.js');

require('./components/brush.js');
require('./components/if-no-vr-headset.js');
require('./components/json-model.js');
require('./components/orbit-controls.js');
require('./components/paint-controls.js');
require('./components/ui.js');
require('./components/ui-raycaster.js');

require('./brushes/line.js');
require('./brushes/stamp.js');
require('./brushes/spheres.js');
require('./brushes/cubes.js');
require('./brushes/rainbow.js');
require('./brushes/single-sphere.js');

/*var tween = new TWEEN.Tween({ x: 0, y: 0, z: 0 })
      .to({ x: 1, y: 1, z: 1 }, 100)
      .onUpdate(function () {
console.log('in tween');
          //uiEl.setAttribute('scale', this);
      })
      .easing(TWEEN.Easing.Exponential.Out);
    tween.start();

*/
