declare global {
    namespace NodeJS {
      interface ProcessEnv {
        ST_API_TOKEN: string;
        ST_API_URL: string;
      }
    }
  }
  
export {}