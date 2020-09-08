import React, { Component } from 'react';
import { selectExamItems } from '../../redux/exam/exam.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changeExamsToArray } from '../../database/utils/data.utils';
import QuestionSeeker from '../question-seeker/question-seeker.component';
import ButtonText from '../button-text/button-text.component';
import ButtonBlock from '../button-block/button-block.component';
import './question-maker.styles.scss';
import { createQuestionStart } from '../../redux/question/question.actions';

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

class QuestionMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      usingMathJax: false,
      exam: '',
      answers: [],
      answer: '',
      correctAnswer: 0,
      difficulty: 'easy',
      questiontype: 'a',
      session: '',
      answerToBeDelete: 0,
      image: null,
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleActive = this.handleActive.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddAnswer = this.handleAddAnswer.bind(this);
    this.handleDeleteAnswer = this.handleDeleteAnswer.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { exams } = this.props;
    const examArr = changeExamsToArray(exams);
    this.setState({
      exam: examArr[0]
    });
  }

  handleDeleteAnswer() {
    let answers = this.state.answers;
    if (answers.length === 0) {
      return;
    }
    answers.splice(this.state.answerToBeDelete, 1);
    this.setState({
      answers: answers
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleAddAnswer() {
    let answers = this.state.answers;
    if (this.state.answer === '') {
      return;
    }
    answers.push(this.state.answer);

    this.setState({
      answers: answers,
      answer: ''
    });
  }

  handleImage(event) {
    this.setState({
      image: event.target.files[0],
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  handleClick(e, exam) {
    this.setState({
      active: !this.state.active,
      exam: exam
    });
  }

  handleActive() {
    this.setState({
      active: !this.state.active
    });
  }

  async handleSubmit() {
    const {
      question,
      usingMathJax,
      exam,
      answers,
      correctAnswer,
      questiontype,
      session,
      image
    } = this.state;
    const { createQuestionStart } = this.props;
    const formData = new FormData();
    formData.append('question', question);
    formData.append('usingMathjax', usingMathJax);
    formData.append('exam', exam._id);
    formData.append('answers', answers);
    formData.append('correctAnswer', correctAnswer);
    formData.append('questiontype', questiontype);
    formData.append('session', session);
    if (image) {
      formData.append('image', image);
    }
    console.log(formData.get('exam'));
    await createQuestionStart(formData);
    this.setState({
      question: '',
      usingMathJax: false,
      answers: [],
      answer: '',
      correctAnswer: 0,
      difficulty: 'easy',
      questiontype: 'a',
      session: '',
      answerToBeDelete: 0,
      image: null
    });
  }

  render() {
    const {
      answers,
      question,
      session,
      answer,
      exam,
      active,
      file
    } = this.state;
    const { exams } = this.props;
    const examArr = changeExamsToArray(exams);
    return (
      <div className="question-maker">
        <h3>Select The Exam First</h3>
        <div className="examseeker__select" onClick={this.handleActive}>
          {exam.examName}
          {active ? (
            <div className="examseeker__box">
              {examArr.map((exam) => (
                <div
                  className="examseeker__item"
                  key={`seek-${exam.examName}`}
                  onClick={(e) => this.handleClick(e, exam)}>
                  {exam.examName}
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="question-maker__box">
          <div className="question-maker__make">
            <h1 className="exammaker__make-title">Question Maker 1.0</h1>
            <textarea
              value={question}
              type="text"
              name="question"
              className="question-maker__question"
              onChange={this.handleChange}></textarea>
            <div className="question-maker__type">
              <label htmlFor="session">Choose a question session:</label>
              <input
                onChange={this.handleChange}
                value={session}
                type="text"
                name="session"
              />
            </div>
            <div className="question-maker__mathjax">
              <span>Using Mathjax: </span>

              <input
                onChange={this.handleChange}
                type="radio"
                className="question-maker__radio"
                name="usingMathJax"
                value={true}
                id="math-true"
              />
              <label htmlFor="math-true">True</label>

              <input
                onChange={this.handleChange}
                type="radio"
                className="question-maker__radio"
                name="usingMathJax"
                value={false}
                id="math-false"
              />
              <label htmlFor="math-false">False</label>
            </div>
            <div className="question-maker__type">
              <label htmlFor="questiontype">Choose a question type:</label>
              <select
                name="questiontype"
                id="questiontype"
                onChange={this.handleChange}>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
              </select>
            </div>
            <div className="question-maker__type">
              <label htmlFor="difficulty">Choose a difficulty:</label>
              <select
                name="difficulty"
                onChange={this.handleChange}
                id="difficulty">
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
                <option value="catastrophic">catastrophic</option>
              </select>
            </div>

            <div className="question-maker__image">
              <input type="file" name="image" onChange={this.handleImage} />
            </div>

            <div
              className="question-maker__submit-question"
              onClick={this.handleSubmit}>
              <ButtonBlock>Submit</ButtonBlock>
            </div>
          </div>

          <div className="answer-maker">
            <h1 className="exammaker__make-title">Answer Maker 1.0</h1>
            <textarea
              value={answer}
              type="text"
              name="answer"
              className="answer-maker__input"
              onChange={this.handleChange}></textarea>

            <div className="answer-maker__submit">
              <div onClick={this.handleAddAnswer}>
                <ButtonText>Add Answer</ButtonText>
              </div>
            </div>

            <label htmlFor="correctAnswer">Choose a Right answer:</label>
            <select
              onChange={this.handleChange}
              name="correctAnswer"
              id="correctAnswer">
              {answers.map((answer, id) => (
                <option value={id}>{`${alphabet[id]} - ${answer.slice(
                  0,
                  70
                )}`}</option>
              ))}
            </select>

            <label htmlFor="answerToBeDelete">
              Choose an answer to be deleted:
            </label>
            <select
              onChange={this.handleChange}
              name="answerToBeDelete"
              id="answerToBeDelete">
              {answers.map((answer, id) => (
                <option key={`${answer}`} value={id}>{`${
                  alphabet[id]
                } - ${answer.slice(0, 70)}`}</option>
              ))}
            </select>
            <div onClick={this.handleDeleteAnswer}>
              <ButtonText>Delete this answer</ButtonText>
            </div>
          </div>
        </div>

        <div className="question-maker__show">
          <h1 className="exammaker__make-title">Question Seeker 1.0</h1>
          <div className="question-seeker">
            <QuestionSeeker
              question={`${question}`}
              file={file ? file : null}
              answers={answers}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  exams: selectExamItems
});

const mapDispatchToProps = (dispatch) => ({
  createQuestionStart: (formData) => dispatch(createQuestionStart(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionMaker);
