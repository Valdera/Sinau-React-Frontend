import React, { Component } from 'react';
import { ReactComponent as ArrowDown } from '../../assets/icon-arrow-bottom.svg';
import SelectSessionItems from '../select-session-items/select-session-items.component';
import './select-session.styles.scss';

const sessions = ['matematika', 'bahasa inggris', 'ipa'];

class SelectSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      value: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleState(e, value) {
    this.setState({
      value
    });
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  componentDidMount() {
    this.setState({
      value: sessions[0]
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
          {active ? (
            <SelectSessionItems
              handleState={this.handleState}
              items={sessions}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default SelectSession;
