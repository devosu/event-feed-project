import './ziqi.css';
import Image from 'next/image'
import blank_image from './blank_event_image.png'
import default_club_icon from './default_club_icon.png'
import React from 'react';

/**
 * @returns {ReactElement} The React element.
 */
export default function Ziqi() {
  return (
    <div className = "event-block">

      <div className = "image-gallary-block">
        <Image src = {blank_image} width = {300} height = {221} alt=''/>
      </div>

      <div className = "basic-information-block">
        <h1>Name of the event</h1>
        <p>Date/Time</p>
        <p>Location</p>
      </div>

      <div className = "organization-block">
        <Image src = {default_club_icon} alt = 'Club Icon' className = "club-icon"/>
        <p>Club Name Here</p>
      </div>

    </div>
  );
}
