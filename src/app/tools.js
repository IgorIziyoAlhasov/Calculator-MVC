function composeHTMLElement(name, setup, content) {
  let element = document.createElement(name);
  if (setup && setup.classes.length > 0) {
    setup.classes.map((className) => element.classList.add(className));
  }

  if (content) {
    element.innerText = content;
  }

  return element;
}

export { composeHTMLElement };
