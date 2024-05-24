import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";

import weatherImg from '../assets/images/cheap_price.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import dailyplanning from '../assets/images/dailyplanning.png'
import cardmemb from '../assets/images/card.png'


const servicesData = [
  {
    imgUrl: weatherImg,
    title: 'Cheap Prices',
    desc: " Experience unparalleled value with our budget-friendly rates.",
  },
  {
    imgUrl: dailyplanning,
    title: 'Personalized Day Plans',
    desc: " Recommends top attractions, activities, dining venues, and transportation options for a well-rounded experience.",
  },
  {
    imgUrl: cardmemb,
    title: 'Exclusive Discounts for Card Members',
    desc: " Access to special offers and discounts reserved exclusively for cardholders.",
  },
  {
    imgUrl: guideImg,
    title: ' Comprehensive Guide for Effortless Exploration    ',
    desc: " Provides a comprehensive guide for travelers to navigate new cities or destinations effortlessly.",
  },

]



const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) =>
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
          <ServiceCard item={item} />
        </Col>
      )}
    </>
  )
}

export default ServiceList