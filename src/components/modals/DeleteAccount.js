import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import { CustomModal, MyText, Row, Clickable, Icon, Col, Button, ModalFooter } from "components"
import { deleteAccount } from "../../store/auth/AuthActions"

const DeleteAccount = ({ isModalVisible, setIsModalVisible }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const closeModal = () => {
    setIsModalVisible(false)
  }

  const handleDeleteAccount = () => {
    dispatch(deleteAccount(navigation));
  }

  return (
    <CustomModal height={wp(140)} isVisible={isModalVisible} onClose={closeModal} paddingHorizontal={wp(5)}>
      <Row endAll noFlex center between wid="100%">
        <Clickable onClick={closeModal}>
          <Icon type="rounded-cross" size={wp(5.6)} />
        </Clickable>
      </Row>
      <Col noFlex between wid="100%">
        <MyText center size={`${RFValue(18)}px`} weight="300">Sad to See You Go</MyText>
      </Col>

      <Col noFlex marg={`${wp(6)}px 0 ${wp(4)}px 0`}>
        <MyText center size={`${RFValue(11)}px`} color="#908989" weight="300" marg={`0 0 ${wp(4)}px 0`}>
          Your account will be deactivated and will be deleted permanently after
          30 days. If you change your mind you can re-activate your account by
          signing in to your Feed U account within these 30 days
        </MyText>
        <Icon type="sad-face" size={wp(54)} />
      </Col>

      <Col center noFlex>
        <Button
          bordered
          text="CANCEL"
          color="#ffffff"
          hasRadius="100px"
          bgColor="#6979F8"
          ht={`${wp(11)}px`}
          wid={`${wp(44)}px`}
          onClick={closeModal}
          borderColor="#6979f8"
          textSize={`${RFValue(11)}px`} />
      </Col>
      <ModalFooter footerText="No thanks , I want to delete my account" onClick={handleDeleteAccount} />
    </CustomModal >
  )
}

export default DeleteAccount

