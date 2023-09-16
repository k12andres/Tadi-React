import React from 'react';
import Header from './components/header/header';
import LawnCareProviderRegistration from './components/lawncare-reg/lawncare-reg';
import ClientRegistration from './components/client-reg/client-reg';
import Search from './components/search/search';
import BookingComponent from './components/booking/booking';
import ProviderDashboard from './components/dashboards/providerdashboard';
import ClientDashboard from './components/dashboards/clientdashboard';

const App = () => {
  return (
    <>
      <Header />
      <LawnCareProviderRegistration />
      <ClientRegistration />    
      <Search />
      <BookingComponent />
      <ProviderDashboard />
      <ClientDashboard />
    </>
  )
}


export default App;
