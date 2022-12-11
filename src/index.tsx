import React from 'react'
import { Text, Layout } from './component'
import { renderer } from './renderer'
import { CONSTANTS, Flux$LayoutSpec, Node } from '@flux-layout'

const App = () => {
  return <Layout width={400} height={200} widthResizePolicy={CONSTANTS.Shared}>
    <Layout width={100} height={100} widthResizePolicy={CONSTANTS.Shared}>      
      <Text color='#00ab00' fontSize={20} text={'text1'}/>
    </Layout>
    <Text color='#abab00' fontSize={40} text={'text2'}/>
    <Text color='#00abab' fontSize={60} text={'text3'}/>
    <Text color='#ab00ab' fontSize={80} text={'text4'}/>
    <Text color='#0000ab' fontSize={100} text={'text5'}/>
  </Layout>
}

const container = renderer.createContainer(document.getElementById('root'), 0, null, true, false, '', () => {}, null)
renderer.updateContainer(<App />, container)