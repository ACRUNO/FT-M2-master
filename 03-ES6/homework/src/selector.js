var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++){
    var result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...result];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '#'){return 'id'}
  else if (selector[0] === '.'){return 'class'}
  else if (selector.includes('.')){return 'tag.class'}
  else {return 'tag'}
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = elemento =>{
    return `#${elemento.id}` === selector;
   }
  } else if (selectorType === "class") {
    matchFunction = elemento =>{
    return elemento.classList.contains(selector.substring(1));
   }
  } else if (selectorType === "tag.class") {
    matchFunction = elemento =>{
      let [t, c] = selector.split('.');
      return matchFunctionMaker(t)(elemento) && matchFunctionMaker(`.${c}`)(elemento) // resuelto con recursividad por el profe
      // if(elemento.tagName.toLowerCase() === tag && elemento.classList.contains(class)){return true}
      // return false;
    }
    
  } else if (selectorType === "tag") {
    matchFunction = elemento =>{
      return elemento.tagName.toLowerCase() === selector
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
