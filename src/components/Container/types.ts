import { ContainerSize } from '../../types/sizes'
import { ComponentType, ReactNode } from 'react'
import { ViewStyle } from 'react-native'

export type ContainerProps = {
	/**
	 * Allow the Container to fill all of its available horizontal space.
	 * @type {(true|"sm"|"md"|"lg"|"xl")}
	 */
	fluid?: ContainerSize | boolean
	/**
	 * You can use a custom element for this component
	 */
	as?: ComponentType
	children: ReactNode
	style?: ViewStyle
}
