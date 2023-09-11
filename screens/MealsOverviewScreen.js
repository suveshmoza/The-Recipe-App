import { FlatList, View, StyleSheet } from 'react-native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../component/MealItem';
import { useLayoutEffect } from 'react';

const MealsOverviewScreen = ({ route, navigation }) => {
	const catID = route.params.categoryId;

	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catID) >= 0;
	});

	useLayoutEffect(() => {
		const catTitle = CATEGORIES.find((category) => category.id === catID).title;
		navigation.setOptions({
			title: catTitle,
		});
	}, [catID, navigation]);

	const renderMealItem = (itemData) => {
		const item = itemData.item;
		const mealItemProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			affordability: item.affordability,
			complexity: item.complexity,
			duration: item.duration,
		};

		return <MealItem {...mealItemProps} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
