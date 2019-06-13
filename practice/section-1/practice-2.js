'use strict';

function collectSameElements(collectionA, collectionB) {
  let collection = collectionB.flat();
  return collectionA.filter(a => collection.includes(a));
}
