import React from 'react'
import { View, Image, Dimensions, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import Styles from '../utils/Styles'
import Colors from '../utils/Colors'
const width = Dimensions.get('window').width

const _renderItem = ({ item, index }) => {
    return (
        <View style={{ backgroundColor: Colors.white, padding: 10, borderRadius: 5 }}>
            <Image style={{ width: 120, height: 120 }} source={{ uri: item.images[0].image }}></Image>
            <Text style={Styles.font}>{item.title}</Text>
        </View>
    )
}

const HorizontalListLayout = ({ data }) => (
    <View style={{ marginTop: 5, marginBottom: 5, backgroundColor: Colors.blueSky }}>
        <Text style={[Styles.font, { fontSize: 12, padding: 10 }]}>{data.title}</Text>
        <Carousel
            data={data.products}
            renderItem={_renderItem}
            sliderWidth={width}
            itemWidth={130}
            inverted={true}
        />
    </View>
)

export default HorizontalListLayout