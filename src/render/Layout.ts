import React from "react"
import { BaseRenderObject } from "../interface"
import { LayoutProps as LayoutComponentProps } from "../types"

export interface LayoutProps extends BaseRenderObject{
	props: Omit<LayoutComponentProps, 'children'>
	children?: React.ReactNode
}

export const layout = (layer:any) => ({props, calculated}:LayoutProps) => {
	const ele = layer || document.createElement('div')
	if (!layer) ele.renderId = Math.random() + ''
	ele.style.position = 'absolute'

	if (calculated) {
		ele.style.width = calculated.width + 'px'
		ele.style.height = calculated.height + 'px'
		ele.style.left = calculated.x + 'px'
		ele.style.top = calculated.y + 'px'
	}

	//debug
	ele.style.backgroundColor = '#00ab00ab'

	ele.prismProps = props

	return ele
}