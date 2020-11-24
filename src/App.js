import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './Theme';
import Home from './Home';


function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
        <Home />
    </MuiThemeProvider>
  );
}

export default App;
