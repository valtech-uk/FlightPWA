module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.avif$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'image/avif',
                },
            },
        ],
    });

    return config;
};
