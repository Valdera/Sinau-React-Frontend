import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectExamsLoaded } from '../../redux/exam/exam.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import ExamSeeker from './exam-seeker.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectExamsLoaded(state)
});

const ExamSeekerContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ExamSeeker);

export default ExamSeekerContainer;
