export const AuthProvider = {
	login: (params: any) => params.username ? Promise.resolve() : Promise.reject(),
	logout: () => Promise.resolve(),
	checkError: (params: any) => Promise.resolve(),
	checkAuth: () => Promise.resolve(),
	getPermissions: (params: any) => Promise.resolve(),
	getIdentity: () => Promise.resolve({
		id: 0,
		fullName: "Gabriel B. Malenowitch", 
		avatar: "https://github.com/Gabriel-Malenowitch.png"
	}),
};
