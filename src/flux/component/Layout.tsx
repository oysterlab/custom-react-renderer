import { useEffect, useState } from 'react'
import { CalculatedLayout } from '../../common/interface'
import { LayoutProps } from '../types'

export function Layout(props: LayoutProps) {
	const [calculated, setCalculated] = useState({width:0, height:0, x:0, y:0} as CalculatedLayout)

	useEffect(() => {
		// subscribe id, if equal id is equal with stream id, then update calculated

		




		// const cal:CalculatedLayout = {
		// 	width: props.width || 0,
		// 	height: props.height || 0,
		// 	x: 0,
		// 	y: 0,
		// }
		// setCalculated(cal)
	}, [props.width, props.height])

	return <prism-layout {...props} calculated={calculated} />
}