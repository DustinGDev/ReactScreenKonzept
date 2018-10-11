import React from 'react';

const Timer = (props) => {
  console.log(props)
  return(
    <div className="timer component" style={props.styles}>
      {props.timer}
    </div>
  )
}

export default Timer;
