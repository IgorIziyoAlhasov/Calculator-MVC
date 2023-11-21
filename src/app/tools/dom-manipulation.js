/**
 * 
 * @param {string} tagName 
 * @param {Object} elementSetUp
 * @param {string} [elementSetUp.id] in case element needs an ID
 * @param {string[]} [elementSetUp.classes] in case element needs classes
 * @param {(string|HTMLElement)} content 
 * @returns 
 */
function composeHTMLElement(tagName,elementSetUp,content){
    let element = document.createElement(tagName);

    if(content instanceof HTMLElement){
        element.insertAdjacentElement("beforeend",content);
    } else {
        element.innerText = content;
    };

    if(elementSetUp){
        //setting classes
        if(elementSetUp.classes && elementSetUp.classes.length > 0){
            elementSetUp.classes.map(className => element.classList.add(className));
        }

        //setting id
        if(elementSetUp.id) element.setAttribute('id',elementSetUp.id);

    }

    return element;
}