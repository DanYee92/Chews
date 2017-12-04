import Auth0Lock from "auth0-lock";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

//Login on homepage and redirects you to the home page
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

//Signup on homepage and redirects you to user/create page
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
  },

  additionalSignUpFields: [
    {
      name: "firstName",
      placeholder: "First name",
      validator: firstName => {
        return {
          valid: firstName.length > 0,
          hint: "Please enter your first name"
        };
      }
    },
    {
      name: "lastName",
      placeholder: "Last name",
      validator: lastName => {
        return {
          valid: lastName.length > 0,
          hint: "Please enter your last"
        };
      }
    }
  ]
};

//Login and signup on bite details page
const optionsBiteSigninLogin = {
  auth: {
    redirect: false,
    responseType: "token",

    params: {
      scope: "openid" // Learn about scopes: https://auth0.com/docs/scopes,
    }
  },

  autoclose: true,

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

  bitesSigninLogin = new Auth0Lock(
    "Evy4W2oGK1HUFAr7XvVAcKTCq-GcF5kP",
    "app81460790.auth0.com",
    optionsBiteSigninLogin
  );

  constructor() {
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logout = this.logout.bind(this);
    this.bookBiteLoginSignup = this.bookBiteLoginSignup.bind(this)
    
  }

  login() {
    return this.lock.show();
  }

  signUp() {
    return this.lockSignUp.show();
  }

  bookBiteLoginSignup() {
    return this.bitesSigninLogin.show();
  }

  logout() {
    console.log("logging out???");
    // Clear access information from local storage
    localStorage.removeItem("expires_at");
    localStorage.removeItem("userId");
    localStorage.clear("accessToken");

    // navigate to the home route
    history.replace("/home");
  }
}
