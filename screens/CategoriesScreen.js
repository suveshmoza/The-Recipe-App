import { FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../component/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
	const renderCategory = (itemData) => {
		const onPressHandler = () => {
			navigation.navigate('MealOverview', {
				categoryId: itemData.item.id,
			});
		};

		return (
			<CategoryGridTitle
				title={itemData.item.title}
				color={itemData.item.color}
				onPressHandler={onPressHandler}
			/>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategory}
			numColumns={2}
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
		/>
	);
};

export default CategoriesScreen;
