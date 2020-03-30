import React, { useMemo, ReactNode, ComponentPropsWithoutRef } from 'react'
import { View, ViewStyle } from 'react-native'

type Props = ComponentPropsWithoutRef<typeof View> & {
	justifyContent?: ViewStyle['justifyContent']
	alignItems?: ViewStyle['alignItems']
	children: ReactNode
}

export function Row(props: Props) {
	const { justifyContent, alignItems, ...view } = props

	const style = useMemo<Props['style']>(() => {
		return [
			view.style,
			{
				flexDirection: 'row',
				justifyContent,
				alignItems,
			},
		]
	}, [alignItems, justifyContent, view.style])

	return <View {...view} style={style} />
}

// const styles = StyleSheet.create({
// 	container: {
// 		flexDirection: 'row',
// 	},
// })
