// Implement a custom error class and functions to handle different types of errors gracefully.

export class ApiError extends Error {
    constructor(
        message: string,
        public statusCode?: number,
        public details?: unknown
    ) {
        super(message);
        this.name = "ApiError";
    }
}

export function handleError(error: unknown): void {
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
