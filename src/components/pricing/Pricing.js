import React from 'react';
import './pricing.css'

function Pricing() {
    return (
    <article className='card-article'>
    <ul className='pricing-ul'>
        <li className='diamond'>Room Rental 1 Hour: $50.00</li>
        <li className='diamond'>Ea. Additional Hour: $20.00 </li>
        <li className='diamond'>Car Shuttle 🚘 Trip: $10.00 </li>
        <li className='diamond'>Fast Internet: Included </li>
        <li className='diamond'>Account Setup: Included </li>
        <li className='diamond'>Special Offer for new streamers</li>
        <li className='diamond'>Social Media Promotion: Call to Discuss </li>
    </ul>
  </article>
      );
}

export default Pricing;