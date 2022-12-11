import { Flux$AlignParams, Flux$LayoutTypes, Flux$MarginPolicy, Flux$OmissionRules, Flux$RearrangeRules } from "./flux-layout/src/Enums";

export interface BaseLayerProps {
	layerId?: string;
}

export interface SizeProps {
	width?: number;
	height?: number;
}

export interface MinMaxSizeProps {
	minWidth?:number
	maxWidth?:number	
	minHeight?:number
	maxHeight?:number	
}

export interface ResizePolicyProps {
	widthResizePolicy?: Flux$LayoutTypes
	heightResizePolicy?: Flux$LayoutTypes
}

export interface PaddingProps {
	padding?: number
	paddingLeft?: number
	paddingRight?: number
	paddingTop?: number
	paddingBottom?: number
}

export interface LayoutProps 
	extends BaseLayerProps,
		SizeProps,
		MinMaxSizeProps,
		ResizePolicyProps,
		PaddingProps {
		
		layoutType?: Flux$LayoutTypes
		weight?: number
		itemGap?: number
		rearrangeGap?: number

		omissionRule?: Flux$OmissionRules
		align?: Flux$AlignParams
		itemAlign?: Flux$AlignParams
		rearrangeRule?: Flux$RearrangeRules

		enableExpandWidthToUIArea?: boolean

		margin?: number
		marginAreaPolicy?: Flux$MarginPolicy

		children?: React.ReactNode
}