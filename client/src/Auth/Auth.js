import auth0 from "auth0-js";
import Auth0Lock from "auth0-lock"
import createHistory from "history/createBrowserHistory";
const history = createHistory();


const options = {
  auth: {
    redirectUrl: 'http://localhost:3000/home',
    responseType: 'code',
    
    params: {
      scope: 'openid', // Learn about scopes: https://auth0.com/docs/scopes,
     
    }
  },
  theme: {
    primaryColor: 'tomato'
  },
  languageDictionary: {
    emailInputPlaceholder: "something@youremail.com",
    title: "chews"
  },
}

let optionsSignUp = {
  auth: {
    redirectUrl: 'http://localhost:3000/create/user',
    responseType: 'code',
    
    params: {
      scope: 'openid', // Learn about scopes: https://auth0.com/docs/scopes,
     
    }
  },
  theme: {
    primaryColor: 'tomato'
  },

  languageDictionary: {
    emailInputPlaceholder: "something@youremail.com",
    title: "chews"
  },
}


export default class Auth {

 lock = new Auth0Lock('Evy4W2oGK1HUFAr7XvVAcKTCq-GcF5kP', 'app81460790.auth0.com', options)  
 
 lockSignUp = new Auth0Lock('Evy4W2oGK1HUFAr7XvVAcKTCq-GcF5kP', 'app81460790.auth0.com', optionsSignUp)
 
  login(){
    return this.lock.show();
  }

  signUp() {
    return this.lockSignUp.show();
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
        // this.setSession(authResult);
        history.push("/home");
        console.log("2", authResult.idTokenPayload.sub);
        return authResult.idTokenPayload.sub;
      } else if (err) {
        history.push("/home");
        console.log(err);
        return "tom";
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    localStorage.setItem("expires_at", expiresAt);
    // localStorage.setItem("userId", userId);

    // navigate to the home route
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
