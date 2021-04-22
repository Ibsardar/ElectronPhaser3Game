How to navigate scene code:

"main.ts" is for Electron loading the HTML file "index.html".

"index.html" is where all the HTML and CSS goes.
We also include "game.ts" as the entrypoint to our game.

The starting scene is defined in "menu.ts".
From the menu, we can navigate to the scene defined in "play.ts".

The scene defined in "play.ts" is the main game.
We can go back to the scene in "menu.ts" from here.