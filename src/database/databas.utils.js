export const changeExamData = (ExamsArray) => {
  let ExamMap = {
    simak: {
      id: 1,
      title: 'SIMAK UI',
      routeName: 'simak',
      exams: []
    },
    ugm: {
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

  ExamsArray.forEach(({ tipeSoal, ...otherData }) => {
    ExamMap[tipeSoal].exams.push({ ...otherData });
  });

  return ExamMap;
};
