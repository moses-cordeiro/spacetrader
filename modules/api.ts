export class SpaceTrader {
  api_token: string;
  constructor(user_token: string) {
    if (user_token !== undefined) {
      this.api_token = user_token;
    } else {
      throw new Error("You need to provide an API token");
    }
  }

  get_token() {
    return this.api_token;
  }
}