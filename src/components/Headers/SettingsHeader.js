import React from 'react'
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import { MyText, Row, Icon, Clickable, } from "components"
import { StorageHelper } from 'helpers';


const SettingsHeader = ({ headerTitle, mainSettings }) => {
  const navigation = useNavigation();
  const hasNotch = DeviceInfo.hasNotch();

  const handleLogout = async () => {
    await StorageHelper.removeItem(StorageHelper.StorageKeys.Access_Token);
    await StorageHelper.removeItem(StorageHelper.StorageKeys.USER_ID);
    navigation.navigate("Login")
  }

  return (
    <Row between noFlex center bg="#ffffff" wid="100%" ht={`${hasNotch ? `${wp(22)}px` : `${wp(18)}px`}`} pad={`${hasNotch ? `${wp(10)}px` : `${wp(4)}px`} ${wp(2)}px ${wp(2)}px ${wp(2)}px`}>
      <Row noFlex center marg={`${wp(2)}px 0 0 0`}>
        <Clickable onClick={() => navigation.goBack()}>
          <Icon type="blue-back-arrow" width={wp(5)} height={wp(4)} marg={`${wp(2)}px ${wp(5)}px ${wp(2)}px ${wp(3)}px`} />
        </Clickable>
        <MyText marg={`0 ${wp(3)}px 0 0`} color="#6979f8" size={`${RFValue(17)}px`} weight="bold">{headerTitle}</MyText>
        <Icon type='dot' size={wp(2)} />
      </Row>

      {mainSettings &&
        <Row noFlex center marg={`${wp(2)}px ${wp(4)}px 0 0`} >
          <Clickable onClick={handleLogout}>
            <MyText size={`${RFValue(14)}px`} color="#6979F8" weight="300">Log Out</MyText>
          </Clickable>
        </Row>
      }

    </Row>
  )
}

export default SettingsHeader

