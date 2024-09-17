// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    return keys.reduce((obj, curr, idx) => {
        obj[curr] = idx < values.length ? values[idx] : null;
        return obj;
    }, {});
 }
