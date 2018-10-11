import React from 'react';
import * as ComponentLibrary from '../ComponentLibrary.js';

const Test2 = (props) => {
  return(
    <div className="screen">
      <ComponentLibrary.Header>
        <ComponentLibrary.Timer timer={props.timer} styles={{height:'50%', background: 'yellow'}}/>
      </ComponentLibrary.Header>
      <ComponentLibrary.MatchDaySelector/>
      <ComponentLibrary.EntertainmentArea>
        <ComponentLibrary.Video/>
      </ComponentLibrary.EntertainmentArea>
    </div>
  )
}

export default Test2;
