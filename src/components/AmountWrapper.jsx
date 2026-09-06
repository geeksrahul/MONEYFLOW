const AmountWrapper = ({ amount }) => {
    const value = Number(amount);
    if (Number.isNaN(value)) {
        return <>Invalid Amount</>;
    }
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