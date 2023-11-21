const path = require('path');

module.exports = {
    entry: './src/index.js', // Your main JavaScript file
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Output JavaScript filename
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/, // Match CSS, SCSS, or SASS files
                use: [
                    'style-loader', // Inject styles into DOM
                    'css-loader', // Turn CSS into CommonJS
                    'sass-loader' // Compile Sass to CSS
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // Match image files
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[contenthash][ext]' // Output directory for images
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve from the 'dist' folder
        },
        compress: true,
        port: 3030, // Port for live server
        watchFiles: ['src/**/*.js', 'src/**/*.scss']
    }
};
