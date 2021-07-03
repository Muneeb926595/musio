import React from 'react'
import styled from 'styled-components'
import Popover from 'react-native-popover-view';
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';


import { Icon, MyText } from "components"

const InfoContainer = styled.View`
  background-color: #ffffff;
  box-shadow:  0px 0px 12px #00000029;
  border-radius: 100px;
  width: ${wp(60)}px;
  padding:${wp(2.5)}px;
`
const InfoIconContainer = styled.TouchableOpacity`
  position: absolute;
  z-index:100000
  ${(props) => props.containerLeft && `left:${props.containerLeft}`};
  ${(props) => props.containerTop && `top:${props.containerTop}`};
`


const Info = (props) => {
  const { containerLeft, containerTop } = props
  return (
    <Popover
      backgroundStyle={{ backgroundColor: '#00000010' }}
      arrowStyle={{ width: 0, height: 0 }}
      popoverStyle={{ marginTop: -16, marginLeft: 8, backgroundColor: '#ffffff', borderRadius: 100 }}
      from={(
        <InfoIconContainer containerLeft={containerLeft} containerTop={containerTop}>
          <Icon type='info' size={wp(props.iconSize || 5)} />
        </InfoIconContainer>
      )}>
      <InfoContainer>
        <MyText size={`${RFValue(8.6)}px`}>{props.text}</MyText>
      </InfoContainer>
    </Popover>
  );

}

export default Info