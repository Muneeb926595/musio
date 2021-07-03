import React from 'react'
import { ImageBackground, View } from 'react-native'

import { StorageHelper } from "helpers"
import { slides } from 'rawData'
import { Heading3 } from 'components'

export default function Sliders() {

    const renderItem = ({ item }) => {
        return (
            <ImageBackground source={item.imageBg} style={styles.background}>
                <View style={styles.introIconContainer}>
                    <CachedImage resizeMode="cover" style={styles.introIcon} source={item.imageIcon} />
                </View>
                <View style={styles.container}>
                    <Heading3 style={styles.title}>{item.title}</Heading3>
                    <Body16 style={styles.text}>{item.text}</Body16>
                </View>
            </ImageBackground>
        )
    }

    const onDoneClicked = () => {
        StorageHelper.saveItem(StorageHelper.StorageKeys.SLIDES, "true").then(() => {
            setShowRealApp(true)
        })
    }

    return (
        <AppIntroSlider
            renderItem={renderItem}
            slides={slides}
            onDone={onDoneClicked}
        // dotStyle={styles.dot}
        // activeDotStyle={styles.activeDot}
        // buttonTextStyle={styles.button}
        // nextLabel={slidesButtons.next}
        // doneLabel={slidesButtons.done}
        />
    )
}
