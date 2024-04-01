import React, { useState } from 'react';

const Currency = ({ onChange }) => {
    const [selectedCurrency, setSelectedCurrency] = useState('GBP');

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
        onChange(event.target.value);
    };

    return (
        <div style={{ backgroundColor: 'green', padding: '0.5rem', borderRadius: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'left' }}>
                <label style={{ color: 'white', marginRight: '0.5rem' }}>Currency</label>
                <select className="form-select" value={selectedCurrency} onChange={handleCurrencyChange} style={{ width: 'rem' }}>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                    {/* Add more currency options as needed */}
                </select>
            </div>
        </div>
    );
};

export default Currency;