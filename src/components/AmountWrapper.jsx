const AmountWrapper = ({ amount }) => {
    const value = Number(amount);
    if (Number.isNaN(value)) {
        return <>Invalid Amount</>;
    }
    if (value === 0) return "---"; 
    const format = "en-IN";
    const currencySymbol = "₹";
    return (
        currencySymbol +
        value.toLocaleString(format, {
            maximumFractionDigits: 0,
        }) +
        "/-"
    );
};

export default AmountWrapper;