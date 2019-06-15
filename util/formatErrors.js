// This is used to form an error response that adheres to JSON:API spec
export default (...errorTitles) => {
  const errors = errorTitles.map(title => ({ title }));

  return JSON.stringify({ errors });
};