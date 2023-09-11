import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const MealItemDetails = ({ duration, affordability, complexity }) => {
	return (
		<View style={styles.container}>
			<View style={styles.details}>
				<View style={styles.detailItem}>
					<FontAwesome5 name="clock" size={16} color="blue" />
					<Text style={styles.detailItemText}>{duration} mins</Text>
				</View>
				<View style={styles.detailItem}>
					<FontAwesome5 name="dollar-sign" size={16} color="green" />
					<Text style={styles.detailItemText}>{affordability}</Text>
				</View>
				<View style={styles.detailItem}>
					<FontAwesome5 name="tachometer-alt" size={16} color="red" />
					<Text style={styles.detailItemText}>{complexity}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 8,
		width: '90%',
		borderRadius: 10,
		backgroundColor: '#F0F0F0',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 4,
	},
	detailItem: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
		padding: 4,
	},
	detailItemText: {
		fontSize: 14,
		textTransform: 'capitalize',
		marginLeft: 4,
	},
});

export default MealItemDetails;
