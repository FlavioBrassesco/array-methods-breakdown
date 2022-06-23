  function reduce(array, reducer, initialValue) {
    let result = reducer(initialValue, array[0]);
    for (let i = 1; i < array.length; i++) {
      result = reducer(result, array[i]);
    }
    return result;
  }

  function reduceRight(array, reducer, initialValue) {
    let result = reducer(initialValue, array[array.length - 1]);
    for (let i = array.length - 2; i >= 0; i--) {
      result = reducer(result, array[i]);
    }
    return result;
  }

  function map(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i));
    }
    return result;
  }

  function filter(array, predicate) {
    let result = [];
    for (let el of array) {
      if (predicate(el)) continue;
      result.push(el);
    }
    return result;
  }

  function find(array, predicate) {
    for (let el of array) {
      if (predicate(el)) return el;
    }
    return -1;
  }

  function findIndex(array, predicate) {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) return i;
    }
    return -1;
  }

  function some(array, predicate) {
    for (let el of array) {
      if (predicate(el)) return true;
    }
    return false;
  }

  function every(array, predicate) {
    for (let el of array) {
      if (!predicate(el)) return false;
    }
    return true;
  }

  function flat(array, depth) {
    if (depth <= 0) return array;
    let result = [];
    for (let el of array) {
      if (Array.isArray(el)) {
        result = result.concat(flat(el, depth - 1));
        continue;
      }
      result.push(el);
    }
    return result;
  }

  function deepFlat(array) {
    let result = [];
    for (let el of array) {
      if (Array.isArray(el)) {
        result = result.concat(deepFlat(el));
        continue;
      }
      result.push(el);
    }
    return result;
  }

  function flatMap(array, callback) {
    const mapped = map(array, callback);
    return flat(mapped, 1);
  }

  function* entries(array) {
    for (let i = 0; i < array.length; i++) {
      yield [i, array[i]];
    }
  }

  function* keys(array) {
    for (let i = 0; i < array.length; i++) {
      yield i;
    }
  }

  function* values(array) {
    for (let i = 0; i < array.length; i++) {
      yield array[i];
    }
  }

  function includes(array, value) {
    for (let el of array) {
      if (el === value) return true;
    }
    return false;
  }

  function copyWithin(array, target, start, end) {
    const range = end - start;
    for (let i = 0; i < range; i++) {
      array[target + i] = array[start + i];
    }
    return array;
  }

  function reverse(array) {
    function swap(a, b) {
      const temp = array[a];
      array[a] = array[b];
      array[b] = temp;
    }

    let count = 0;
    for (let i = array.length - 1; i > count; i--) {
      swap(i, count);
      count++;
    }

    return array;
  }