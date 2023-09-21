import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {

    const fileLoader = {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: ((resourcePath: string) => Boolean(resourcePath.includes('.module.'))),
                            localIdentName: isDev
                                ? "[path]_[name]_[local]_[hash:base64:5]"
                                : "[hash:base64:8]",
                        },
                    },
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };

    return [
        fileLoader,
        svgLoader,
        typeScriptLoader,
        cssLoader
    ]
}