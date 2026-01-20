export const useAuth = () => {
    return {
        isAuthenticated: true,
        user: {
            name: "John Doe",
            email: "john.doe@example.com",
            avatar: "https://via.placeholder.com/150",
        },
    }
}