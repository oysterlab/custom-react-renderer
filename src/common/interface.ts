export interface CalculatedLayout {
	width: number
	height: number
	x: number
	y: number
}

export interface BaseRenderObject {
	calculated: CalculatedLayout|null
}