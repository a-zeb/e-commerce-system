export declare class ApiError extends Error {
    statusCode?: number | undefined;
    details?: unknown | undefined;
    constructor(message: string, statusCode?: number | undefined, details?: unknown | undefined);
}
export declare function handleError(error: unknown): void;
//# sourceMappingURL=errorHandler.d.ts.map