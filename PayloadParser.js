function parseUplink(device, payload) {
    let mappingCNE = {
        "latitude": "LATITUDE",
        "lin1.value": "AI1_CONNECTED",
        "lin10.value": "OPMODE",
        "lin11.value": "WHP",
        "lin12.value": "LP",
        "lin13.value": "AI3_TYPE",
        "lin14.value": "AI3_VALUE",
        "lin15.value": "AI4_TYPE",
        "lin16.value": "AI4_VALUE",
        "lin17.value": "AP",
        "lin17.max": "MAX_AP",
        "lin17.min": "MIN_AP",
        "lin18.value": "VALVE_STATUS",
        "lin19.value": "LAST_OP",
        "lin2.value": "AI2_CONNECTED",
        "lin20.value": "LAST_OP_CAUSE",
        "lin21.value": "LAST_PST",
        "lin22.value": "DATE_PST",
        "lin23.value": "PANEL_TEMP",
        "lin23.max": "MAX_PANEL_TEMP",
        "lin23.min": "MIN_PANEL_TEMP",
        "lin24.value": "CB",
        "lin25.value": "PB",
        "lin26.value": "WHP_LT",
        "lin27.value": "WHP_HT",
        "lin28.value": "LP_LT",
        "lin29.value": "LP_HT",
        "lin30.value": "B_IDP",
        "lin31.value": "RECHARGE_COUNTER",
        "lin32.value": "SERIAL_LSW",
        "lin33.value": "FIRMWARE",
        "lin24.min": "MIN_CB",
        "lin25.min": "MIN_PB",
        "lin3.value": "AI3_ENABLED",
        "lin4.value": "AI3_CONNECTED",
        "lin5.value": "AI4_ENABLED",
        "lin6.value": "AI4_CONNECTED",
        "lin7.value": "POSITION_ENABLED",
        "lin8.value": "OPEN_VALVE_SWITCH",
        "lin9.value": "CLOSE_VALVE_SWITCH",
        "longitude": "LONGITUDE"

    };

    let cneModel = [
        {
            "MEASUREMENT": "AI1_CONNECTED",
            "ENDPOINT_ADDRESS": "AI1_CONNECTED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "AI2_CONNECTED",
            "ENDPOINT_ADDRESS": "AI2_CONNECTED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "WHP",
            "ENDPOINT_ADDRESS": "WHP",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "AI3_CONNECTED",
            "ENDPOINT_ADDRESS": "AI3_CONNECTED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "LP",
            "ENDPOINT_ADDRESS": "LP",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "AI4_CONNECTED",
            "ENDPOINT_ADDRESS": "AI4_CONNECTED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "AI3_ENABLED",
            "ENDPOINT_ADDRESS": "AI3_ENABLED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "AI4_ENABLED",
            "ENDPOINT_ADDRESS": "AI4_ENABLED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "POSITION_ENABLED",
            "ENDPOINT_ADDRESS": "POSITION_ENABLED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "LAST_OP",
            "ENDPOINT_ADDRESS": "LAST_OP",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LAST_OPERATION"
        },
        {
            "MEASUREMENT": "LAST_OP_CAUSE",
            "ENDPOINT_ADDRESS": "LAST_OP_CAUSE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LAST_OPERATION_CAUSE"
        },
        {
            "MEASUREMENT": "LAST_PST",
            "ENDPOINT_ADDRESS": "LAST_PST",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LAST_PST"
        },
        {
            "MEASUREMENT": "OPEN_VALVE_SWITCH",
            "ENDPOINT_ADDRESS": "OPEN_VALVE_SWITCH",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "AP",
            "ENDPOINT_ADDRESS": "AP",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "CLOSE_VALVE_SWITCH",
            "ENDPOINT_ADDRESS": "CLOSE_VALVE_SWITCH",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "OPMODE",
            "ENDPOINT_ADDRESS": "OPMODE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "OPMODE"
        },
        {
            "MEASUREMENT": "AI3_TYPE",
            "ENDPOINT_ADDRESS": "AI3_TYPE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "PRES-TEMP"
        },
        {
            "MEASUREMENT": "AI4_TYPE",
            "ENDPOINT_ADDRESS": "AI4_TYPE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "PRES-TEMP"
        },
        {
            "MEASUREMENT": "AI3_VALUE",
            "ENDPOINT_ADDRESS": "AI3_VALUE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "psi / °C"
        },
        {
            "MEASUREMENT": "PANEL_TEMP",
            "ENDPOINT_ADDRESS": "PANEL_TEMP",
            "URL_TYPE": "API_URL_TEMPERATURE",
            "VARIABLE_TYPE": "CELSIUS"
        },
        {
            "MEASUREMENT": "CB",
            "ENDPOINT_ADDRESS": "CB",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "PB",
            "ENDPOINT_ADDRESS": "PB",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "B_IDP",
            "ENDPOINT_ADDRESS": "B_IDP",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "AI4_VALUE",
            "ENDPOINT_ADDRESS": "AI4_VALUE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "psi / °C"
        },
        {
            "MEASUREMENT": "DATE_PST",
            "ENDPOINT_ADDRESS": "DATE_PST",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "VALVE_STATUS",
            "ENDPOINT_ADDRESS": "VALVE_STATUS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "WHP_LT",
            "ENDPOINT_ADDRESS": "WHP_LT",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "WHP_HT",
            "ENDPOINT_ADDRESS": "WHP_HT",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "LP_LT",
            "ENDPOINT_ADDRESS": "LP_LT",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "LP_HT",
            "ENDPOINT_ADDRESS": "LP_HT",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "RECHARGE_COUNTER",
            "ENDPOINT_ADDRESS": "RECHARGE_COUNTER",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "SERIAL_LSW",
            "ENDPOINT_ADDRESS": "SERIAL_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "FIRMWARE",
            "ENDPOINT_ADDRESS": "FIRMWARE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "CMD_OPEN",
            "ENDPOINT_ADDRESS": "CMD_OPEN",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_CLOSE",
            "ENDPOINT_ADDRESS": "CMD_CLOSE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "RUN_PST",
            "ENDPOINT_ADDRESS": "RUN_PST",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_RST_ERR",
            "ENDPOINT_ADDRESS": "CMD_RST_ERR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "AI5_CONNECTED",
            "ENDPOINT_ADDRESS": "AI5_CONNECTED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "AI5_ENABLED",
            "ENDPOINT_ADDRESS": "AI5_ENABLED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "AI5_TYPE",
            "ENDPOINT_ADDRESS": "AI5_TYPE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "PRES-TEMP"
        },
        {
            "MEASUREMENT": "AI5_VALUE",
            "ENDPOINT_ADDRESS": "AI5_VALUE",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "AP_LT",
            "ENDPOINT_ADDRESS": "AP_LT",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "AP_HT",
            "ENDPOINT_ADDRESS": "AP_HT",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        }
    ];

    let dataJSON = payload.asJsonObject();
    let currentUnixDate = Date.parse(new Date());

    function parseaValor(measure, urlType, variableType) {
        if (urlType == "API_URL_PRESSURE") {
            if (variableType == "PSI") measure = measure * 6894.757;
            if (variableType == "hPa") measure = measure * 100;

            return parseFloat(measure);
        }

        if (urlType == "API_URL_TEMPERATURE") {

            return parseFloat(measure);
        }

        if (urlType == "API_URL_GENERIC") {
            env.log(typeof (measure) + ":");
            env.log(measure);
            if (variableType == "TIME-MIN") measure = measure * 60;
            if (variableType == "TIME-HOUR") measure = measure * 3600;
            if (variableType == "TIME-MIN-CUSTOM") measure = (measure * 1.0).toFixed(2);
            if (variableType == "TIME-SECONDStoMIN") measure = Math.round(measure / 60);
            if (variableType == "MMSCFD") measure = (measure * 1177.17).toFixed(2);
            if (variableType == "BBL/DAY")
                measure = (measure * 0.006624470622).toFixed(2);
            if (variableType == "cm/s") measure = (measure * 0.036).toFixed(2);
            if (variableType == "LEVEL-MM/100") measure = measure * 100;
            if (
                variableType == "COEFFICIENT" ||
                variableType == "FLOAT" ||
                variableType == "SCF/STB" ||
                variableType == "SPECIFIC-HEAT"
            )
                measure = (measure * 1.0).toFixed(3);

            measure = (measure * 1.0).toFixed(3);

            env.log(typeof (measure) + ":");
            env.log(measure);
            return parseFloat(measure);
        }

        if (urlType == "API_URL_HUMIDITY") {

            return parseFloat(measure);
        }

        if (urlType == "API_URL_VOLTAGE") {
            measure = measure * 0.1;

            return parseFloat(measure);
        }

        if (urlType == "API_URL_WEIGHT") {

            if (variableType == "LBS") measure = measure * 453.592;

            return parseFloat(measure);
        }
        return measure;

    };

    dataJSON.data.forEach((element) => {
        let sensor = device.endpoints.byAddress(mappingCNE[element.tagname]);
        if (sensor != null && element.value != 65535) {
            let meassureInfo = cneModel.find(
                (item) => mappingCNE[element.tagname] == item.MEASUREMENT
            );
            if (((currentUnixDate / 1000) - element.ts) <= 360) {

                if (meassureInfo) {

                    let sensorValue = parseaValor(
                        parseFloat(element.value.replace(",", ".")),
                        meassureInfo.URL_TYPE,
                        meassureInfo.VARIABLE_TYPE
                    );
                    if (sensorValue == NaN) env.log("Valor del sensor: NaN");

                    if (sensorValue != "NaN") {
                        sensorValue = parseFloat(sensorValue);
                        let timeUTC = new Date(element.ts * 1000).toUTCString();
                        env.log("actualiza: " + mappingCNE[element.tagname] + " - con : " + sensorValue);
                        env.log("deberia actualizar con: " + mappingCNE[element.tagname] + " - con : " + element.value);
                        try {
                            switch (meassureInfo.URL_TYPE) {
                                case "API_URL_PRESSURE":
                                    env.log("actualiza sensor de presion");
                                    sensor.updatePressureSensorStatus(sensorValue, timeUTC);
                                    break;

                                case "API_URL_TEMPERATURE":
                                    env.log("actualiza sensor de temperatura");
                                    sensor.updateTemperatureSensorStatus(sensorValue, timeUTC);
                                    break;

                                case "API_URL_GENERIC":
                                    env.log("actualiza sensor generico");
                                    sensor.updateGenericSensorStatus(sensorValue, timeUTC);

                                    break;

                                case "API_URL_HUMIDITY":
                                    env.log("actualiza sensor de humedad");
                                    sensor.updateHumiditySensorStatus(sensorValue, timeUTC);
                                    break;

                                case "API_URL_VOLTAGE":
                                    env.log("actualiza sensor de voltage");
                                    sensor.updateVoltageSensorStatus(sensorValue, timeUTC);
                                    break;

                                case "API_URL_WEIGHT":
                                    env.log("actualiza sensor de peso");
                                    sensor.updateWeightSensorStatus(sensorValue, timeUTC);
                                    break;

                                default:
                                    env.log("no actualiza: " + meassureInfo.URL_TYPE);
                                    break;
                            }
                        } catch {
                            env.log("problemas con el time seguro");
                        }
                    }
                } else env.log("Medida fuera del modelo: " + mappingCNE[element.tagname]);
            } else env.log(`Timestamp viejo: ${mappingCNE[element.tagname]} - ${element.tagname}`);
        } else env.log(`No se encontró endpoint de: ${mappingCNE[element.tagname]} - ${element.tagname}`);
    });

}

function buildDownlink(device, endpoint, command, payload) {
    payload.buildResult = downlinkBuildResult.ok;



    //reemplazar las variables por los datos enviados por el metodo downlink
    let address = endpoint.address;
    let value = command.management.setValue.newValue;

    if ((address == 'WHP_LT') && (value < 0 || value > 2321)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-2321).", es: "Valor ingresado fuera del rango (0-2321)." };
    }
    if ((address == 'WHP_HT') && (value < 0 || value > 2321)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-2321).", es: "Valor ingresado fuera del rango (0-2321)." };
    }
    if ((address == 'LP_LT') && (value < 0 || value > 2321)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-2321).", es: "Valor ingresado fuera del rango (0-2321)." };
    }
    if ((address == 'LP_HT') && (value < 0 || value > 2321)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-2321).", es: "Valor ingresado fuera del rango (0-2321)." };
    }
    if ((address == 'AP_LT') && (value < 0 || value > 3626)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-3626).", es: "Valor ingresado fuera del rango (0-3626)." };
    }
    if ((address == 'AP_HT') && (value < 0 || value > 3626)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-3626).", es: "Valor ingresado fuera del rango (0-3626)." };
    }
    //genero el payload MQTT par el telecomando
    var obj = `{
                        "method":"sendTelemeter",
                        "params":{
                            "$__ENDPOINT": $__VALUE
                        }
                        }`;

    //reemplazo los valores de endpoint y valor 
    obj = obj.replace("$__ENDPOINT", address);
    obj = obj.replace("$__VALUE", value);

    //convierto obj a JSON
    var jsonAsString = JSON.parse(obj);

    payload.setAsJsonObject(jsonAsString);

    switch (command.type) {
        case commandType.management:
            switch (command.management.type) {
                case managementCommandType.setValue:

                    payload.setAsJsonObject(jsonAsString);
                    break;

                default:
                    payload.buildResult = downlinkBuildResult.unsupported;
                    break;
            }
            break;
        default:
            payload.buildResult = downlinkBuildResult.unsupported;
            break;
    }

}

function parseUplink(device, payload)
{
	// This function allows you to parse the received payload, and store the 
	// data in the respective endpoints. Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device that produced the payload. 
	//   You can use "device.endpoints" to access the collection 
	//   of endpoints contained within the device. More information
	//   at https://wiki.cloud.studio/page/205
	// - payload: object containing the payload received from the device. More
	//   information at https://wiki.cloud.studio/page/208.

	// This example is written assuming a temperature and humidity sensor that 
	// sends a binary payload with temperature in the first byte, humidity 
	// in the second byte, and battery percentage in the third byte.

/*  
	// Payload is binary, so it's easier to handle as an array of bytes
	var bytes = payload.asBytes();
	
	// Verify payload contains exactly 3 bytes
	if (bytes.length != 3)
		return;

	// Parse and store temperature
	var temperatureSensor = device.endpoints.byType(endpointType.temperatureSensor);
	if (temperatureSensor != null)
	{
		var temperature = bytes[0] & 0x7f;
		if (bytes[0] & 0x80)  // Negative temperature?
			temperature -= 128;
		temperatureSensor.updateTemperatureSensorStatus(temperature);
	}

	// Parse and store humidity
	var humiditySensor = device.endpoints.byType(endpointType.humiditySensor);
	if (humiditySensor != null)
	{
		var humidity = bytes[1];
		humiditySensor.updateHumiditySensorStatus(humidity);
	}	  
	
	// Parse and store battery percentage
	var batteryPercentage = bytes[2];
	device.updateDeviceBattery({ percentage: batteryPercentage });
*/

}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}