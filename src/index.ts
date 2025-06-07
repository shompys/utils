import { ApiService } from "./apiService";

export const hi = () => {
	console.log("hi");
};

const api = new ApiService({
	hostname: "https://api.example.com",
	token: "1234",
});
console.log(api);
console.log("-> ", api.getHostname);
