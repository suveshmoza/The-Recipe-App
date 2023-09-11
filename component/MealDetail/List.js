import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const List = ({ data }) => {
	return data.map((dataItem) => (
		<View key={dataItem} style={styles.listItem}>
			<Text style={styles.itemText}>{dataItem}</Text>
		</View>
	));
};

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 10,
		paddingHorizontal: 16,
		paddingVertical: 12,
		marginVertical: 8,
		marginHorizontal: 12,
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
