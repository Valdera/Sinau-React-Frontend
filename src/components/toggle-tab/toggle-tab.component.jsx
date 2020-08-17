import React from 'react';

import './toggle-tab.styles.scss';

function ToggleTab() {
  return (
    <div className="tabbed">
      <div className="tabbed__container">
        <input
          type="radio"
          name="tabs"
          id="tab_1"
          className="tabs__input"
          defaultChecked
        />
        <label for="tab_1" className="tabs__label tabs__label--1">
          TEST 1
        </label>
        <div className="tabs__content tabs__content--1">
          <h2>HTML</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="tabbed__container">
        <input type="radio" name="tabs" id="tab_2" className="tabs__input" />
        <label for="tab_2" className="tabs__label tabs__label--2">
          TEST 2
        </label>
        <div className="tabs__content tabs__content--2">
          <h2>CSS</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
        </div>
      </div>

      <div className="tabbed__container">
        <input type="radio" name="tabs" id="tab_3" className="tabs__input" />
        <label for="tab_3" className="tabs__label tabs__label--3">
          TEST 3
        </label>
        <div className="tabs__content tabs__content--3">
          <h2>JS</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ToggleTab;
