import React, { Component } from 'react'
import { func, object } from 'prop-types'
import { Button, StatusBar, Switch, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { endTrip } from '../actions/trip'
import { MOTOR_START, MOTOR_STOP, startMotor, stopMotor } from '../actions/motor'
import { DOWN_STORSEIL, downStorseil, UP_STORSEIL, upStorseil } from '../actions/storseil'
import { DOWN_FORSEIL, downForseil, UP_FORSEIL, upForseil } from '../actions/forseil'
import { openModal, toggleModal } from '../actions/distance'
import DistanceModal from './DistanceModal'

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
    trip.endDate = new Date()
    dispatch(endTrip(trip))
  }

  handleMotorValueChange () {
    const {dispatch, motor} = this.props
    motor.on ? dispatch(openModal(MOTOR_STOP)) : dispatch(openModal(MOTOR_START))
  }

  handleStorseilValueChange () {
    const {dispatch, storseil} = this.props
    storseil.up ? dispatch(openModal(DOWN_STORSEIL)) : dispatch(openModal(UP_STORSEIL))
  }

  handleForseilValueChange () {
    const {dispatch, forseil} = this.props
    forseil.up ? dispatch(openModal(DOWN_FORSEIL)) : dispatch(openModal(UP_FORSEIL))
  }

  render () {
    const {forseil, motor, storseil} = this.props
    return (
      <View>
        <DistanceModal />
        <Text>TripView!!!</Text>
        <Text>Motor!</Text><Switch onValueChange={this.handleMotorValueChange} value={motor.on} />
        <Text>Storseil</Text><Switch onValueChange={this.handleStorseilValueChange} value={storseil.up} />
        <Text>Forseil</Text><Switch onValueChange={this.handleForseilValueChange} value={forseil.up} />
        <Button onPress={this.handleOnPress} title="Avslutt tur" disabled={motor.on || storseil.up || forseil.up} />
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
