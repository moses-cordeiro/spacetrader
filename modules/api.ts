export class SpaceTrader {
  url: string;
  api_token: string;
  
  constructor(user_token: string, url: string) {
    this.url = url;
    this.api_token = user_token;
  }

  async request(endpoint: string, method: string = "GET", data: any = null) {
    type args = {[key: string] : any}
    const fetchArgs: args = {};

    fetchArgs.method = method
    fetchArgs.headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.api_token}`
    }  

    if( !(typeof data === 'undefined' || data === null) ){ 
      fetchArgs.body = JSON.stringify(data); 
    }

    const response = await fetch(this.url+endpoint, fetchArgs);

    // TODO - Handle errors

    return response.json();
  }

  async get_my_agent() { return await this.request('/my/agent'); }

  async get_my_contracts() { return await this.request('/my/contracts'); }

  async get_my_waypoint() {
    let agentData = (await this.get_my_agent()).data;
    let splitWaypoint = agentData.headquarters.split('-');
    let endpoint:string = '/systems/' + splitWaypoint[0] + '-' + splitWaypoint[1] + '/waypoints/' + agentData.headquarters;
    return await this.request(endpoint);
  }

  // NEXT STEPS -> https://docs.spacetraders.io/quickstart/first-mission
  // Need to accept contract and progress on mining mission.
}