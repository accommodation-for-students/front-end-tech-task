import React from 'react'
import Message from './components/Message'
import properties from './data/properties'

import './App.scss'

export default () => <Message text={`Welcome to ${properties[0].address.city}`} /> 