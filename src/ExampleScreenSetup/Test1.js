import React from 'react';
import * as ComponentLibrary from '../ComponentLibrary.js';

const Test1 = (props) => {
  console.log(ComponentLibrary)
  return(
    <div className="screen">
      <ComponentLibrary.Header>
        <ComponentLibrary.BackGround/>
        <ComponentLibrary.Timer timer={props.timer} styles={{height:'50%', background: 'yellow'}}/>
      </ComponentLibrary.Header>
      <ComponentLibrary.MatchDaySelector/>
      <ComponentLibrary.EntertainmentArea>
        <ComponentLibrary.Scores/>
        <ComponentLibrary.Video/>
      </ComponentLibrary.EntertainmentArea>
    </div>
  )
}

export default Test1;
