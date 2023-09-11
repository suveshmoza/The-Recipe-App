import React from 'react';
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';
import MealItemDetails from './MealItemDetails';
import { useNavigation } from '@react-navigation/native';

const MealItem = ({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) => {
	const navigation = useNavigation();
	const selectMealHandler = () => {
		navigation.navigate('MealDetail', { mealId: id });
	};

	return (
		<Pressable
			style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
			onPress={selectMealHandler}
		>
			<View style={styles.mealItem}>
				<View style={styles.innerContainer}>
					<Image source={{ uri: imageUrl }} style={styles.image} />
					<Text style={styles.title}>{title}</Text>
					<MealItemDetails
						duration={duration}
						affordability={affordability}
						complexity={complexity}
					/>
				</View>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		margin: 8,
		marginBottom: 16,
		borderRadius: 10,
		overflow: 'hidden',
		backgroundColor: 'white',
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	innerContainer: {
		borderRadius: 10,
		overflow: 'hidden',
		paddingBottom: 8,
	},
	image: {
		width: '100%',
		height: 200,
		resizeMode: 'cover',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 8,
		paddingHorizontal: 12,
	},
});

export default MealItem;
