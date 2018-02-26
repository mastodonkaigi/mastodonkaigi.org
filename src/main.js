import OfflinePluginRuntime from 'offline-plugin/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

OfflinePluginRuntime.install();

const render = (element, container) => new Promise((resolve, reject) => {
  try {
    ReactDOM.render(element, container, resolve);
  } catch (error) {
    reject(error);
  }
});

async function main() {
  const container = document.getElementById('root');
  await render(
    <Router>
      <App />
    </Router>,
    container,
  );
}

main();
