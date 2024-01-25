import React from 'react';
import { Link } from 'react-router-dom';

const NavigationComponent = () => (
    <nav>
        <ul> 
            <li> <Link to="./src/UserDetail.js">User Detail</Link></li>

            </ul> 
      {/* Add other navigation links as needed */}  
    </nav>
  ); 

NavigationComponent.propTypes = {}; 

export default NavigationComponent; 