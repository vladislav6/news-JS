import path from 'node:path';

export default {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
};
