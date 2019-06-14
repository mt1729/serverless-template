// TODO: - Inject ENDPOINT variable here instead of through package.json

// This is used for the sake of Jest testing with ECMA features
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
};