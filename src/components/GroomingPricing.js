import React from 'react'

const GroomingPricing = () => {
  return (
    <div className="pricing">
      <table>
        <thead>
          <tr>
            <th> </th>
            <th>Bath and Tidy</th>
            <th>Full Groom</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mini Dogs</td>
            <td>$50+</td>
            <td>$85+</td>
          </tr>
          <tr>
            <td>Small Dogs</td>
            <td>$55+</td>
            <td>$90+</td>
          </tr>
          <tr>
            <td>Medium Dogs</td>
            <td>$70+</td>
            <td>$100+</td>
          </tr>
          <tr>
            <td>Large Dogs</td>
            <td>$85+</td>
            <td>$130+</td>
          </tr>
          <tr>
            <td>X-Large Dogs</td>
            <td>$100+</td>
            <td>$160+</td>
          </tr>
        </tbody>
      </table>
      <h4>Please contact us for more detailed pricing.</h4>
      <h2>Cancellations and No-Shows</h2>
      <p>
        In the event that you need to change or cancel your dog’s spa
        appointment we require 48 hours notice. Late cancellations will result
        in a $50 + GST no-show charge, which must be paid in order to book a
        future grooming appointment with us.
      </p>
    </div>
  )
}

export default GroomingPricing
