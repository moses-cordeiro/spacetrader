import { SpaceTrader } from "./modules/api";
import 'dotenv/config'

let trader = new SpaceTrader(process.env.ST_API_TOKEN, process.env.ST_API_URL);


trader.get_agent().then((data) => { console.log(data); }); 