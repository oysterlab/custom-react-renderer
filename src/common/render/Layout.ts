import { BaseRenderObject } from "../interface"

export interface LayoutProps extends BaseRenderObject{

}

export const layout = (layer:any) => ({calculated}:LayoutProps) => {
	const ele = layer || document.createElement('div')

	ele.style.position = 'absolute'

	if (calculated) {
		ele.style.width = calculated.width + 'px'
		ele.style.height = calculated.height + 'px'
		ele.style.left = calculated.x + 'px'
		ele.style.top = calculated.y + 'px'
	}

	//debug
	ele.style.backgroundColor = '#00ab00ab'

	return ele
}