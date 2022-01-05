import React from 'react'

const DayCarePricing = () => {
  return (
    <div className="pricing">
      <table>
        <thead>
          <tr>
            <th>Full Day</th>
            <th>Half Day</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 time drop in $39 (with discretion)</td>
            <td>1 time drop in $28 (5hrs)</td>
          </tr>
          <tr>
            <td>5 times $185 ($37)</td>
            <td>5 times $135 ($27)</td>
          </tr>
          <tr>
            <td>10 times $360 ($36)</td>
            <td>10 times $260 ($26)</td>
          </tr>
          <tr>
            <td>15 times $510 ($34)</td>
            <td>15 times $360 ($24)</td>
          </tr>
          <tr>
            <td>20 times $660 ($33) </td>
            <td>20 times $460 ($23)</td>
          </tr>
        </tbody>
      </table>
      <h4>20% off for second dog (from same household)</h4>
      <h4>
        Hourly rate / full day extension: $13
        <br />
        Late Pickup: $15 for first 20 minutes, and $20 every 15 mins after
      </h4>
    </div>
  )
}

export default DayCarePricing
