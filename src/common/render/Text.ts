import { BaseRenderObject } from "../interface"

export interface TextProps extends BaseRenderObject {
	text?:string
	color?:string
	fontSize?:number
}

export const text = (layer:any) => ({ text, color, fontSize }:TextProps) => {
	const ele = layer || document.createElement('div')

	if (text) ele.textContent = text
	if (color) ele.style.color = color
	if (fontSize) ele.style.fontSize = fontSize + 'px'

	return ele
}