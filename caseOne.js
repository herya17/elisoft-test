const caseOne = (count) => {
	let matrixRectangle = [];

	for (let i = 0; i < count; i++) {
		let row = [];
		
		for (let j = 0; j < count; j++) {
			if (i === j) {
				row.push(`${j + 1} | `);
			} else {
				row.push('_,_ | ');
			}
		}

		matrixRectangle.push(row);
	}

	return matrixRectangle;
}

const printMatrixRectangle = (matrixRectangle) => {
	for (let row of matrixRectangle) {
		console.log(row.join(''));
	}
}


const matrixRectangle = caseOne(5);
printMatrixRectangle(matrixRectangle);
