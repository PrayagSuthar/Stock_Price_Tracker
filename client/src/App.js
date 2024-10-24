import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Watchlist from './components/Watchlist';

const App = () => {
    const [symbols, setSymbols] = useState([]);
    const [prices, setPrices] = useState([]);

    const fetchPrices = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/stocks/prices', { symbols });
            setPrices(response.data);
        } catch (err) {
            console.error('Error fetching stock prices', err);
        }
    };

    useEffect(() => {
        if (symbols.length > 0) {
            fetchPrices();
        }
    }, [symbols]);

    const addSymbol = (symbol) => setSymbols([...symbols, symbol]);

    return (
        <div>
            <h1>Real-time Stock Price Tracker</h1>
            <Watchlist prices={prices} addSymbol={addSymbol} />
        </div>
    );
};

export default App;
