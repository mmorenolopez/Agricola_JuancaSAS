import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Juanca SAS</title>
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#008f68" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,600" />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossorigin="anonymous"
            />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" />
            <script src="https://kit.fontawesome.com/a076d05399.js"></script>
            {/* <!-- Favicon and touch icons --> */}
            <link rel="shortcut icon" href="footer_assets/ico/favicon.png" />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="144x144"
              href="footer_assets/ico/apple-touch-icon-144-precomposed.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="114x114"
              href="footer_assets/ico/apple-touch-icon-114-precomposed.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="72x72"
              href="footer_assets/ico/apple-touch-icon-72-precomposed.png"
            />
            <link rel="apple-touch-icon-precomposed" href="footer_assets/ico/apple-touch-icon-57-precomposed.png" />

            {/* <!-- MATERIAL DESIGN ICONIC FONT --> */}
            <link
              rel="stylesheet"
              href="./regforms/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css"
            />
          </Helmet>

          <BrowserRouter>
            <Main />
            <p className="App-intro">{this.state.data}</p>
          </BrowserRouter>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
