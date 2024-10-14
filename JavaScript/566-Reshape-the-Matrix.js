/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let totalElements = mat.length * mat[0].length;

    if (totalElements !== r * c) {
        return mat;  
    }

    let flatArray = [];
    for (let i = 0; i < mat.length; i++) {
        flatArray = flatArray.concat(mat[i]);
    }
    
    let newMatrix = [];
    for (let i = 0; i < r; i++) {
        newMatrix[i] = [];
        for (let j = 0; j < c; j++) {
        newMatrix[i][j] = flatArray[i * c + j];
        }
    }

     return newMatrix;

};