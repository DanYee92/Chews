import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
      domain: 'chews.auth0.com',
      clientID: 'sAwLM4bd82g1nk2d408MeDQxXZfrc63D',
      redirectUri: 'http://localhost:3000/home' ,
      audience: 'https://chews.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    });
  
    login() {
      this.auth0.authorize();
    }
  }