/**@type {import("@rspack/core").Configuration}*/
module.exports = {
	mode: "production",
	context: __dirname,
	builtins: {
		treeShaking: true
	},
	experiments: {
		rspackFuture: {
			newTreeshaking: false
		}
	},
	optimization: {
		moduleIds: "named",
		minimize: false
	}
};
