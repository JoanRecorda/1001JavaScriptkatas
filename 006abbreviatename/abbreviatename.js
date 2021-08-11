function abbrevName(name) {
    const arr = name.split(' ');
    const result = arr.map(s => s[0].toUpperCase()).join('.');
    return result
}
module.exports = abbrevName;