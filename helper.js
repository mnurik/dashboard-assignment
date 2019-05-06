module.exports = (db) => ({
  getFields: () => db.columnInfo().then(fields => Object.keys(fields)),
  groupBy: (array, keyFn) => {
    let map = new Map();
    array.forEach(item => {
      let key = typeof keyFn === 'function' ? keyFn(item) : item[keyFn];
      if (map.has(key)) map.get(key).push(item);
      else map.set(key, [item]);
    });
    return map;
  }
})