import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectExamsLoaded } from '../../redux/exam/exam.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import QuestionMaker from './question-maker.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectExamsLoaded(state)
});

const QuestionMakerContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(QuestionMaker);

export default QuestionMakerContainer;
