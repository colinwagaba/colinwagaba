import React from 'react';
import './SocialLink.css';

const SocialLink = ({ icon, href }) => <a className="SocialLink" href={href} target="_NEW">{icon}</a>;

export default SocialLink;