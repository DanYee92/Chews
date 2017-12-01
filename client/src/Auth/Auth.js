import auth0 from "auth0-js";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "app81460790.auth0.com",
    clientID: "Evy4W2oGK1HUFAr7XvVAcKTCq-GcF5kP",
    redirectUri: "http://localhost:3000/home",
    audience: "https://app81460790.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  auth0SignUp = new auth0.WebAuth({
    domain: "app81460790.auth0.com",
    clientID: "Evy4W2oGK1HUFAr7XvVAcKTCq-GcF5kP",
    redirectUri: "http://localhost:3000/create/user",
    audience: "https://app81460790.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    return this.auth0.authorize();
  }

  signUp() {
    return this.auth0SignUp.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    return this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace("/home");
      } else if (err) {
        history.replace("/home");
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    const userId = authResult.idTokenPayload.sub;

    localStorage.setItem("expires_at", expiresAt);
    localStorage.setItem("userId", userId);
    // navigate to the home route
    console.log(userId);
    history.replace("/home");
  }

  logout() {
    // Clear access information from local storage
    localStorage.removeItem("expires_at");
    localStorage.removeItem("userId");
    // navigate to the home route
    history.replace("/home");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}
