import { SpaceTrader } from "./modules/api";
import 'dotenv/config'
import fs from 'fs';

let trader = new SpaceTrader(process.env.ST_API_TOKEN, process.env.ST_API_URL);

function dirty_logger(fileName:string, data: any) {
    let jsonData = JSON.stringify(data, null, 2)
    console.log(jsonData);
    fs.writeFileSync('./results/'+fileName, jsonData);
}

trader.get_my_waypoint().then((data) => { 
    dirty_logger('get_my_waypoint.json', data)
}); 

trader.get_my_contracts().then((data) => { 
    dirty_logger('get_my_contracts.json', data)
});