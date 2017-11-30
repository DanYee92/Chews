import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "app81460790.auth0.com",
    clientID: "Evy4W2oGK1HUFAr7XvVAcKTCq-GcF5kP",
    redirectUri: "http://localhost:3000/home",
    audience: "https://app81460790.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    console.log("working?");
    console.log(this);
    return this.auth0.authorize();
  }
}
