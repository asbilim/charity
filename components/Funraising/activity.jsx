import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Thanks from '../home/thanks'

const Activity = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <Thanks/>
        <Thanks/>
        <Thanks/>
        <Thanks/>
        <Thanks/>
        <Thanks/>
        <Thanks/>
        <Thanks/>
    </ScrollView>
  )
}

export default Activity