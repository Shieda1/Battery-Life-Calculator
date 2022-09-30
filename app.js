// https://www.omnicalculator.com/other/battery-life

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const batterylifeRadio = document.getElementById('batterylifeRadio');
const batterycapacityRadio = document.getElementById('batterycapacityRadio');
const dischargesafetyRadio = document.getElementById('dischargesafetyRadio');
const deviceconsumptionRadio = document.getElementById('deviceconsumptionRadio');

let batterylife;
let batterycapacity = v1;
let dischargesafety = v2;
let deviceconsumption = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

batterylifeRadio.addEventListener('click', function() {
  variable1.textContent = 'Battery capacity';
  variable2.textContent = 'Discharge safety';
  variable3.textContent = 'Device consumption';
  batterycapacity = v1;
  dischargesafety = v2;
  deviceconsumption = v3;
  result.textContent = '';
});

batterycapacityRadio.addEventListener('click', function() {
  variable1.textContent = 'Battery life';
  variable2.textContent = 'Discharge safety';
  variable3.textContent = 'Device consumption';
  batterylife = v1;
  dischargesafety = v2;
  deviceconsumption = v3;
  result.textContent = '';
});

dischargesafetyRadio.addEventListener('click', function() {
  variable1.textContent = 'Battery life';
  variable2.textContent = 'Battery capacity';
  variable3.textContent = 'Device consumption';
  batterylife = v1;
  batterycapacity = v2;
  deviceconsumption = v3;
  result.textContent = '';
});

deviceconsumptionRadio.addEventListener('click', function() {
  variable1.textContent = 'Battery life';
  variable2.textContent = 'Battery capacity';
  variable3.textContent = 'Discharge safety';
  batterylife = v1;
  batterycapacity = v2;
  dischargesafety = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(batterylifeRadio.checked)
    result.textContent = `Battery life = ${computebatterylife().toFixed(2)}`;

  else if(batterycapacityRadio.checked)
    result.textContent = `Battery capacity = ${computebatterycapacity().toFixed(2)}`;

  else if(dischargesafetyRadio.checked)
    result.textContent = `Discharge safety = ${computedischargesafety().toFixed(2)}`;

  else if(deviceconsumptionRadio.checked)
    result.textContent = `Device consumption = ${computedeviceconsumption().toFixed(2)}`;
})

// calculation

// batterylife = (batterycapacity / deviceconsumption) * (1 - dischargesafety)

function computebatterylife() {
  return ((Number(batterycapacity.value) / Number(deviceconsumption.value)) * (1 - (Number(dischargesafety.value) / 100))) * 1000;
}

function computebatterycapacity() {
  return ((Number(batterylife.value) / 1000) / (1 - (Number(dischargesafety.value) / 100))) * Number(deviceconsumption.value);
}

function computedischargesafety() {
  return (1 - ((Number(batterylife.value) / 1000) / (Number(batterycapacity.value) / Number(deviceconsumption.value)))) * 100;
}

function computedeviceconsumption() {
  return Number(batterycapacity.value) / ((Number(batterylife.value) / 1000) / (1 - (Number(dischargesafety.value) / 100)));
}