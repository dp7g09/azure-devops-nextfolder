[![Build Status](https://dev.azure.com/dp7g09/DemoProject/_apis/build/status/NextFolderTask-Build?branchName=master)](https://dev.azure.com/dp7g09/DemoProject/_build/latest?definitionId=5&branchName=master)

# Azure-devops-nextfolder
Azure DevOps Build/Release Task. Set Azure DevOps variable(s) with next folder name incremented from existing names. E.g. RC3, if RC1 & RC2 already exist.

# Pre-requisites
* The latest version of node, which can be downloaded [here](https://nodejs.org/en/download/).
* Typescript Compiler 2.2.0 or greater, which can be downloaded [here](https://www.npmjs.com/package/typescript).

# How to compile & test
## To compile
```
cd .\azure-devops-nextfolder2\nextFolderNameTask
npm install
tsc
```

## To test (after compiling)
```
cd .\azure-devops-nextfolder2\nextFolderNameTask
npm test
```
