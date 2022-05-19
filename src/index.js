// @react
import React from 'react';
import ReactDOM from 'react-dom/client';
// @app
import { App } from './app.component';
// @provider
import { BrowserRouter as Router } from 'react-router-dom';
import { CentredProvider, ValuesProvider, ToolbarProvider } from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <ValuesProvider>
      <CentredProvider>
        <ToolbarProvider>
          <App />
        </ToolbarProvider>
      </CentredProvider>
    </ValuesProvider>
  </Router>
);
