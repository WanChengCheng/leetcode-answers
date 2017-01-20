/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    // iteration from 0 ~ num
    var result = [];
    for (var i = 0; i <= num; i++) {
        // count bits
        var count = 0, judge = i;
        while (judge !== 0) {
            if (judge & 1 == 1) {
                count += 1;
            }
            judge >>= 1;
        }
        result.push(count);
    }
    return result;
};
