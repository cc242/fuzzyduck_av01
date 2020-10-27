export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};
export function clamp(a,b,c) {
    return Math.max(b,Math.min(c,a));
}
export function isIE() {
    function ieVersion(uaString) {
        uaString = uaString || navigator.userAgent;
        let match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(uaString);
        if (match) return parseInt(match[2])
    }
    return ieVersion() !== undefined;
}
export function getIndexByKeyValue(array, key, value) {
    return array.map(e => e[key]).indexOf(value);
}
export function searchArray(value, key, arr){

    for (let i=0; i < arr.length; i++) {
        if (arr[i]['acf']['screen_id'] === value) {
            return arr[i];
        }
    }
}
export function getTranslateValues (element) {
    const style = window.getComputedStyle(element)
    const matrix = style.transform || style.webkitTransform || style.mozTransform

    // No transform property. Simply return 0 values.
    if (matrix === 'none') {
        return {
            x: 0,
            y: 0,
            z: 0
        }
    }

    // Can either be 2d or 3d transform
    const matrixType = matrix.includes('3d') ? '3d' : '2d'
    const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

    // 2d matrices have 6 values
    // Last 2 values are X and Y.
    // 2d matrices does not have Z value.
    if (matrixType === '2d') {
        return {
            x: matrixValues[4],
            y: matrixValues[5],
            z: 0
        }
    }

    // 3d matrices have 16 values
    // The 13th, 14th, and 15th values are X, Y, and Z
    if (matrixType === '3d') {
        return {
            x: matrixValues[12],
            y: matrixValues[13],
            z: matrixValues[14]
        }
    }
}
export function truncate( str, n, useWordBoundary ){
    if (str.length <= n) { return str; }
    const subString = str.substr(0, n-1); // the original check
    return (useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(" "))
        : subString) + "&hellip;";
};
export function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
