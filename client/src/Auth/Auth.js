import auth0 from "auth0-js";
import Auth0Lock from "auth0-lock"
import createHistory from "history/createBrowserHistory";
const history = createHistory();


let options = {
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
    
    primaryColor: 'tomato',
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
   // Listening for the authenticated event
this.lock.on("hash_parsed", function(authResult) {
  // Use the token in authResult to getUserInfo() and save it to localStorage
  this.lock.getUserInfo(authResult.accessToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }

    document.getElementById('nick').textContent = profile.nickname;

    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
  });
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

