const robot = require('robotjs');
const SerialPort = require('serialport')
const portName = '/dev/cu.usbmodem14101';
const port = new SerialPort(portName, { 
  baudRate: 9600
});

port.on('data', function (data) {
  console.log('Data:', data.toString());
  robot.mouseClick();
});