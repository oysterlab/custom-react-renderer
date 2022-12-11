import React from 'react'
import { Text, Layout } from './flux/component'
import { renderer } from './renderer'
import { CONSTANTS, Flux$LayoutSpec, Node } from '@flux-layout'

const App = () => {
  return <Layout width={400} height={200} widthResizePolicy={CONSTANTS.Shared}>
    <Layout width={100} height={100} widthResizePolicy={CONSTANTS.Shared}>      
      <Text color='#00ab00' fontSize={20}>text1</Text>
    </Layout>
    <Text color='#abab00' fontSize={40}>text2</Text>
    <Text color='#00abab' fontSize={60}>text3</Text>
    <Text color='#ab00ab' fontSize={80}>text4</Text>
    <Text color='#0000ab' fontSize={100}>text5</Text>
  </Layout>
}

const container = renderer.createContainer(document.getElementById('root'), 0, null, true, false, '', () => {}, null)
renderer.updateContainer(<App />, container)