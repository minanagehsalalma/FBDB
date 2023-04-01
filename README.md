# Setup

* install [mongodb compass](https://www.mongodb.com/try/download/community)
* [install nodejs](https://nodejs.org/en/download) if you don't have it already
* open the terminal in the project folder
* type `npm i`

# Steps to run it

- install [Git Bash](https://git-scm.com/downloads)
- copy target files into a new folder
- Open Git Bash in that new folder, [if it doesn't already show in the right click menu then check this](https://www.youtube.com/watch?v=kIgZEdyn1dA)
-  type 
``split `TargetFileName` `NewFileName` -l `number of lines` -a 3 -d`` without the backticks. an ex of number of lines `50000` 
- create a new folder named "txt" in the project folder and copy the output files into it
- open the app.ts and replace the filePaths with the new output files names can be done [using this](https://superuser.com/questions/395836/how-to-copy-a-list-of-file-names-to-text-file)   


# Final step

* make sure that mongodb compass is running and click connect
* then type in the terminal `npm run dev` in the project folder where the app.ts file is located 

# To decode the hex encoded strings

#### Do this for first time only ####
* type `npm install -g ts-node typescript '@types/node'` in a terminal

#### To run the decoding code ####
* replace the f1.txt in decode.ts with target file
* `ts-node decode.ts`
