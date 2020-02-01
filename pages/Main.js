/**
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'
import { getMainData } from '../redux/actions'
import { connect } from 'react-redux'
import Parser from '../services/Parser'
import styled from 'styled-components'
import MainFactory from '../factory/MainFactory'

class MainPage extends Component {

    constructor(props) {
        super(props)

        this.parser = new Parser()
        
        this.getData()
    }

    async getData() {
        await this.props.getMainData()
        const { isBusy, data, errorMessage } = this.props.mainResponse
        if (data.success)
            this.parser.parseMainJson(data.items)
    }

    render() {
        return (
            <StyledView>
                <FlatList
                    data={this.props.mainResponse.data != null ? this.props.mainResponse.data.items : []}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <MainFactory data={item}></MainFactory>
                    )} />
            </StyledView>
        )
    }
}

const StyledView = styled.View`
  flex: 1
`

const mapStateToProps = (state) => ({
    mainResponse: state.mainResponse
})

export default connect(mapStateToProps, { getMainData })(MainPage)