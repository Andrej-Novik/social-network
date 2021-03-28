import * as axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY" : "a6e30923-46fd-47a5-9c72-35d46849af67"
	}
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return (
			instance.get(`users?page=${currentPage}&count=${pageSize}`)
				.then(response => {
					return response.data
				})
		)
	},
	follow(userId) {
		return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
	},
	unfollow(userId) {
		return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
	},
	getProfile(userId) {
		return (
			instance.get(`profile/` + userId)
		)
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	}
}