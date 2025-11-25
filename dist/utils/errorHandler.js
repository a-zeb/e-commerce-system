// Implement a custom error class and functions to handle different types of errors gracefully.
export class ApiError extends Error {
    statusCode;
    details;
    constructor(message, statusCode, details) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        this.name = "ApiError";
    }
}
export function handleError(error) {
    if (error instanceof ApiError) {
        console.error(`[API ERROR] ${error.message} (${error.statusCode ?? "no status"})`);
        if (error.details) {
            console.error("Details:", error.details);
        }
        return;
    }
    if (error instanceof Error) {
        console.error(`[UNEXPECTED ERROR] ${error.name}: ${error.message}`);
        return;
    }
    console.error("[UNKNOWN ERROR]", error);
}
//# sourceMappingURL=errorHandler.js.map