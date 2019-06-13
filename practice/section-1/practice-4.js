'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.map(a => a.key).filter(k => objectB.value.includes(k));
}
