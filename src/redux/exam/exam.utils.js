export const changeExamData = (ExamsArray) => {
  let ExamMap = {
    simak: {
      id: 1,
      title: 'SIMAK UI',
      routeName: 'simak',
      exams: []
    },
    umugm: {
      id: 2,
      title: 'UM UGM',
      routeName: 'umugm',
      exams: []
    },
    utbk: {
      id: 3,
      title: 'UTBK',
      routeName: 'utbk',
      exams: []
    }
  };

  ExamsArray.forEach(({ examType, ...otherData }) => {
    ExamMap[examType].exams.push({ ...otherData, examType });
  });

  return ExamMap;
};
