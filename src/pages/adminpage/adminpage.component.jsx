import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar.component';
import ExamMaker from '../../components/exam-maker/exam-maker.component';
import QuestionMakerContainer from '../../components/question-maker/question-maker.container';
import './adminpage.styles.scss';

class AdminPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="admin--background">
          <div className="admin">
            <div className="admin__exam">
              <ExamMaker />
            </div>
            <div className="admin__question">
              <QuestionMakerContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
