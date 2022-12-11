import { useEffect, useRef, useState } from 'react'
import { findRoot } from '../helper/findRoot'
import { transformLayerToTree } from '../helper/transformLayerToTree'
import { CalculatedLayout } from '../interface'
import { LayoutProps } from '../types'
import { Flux$LayoutSpec, Node } from '@flux-layout'

export function Layout({children, ...others}: LayoutProps) {
	const ref = useRef()
	const [calculated, setCalculated] = useState({width:0, height:0, x:0, y:0} as CalculatedLayout)

	useEffect(() => {
		if (ref.current) {
			const root = findRoot(ref.current)
			const tree = transformLayerToTree(root)
			
			const cal = async (tree:any) => {
				const screen = new Node(1920, 1080)


				const output = await screen.calculateLayout([tree])
				console.log(output)
			}
			cal(tree)
		}
		// subscribe id, if equal id is equal with stream id, then update calculated
		
	}, [])

	useEffect(() => {
		const cal:CalculatedLayout = {
			width: others.width || 0,
			height: others.height || 0,
			x: 0,
			y: 0,
		}
		setCalculated(cal)
	}, [others.width, others.height])

	return <prism-layout props={others} children={children} calculated={calculated} ref={ref} />
}
