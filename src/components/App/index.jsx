import React from 'react';
import './App.css';

import { ReactComponent as GithubIcon } from '../../assets/images/github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/linkedin.svg';
import { ReactComponent as MediumIcon } from '../../assets/images/medium.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images/facebook.svg';

import SocialLink from '../SocialLink';

const App = () => (
  <div className="App">
    <div className="Overlay" />
    <div className="Wrapper">
      <header>kawere wagaba</header>
      <main>
        <div>Creator</div>
        <div>Human</div>
        <div>Curious</div>
      </main>
      <footer>
        <SocialLink icon={<GithubIcon />} href="https://github.com/colinwagaba" />
        <SocialLink icon={<LinkedInIcon />} href="https://www.linkedin.com/in/colinwagaba/" />
        <SocialLink icon={<MediumIcon />} href="https://medium.com/@colinwagaba" />
        <SocialLink icon={<InstagramIcon />} href="https://www.instagram.com/colinwagaba/" />
        <SocialLink icon={<TwitterIcon />} href="https://twitter.com/colinwagaba" />
        <SocialLink icon={<FacebookIcon />} href="https://www.facebook.com/colinwagaba" />
      </footer>
    </div>
  </div>
);

export default App;