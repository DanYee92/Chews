import Auth0Lock from "auth0-lock";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

const options = {
  auth: {
    // history documentation
    // https://www.npmjs.com/package/history
    redirectUrl: "http://localhost:3000/home",
    responseType: "token",
  
    
    params: {
      scope: "openid" // Learn about scopes: https://auth0.com/docs/scopes,
    }
  },
  
  allowSignUp: false,

  theme: {
    logo: require("../images/ChewsLogoCookie.png"),
    primaryColor: "tomato"
  },
  languageDictionary: {
    emailInputPlaceholder: "something@youremail.com",
    title: "chews"
  }
};



const optionsSignUp = {
  auth: {
    redirectUrl: "http://localhost:3000/api/user/create",
    responseType: "token",
    

    params: {
      scope: "openid" // Learn about scopes: https://auth0.com/docs/scopes,
    }
  },

  allowLogin: false, 

  theme: {
    logo: require("../images/ChewsLogoCookie.png"),
    primaryColor: "tomato"
  },
  languageDictionary: {
    emailInputPlaceholder: "something@youremail.com",
    title: "chews"
  }
};





export default class Auth {
  lock = new Auth0Lock(
    "Evy4W2oGK1HUFAr7XvVAcKTCq-GcF5kP",
    "app81460790.auth0.com",
    options
  );

  lockSignUp = new Auth0Lock(
    "Evy4W2oGK1HUFAr7XvVAcKTCq-GcF5kP",
    "app81460790.auth0.com",
    optionsSignUp
  );

  

  


  constructor() {
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    return this.lock.show();
  }

  signUp() {
    return this.lockSignUp.show();
  }

  logout() {
    console.log("logging out???")
    // Clear access information from local storage
    localStorage.removeItem("expires_at");
    localStorage.removeItem("userId");
    localStorage.clear("accessToken")
    
    
    // navigate to the home route
    history.replace("/home");
    
  
    
  }




  

  
}

