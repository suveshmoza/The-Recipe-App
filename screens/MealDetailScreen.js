import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import MealItemDetails from '../component/MealItemDetails';
import { MEALS } from '../data/dummy-data';
import Subtitle from '../component/MealDetail/Subtitle';
import List from '../component/MealDetail/List';
import GridList from '../component/MealDetail/GridList';

const MealDetailScreen = ({ route, navigation }) => {
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealItemDetails
				duration={selectedMeal.duration}
				affordability={selectedMeal.affordability}
				complexity={selectedMeal.complexity}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle style={styles.subtitle}>Ingredients</Subtitle>
					<GridList data={selectedMeal.ingredients} />
				</View>
			</View>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle style={styles.subtitle}>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		backgroundColor: '#ffffff', // White background
		flex: 1,
	},
	image: {
		width: '100%',
		height: 300,
		resizeMode: 'cover',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 16,
		textAlign: 'center',
	},
	listOuterContainer: {
		alignItems: 'center',
	},
	listContainer: {
		width: '90%',
		backgroundColor: '#ffffff',
		borderRadius: 10,
		padding: 16,
		marginVertical: 16,
		borderWidth: 1,
		borderColor: '#E5E5E5',
		elevation: 1,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 16,
		color: '#333333',
	},
});

export default MealDetailScreen;
