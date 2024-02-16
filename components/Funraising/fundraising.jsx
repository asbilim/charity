import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Thanks from '../home/thanks'
import FundraisingFu from '../home/fundraisingfu'

const FunraisingFrac = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <FundraisingFu/>
        <FundraisingFu/>
        <FundraisingFu/>
    </ScrollView>
  )
}

export default FunraisingFrac