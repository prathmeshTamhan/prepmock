import React from "react";
import FeatureBox from '../FeatureBox/FeatureBox'
import featureimage from '../../images/service-illu.svg';
import featureimage1 from '../../images/service-illu2.svg';
import featureimage2 from '../../images/service-illu2.svg';
function Feature() {
  return (
    <section id="features" className=" ">
      <h2 id="heading-service" >Our Services</h2>
      <div className="a-container ">     
        <FeatureBox image={featureimage} title= 'Mock Interview'/>
        <FeatureBox image={featureimage1} title='Video Conferencing'/>
      </div>
    </section>
  );
}

export default Feature;
