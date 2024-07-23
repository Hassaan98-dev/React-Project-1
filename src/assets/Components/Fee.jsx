import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import { ThemeContext } from '../Context/ThemeContext'
import ReactDom from 'react-dom'
function Fee() {
    const {values}=useTheme(ThemeContext);
  return (
    <section className='fee-section' style={values('rgb(44, 49, 56)','white','#4d6c92','#072F60')}>
        <div className="monthly-fee">
            <h5>Quran Courses Monthly Fee</h5>
            <p>The below mentioned fee is implemented on Monthly basis for all courses after the satisfaction of Free trial session.</p>
        </div>
        <div className="fee-discount">
            <h5>Family Discount Package:</h5>
            <p>We know that families often have to make sacrifices to afford tuition fee. That's why we have made our Fee Packages as affordable as possible.</p>
            <p><b>20%</b> tuition discount will be awarded to 2nd sibling & subsequent children of a family.
            Fee is accepted via PayPal by using credit or debit cards.</p>
        </div>
        <div className="monthly-plan">
            <h5>Monthly Fee Plans:</h5>
            <p><b>Class Type:</b> 1 on 1 Live Separate Lessons.</p>
            <p><b>Class Duration:</b>30 Minutes each Session.</p>
        </div>
        <div className="country-plans">
             <table>
                <tr>
                    <th>Lesson Plan</th>
                    <th>Lesson/Month</th>
                    <th>Fee/Month</th>
                    <th>For 2nd Sibling</th>
                </tr>
                <tr>
                    <td><b>5 Lessons/Week</b></td>
                    <td>20 Lessons in Month</td>
                    <td>$ 56 /Month</td>
                    <td>$ 45 /Month</td>
                </tr>
                <tr>
                    <td><b>4 Lessons/Week</b></td>
                    <td>16 Lessons in Month</td>
                    <td>$ 47 /Month</td>
                    <td>$ 38 /Month</td>
                </tr>
                <tr>
                    <td><b>3 Lessons/Week</b></td>
                    <td>12 Lessons in Month</td>
                    <td>$ 38 /Month</td>
                    <td>$ 30 /Month</td>
                </tr>
                <tr>
                    <td><b>2 Lessons/Week</b></td>
                    <td>8 Lessons in Month</td>
                    <td>$ 28 /Month</td>
                    <td>$ 22 /Month</td>
                </tr>
             </table>
             <button>Book your free trail</button>
        </div>
    </section>
  )
}

export default Fee