// ProfesionalCardItem.js
import React from 'react';
import './LogoGallery.css';

import AtlassianLogo from './utils/logos/Atlassian-Logo.png';
import AngularLogo from './utils/logos/angular_logo.png';
import JavaScriptLogo from './utils/logos/javascript-logo.png';
import OracleDbLogo from './utils/logos/oracle-db-logo.png';
import PlaywrightLogo from './utils/logos/playwright-logo.png';
import DockerLogo from './utils/logos/Docker-logo.png';
import GitLogo from './utils/logos/git-logo.png';
import MySqlLogo from './utils/logos/mysql-logo.png';
import PhpLogo from './utils/logos/php-logo.png';
import ReactLogo from './utils/logos/react-logo.png';
import JenkinsLogo from './utils/logos/Jenkins-logo.png';
import JavaLogo from './utils/logos/java-logo.png';
import OracleApexLogo from './utils/logos/oracle-apex-logo.png';
import PlSqlLogo from './utils/logos/pl-sql-logo.png';

function LogoGallery() {
  const logos = [
    AtlassianLogo,
    AngularLogo,
    ReactLogo,
    JavaScriptLogo,
    PlaywrightLogo,
    JenkinsLogo,
    DockerLogo,
    GitLogo,
    JavaLogo,
    PhpLogo,
    MySqlLogo,
    OracleDbLogo,
    OracleApexLogo,
    PlSqlLogo,
    AtlassianLogo,
    AngularLogo,
    ReactLogo,
    JavaScriptLogo,
    PlaywrightLogo,
    JenkinsLogo,
    DockerLogo,
    GitLogo,
    JavaLogo,
    PhpLogo,
    MySqlLogo,
    OracleDbLogo,
    OracleApexLogo,
    PlSqlLogo,
  ];

  return (
      <aside className='knowledge-box'>
        <div className="logo-gallery">
          {logos.map((logo, index) => (
            <figure className="logo-item" key={index}>
              <img src={logo} alt={`Logo ${index}`} />
            </figure>
          ))}
        </div>
      </aside>
  );
}

export default LogoGallery;