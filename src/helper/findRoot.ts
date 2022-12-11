export const findRoot = (layer: any):any => {
	let root = layer
	let cursor = layer
	while(cursor.parentElement) {
		cursor = cursor.parentElement
		if(cursor.renderId) {
			root = cursor
		}
	}
	return root
}
