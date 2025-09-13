import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const connectionString = import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING;

if (connectionString) {
  const appInsights = new ApplicationInsights({
    config: {
      connectionString: connectionString,
      autoTrackPageVisitTime: true,
    }
  });
  appInsights.loadAppInsights();
  appInsights.trackPageView(); // Tracks initial page view
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
