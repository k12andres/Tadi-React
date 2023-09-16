import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import BookingComponent from './components/booking/booking';
import ProviderDashboard from './components/dashboards/providerdashboard';
import ClientDashboard from './components/dashboards/clientdashboard';
import './index.css'

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/">
            <BookingComponent />
          </Route>
          <Route path="/provider-dashboard">
            <ProviderDashboard />
          </Route>
          <Route path="/client-dashboard">
            <ClientDashboard />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
