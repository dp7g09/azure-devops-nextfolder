import tl = require('azure-pipelines-task-lib/task');
import { getDirItems } from './NextNameGenerator';

async function run() {
    try {
        const folderToCheck: string = tl.getInput('folderToCheck', true);
        const folderNamePrefix: string = tl.getInput('folderNamePrefix', true);

        getDirItems(folderToCheck, folderNamePrefix);
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}



run();