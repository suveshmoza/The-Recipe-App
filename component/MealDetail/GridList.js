import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const List = ({ data }) => {
	const middleIndex = Math.ceil(data.length / 2);
	const leftColumnData = data.slice(0, middleIndex);
	const rightColumnData = data.slice(middleIndex);

	return (
		<View style={styles.container}>
			<View style={styles.column}>
				{leftColumnData.map((dataItem) => (
					<View key={dataItem} style={styles.listItem}>
						<Text style={styles.itemText}>{dataItem}</Text>
					</View>
				))}
			</View>
			<View style={styles.column}>
				{rightColumnData.map((dataItem) => (
					<View key={dataItem} style={styles.listItem}>
						<Text style={styles.itemText}>{dataItem}</Text>
					</View>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		flexWrap: 'wrap',
	},
	column: {
		width: '48%',
	},
	listItem: {
		borderRadius: 10,
		paddingHorizontal: 16,
		paddingVertical: 12,
		marginVertical: 8,
		backgroundColor: '#F0F0F0',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 4,
	},
	itemText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
});

export default List;
