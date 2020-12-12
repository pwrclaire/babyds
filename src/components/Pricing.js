import React from 'react'

const Pricing = () => {
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
            <td>1 time drop in $35 (with discretion)</td>
            <td>1 time drop in $24 (5hrs)</td>
          </tr>
          <tr>
            <td>5 times $170 ($34)</td>
            <td>5 times $115 ($23)</td>
          </tr>
          <tr>
            <td>10 times $320 ($32.50)</td>
            <td>10 times $215 (21.50)</td>
          </tr>
          <tr>
            <td>20 times $610 ($30.50) </td>
            <td>20 times $410 (20.50)</td>
          </tr>
          <tr>
            <td>Monthly pass $540 ($27)</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h4>25% off for second dog (from same household)</h4>
      <table>
        <thead>
          <tr>
            <th>2nd dog full day</th>
            <th>2nd dog half day</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 time $26.25</td>
            <td>1 time $18</td>
          </tr>
          <tr>
            <td>5 times $123.75 (24.75)</td>
            <td>5 times 86.25 (17.25)</td>
          </tr>
          <tr>
            <td>10 times $232.5 (23.25)</td>
            <td>10 times 163.13 (16.31)</td>
          </tr>
          <tr>
            <td>20 times $427.5 (21.38)</td>
            <td>20 times 303.75 (15.19)</td>
          </tr>
          <tr>
            <td>Monthly pass $390</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h4>
        Hourly rate $10
        <br />
        Late Pickup: $15 every 30 minutes.
      </h4>
    </div>
  )
}

export default Pricing
