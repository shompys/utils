import { sortBy } from "./utils";

const main = () => {
	const result = sortBy({
		array: [{ name: "jona" }, { name: "pedro" }, { name: "ana" }],
		key: "name",
		direction: "desc",
	});

	console.log(result);
};
process.env.IS_LOCAL && main();

export { sortBy };
