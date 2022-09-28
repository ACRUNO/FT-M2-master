var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
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
    let newId = selector.substring(1);
   function matchFunction (elemento){
    if (elemento.id === newId){return true}
    return false;
   }
  } else if (selectorType === "class") {
    let newClass = selector.substring(1);
   function matchFunction (elemento){
    if (elemento.classList.contains(newClass)){return true}
    return false;
   }
  } else if (selectorType === "tag.class") {
    
  } else if (selectorType === "tag") {
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
