import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const { port } = await yargs(hideBin(process.argv))
	.alias({ p: 'port' })
	.default({ p: 8080 })
	.parse();
