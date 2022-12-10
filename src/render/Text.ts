
export interface TextProps {
	text?:string
	color?:string
	fontSize?:number
}

export function Text({ text, color, fontSize }:TextProps) {
	const ele = document.createElement('div')

	if (text) ele.textContent = text
	if (color) ele.style.color = color
	if (fontSize) ele.style.fontSize = fontSize + 'px'

	return ele
}