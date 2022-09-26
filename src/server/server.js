import express from 'express';
import ReactDOM from 'react-dom/server';
import axios from 'axios';
import { App } from '../App';
import { indexHTMLTemplate } from './indexHTMLTemplate';
import { CLIENT_ID, CURRENT_URL, SECRET } from '../../config';
import compression from 'compression'
import helmet, { contentSecurityPolicy } from 'helmet';
import { env } from 'process';

const IS_DEV = env.NODE_ENV !== 'production'
const PORT = env.PORT || 3000;
const server_port = env.PORT || 3000;
const server_host = env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';
const url = env.NODE_ENV === 'production' ? CURRENT_URL : env.CURRENT_URL;
const client = env.NODE_ENV === 'production' ? CLIENT_ID : env.CLIENT_ID;
const secr = env.NODE_ENV === 'production' ? SECRET : env.SECRET;


const app = express();

if (!IS_DEV) {
app.use(compression())
app.use(helmet({
  contentSecurityPolicy: false,
}))
}

app.use('/static', express.static('./dist/client'));

try {
    app.get('/auth', (req, res) => {
      axios
        .post(
          'https://www.reddit.com/api/v1/access_token',
          `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://react-reddit-app-archunter.herokuapp.com/auth`,
          {
            auth: {
              username: 'NND_s0VYRmcBTnt4MACW0w',
              password: 'RvgmFM3a6pR0MrB6THQp2VDAvPOkXg',
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
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
} catch {(error) => {
  console.log(error)
  indexHTMLTemplate(ReactDOM.renderToString(App()), String(error.message));
}};


app.get('*', (req, res) => {
  req.query.code;
  res.send(
   indexHTMLTemplate(ReactDOM.renderToString(App())),
  );
});

// process.env.NODE_ENV === 'production' ?

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
  })

// :

// app.listen(server_port, server_host, function() {
//   console.log(`Server started on http://${server_host}:${server_port}`);
// });

