import { FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../component/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
	const renderCategory = (itemData) => {
		const onPressHandler = () => {
			navigation.navigate('Meal Overview');
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
		/>
	);
};

export default CategoriesScreen;
