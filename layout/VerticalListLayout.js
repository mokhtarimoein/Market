import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import Styles from '../utils/Styles'

const VerticalListLayout = ({ data }) => (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={Styles.font}>{data.title}</Text>
        <FlatList
            data={data.images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <View style={{ margin: 10, alignItems: 'center' }}>
                    <Image style={{ borderRadius: 10, width: 100, height: 100 }} source={{ uri: item.img_url }}></Image>
                    <Text style={Styles.font}>{item.title}</Text>
                </View>
            )}
            numColumns={3}
        />
    </View>
)

export default VerticalListLayout