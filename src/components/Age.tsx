import './css/Age.css'
import { useState } from 'react';
import { GetDynamicStyle } from '../controller/getDynamicStyle';

interface AgeProps {
  mode: string
}

export default function Age(props: AgeProps) {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (!startDate || !endDate) {
      alert('Please enter both start and end dates.');
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start > end) {
      alert('Start date cannot be bigger than End date.');
      return;
    }

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const ageInMilliseconds = new Date(diffTime);
    const years = ageInMilliseconds.getFullYear() - 1970;
    const months = ageInMilliseconds.getMonth();
    const days = ageInMilliseconds.getDate();

    setAge(`${years} years, ${months} months, ${days} days`);
  }

  const currentStyle = new GetDynamicStyle(props.mode);
  const textColor = currentStyle.textColor();

  return (
    <div className='age-container' style={{ color: textColor }}>
      <h2>Age Utility</h2>
      <p>The Age Utility can determine the age or interval between two dates. The calculated age will be displayed in years, months, and days.</p>
      <div className="age-input-container" style={{ width: '75%' }}>
        <label htmlFor="start" className="age-label">Start Date:</label>
        <input type="date" id="start" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="age-input" />
      </div>
      <div className="age-input-container" style={{ width: '75%' }}>
        <label htmlFor="end" className="age-label">End Date:</label>
        <input type="date" id="end" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="age-input" />
      </div>
      <button onClick={calculateAge} className="age-button">Calculate Age</button>
      {age !== '' && <strong className="age-result"><br/>Age: {age}</strong>}
    </div>
  );
}