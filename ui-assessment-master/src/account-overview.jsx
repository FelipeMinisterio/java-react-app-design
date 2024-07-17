import React from 'react';
import Dashboard from '../src/components/dashboard/dashboard';
import Header from '../src/components/header/header';

import './account-overview.css';

export const AccountOverview = ({data}) => {
  return (
    <div>
      <Header accountOverviewStub={data}/>
        <Dashboard accountOverviewStub={data}/>
    </div>    
  );
}

export default AccountOverview;