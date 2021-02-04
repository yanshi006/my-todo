import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   palette: {
//     primary: '#041'
//   },
//   status: {
//     am: '#03fc35',
//     // pm: '#03dffc',
//     // ev: '#c603fc'
//   }
// });

ReactDOM.render(
  // <ThemeProvider theme={theme}>
    <App />,
  // </ThemeProvider>,
  document.getElementById('root')
)