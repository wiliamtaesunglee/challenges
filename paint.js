const paint = (x, y, newElement) => {
    const matrix = [
        [
            '0', 'x', 'x', 'x', '0', '0' //0,1 0,2 0,3
        ], 
        [
            '0', 'x', '0', '0', 'x', '0' // 1,1 1,4
        ], 
        [
            '0', 'x', 'x', 'x', '0', '0' // 2,1 2,2 2,3
        ], 
        [
            '0', 'x', '0', '0', '0', '0' // 3,1
        ]
    ]

    const searchedElement = matrix[x][y]
    const positionsOfElement = []

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            let matrixElement = matrix[i][j]
            
            if (i == 0 || j == 0 || matrix[i -1][j] == matrixElement || matrix[i][j - 1] == matrixElement) {

                if ((i > 0 && matrix[i -1][j] != matrixElement) && (j > 0 && matrix[i][j - 1] != matrixElement)) {
                    break
                }

                if (matrixElement == searchedElement) {
                    positionsOfElement.push([i, j])
                }
            }

        }
    }

    positionsOfElement.forEach(item => matrix[item[0]][item[1]] = newElement)
    console.log(matrix)
    console.log(positionsOfElement)
}

paint(1,1, 'y')
