export class SpaceTrader {
  url: string;
  api_token: string;
  
  constructor(user_token: string, url: string) {
    this.url = url;
    this.api_token = user_token;
  }

  async getRequest(url = "") {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.api_token}`
      }    
    });
    return response.json();
  }

  async get_agent() {
    let endpoint:string = this.url + '/my/agent';
    return await this.getRequest(endpoint);;
  }
}