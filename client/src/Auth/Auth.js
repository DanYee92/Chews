import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
      domain: 'app81460790.auth0.com',
      clientID: 'Evy4W2oGK1HUFAr7XvVAcKTCq-GcF5kP',
      redirectUri: 'http://chewsapp.herokuapp.com/home' ,
      audience: 'https://app81460790.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    });
  
  
    login() {
      this.auth0.authorize();
    }

  

  
  }

  