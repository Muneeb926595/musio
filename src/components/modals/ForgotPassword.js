import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import { MyText, CustomModal, Row, Input, Button, Icon, Col, Clickable, ModalFooter } from "components"
import { forgotPassword } from "store/auth/AuthActions";
import { setShowForgotPassword } from "store/modals/ModalsActions";
import { VALIDATOR_EMAIL } from "helpers/Validator";
import { useForm } from "hooks";

const ForgotPassword = () => {
  const dispatch = useDispatch()
  const { forgotPasswordModal } = useSelector(({ Foodbook }) => Foodbook.modals);

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const closeModal = () => {
    dispatch(setShowForgotPassword(false))
  }

  return (
    <>
      <CustomModal height={wp(100)} isVisible={forgotPasswordModal.isVisible} onClose={closeModal} forgotPass>
        <Row endAll noFlex center between wid="100%">
          <Clickable onClick={closeModal}>
            <Icon type="rounded-cross" size={wp(5.6)} />
          </Clickable>
        </Row>
        <Col noFlex between wid="100%">
          <MyText center size={`${RFValue(18)}px`} weight="300">Password Reset</MyText>
        </Col>

        <Col noFlex marg={`${wp(6)}px 0 0 0`}>
          <Input
            id="email"
            ht={`${wp(15)}px`}
            onInput={inputHandler}
            fontSize={`${RFValue(11)}px`}
            marg={`0 0 ${wp(9)}px 0`}
            validators={[VALIDATOR_EMAIL()]}
            placeholder='Email*'
            placeholderColor="#AEB0B2"
            hasBorder="1px solid #A5AFFB"
          />
        </Col>

        <Col center noFlex>
          <Button
            ht={`${wp(15)}px`}
            bg="#6979F8"
            text="RESET"
            wid="100%"
            disabled={!formState.isValid}
            color="#ffffff"
            marg={`0 0 ${wp(28)}px 0`}
            onClick={() => dispatch(forgotPassword(formState.inputs.email.value, closeModal))} />

        </Col>
        <ModalFooter footerText="Keep your Password safe" />
      </CustomModal>
    </>
  )
}

export default ForgotPassword

