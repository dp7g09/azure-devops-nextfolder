# Azure-devops-nextfolder
Azure DevOps Build/Release Task. Set Azure DevOps variable NFN.NextFolderName with next folder name incremented from existing names. E.g. RC3, if RC1 & RC2 already exist.

## Usage
Publish to a path saying: \\Release-Machine\ReleaseCandidates\$(NFN.NextFolderName)