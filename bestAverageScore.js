// The input is object, which keys are student's names and values are array of their scores. Find the student with the best average score.
const obj = {
  John: [100, 90, 80],
  Bob: [700, 70, 80],
};

function foo(obj) {
  let nameStudent = '';
  let average = 0;
  for (let student in obj) {
    //
    // const avg = sum / obj.John.length;
    // return avg;
    const sum = obj[student].reduce((a, b) => a + b) / obj[student].length;

    if (sum > average) {
      average = sum;
      nameStudent = student;
    }
  }
  return nameStudent;
}

console.log(foo(obj));
