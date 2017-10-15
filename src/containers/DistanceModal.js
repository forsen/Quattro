import React, { Component } from 'react'
import { bool, func, string } from 'prop-types'
import { Modal, Text, TextInput, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { closeModal, setTripDistance } from '../actions/distance'

class DistanceModal extends Component {
  constructor () {
    super()

    this.handleCloseRequest = this.handleCloseRequest.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleCloseRequest () {
    const {dispatch, visible} = this.props
    dispatch(closeModal(visible))
  }

  handleInputChange (value) {
    const {dispatch} = this.props
    dispatch(setTripDistance(value))
  }

  render () {
    const {value, visible} = this.props
    debugger
    return (

      <Modal
        animationType='slide'
        visible={visible !== ''}
      >
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.text}>Tripteller</Text>
            <TextInput
              onChangeText={this.handleInputChange}
              keyboardType='number-pad'
              returnKeyType='done'
              value={value}
              autoFocus
              style={styles.textInput}
              onEndEditing={this.handleCloseRequest}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

const gray = 'gray'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 22
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 50
  },
  text: {
    fontSize: 40,
    marginBottom: 50
  },
  textInput: {
    borderColor: gray,
    borderWidth: 1,
    width: 250,
    height: 100,
    fontSize: 100
  }
})

DistanceModal.propTypes = {
  dispatch: func.isRequired,
  value: string.isRequired,
  visible: string.isRequired
}
const mapStateToProps = ({distance}) => {
  return {
    visible: distance.visible,
    value: distance.value
  }
}

export default connect(mapStateToProps)(DistanceModal)