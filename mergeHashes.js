/**
 * Write a function that takes two hashes (a.k.a. dictionaries), merges them together, 
 * and returns the result. The hashes might contain integers, strings, arrays of integers, 
 * and other hashes (each of which might contain the same types of objects). 
 * When a duplicate key is found:
 *
 * If the value is a string or integer, the value from the second hash should 
 * replace the value from the first
 * 
 * If the value is another hash, merge the two hashes together using these same rules.
 * 
 * If the value is an array, append the array from the second hash to the end of the 
 * array from the first hash.
 * 
 * It's safe to assume that if a duplicate key is found, the values' type will be the same in both hashes.
 *
 * NOTE: You cannot assume one hash will have a greater length than the other or that if they are equal
 * lengths, they will have the same keys
 */

/** 
 * {"foo": "bar"} | {"foo": "baz", "fibonacci": [1, 1, 2, 3, 5]}
 * 
 * should become
 * 
 * {"foo": "baz", "fibonacci": [1, 1, 2, 3, 5]} 
 */

/**
 *{"data": {"cpu": [1, 1, 42, 20], "mem": [100, 100, 125, 90], "disk": {"read": [0, 40, 10, 4],
 * "write": [224, 98, 70, 200], "swap": 0 } }, "foo": 11} | {"data": {"cpu": [5, 6], 
 * "disk": {"read": [100], "write": [100, 110, 120, 130, 140], "swap": 1 }, "net": [20, 30, 40] }, 
 * "foo": 0, "bar": 19}
 *
 * should become
 *
 * {"data": {"cpu": [1, 1, 42, 20, 5, 6], "mem": [100, 100, 125, 90], "disk": {"read": [0, 40, 10, 4, 100],
 * "write": [224, 98, 70, 200, 100, 110, 120, 130, 140], "swap": 1 }, "net": [20, 30, 40] }, 
 * "foo": 0, "bar": 19}
 */

const merge_hashes = (hashes) => {
  const parsedHashes = hashes.split('|');
  const [hash1, hash2] = parsedHashes.map(eachHash => JSON.parse(eachHash));

  return JSON.stringify(recursivelyMergeHashes(hash1, hash2));
}

const recursivelyMergeHashes = (hash1, hash2) => {
  const hashToIterateOver = (Object.keys(hash1).length > Object.keys(hash2).length)
    ? hash1
    : hash2;

  const nonHashToIterateOver = (Object.keys(hash1).length > Object.keys(hash2).length)
    ? hash2
    : hash1;

  return Object.keys(hashToIterateOver).reduce((accum, eachKey2, originalObj) => {

    const objValue = hash2[eachKey2]
    const valueType = typeof objValue;


    /** if there is no match key in hash1, return hash2 value */
    if (typeof hash1[eachKey2] === 'undefined') {
      accum[eachKey2] = objValue;
    }

    /** otherwise continue as normal */

    else if (valueType === 'string' || valueType === 'number') accum[eachKey2] = objValue;

    else if (Array.isArray(objValue)) accum[eachKey2] = [...hash1[eachKey2], ...objValue];

    else accum[eachKey2] = recursivelyMergeHashes(hash1[eachKey2], objValue);

    return accum;

  }, nonHashToIterateOver)
}


console.log(mergeHashes('{"foo": "bar"} | {"foo": "baz", "fibonacci": [1, 1, 2, 3, 5]}'))

console.log(mergeHashes('{"data": {"cpu": [1, 1, 42, 20], "mem": [100, 100, 125, 90], "disk": {"read": [0, 40, 10, 4], "write": [224, 98, 70, 200], "swap": 0 } }, "foo": 11} | {"data": {"cpu": [5, 6], "disk": {"read": [100], "write": [100, 110, 120, 130, 140], "swap": 1 }, "net": [20, 30, 40] }, "foo": 0, "bar": 19}'))