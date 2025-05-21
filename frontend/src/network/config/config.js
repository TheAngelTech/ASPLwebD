const config = {
 
    API_BASE_URL: process.env.NEXT_PUBLIC_ASPL_API_URL,
    
    API_TIMEOUT: 30000,
    
    // Default headers
    DEFAULT_HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    
    // API version
    API_VERSION: 'v1',
    
    // Retry configuration
    MAX_RETRIES: 3,
    RETRY_DELAY: 1000,
};

export default config; 