import { createSelector } from 'reselect';

export const selectExams = (state) => state.exam;

export const selectExamItems = createSelector(
  [selectExams],
  (exam) => exam.exams
);

export const selectExam = (examUrlParam) =>
  createSelector([selectExamItems], (exams) =>
    exams ? exams[examUrlParam] : null
  );

export const selectExamsObject = (examUrlParam, examSlug) =>
  createSelector([selectExamItems], (exams) =>
    exams
      ? exams[examUrlParam].exams.find((exam) => exam.slug === examSlug)
      : null
  );

export const selectExamsLoaded = createSelector(
  [selectExams],
  (exam) => !!exam.exams
);
