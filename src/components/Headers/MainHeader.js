import React from 'react'
import styled from 'styled-components'
import Popover from 'react-native-popover-view';
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import { MyText, Row, Icon, Clickable, Box, Notifications, HeaderSearch } from "components"

const Container = styled.TouchableOpacity`
  z-index:100000
`

const MainHeader = ({ headerTitle }) => {
  const navigation = useNavigation();
  const hasNotch = DeviceInfo.hasNotch();

  return (
    <Row between noFlex center bg="#ffffff" wid="100%" ht={`${hasNotch ? `${wp(22)}px` : `${wp(18)}px`}`} pad={`${hasNotch ? `${wp(10)}px` : `${wp(4)}px`} ${wp(2)}px ${wp(2)}px ${wp(2)}px`}>
      <Row noFlex center marg={`${wp(2)}px 0 0 0`}>
        <MyText marg={`0 ${wp(1)}px 0 0`} color="#6979f8" size={`${RFValue(17)}px`} weight="bold">{headerTitle}</MyText>
        <Icon type='dot' size={wp(2)} />
      </Row>
      {headerTitle === 'Food & I' ?
        <Clickable onClick={() => navigation.navigate("Settings")}>
          <Icon marg="0 8px" type='setting' width={wp(5.5)} height={wp(6)} />
        </Clickable>
        :
        <Row noFlex center marg={`${wp(2)}px 0 0 0`} wid="40%" between>
          <Popover
            backgroundStyle={{ backgroundColor: '#7a8fa690', }}
            arrowStyle={{ width: 0, height: 0 }}
            popoverStyle={{ marginTop: wp(4), marginLeft: wp(0), backgroundColor: '#ffffff', display: "flex", alignItems: 'center', justifyContent: "center", borderRadius: 16, width: wp(180), height: wp(110) }}
            from={(
              <Container >
                <Icon marg="0 8px" type='notification' width={wp(7.5)} height={wp(5.5)} />
              </Container>
            )}>
            <Notifications />
          </Popover>

          <Clickable onClick={() => navigation.navigate("Contacts")}>
            <Icon marg="0 8px" type='messenger' width={wp(5.5)} height={wp(7.5)} />
          </Clickable>

          <Popover
            backgroundStyle={{ backgroundColor: '#7a8fa690', }}
            arrowStyle={{ width: 0, height: 0 }}
            popoverStyle={{ marginTop: wp(4), marginLeft: wp(0), backgroundColor: '#ffffff', display: "flex", alignItems: 'center', justifyContent: "center", borderRadius: 16, width: wp(180), height: wp(110) }}
            from={(
              <Container >
                <Icon marg="0 8px" type='header-search' width={wp(7)} height={wp(6)} />
              </Container>
            )}>
            <HeaderSearch />
          </Popover>
        </Row>}

    </Row>
  )
}

export default MainHeader

