import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight } from 'react-native'

export default class Button extends React.Component<any> {

    render() {
        return <TouchableHighlight onPress={this.props.onPress}>{this.props.children}</TouchableHighlight>
    }
}