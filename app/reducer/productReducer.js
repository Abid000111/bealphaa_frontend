const productReducer = (state, action) => {
	switch (action.type) {
		case "SET_LOADING":
			return {
				...state,
				isLoading: true
			};

		case "SET_API_DATA":
			const featureData = action.payload.Products.filter((curElem) => {
				return curElem.featured === true;
			});

			return {
				...state,
				isLoading: false,
				products: action.payload.Products,
				featureProducts: featureData
			};

		case "API_ERROR":
			return {
				...state,
				isLoading: false,
				isError: true
			};

		case "SET_SINGLE_LOADING":
			return {
				...state,
				isSingleLoading: true
			};

		case "SET_SINGLE_PRODUCT":
			return {
				...state,
				isSingleLoading: false,
				singleProduct: action.payload.Products[0]
			};

		case "SET_SINGLE_ERROR":
			return {
				...state,
				isSingleLoading: false,
				isError: true
			};

		case "LOAD_FILTER_PRODUCTS":
			return {
				...state,
				filter_products: [...action.payload.Products]
			};

		// case "GET_SORT_VALUE":
		// 	let userSortValue = document.getElementById("sort");
		// 	let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
		// 	console.log(sort_value);
		// 	return {
		// 		...state,
		// 		sorting_value: sort_value
		// 	};

		// case "SORTING_PRODUCTS":
		// 	let newSortData;
		// 	let tempSortProduct = [...action.payload];

		// 	if (state.sorting_value === "a-z") {
		// 		newSortData = tempSortProduct.sort((a, b) => {
		// 			return a.name.localeComapre(b.name);
		// 		});
		// 	}

		// 	return {
		// 		...state,
		// 		filter_products: newSortData
		// 	};

		default:
			return state;
	}
};

export default productReducer;
