import { useEffect, useRef, useState } from 'react'
import { findRoot } from '../helper/findRoot'
import { TextProps } from '../types'

export function Text(props: TextProps) {
	const ref = useRef()
	const [calculated, setCalculated] = useState(null)

	useEffect(() => {
		if (ref.current) {
			const root = findRoot(ref.current)
			console.log(root)
		}
		// subscribe id, if equal id is equal with stream id, then update calculated
		
	}, [])
	
	return <prism-text props={props} calculated={calculated} ref={ref}/>
}