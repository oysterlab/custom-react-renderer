import React from 'react'
import { Text } from './component'
import { renderer } from './renderer'

const App = () => {
  return <>
    <Text color='#00ab00' fontSize={20}>Text</Text>
    <Text color='#0000ab' fontSize={40}>Text</Text>
    <Text color='#ab0000' fontSize={80}>Text</Text>
    <Text color='#00abab' fontSize={100}>Text</Text>
  </>
}

const container = renderer.createContainer(document.getElementById('root'), 0, null, false, null, '', () => {}, null)
renderer.updateContainer(<App />, container)