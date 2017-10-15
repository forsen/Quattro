import React from 'react'
import { Provider } from 'react-redux'

import Dummy from './containers/Landing'
import configureStore from './store/index'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Text, View } from 'react-native'

const {store, persistor} = configureStore()

const Quattro = () => (
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<View><Text>LOADING BITCH</Text></View>}
    >
      <Dummy />
    </PersistGate>
  </Provider>
)

export default Quattro
