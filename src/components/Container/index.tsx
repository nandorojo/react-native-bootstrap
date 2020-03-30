import React, { useMemo } from 'react'
import { ContainerProps } from './types'
import { View, ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

type Props = ContainerProps

/**
 * TODO add media queries for fluid prop
 */

export default function Container(props: Props) {
	const { fluid = false, style: styleProp, children } = props
	const style = useMemo(() => {
		let addedStyle: ViewStyle = {}
		if (fluid) {
			addedStyle = {
				...addedStyle,
				...styles.fluid,
			}
		}
		if (styleProp) {
			addedStyle = {
				...addedStyle,
				...styleProp,
			}
		}
		return [styles.container, addedStyle]
	}, [fluid, styleProp])

	return <View style={style}>{children}</View>
}

const styles = EStyleSheet.create({
	container: {
		alignSelf: 'center',
	},
	'@media (max-width: 768)': {
		// media queries
		container: {
			width: 'auto',
		},
	},
	'@media (min-width: 768) and (max-width: 992)': {
		// media queries
		container: {
			width: 750,
		},
	},
	'@media (min-width: 992) and (max-width: 1170)': {
		// media queries
		container: {
			width: 970,
		},
	},
	'@media (min-width: 1170)': {
		// media queries
		container: {
			width: 1170,
		},
	},
	fluid: {
		width: 'auto',
	},
})
