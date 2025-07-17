import React from 'react';
import VisionMission from '../components/VisionMission';

const Vision = () => (
  <div className="min-h-screen py-20">
    {/* If VisionMission splits vision and mission, use only vision part. Otherwise, show both or add a note. */}
    <VisionMission />
  </div>
);

export default Vision; 