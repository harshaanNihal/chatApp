export const util = {
	baseURL: `http://localhost:8000/api/v1`,
	ValidateEmail: (mail) => {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
			return true;
		}
		return false;
	}
};
