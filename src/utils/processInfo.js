const os = require('node:os');
const CPUs = os.cpus().length;

const processInfo = () => {
	const inputArguments = process.argv;
	const platform = process.platform;
	const nodeVersion = process.versions.node;
	const memoryUsageRSS = process.memoryUsage().rss;
	const path = process.execPath;
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
		CPUs,
	};
};

module.exports = processInfo;
