const getFullMonth = (month) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}

const getLastSixMonth = () => {
    const date = new Date();
    let currentMonth = date.getMonth();
    const lastSixMonths = [];
    for(let i=0; i<6; i++) {
        lastSixMonths.push(currentMonth);
        currentMonth = currentMonth - 1;
    }
    return lastSixMonths;
}

export {getFullMonth, getLastSixMonth}