function createElement(tag, { text, classes = [], children = [] } = {}) {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  if (classes.length) el.classList.add(...classes);
  children.forEach(child => el.appendChild(child));
  return el;
}



export {createElement};