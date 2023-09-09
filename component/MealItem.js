import {
	View,
	Pressable,
	Text,
	Image,
	StyleSheet,
	Platform,
} from 'react-native';
import MealItemDetails from './MealItemDetails';

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.text}>{title}</Text>
					</View>
					<MealItemDetails
						duration={duration}
						affordability={affordability}
						complexity={complexity}
					/>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		margin: 4,
		marginBottom: 24,
		borderRadius: 16,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	innerContainer: {
		borderRadius: 16,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 200,
		objectFit: 'cover',
	},
	text: {
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
		margin: 4,
	},
	buttonPressed: {
		opacity: 0.5,
	},
});
