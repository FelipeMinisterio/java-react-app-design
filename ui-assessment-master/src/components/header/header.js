import React from "react";
import '../header/header.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Header({ accountOverviewStub }) {
  return (
    <header className="accountOverview">
      <h1>Account Overview</h1>
      <div className='supportContact'>
        <h3>YOUR FEEFO SUPPORT CONTACT</h3>
        <div className='divide'>
          <div className='supportIcon'>
            <strong>S</strong>
          </div>
          <div>
          <h4>
            <strong>{accountOverviewStub.supportContact.name}</strong>
          </h4>
          <h5>
              <FontAwesomeIcon icon={faEnvelope} className='emailIcon' />
              {accountOverviewStub.supportContact.email}</h5>
          </div>
          <h5 style={{ marginTop: 29, marginLeft: 23 }}>{accountOverviewStub.supportContact.number}</h5>
        </div>
      </div>
    </header>
  );
}