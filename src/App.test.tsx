import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div') as HTMLElement;

  ReactDOM.render(<App />, div);
});