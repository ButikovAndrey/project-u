import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: options.paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    };
}