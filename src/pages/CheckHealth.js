import React, { useState } from 'react';
import './CheckHealth.css'; // ✅ Import CSS

export default function CheckHealth() {
  const [bp, setBp] = useState('');
  const [sugar, setSugar] = useState('');
  const [result, setResult] = useState('');

  const checkHealth = () => {
    let res = '';
    if (bp > 140) res += 'High BP. ';
    if (bp < 90) res += 'Low BP. ';
    if (sugar > 140) res += 'High Sugar. ';
    if (sugar < 70) res += 'Low Sugar. ';
    if (!res) res = 'Normal!';
    setResult(res);
  };

  return (
    <div className="check-container">
      <div className="check-form">
        <h2>Check Your Health</h2>
        <input placeholder="Enter BP" value={bp} onChange={e => setBp(e.target.value)} />
        <input placeholder="Enter Sugar" value={sugar} onChange={e => setSugar(e.target.value)} />
        <button onClick={checkHealth}>Check</button>
        {result && <p className="result">Result: {result}</p>}
      </div>
    </div>
  );
}
