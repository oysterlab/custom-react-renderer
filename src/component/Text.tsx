import { TextProps as PrimitiveTextProps } from '../render/Text'

export interface TextProps extends Omit<PrimitiveTextProps, 'text'> {
	children?: string | number
}

export function Text(props: TextProps) {
	return <prism-text {...props} text={props.children?.toString()}/>
}