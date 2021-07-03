import React from 'react'
import { Image } from "react-native"

import { Icon } from "components"

const baseUrl = "https://food-book.co/api/";

const PostImage = ({ uri, size, width, height, borderRadius }) => {

  if (!uri) return <Icon type='post-placeholder' size={size} width={width} height={height} borderRadius={borderRadius} />

  return (
    <Image
      source={{ uri: baseUrl + uri }}
      style={{
        width: width ? width : size || 25,
        height: height ? height : size || 25,
        marginTop: 1,
        borderRadius: borderRadius ? borderRadius : 0,
        alignSelf: 'center',
        borderColor: 'white',
      }}
    />
  )

}

export default PostImage
