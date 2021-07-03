import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import { Icon, Row, CustomModal, FormHeader, MyText, Clickable } from "components"
import { setShowPostActions } from "store/modals/ModalsActions";

const PostActions = () => {
  const dispatch = useDispatch()
  const otherUser = true;
  const { postActionsModal } = useSelector(({ Foodbook }) => Foodbook.modals);

  const closeModal = () => {
    dispatch(setShowPostActions(false))
  }

  return (
    <CustomModal height={wp(60)} isVisible={postActionsModal.isVisible} onClose={closeModal} paddingHorizontal={wp(5)}>
      <FormHeader headerTitle="Post Actions" closeModal={closeModal} />

      {otherUser &&
        <>
          <Clickable>
            <Row noFlex marg={`${wp(8)}px 0 ${20}px 0`} center>
              <Icon type="post-report" size={wp(5.4)} />
              <MyText size={`${RFValue(14)}px`} weight="300" marg={`0 0 0 ${wp(4)}px`}>Report</MyText>
            </Row>
          </Clickable>
          <Clickable>
            <Row noFlex marg={`0 0 ${15}px 0`} center>
              <Icon type="block-user" size={wp(5.4)} />
              <MyText size={`${RFValue(14)}px`} weight="300" marg={`0 0 0 ${wp(4)}px`}>Block</MyText>
            </Row>
          </Clickable>
        </>
      }

      {!otherUser &&
        <>
          <Clickable>
            <Row noFlex marg={`0 0 ${15}px 0`} center>
              <Icon type="post-edit" size={wp(5.4)} />
              <MyText size={`${RFValue(14)}px`} weight="300" marg={`0 0 0 ${wp(4)}px`}>Edit</MyText>
            </Row>
          </Clickable>
          <Clickable>
            <Row noFlex marg={`0 0 ${15}px 0`} center>
              <Icon type="post-delete" size={wp(5.4)} />
              <MyText size={`${RFValue(14)}px`} weight="300" marg={`0 0 0 ${wp(4)}px`}>Delete</MyText>
            </Row>
          </Clickable>
        </>
      }

    </CustomModal>
  )
}

export default PostActions

