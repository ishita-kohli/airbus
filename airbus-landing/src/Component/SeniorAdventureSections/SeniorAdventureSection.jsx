import React from 'react';
import { Row, Col } from 'reactstrap';

import SeniorAdventureTile from './SeniorAdventureTile'; // Assuming you have a separate SeniorAdventureTile component

import feature1 from '../../assets/images/noise.png';
import feature2 from '../../assets/images/gps.png';
import feature3 from '../../assets/images/optimal.png';
import feature4 from '../../assets/images/risk.png';
import feature5 from '../../assets/images/health.png';
import feature6 from '../../assets/images/weather.png';

const seniorAdventureData = [
  {
    imgUrl: feature1,
    title: 'Noise and Electronic Failure Mitigation',
    desc: 'Electronic failures and noise can disrupt flight operations. Our mitigation services address these challenges by employing robust systems and advanced technologies that minimize the impact of noise and electronic disruptions on flight navigation.',
  },
  {
    imgUrl: feature2,
    title: 'GPS Signal Optimization',
    desc: 'In scenarios where GPS signals are unavailable or unreliable, our GPS signal optimization service ensures continuous and accurate navigation. Using alternative technologies and redundant systems, we maintain the integrity of navigation data and support uninterrupted flight operations.',
  },
  {
    imgUrl: feature3,
    title: 'Optimal Route Planning',
    desc: 'Our state-of-the-art route planning service leverages sophisticated algorithms to identify the most efficient and safest flight paths. By analyzing various factors such as weather conditions, air traffic, and potential hazards, we provide precise and actionable flight plans that save time and fuel while maximizing safety.',
  },
  {
    imgUrl: feature4,
    title: 'Real-time Risk Assessment',
    desc: 'Our real-time risk assessment service is designed to monitor and evaluate potential risks throughout the flight. Our system provides continuous updates and alerts, enabling pilots to make informed decisions and take proactive measures to ensure safety.',
  },
  {
    imgUrl: feature5,
    title: 'Health Metrics Tracking',
    desc: 'Understanding the health and performance of an aircraft is crucial for safe and efficient operations. Our health metrics tracking service integrates with flight sensor data to monitor and analyze critical parameters, providing insights into the aircraft\'s condition and performance.',
  },
  {
    imgUrl: feature6,
    title: 'Adverse Weather Management',
    desc: 'Weather can significantly impact flight safety and efficiency. Our adverse weather management service provides detailed forecasts and real-time updates on weather conditions, helping pilots navigate through challenging environments like fog, smoke, rain, and snow.',
  },
];


const SeniorAdventureSection = () => {
  return (
    <Row>
      {seniorAdventureData.map((item, index) => (
        <Col lg="4" md="4" sm="12" className="mb-4" key={index}>
          <SeniorAdventureTile item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default SeniorAdventureSection;
