const isProduction = process.env.NODE_ENV === "production";

export const API_BASE_URL = `https://${isProduction ? "api" : "api-staging"}.bocoup.com/v3`;
export const API_AUTH_URL = `${API_BASE_URL}/auth/authenticate`;
