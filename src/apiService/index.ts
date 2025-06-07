type IApiService = {
	get: <T>(path: string) => Promise<T>;
	// post: <T>(path: string, body: any) => Promise<T>;
	// put: <T>(path: string, body: any) => Promise<T>;
	// delete: <T>(path: string) => Promise<T>;
};

export enum HttpMethod {
	GET = "GET",
	POST = "POST",
	PUT = "PUT",
	DELETE = "DELETE",
}

type ApiServiceConstructor = {
	readonly hostname: string;
	readonly token?: string;
};
export class ApiService implements IApiService {
	constructor(private readonly props: ApiServiceConstructor) {}

	get getHostname() {
		return this.props.hostname;
	}
	public async get<T>(path: string) {
		return Promise.resolve("" as T);
	}
}
