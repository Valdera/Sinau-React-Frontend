import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './dropdown.styles.scss';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e, linkUrl) {
    const { history, changeHidden } = this.props;
    changeHidden();
    history.push(`/tryout${linkUrl}`);
  }

  render() {
    const { dropItems } = this.props;

    return (
      <div className="dropdown">
        {dropItems.map(({ title, linkUrl }) => (
          <div
            key={`dropitems-${title}`}
            onClick={(e) => this.handleClick(e, linkUrl)}
            className="dropdown__item ">
            {title} &gt;
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Dropdown);
