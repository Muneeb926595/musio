import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={25} height={25} viewBox="0 0 128 128" {...props}>
      <Path d="M121.5 25.942a1.75 1.75 0 001.75-1.75V6.5a1.75 1.75 0 00-1.75-1.75H6.5A1.75 1.75 0 004.75 6.5v17.692a1.75 1.75 0 001.75 1.75h11.01V62.25H6.5A1.75 1.75 0 004.75 64v6a1.75 1.75 0 001.75 1.75h4.75v49.75a1.75 1.75 0 001.75 1.75h102a1.75 1.75 0 001.75-1.75V71.75h4.75a1.75 1.75 0 001.75-1.75v-6a1.75 1.75 0 00-1.75-1.75h-11.01V25.942zM8.25 8.25h111.5v14.192H8.25zm54.5 54V52A1.75 1.75 0 0061 50.25h-6A1.75 1.75 0 0053.25 52v10.25h-2.792V52a1.749 1.749 0 00-1.75-1.75h-12a1.75 1.75 0 00-1.75 1.75v10.25H27.01V25.942h73.98V62.25zm-3.5 0h-2.5v-8.5h2.5zm-12.292-6h-8.5v-2.5h8.5zm-8.5 3.5h8.5v2.5h-8.5zM21.01 25.942h2.5V62.25h-2.5zM113.25 98.5h-98.5V90h98.5zm-98.5 21.25V102h98.5v17.75zm98.5-33.25h-98.5V71.75h98.5zm6.5-18.25H8.25v-2.5h111.5zm-12.76-6h-2.5V25.942h2.5z" />
      <Path d="M23.906 14.25a1.75 1.75 0 000-3.5h-7a1.75 1.75 0 100 3.5z" />
    </Svg>
  );
}

export default SvgComponent;
