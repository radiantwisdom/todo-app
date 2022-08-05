import React from 'react';
import './TodoTemplate.css';
import mImg from '../images/m2.png';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리 Manager
      <img className='imwidth' src={mImg} alt='memo'/>
      </div>
      <div className="content">{children}</div>

      <div className='app-footer'>DailyManager v1.0 - SongJY</div>
    </div>
  );
};

export default TodoTemplate;
