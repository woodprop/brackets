module.exports = function check(str, bracketsConfig) {
    const arr = str.split('');
    const brackets = {};
    const stack = [];

    bracketsConfig.forEach(el => {
        brackets[el[0]] = el[1];
    })

    for (let b of arr) {
        if (brackets[b]) {
            if (brackets[b] === b && stack[stack.length - 1] === b) {
                stack.pop();
                continue;
            }
            stack.push(b);
        } else {
            if (!stack.length) {
                return false;
            }
            if (b !== brackets[stack.pop()]) return false;
        }
    }
    return !stack.length;
}
