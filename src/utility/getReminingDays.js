function getReminingDays(toDate) {
    if (toDate) {
        const toDateInstance = new Date(toDate);
        const today = new Date();
        toDateInstance.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        const reminingDays = (toDateInstance.getTime() - today) / (1000 * 60 * 60 * 24)
        return reminingDays > 0 ? Math.floor(reminingDays) : Math.ceil(reminingDays)
    }
    return 0
}

export default getReminingDays;