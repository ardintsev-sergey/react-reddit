import express from 'express';
import ReactDOM from 'react-dom/server';
import axios from 'axios';
import { App } from '../App';
import { indexHTMLTemplate } from './indexHTMLTemplate';

/* eslint-disable no-undef */
export const PORT = process.env.PORT || 3000;
/* eslint-disable no-undef */
export const CURRENT_URL = process.env.NODE_ENV === 'production' ? 'https://react-reddit-app-archunter.herokuapp.com/auth' : 'http://localhost:3000/auth';
/* eslint-disable no-undef */
export const CLIENT_ID = process.env.NODE_ENV === 'production' ? 'NND_s0VYRmcBTnt4MACW0w' : 'ETbnmE0Nvnz6m7rCR9gFUw';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${CURRENT_URL}`,
    {
      auth: {username: CLIENT_ID, password: process.env.SECRET},
      headers: {'Content-type': 'application/x-www-form-urlencoded'}
    }
  )
  .then(({ data }) => {
    res.send(
      indexHTMLTemplate(ReactDOM.renderToString(App()), data['access_token']),
     );
  });
});

app.get('*', (req, res) => {
  req.query.code;
  res.send(
   indexHTMLTemplate(ReactDOM.renderToString(App())),
  );
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
