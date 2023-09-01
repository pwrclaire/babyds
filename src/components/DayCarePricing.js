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
            <td>1 Day Pass $45</td>
            <td>1 Day Pass $32</td>
          </tr>
          <tr>
            <td>5 Day Package $215 ($43)</td>
            <td>5 Day Package $155 ($31)</td>
          </tr>
          <tr>
            <td>10 Day Package $410 ($41)</td>
            <td>10 Day Package $290 ($29)</td>
          </tr>
          <tr>
            <td>20 Day Package $760 ($38) </td>
            <td>20 Day Package $520 ($26)</td>
          </tr>
        </tbody>
      </table>
      <h4>20% off for second dog (from same household)</h4>
      <h4>
        Hourly rate / full day extension: $15
        <br />
        Late Pickup: $15 for first 20 minutes, and $20 every 15 mins after
      </h4>
    </div>
  )
}

export default DayCarePricing
