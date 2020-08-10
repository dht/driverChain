let timeout;

function debounce(callback, delay) {
  clearTimeout(timeout);
  timeout = setTimeout(callback, delay);
}

module.exports = debounce;
