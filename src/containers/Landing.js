import React, { Component } from 'react'
import { func, object } from 'prop-types'
import { connect } from 'react-redux'
import { startTrip } from '../actions/trip'
import { Button, Text, View } from 'react-native'
import TripView from './TripView'

class Dummy extends Component {
  constructor () {
    super()
    this.handleOnPress = this.handleOnPress.bind(this)
  }

  handleOnPress () {
    this.props.dispatch(startTrip())
  }

  render () {
    const {trip} = this.props

    return trip.active ? <TripView /> : <View>
      <Text>Hei!</Text>
      <Button onPress={this.handleOnPress} title="Start ny tur" />
    </View>
  }
}

Dummy.propTypes = {
  dispatch: func.isRequired,
  trip: object
}

const mapStateToProps = ({trip}) => {
  return {
    trip
  }
}

export default connect(mapStateToProps)(Dummy)
