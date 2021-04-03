import * as React from 'react';

interface LinkedinProps {
  style?: React.CSSProperties;
  width?: string;
}

const SVG = ({ style = {}, width = '25px' }: LinkedinProps): JSX.Element => (
  <svg width={width} height={width} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.624 65.326">
    <path
      id="Path_2520"
      data-name="Path 2520"
      d="M958.98,112.559h-9.6V97.525c0-3.585-.064-8.2-4.993-8.2-5,0-5.765,3.906-5.765,7.939v15.294h-9.6V81.642h9.216v4.225h.129a10.1,10.1,0,0,1,9.093-4.994c9.73,0,11.524,6.4,11.524,14.726ZM918.19,77.416a5.571,5.571,0,1,1,5.57-5.572,5.571,5.571,0,0,1-5.57,5.572m4.8,35.143h-9.61V81.642h9.61Zm40.776-55.2h-55.21a4.728,4.728,0,0,0-4.781,4.67v55.439a4.731,4.731,0,0,0,4.781,4.675h55.21a4.741,4.741,0,0,0,4.8-4.675V62.025a4.738,4.738,0,0,0-4.8-4.67"
      transform="translate(-903.776 -57.355)"
    />
  </svg>
);

export default SVG;
