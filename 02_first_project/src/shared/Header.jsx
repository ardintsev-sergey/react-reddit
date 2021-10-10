import {hot} from 'react-hot-loader/root';
import * as React from 'react';

function HeaderComponent() {
  return (
    <header>
      <h1>Reddit for our own</h1>
      <h2>Hello React</h2>
    </header>
  )
}
export const Header = hot(HeaderComponent);