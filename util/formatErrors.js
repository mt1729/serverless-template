export default (...errorTitles) => {
    const errors = errorTitles.map(title => ({ title }));

    return JSON.stringify({ errors });
};