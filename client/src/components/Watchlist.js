import React, { useState } from 'react';

const Watchlist = ({ prices, addSymbol }) => {
    const [newSymbol, setNewSymbol] = useState('');

    const handleAddSymbol = () => {
        addSymbol(newSymbol);
        setNewSymbol('');
    };

    return (
        <div>
            <h2>Watchlist</h2>
            <input 
                type="text" 
                value={newSymbol} 
                onChange={(e) => setNewSymbol(e.target.value)} 
                placeholder="Enter stock symbol" 
            />
            <button onClick={handleAddSymbol}>Add</button>

            <ul>
                {prices.map(price => (
                    <li key={price.symbol}>
                        {price.symbol}: ${price.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Watchlist;
