function convertCurrency() {
    const form = document.getElementById('currency-form');
    const fromCurrency = form.fromCurrency.value;
    const toCurrency = form.toCurrency.value;
    const amount = parseFloat(form.amount.value);
    const exchangeRates = {
        USD: 1.0,
        EUR: 0.92,
        INR: 82.69,
        CAD :1.35,
        EGP :30.9,
        BRL :4.93,
        IDR :15240,
        MYR :4.64,
        PHP :56.54,
        PKR :305.25
       
    };

    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        alert('Invalid currency selection.');
        return;
    }

    const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];

    document.getElementById('result').innerHTML = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
