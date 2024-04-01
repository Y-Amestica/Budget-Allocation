import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './Currency'; // Importa el componente Currency sin llaves {}

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState('GBP'); // Default currency
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

    return (
        <div className='d-flex justify-content-between align-items-left' style={{ borderRadius: '10px'}}>
            <div className='alert alert-primary'>
                <span>Spent so far: {selectedCurrency === 'GBP' ? '£' : '$'}{totalExpenses}</span>
            </div>
            <div>
                <Currency onChange={handleCurrencyChange} />
            </div>
            <div className='d-flex align-items-center'>
              
            
            </div>
        </div>
    );
};

export default ExpenseTotal;

