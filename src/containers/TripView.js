import React, { Component } from 'react'
import { func, object } from 'prop-types'
import { Button, StatusBar, Switch, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { endTrip } from '../actions/trip'
import { startMotor, stopMotor } from '../actions/motor'
import { downStorseil, upStorseil } from '../actions/storseil'
import { downForseil, upForseil } from '../actions/forseil'

class TripView extends Component {
  constructor () {
    super()

    this.handleOnPress = this.handleOnPress.bind(this)
    this.handleMotorValueChange = this.handleMotorValueChange.bind(this)
    this.handleStorseilValueChange = this.handleStorseilValueChange.bind(this)
    this.handleForseilValueChange = this.handleForseilValueChange.bind(this)
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

  handleStorseilValueChange () {
    const {dispatch, storseil} = this.props
    storseil.up ? dispatch(downStorseil(storseil)) : dispatch(upStorseil());
  }

  handleForseilValueChange () {
    const {dispatch, forseil} = this.props
    forseil.up ? dispatch(downForseil(forseil)) : dispatch(upForseil());
  }


  render () {
    const {forseil, motor, storseil} = this.props;
    return (
      <View>
        <Text>TripView!!!</Text>
        <Text>Motor!</Text><Switch onValueChange={this.handleMotorValueChange} value={motor.on} />
        <Text>Storseil</Text><Switch onValueChange={this.handleStorseilValueChange} value={storseil.up} />
        <Text>Forseil</Text><Switch onValueChange={this.handleForseilValueChange} value={forseil.up} />
        <Button onPress={this.handleOnPress} title="Avslutt tur" />
      </View>
    )
  }
}

TripView.propTypes = {
  dispatch: func.isRequired,
  trip: object.isRequired,
  motor: object.isRequired,
  forseil: object.isRequired,
  storseil: object.isRequired
}

const mapStateToProps = ({motor, trip, forseil, storseil}) => ({
  motor,
  trip,
  forseil,
  storseil
})

export default connect(mapStateToProps)(TripView)
