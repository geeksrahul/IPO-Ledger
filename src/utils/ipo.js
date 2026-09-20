const parseDate = (dateString) => {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
};

const getIPOStatus = (ipo) => {

    const today = new Date();

    const open_date = parseDate(ipo.open_date);
    const close_date = parseDate(ipo.close_date);
    const allotment_date = parseDate(ipo.allotment_date);
    const listing_date = parseDate(ipo.listing_date);

    if (today < open_date) {
        return "upcoming";

    } else if (today <= close_date) {
        return "open";

    } else if (today < allotment_date) {
        return "closed";

    } else if (today < listing_date) {
        return "allotted";

    } else {
        return "listed";
    }
};

export default getIPOStatus;