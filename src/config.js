export const getBaseUrl = () => {
    //const env = "development";
    const env = "production";

    if (env === "development") {
        return "http://localhost:8081";
    }

    if (env === "production") {
        return "http://test-env.eeimg4gnv9.us-east-2.elasticbeanstalk.com";
    }
}