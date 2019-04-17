import tl = require('azure-pipelines-task-lib/task');
import { getDirItems } from './NextNameGenerator';

async function run() {
    try {
        const folderToCheck: string = tl.getInput('folderToCheck', true);
        const folderNamePrefix: string = tl.getInput('folderNamePrefix', true);

        var nextFolderName = getDirItems(folderToCheck, folderNamePrefix);
        tl.setVariable('NFN.NextFolderName', nextFolderName, false);
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}



run();