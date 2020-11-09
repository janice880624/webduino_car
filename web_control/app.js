var car;

function getElement(dom) {
  var element = document.querySelector(dom);
  return element;
}

function controllerBtnEvent(c, e, callback) {
  if (e !== 'click') {
    var _u = navigator.userAgent;
    if (_u.indexOf('Android') > -1 || _u.indexOf('iPhone') > -1 || _u.indexOf('iPad') > -1) {
      c.addEventListener(e[1], function () {
        callback();
      });
    } else {
      c.addEventListener(e[0], function () {
        callback();
      });
    }
  } else {
    c.addEventListener('click', function () {
      callback();
    });
  }
}


boardReady({board: 'Smart', device: '10Vk7gDV', transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  car = getToyCar(board, 14, 16, 2, 5);
  controllerBtnEvent(getElement('#demo-area-09 .btn-up'),['mousedown', 'touchstart'], function () {
    car.goFront();
  });
  controllerBtnEvent(getElement('#demo-area-09 .btn-down'),['mousedown', 'touchstart'], function () {
    car.goBack();
  });
  controllerBtnEvent(getElement('#demo-area-09 .btn-left'),['mousedown', 'touchstart'], function () {
    car.turnLeft();
  });
  controllerBtnEvent(getElement('#demo-area-09 .btn-right'),['mousedown', 'touchstart'], function () {
    car.turnRight();
  });
  controllerBtnEvent(getElement('#demo-area-09 .btn-center'),['mousedown', 'touchstart'], function () {
    car.stop();
  });
  controllerBtnEvent(getElement('#demo-area-09 .btn-up'),['mouseup', 'touchend'], function () {
    car.stop();
  });
  controllerBtnEvent(getElement('#demo-area-09 .btn-down'),['mouseup', 'touchend'], function () {
    car.stop();
  });
  controllerBtnEvent(getElement('#demo-area-09 .btn-left'),['mouseup', 'touchend'], function () {
    car.stop();
  });
  controllerBtnEvent(getElement('#demo-area-09 .btn-right'),['mouseup', 'touchend'], function () {
    car.stop();
  });
});
