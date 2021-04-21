import React from 'react';
import { handleMoreAnswersClick } from './helpers/clickEvents';

const MoreAnswered = () => (
    <div>
      <button className="more-answered-btn" onClick={handleMoreAnswersClick}>MORE ANSWERED QUESTIONS</button>
    </div>
);

export default MoreAnswered;
