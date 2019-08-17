import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class AppBarClass extends Component {
  render(){
    return (
        <div>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6">
                Auction House
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
  }
  
}



// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/6.4.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#reserved-urls -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>