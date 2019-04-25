AFRAME.registerComponent('vr-analytics', {
  init: function () {
    var el = this.el;
    var emitted = false;

    el.addEventListener('enter-vr', function () {
      if (emitted || !AFRAME.utils.device.checkHeadsetConnected() ||
          AFRAME.utils.device.isMobile()) { return; }
      //ga('send', 'event', 'General', 'entervr');
			//document.getElementById('cameraRig').setAttribute('position', {x:0, y:0, z:0});
      emitted = true;
    });
  }
});
