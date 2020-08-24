import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectExamsLoaded } from '../../redux/exam/exam.selector';
import WithDot from '../with-dot/with-dot.component';
import { createStructuredSelector } from 'reselect';
import SelectBox from './select-box.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectExamsLoaded(state)
});

const SelectBoxContainer = compose(
  connect(mapStateToProps),
  WithDot
)(SelectBox);

export default SelectBoxContainer;
