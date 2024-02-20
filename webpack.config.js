// webpack.config.js

export const resolve = {
    fallback: {
        "crypto": require.resolve("crypto-browserify")
    }
};