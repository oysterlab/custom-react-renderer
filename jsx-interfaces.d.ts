import react from 'react'
import { TextProps } from './src/render/Text'

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'prism-text': TextProps
		}
	}
}