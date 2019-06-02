# Azure-devops-nextfolder
Azure DevOps Build/Release Task. Set Azure DevOps variable NFN.NextFolderName with next folder name incremented from existing names. E.g. RC3, if RC1 & RC2 already exist.

## Usage
Provide argument values,

![Next Folder Name Usage](https://raw.githubusercontent.com/dp7g09/azure-devops-nextfolder/master/images/screenshots/nfn1.png)

* which folder to look within
* what prefix of folder names to check for

Result will be variable NFN.NextFolderName set to the value.

Finally:
Publish to a path viz: `\\Release-Machine\ReleaseCandidates\$(NFN.NextFolderName)`.

This task can be used in build as well as release pipeline.
