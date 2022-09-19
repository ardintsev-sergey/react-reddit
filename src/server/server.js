import express from 'express';
import ReactDOM from 'react-dom/server';
import axios from 'axios';
import { App } from '../App';
import { indexHTMLTemplate } from './indexHTMLTemplate';
import { CLIENT_ID, CURRENT_URL, SECRET } from '../../config';
import compression from 'compression'
import helmet, { contentSecurityPolicy } from 'helmet';
import { env } from 'process';

const IS_DEV = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000;
const server_port = process.env.PORT || 3000;
const server_host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';
// server.listen(server_port, server_host, function() {
//     console.log('Listening on port %d', server_port);
// });

const app = express();

if (!IS_DEV) {
app.use(compression())
app.use(helmet({
  contentSecurityPolicy: false,
}))
}

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${CURRENT_URL}`,
      // `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${CURRENT_URL}`,
      {
        auth: {username: CLIENT_ID, password: SECRET},
        headers: {'Content-type': 'application/x-www-form-urlencoded'}
      }
    )
    .then(({ data }) => {
      res.send(
        indexHTMLTemplate(ReactDOM.renderToString(App()), data['access_token']),
      );
    })
    .catch((error) => {
      console.log(error)
      indexHTMLTemplate(ReactDOM.renderToString(App()), String(error.message));
    });
});

app.get('*', (req, res) => {
  req.query.code;
  res.send(
   indexHTMLTemplate(ReactDOM.renderToString(App())),
  );
});

// process.env.NODE_ENV === 'production' ?

//   app.listen(PORT, () => {
//     console.log(`Server started on http://localhost:${PORT}`)
//   })

// :

app.listen(server_port, server_host, function() {
  console.log(`Server started on http://${server_host}:${server_port}`);
});

