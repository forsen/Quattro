import React, { Component } from 'react'
import { func, object } from 'prop-types'
import { Button, StatusBar, Switch, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { endTrip } from '../actions/trip'
import { startMotor, stopMotor } from '../actions/motor'

class TripView extends Component {
  constructor () {
    super()

    this.handleOnPress = this.handleOnPress.bind(this)
    this.handleMotorValueChange = this.handleMotorValueChange.bind(this)
  }

  handleOnPress () {
    const {dispatch, trip} = this.props
    trip.endDate = new Date();
    dispatch(endTrip(trip))
  }

  handleMotorValueChange () {
    const {dispatch, motor} = this.props

    motor.on ? dispatch(stopMotor(motor)) : dispatch(startMotor());
  }

  render () {
    const {motor} = this.props;
    return (
      <View>
        <Text>TripView!!!</Text>
        <Text>Motor!</Text><Switch onValueChange={this.handleMotorValueChange} value={motor.on} />
        <Button onPress={this.handleOnPress} title="Avslutt tur" />
      </View>
    )
  }
}

TripView.propTypes = {
  dispatch: func.isRequired,
  trip: object.isRequired,
  motor: object.isRequired
}

const mapStateToProps = ({motor, trip}) => ({
  motor,
  trip
})

export default connect(mapStateToProps)(TripView)
