import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const MealItemDetails = ({ duration, affordability, complexity }) => {
	return (
		<View style={styles.details}>
			<View style={styles.detailItem}>
				<FontAwesome5 name="clock" size={16} color="blue" />
				<Text style={styles.detailItemText}>{duration}</Text>
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
	);
};

export default MealItemDetails;

const styles = StyleSheet.create({
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		padding: 4,
	},
	detailItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 3,
	},
	detailItemText: {
		fontSize: 16,
		textTransform: 'capitalize',
	},
});
