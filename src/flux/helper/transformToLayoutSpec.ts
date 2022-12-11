import { LayoutProps } from "../types"
import { Flux$LayoutSpec, Flux$Padding } from "@flux-layout"

export function transformToLayoutSpec(props:LayoutProps) {
	const spec = new Flux$LayoutSpec()

	Object.keys(props).forEach((key) => {
		if (key === "children") return
		if (key.startsWith("padding")) return
		if (key in spec) {
			(spec as any)[key] = (props as any)[key];
		}
	})
	spec.padding = transformFluxPadding(props)

	return spec
}


function transformFluxPadding(props:LayoutProps) {
	const padding = new Flux$Padding()

	if (!!props.padding) {
		padding.left = props.padding
		padding.top = props.padding
		padding.right = props.padding
		padding.bottom = props.padding
	} 
	if (!!props.paddingLeft) {
		padding.left = props.paddingLeft
	}
	if (!!props.paddingTop) {
		padding.top = props.paddingTop
	}
	if (!!props.paddingRight) {
		padding.right = props.paddingRight
	}
	if (!!props.paddingBottom) {
		padding.bottom = props.paddingBottom
	}

	return padding
}