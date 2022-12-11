import { BaseRenderObject } from "../interface"
import { TextProps as TextComponentProps } from "../types"

export interface TextProps extends BaseRenderObject {
	props: TextComponentProps, 
}

export const text = (layer:any) => ({ props }:TextProps) => {
	const { text, color, fontSize } = props 
	const ele = layer || document.createElement('div')
	if (!layer) ele.renderId = Math.random() + ''

	if (text) ele.textContent = text
	if (color) ele.style.color = color
	if (fontSize) ele.style.fontSize = fontSize + 'px'

	ele.prismProps = props

	return ele
}