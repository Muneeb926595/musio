import React from 'react'
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import { MyText, Row, Icon, Clickable, Avatar } from "components"


const MessengerHeader = ({ userName, userImg }) => {
  const navigation = useNavigation();
  const hasNotch = DeviceInfo.hasNotch();

  return (
    <Row noFlex center marg={`${wp(2)}px 0 0 0`} bg="#ffffff" wid="100%" ht={`${hasNotch ? `${wp(22)}px` : `${wp(18)}px`}`} pad={`${hasNotch ? `${wp(10)}px` : `${wp(4)}px`} ${wp(2)}px ${wp(2)}px ${wp(2)}px`}>
      <Clickable onClick={() => navigation.goBack()}>
        <Icon type="blue-back-arrow" width={wp(5)} height={wp(4)} marg={`${wp(2)}px ${wp(5)}px ${wp(2)}px ${wp(3)}px`} />
      </Clickable>
      <Avatar uri={userImg} size={wp(7)} showCircle />
      <MyText marg={`0 0 0 ${wp(3)}px`} color="#6979f8" size={`${RFValue(15)}px`} weight="400">{userName}</MyText>
    </Row>
  )
}

export default MessengerHeader

