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

# Note :
in this db we use the phone numbers as ids as primary keys since a single account can have more than one number which would result in user already exists error in mongodb 

# How it looks after it's finished :
- Searching Takes less than Milliseconds 
![Capture](https://user-images.githubusercontent.com/20546638/229307090-b8577356-dd9e-4d65-9988-22b17fc82ee4.jpg)
![Capture1](https://user-images.githubusercontent.com/20546638/229307103-102a232c-d62f-49fa-83d2-ade7edeaba63.jpg)
![337070504_1598488140627904_5328762965454889630_n](https://user-images.githubusercontent.com/20546638/229307110-5bc8852d-63ca-434d-a8fa-f71dc51742fb.jpg)

https://user-images.githubusercontent.com/20546638/229306927-c8abe61a-c32b-4bd3-9c5f-11606393667d.mp4

