import React, { Component } from 'react';
import { func } from 'prop-types';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import login from '../actions/api';

class Dummy extends Component {
  componentDidMount() {
    this.props.dispatch(login());
  }
  render() {
    return (
      <View>
        <Text>Hei!</Text>
      </View>
    );
  }
}

Dummy.propTypes = {
  dispatch: func.isRequired
};

export default connect()(Dummy);
