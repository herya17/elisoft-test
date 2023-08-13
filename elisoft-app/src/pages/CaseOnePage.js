import React from 'react';

function CaseOnePage() {
  const code = `  const caseOne = (count) => {
    let matrixRectangle = [];
    for (let i = 0; i < count; i++) {
      let row = [];
        for (let j = 0; j < count; j++) {
          if (i === j) {
            row.push(j + 1, ' | ');
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

`

  const result = `  1 | _,_ | _,_ | _,_ | _,_ | 
  _,_ | 2 | _,_ | _,_ | _,_ | 
  _,_ | _,_ | 3 | _,_ | _,_ | 
  _,_ | _,_ | _,_ | 4 | _,_ | 
  _,_ | _,_ | _,_ | _,_ | 5 |

  `;

  return (
    <div className='caseone-page'>
      <div className='caseone-page__header'>
        <h2>Code :</h2>
        <pre>{code}</pre>
      </div>
      <div className='caseone-page__body'>
        <h2>Result :</h2>
        <pre>{result}</pre>
      </div>
    </div>
  );
}

export default CaseOnePage;
