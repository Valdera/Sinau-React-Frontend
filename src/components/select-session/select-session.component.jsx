import React, { Component } from 'react';
import { ReactComponent as ArrowDown } from '../../assets/icon-arrow-bottom.svg';
import SelectSessionItems from '../select-session-items/select-session-items.component';
import './select-session.styles.scss';

class SelectSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      value: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  componentDidMount() {
    this.setState({
      value: 'UM UGM'
    });
  }

  render() {
    const { active, value } = this.state;
    return (
      <div className="select-session__box">
        <div className="select-session" onClick={this.handleClick}>
          <span className="select-session__value">{value}</span>
          <ArrowDown
            className={`select-session__svg ${active ? '--active' : ''}`}
          />
          {active ? <SelectSessionItems /> : null}
        </div>
      </div>
    );
  }
}

export default SelectSession;
