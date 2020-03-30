import React, { useMemo, ReactNode, ComponentPropsWithoutRef } from 'react'
import { View } from 'react-native'

type Props = ComponentPropsWithoutRef<typeof View> & {
	// justifyContent?: ViewStyle['justifyContent']
	// alignItems?: ViewStyle['alignItems']
	children: ReactNode
}

export function Col(props: Props) {
	const { ...view } = props

	const style = useMemo<Props['style']>(() => {
		return [
			view.style,
			{
				flex: 1,
				// justifyContent,
				// alignItems,
			},
		]
	}, [view.style])

	return <View {...view} style={style} />
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// })
