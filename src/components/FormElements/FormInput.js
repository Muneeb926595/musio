import React, { useState, useRef, useEffect } from 'react'
import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components'
import { inputStyles } from 'styles'
import { MyText } from 'components'


const MainContainer = styled.View`
  ${props => (inputStyles(props, css)).container}
`

const StyledInput = styled.TextInput`
  ${props => (inputStyles(props, css)).input}
`

const FormInput = (props) => {
  const [height, setHeight] = useState(null)
  const { limit, title, length, focusOnRender, adaptiveHeight } = props
  const innerRef = useRef(null)


  useEffect(() => {
    if (adaptiveHeight) setHeight(adaptiveHeight)
    if (!focusOnRender) return

    setTimeout(() => {
      innerRef.current.focus()
    }, 300)
  }, [])

  const handleContentSize = (e) => {
    const nativeHeight = e.nativeEvent.contentSize.height

    if (!adaptiveHeight) return
    if (nativeHeight < adaptiveHeight) return setHeight(adaptiveHeight)

    setHeight(nativeHeight)
  }
  return (
    <React.Fragment>
      {title && (
        <Text inputHeader textTransform='uppercase'>
          {title}
        </Text>
      )}

      <MainContainer limit={limit} marg={props.marg}>
        <StyledInput
          textAlignVertical={props.multiline ? 'top' : 'center'}
          placeholderTextColor={props.placeholderColor ? props.placeholderColor : '#AEB0B2'}
          ref={props.inputRef || innerRef}
          onContentSizeChange={handleContentSize}
          {...props}
          style={props.adaptiveHeight &&
          {
            height: height
              || props.adaptiveHeight,
            maxHeight: props.maxAdaptiveHeight
              || Dimensions.get('window').height / 3
          }
          }
        />

        {props.limit && (
          <MyText style={{ fontSize: 16, letterSpacing: 0.2 }}>{length}/{limit}</MyText>
        )}
      </MainContainer>
    </React.Fragment>
  )
}
export default FormInput