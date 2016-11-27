import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router }          from '@angular/router';
import { myConfig }        from '../_models/index';


// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  // Configure Auth0
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {
    additionalSignUpFields: [{
      name: "address",                              // required
      placeholder: "enter your address",            // required
      icon: "https://example.com/address_icon.png", // optional
      validator: function(value) {                  // optional
        // only accept addresses with more than 10 chars
        return value.length > 10;
      }
    }]
  });

  //Store profile object in auth class
  userProfile: Object;


  constructor(private router: Router) {
    // Set userProfile attribute if already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      console.log('lock.on');

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        profile.user_metadata = profile.user_metadata || {};
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });
  };

  public login() {
    // Call the show method to display the widget.
    console.log('login');
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    console.log('authenticated');
    return tokenNotExpired();
  };

  public logout() {
    // Remove token and profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
    console.log('logout');
    // Send the user back to the dashboard after logout
    this.router.navigateByUrl('');
  };
}