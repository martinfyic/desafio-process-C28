const { faker } = require('@faker-js/faker');

const generateRandomProducts = (numb = 10) => {
	const listProd = [];
	for (let index = 0; index < numb; index++) {
		const prod = {
			id: index + 1,
			title: faker.commerce.productName(),
			description: faker.lorem.sentence(5),
			price: faker.commerce.price(),
			url: faker.image.imageUrl(),
		};
		listProd.push(prod);
	}
	return listProd;
};

module.exports = generateRandomProducts;
