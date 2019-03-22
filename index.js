const robot = require('robotjs');
const SerialPort = require('serialport');
const portName = '/dev/cu.usbmodem14101';

SerialPort.list(function(err, ports) {
  var allports = ports.length;
  var count = 0;
  var done = false;
  ports.forEach(function(port) {
    count += 1;
    pm = port['manufacturer'];
    if (typeof pm !== 'undefined' && pm.includes('arduino')) {
      console.log('Found arduino, listening...');
      const sp = new SerialPort(port.comName.toString(), {
        baudRate: 9600
      });

      sp.on('data', function (data) {
        console.log('Data:', data.toString());
        robot.mouseClick();
      });
      done = true;
    }
    if (count === allports && done === false) {
      console.log('cant find arduino');
      return portName;
    }
  });
});
