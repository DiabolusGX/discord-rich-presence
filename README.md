
# Discord Rich Presence
You can easily setup rich presence for your discord profile by following these simple instructions.

### Requirements
- PC with windows os
- [Node.js](https://nodejs.org/en/download/) to run `.js` file.
- [Git](https://git-scm.com/downloads) to install dependencies.
- Application on [Discord Developer Portal](https://discord.com/developers/applications) with some assets (under Rich Presence)
- User Settings - Discord app -> User Settings -> Game Activity and make sure `Display currently running game as a status message.`

## Instructions
### Download & Edit files
Follow these to customize what will show up in you rich presence.
1. Download the code to your system & extract all files in a folder.
2. Navigate to the downloaded code and open the index.js file in any text editor.
3. To edit content in `index.js` file, everything should be self-explanatory, as each line starting with `//` tells you what to do.

### Run Rich Presence

1. You can simply double click on `presence.bat` file to run the code and it should show 
```
Displaying Rich Presence
```
2. If you don't want to run `presence.bat` file :
- Open command prompt in the folder where files are.
- Run `npm install` to install all dependencies from `package.json` file (only 1st time you're running this).
- Run `node .` or `node index.js` to start displaying rich presence.

If you wanna know what's happening when you run `presence.bat` file :
-  Right Click on `presence.bat` file and click edit.
- You'll see some code that is auto executing `npm install` - to install dependencies AND `node .` - start rich presence
> You can remove `npm i` from bat file part after executing it 1 time.

### Error
```
UnhandledPromiseRejectionWarning: Error: Could not connect
```
Make sure Discord App is running and it's up-to-date. Press  `Ctrl`  +  `R`  in Discord to relaunch and check for updates and open the  `presence.bat`  file again.

### Auto Execute
You can make your rich presence start automatically when you turn on your PC
Make sure you ***Enable - Auto Run Discord on Startup*** so that you can prevent rich-presence running before Discord App runs.
**AND** you have to edit some code for that in `index.js` to prevent it opening before discord opens in background.
1. Press `Win + R` and type `shell:startup` - this will open a window
2. Paste the ***shortcut*** of `presence.bat` file here.

Now we have to modify the code.. Don't worry, you have to add only 2 lines of code.
We are gonna set timeout on the auto-run on startup so that rich presence won't run before discord opens, else it'll give error and won't work.
1. You can use `autorun.js` instead of `index.js` 
 - Remove the old `index.js` file
 - Rename `autorun.js` to `index.js` and modify the values.
 
2. If you want to do It yourself :-
- Add `setTimeout(() => {` in the starting of the file (At the very 1st line)
-  Add `}, 600000);` at the end of the file (at the end of the code)
And this will add a timeout of 10 minutes to your code.
i.e You'll have 10 minutes to start discord before code executes.

> If you want to decrease or increase the timeout just edit `60000` to number of Milli-Second (ms) you want the code to run after.
> ex. `60000` will run rich presence after 1 minute.

## Help
- If the image is not showing, give it a few minutes. Discord takes time to process images. If you refresh the page and your images are gone, **do not** upload them again as Discord is still in the middle of processing your image.
- Make sure your *Discord App* is running before you run your *Rich Presence*.
- If you receive an error when trying to launch your status, _read the error_, try to figure out what's causing the issue, and Google it.

**If you need additional help, you can contact me at my [Discord Server](https://discord.gg/8kdx63YsDf "DEV Studios")**
