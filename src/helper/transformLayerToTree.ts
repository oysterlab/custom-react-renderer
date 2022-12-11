export function transformLayerToTree(layer:any):any {
	const children = Array.from(layer.children || [])
		.filter((child:any) => !!child.prismProps)
		.map((child:any) => transformLayerToTree(child))

	const { prismProps, renderId } = layer

	//TODO: should be filter only related flux layout props
	return {
		...prismProps,
		renderId,
		children,
	}
}