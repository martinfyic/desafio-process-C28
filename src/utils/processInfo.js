export const processInfo = () => {
	const inputArguments = process.argv;
	const platform = process.platform;
	const nodeVersion = process.versions.node;
	const memoryUsageRSS = process.memoryUsage().rss;
	const path = process.title;
	const processId = process.pid;
	const currentWorkDirectory = process.cwd();

	return {
		inputArguments,
		platform,
		nodeVersion,
		memoryUsageRSS,
		path,
		processId,
		currentWorkDirectory,
	};
};

export default processInfo;
