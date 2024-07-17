import React, { useState } from "react";
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../dashboard/dashboard.css'



export default function Dashboard({accountOverviewStub}) {
  
    function percentage(value1, value2){
        return (value1 * 100) / value2;
    }

return(
<div className="dashboard">  

        <div className='description'>
        <FontAwesomeIcon icon={faUpload} className='uploadIcon'/>
        <FontAwesomeIcon icon={faInfoCircle} className='infoIcon'/>
        <h3>Sales</h3>
            <h4>You had <strong>{accountOverviewStub.salesOverview.uploads} uploads</strong> and <strong>{accountOverviewStub.salesOverview.linesAttempted}</strong> lines added</h4>
          </div>

        <div className='description2'>
            <div className='upload'>
            <h2 data-testid="uploadPercentage">{percentage(accountOverviewStub.salesOverview.successfulUploads, accountOverviewStub.salesOverview.uploads)}%</h2>
            <h3>UPLOAD SUCCESS</h3>
            </div>
            <div className='lines'>
            <h2 data-testid="linesPercentage" >{percentage(accountOverviewStub.salesOverview.linesSaved ,accountOverviewStub.salesOverview.linesAttempted)}%</h2>
            <h3>LINES SAVED</h3>
            </div>
        </div>
  </div>    
  );
}
