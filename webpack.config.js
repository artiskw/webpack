const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/, //ja fails beidzas ar css, vienmer izmantot css-loader
                use: [
                "style-loader", //3. Inject styles into DOM
                "css-loader",   //2. Turns css into common js
                "sass-loader"   //1. Turns sass into css
            ]

            }
        ]
    }
};