export const changeStatusCase = (status) => {
    switch (status) {
        case "in_progress":
            return "In Progress"

        case "needs_review":
            return "Needs Review"
        case "approved":
            return "Approved"
        case "all":
            return "All"
            default:
                return status
    }
}