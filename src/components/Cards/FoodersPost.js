import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import { Box, PostImage, Clickable, BitesCommentsBox, AddCommentBox, Avatar, RecipeTags, Icon, Row, MyText } from "components"
import { getLastPostDuration } from "helpers"
import { setShowPostActions } from "store/modals/ModalsActions";

const FoodersPost = ({ item }) => {
  const dispatch = useDispatch()
  const { image } = useSelector(({ Foodbook }) => Foodbook.auth.user);

  const handleShowPostActions = () => {
    dispatch(setShowPostActions(true))
  }

  return (
    <Box pad="0 0 10px 0" bg="#ffffff">
      <Clickable>
        <PostImage uri={item.mediaFiles[0]} width={wp(100)} height={wp(46)} />
      </Clickable>

      {item.postType === "Post" ?
        <Box wid="100%" absolute top="0" left="0" pad={`${wp(1.5)}px`}>
          <Row noFlex center between>
            <Row noFlex center>
              <Avatar uri={item?.userId?.image} size={wp(7)} />
              <MyText size={`${RFValue(12)}px`} color="#ffffff" marg={`0 0 0 ${wp(1.5)}px`}>{item?.userId?.userName}</MyText>
            </Row>
            <Clickable onClick={handleShowPostActions}>
              <Icon type="three-dots-white" size={wp(5.5)} />
            </Clickable>
          </Row>
          <MyText size={`${RFValue(11)}px`} color="#ffffff" marg={`${wp(1)}px 0 0 0 `}>{item.name}</MyText>
        </Box> :
        <>
          <Box absolute top="0" right="0" pad={`${wp(1.5)}px`} borderRadius={10}>
            <Clickable onClick={handleShowPostActions}>
              <Icon type="three-dots-white" size={wp(5.5)} />
            </Clickable>
            <Box marg={`${wp(3)}px 0 0 0`}>
              <RecipeTags tags={item.tags} />
            </Box>
          </Box>

          <Box wid="100%" absolute bottom={`${wp(22)}px`} left="0" pad={`${wp(1.5)}px`}>
            <Row noFlex center >
              <Avatar uri={item?.userId?.image} size={wp(7)} />
              <MyText size={`${RFValue(12)}px`} color="#ffffff" marg={`0 0 0 ${wp(1.5)}px`}>{item?.userId?.userName}</MyText>
            </Row>

            <Row noFlex marg={`${wp(1)}px 0 0 0 `} center between>

              <Row noFlex >
                {item.difficulty !== "0" && <MyText size={`${RFValue(11)}px`} color="#ffffff" marg={`0 ${wp(1)}px 0 0`}>{item.difficulty}{".0"}</MyText>}
                {[...Array(parseInt(item.difficulty))].map((e, i) => (
                  <Icon type="blue-star" size={wp(3.6)} />
                ))}
              </Row>
              <MyText size={`${RFValue(9)}px`} color="#ffffff">{getLastPostDuration(item.createdAt)}</MyText>
            </Row>

            <MyText size={`${RFValue(11)}px`} color="#ffffff">{item.name}</MyText>
          </Box>
        </>
      }

      <BitesCommentsBox />
      <AddCommentBox userImage={image} />
    </Box>
  )
}

export default FoodersPost

