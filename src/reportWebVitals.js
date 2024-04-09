// Path: <rootDir>/src/reportWebVitals.js
//
// Report web vitals to an analytics endpoint.

/**
 * CURRENTLY UNUSED
 * Report web vitals to an analytics endpoint.
 *
 * @param {function} onPerfEntry - Callback function to report web vitals.
 * @returns {void}
 */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
