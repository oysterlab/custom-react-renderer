import react from 'react'
import { TextProps } from './src/common/render/Text'
import { LayoutProps } from './src/common/render/Layout'

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'prism-text': TextProps,
			'prism-layout': LayoutProps
		}
	}
}