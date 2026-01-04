const diffInHours = (start, end) =>
    (new Date(end) - new Date(start)) / 3600000;

const getWeekStart = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - d.getDay());
    return d;
};

module.exports = { diffInHours, getWeekStart };
