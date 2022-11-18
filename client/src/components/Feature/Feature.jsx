import React from "react";
import FeatureBox from '../FeatureBox/FeatureBox'
import featureimage from '../../images/feature_1.png';
import featureimage1 from '../../images/feature_2.png';
import featureimage2 from '../../images/feature_3.png';
function Feature() {
  return (
    <div id="features">
      <h2 id="heading-service" >Our Services</h2>
      <div className="a-container">     
        <FeatureBox image={featureimage} title= 'Mock Interview Preparation'/>
        <FeatureBox image={featureimage1} title='Video Conferencing'/>
      </div>
    </div>
  );
}

export default Feature;
