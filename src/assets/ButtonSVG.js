import React from 'react';
import anime from 'animejs';
import Anime from 'react-anime';

function ButtonSVG(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 570 174" width={570} height={174} {...props}>
    <Anime 
      targets="line"
      strokeDashoffset={[anime.setDashoffset, 0]}
      easing="easeInOutCubic"
      duration={1000}
      autoplay={true}
      loop={props.loop}>
        <line x1={2} y1={2} x2={2} y2={172} style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10, strokeWidth: 4}} />
        <line x1={2} y1={2} x2={568} y2={3} style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10, strokeWidth: 4}} />
        <line x1={568} y1={3} x2={568} y2={173} style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10, strokeWidth: 4}} />
        <line x1={2} y1={172} x2={568} y2={172} style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10, strokeWidth: 4}} />
        <text transform="translate(127 112.93)" style={{fontSize: 112, fontFamily: 'ProximaSoft-Thin, Proxima Soft'}}>{props.text}</text>
      </Anime>
    </svg>
  );
}

export default ButtonSVG