/**
 * 
 * @param {string} name 
 * @param {Object} setup 
 * @param {string} [setup.id] 
 * @param {string[]} setup.classes 
 * @param {(string|HTMLElement)} content 
 * @returns 
 */
function composeHTMLElement(name, setup, content) {
  let element = document.createElement(name);
  if (setup) {
    if (setup.classes && setup.classes.length > 0) {
      setup.classes.map((className) => element.classList.add(className));
    }
  }

  if (content) {
    element.innerText = content;
  }

  return element;
}

export { composeHTMLElement };
