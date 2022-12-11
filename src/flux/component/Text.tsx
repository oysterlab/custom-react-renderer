import { useState } from 'react'
import { TextProps as RenderTextProps } from '../../common/render/Text'

export interface TextProps extends Omit<RenderTextProps,'calculated'> {
	children?: string | number
}

export function Text(props: TextProps) {
	const [calculated, setCalculated] = useState(null)

	return <prism-text {...props} text={props.children?.toString()} calculated={calculated}/>
}