import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
            title="Would you rather..."
            iconElementLeft={<IconButton><ActionHome /></IconButton>}
        />
      </div>
    );
  }
}

export default Home;