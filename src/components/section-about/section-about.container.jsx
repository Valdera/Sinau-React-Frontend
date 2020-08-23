import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectExamsLoaded } from '../../redux/exam/exam.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import SectionAbout from './section-about.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectExamsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SectionAbout);

export default CollectionPageContainer;
