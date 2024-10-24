const axios = require('axios');

exports.getStockPrices = async (req, res) => {
    const { symbols } = req.body;
    const apiKey = process.env.API_KEY;
    
    try {
        const promises = symbols.map(symbol => 
            axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${apiKey}`)
        );
        
        const results = await Promise.all(promises);
        const prices = results.map(response => ({
            symbol: response.data['Meta Data']['2. Symbol'],
            price: response.data['Time Series (1min)'][Object.keys(response.data['Time Series (1min)'])[0]]['4. close']
        }));

        res.json(prices);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching stock prices', error });
    }
};
