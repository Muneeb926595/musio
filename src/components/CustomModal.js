import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import RBSheet from "react-native-raw-bottom-sheet";
import { RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { MyText, Row } from "components"

const Wrapper = styled.View`
  position: absolute;
  bottom: 0;
  display: flex;
  width: ${hp(48)}px;
  height: ${hp(8)}px;
  backgroundColor: #7A8FA6;
  zIndex: 11;
  alignItems: center;
  justifyContent: center;
`

const CustomModal = ({ children, isVisible, onClose, height, paddingHorizontal, }) => {
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    if (isVisible && bottomSheetRef) {
      bottomSheetRef.current.open()
    } else {
      bottomSheetRef.current.close()
    }
  }, [isVisible, bottomSheetRef])

  return (
    <RBSheet
      ref={bottomSheetRef}
      height={height || 300}
      openDuration={250}
      closeOnDragDown={true}
      closeOnPressMask={true}
      onClose={onClose}
      customStyles={{
        container: {
          paddingHorizontal: paddingHorizontal || 50,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        draggableIcon: {
          backgroundColor: "#E0E0E0",
          width: 60,
          height: 5
        }
      }}
    >
      {children}
    </RBSheet>
  )
}

export default CustomModal