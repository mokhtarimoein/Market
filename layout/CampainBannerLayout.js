import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
const width = Dimensions.get('window').width

const _renderItem = ({ item, index, size }) => {
    return (
        <View style={{ margin: 5 }}>
            <Image style={{ width: '100%', height: size === 'SMALL' ? 80 : 160, borderRadius: 10 }} source={{ uri: item.img_url }}></Image>
        </View>
    )
}

const CampainBannerLayout = ({ data }) => (
    <Carousel
        //   ref={(c) => { this._carousel = c; }}
        data={data.images}
        renderItem={({ item, index }) => (
            <_renderItem item={item} index={index} size={data.size} />
        )}
        sliderWidth={width}
        itemWidth={width}
        inverted={true}
    // layout={'stack'}
    />
)

export default CampainBannerLayout