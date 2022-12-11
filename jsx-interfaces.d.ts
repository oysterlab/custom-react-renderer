import react from 'react'
import { TextProps } from './src/render/Text'
import { LayoutProps } from './src/render/Layout'

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'prism-text': TextProps,
			'prism-layout': LayoutProps
		}
	}
}