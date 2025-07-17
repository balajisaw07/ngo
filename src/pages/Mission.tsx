import React from 'react';
import VisionMission from '../components/VisionMission';

const Mission = () => (
  <div className="min-h-screen py-20">
    {/* If VisionMission splits vision and mission, use only mission part. Otherwise, show both or add a note. */}
    <VisionMission />
  </div>
);

export default Mission;
