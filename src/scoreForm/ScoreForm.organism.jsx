import React from 'react';
import PropTypes from 'prop-types';

import InputLabel from '../app/common/modals/InputLabel.atom';
import Winner from './Winner.molecule';
import NotWinner from './NotWinner.molecule';

import { updateScoreListLocalStorage, isWinner } from './helpers';

class ScoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const { score, onClose } = this.props;

    updateScoreListLocalStorage({ name, score });
    if (onClose) onClose();
    this.setState({ name: '' });
  }

  render() {
    const { name } = this.state;
    const { score } = this.props;

    return (
      <form className="score-form" onSubmit={this.handleSubmit}>
        { isWinner(score) ? <Winner /> : <NotWinner /> }
        <label className="label-wrapper" htmlFor="name">
          <InputLabel text="Name" />
          <input className="input-base input-name" type="text" value={name} placeholder="Type your name" onChange={this.handleChange} />
        </label>
        <label className="label-wrapper" htmlFor="score">
          <InputLabel text="Score" />
          <input className="input-base input-score" type="number" value={score} readOnly />
        </label>
        <input className="default-btn submit-btn" type="submit" value="Submit" disabled={!name} />
      </form>
    );
  }
}

ScoreForm.defaultProps = {
  onClose: '',
};

ScoreForm.propTypes = {
  score: PropTypes.number.isRequired,
  onClose: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

export default ScoreForm;
