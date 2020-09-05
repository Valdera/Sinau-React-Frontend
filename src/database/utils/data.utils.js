export const changeExamsToArray = (examsMap) => {
  const examArray = [];
  for (let examObj in examsMap) {
    for (let num in examsMap[examObj].exams) {
      examArray.push(examsMap[examObj].exams[num]);
    }
  }
  return examArray;
};
