When all you've got is a hammer....
======
Librarians have sophisticated needs and often insufficient resources. Bookmarklets can solve everything!(*)

(*) Note: Bookmarklets can't solve everything. But they're lots of fun to play with anyway.

### Use ###
To use these bookmarklets:

1. Right-click (or option-click on a Mac) in the bookmark/favourites bar in your browser. (If you don't know where this is, search google for "How to find bookmark bar in" + the name of your browser eg Internet Explorer, Chrome, Firefox.)

2. Click "New bookmark" or "Add favourite" or whatever term your browser uses.

3. Name it whatever you want.

4. Delete whatever's in the URL/Location. Instead paste in the bit of code you want to use, starting with `javascript:` and ending with `})();` (You may need to edit urls, email addresses, etc.)

5. Save. This should put the new bookmarklet in your bookmarks/favourites bar under whatever name you gave it.

6. Now whenever you want to use it, you can click on the bookmark and it will fire away.

### Bookmarklets ###

1. modifyURL.js - Adds a prefix to the current page URL. Currently this is the Lincoln University EZproxy server, so if you don't work at Lincoln University you'll probably want to change this to whatever your library uses.

2. emailURL.js - Emails the title and URL of the current page. Currently this goes to a dead email address, so change it to your own.

3. userPrompt-simple.js - Prompts the user for a MARC field and goes to a URL based on that.
userPrompt-complex.js - Builds in "if"s and "else"s to deal with OCLC's complicated URL naming schemes so it can cope with holdings and LDR fields and such, and opens in a new window.

4. useSelection.js - Goes to a URL based on (hopefully) a DOI the user's selected on the page. (If there's no selection, it'll prompt you. If the selection isn't a DOI, doi.org will complain.)

5. newWindow.js - Opens a new window with a URL based on text the user's selected.

6. contentEditable.js - Makes the content of the current page temporarily editable

7. useStylesheet.js - Applies a stylesheet from the location of your choice to the current page. Currently this points to a dead link, so edit this.

8. useJavascript.js - Runs a javascript file from the location of your choice on the current page. Currently this points to a dead link, so edit this. (You may want to edit `YourScriptID` too - this is handy if you want the script to remove itself after it runs, which can keep things tidy.)

### License ###

I've licensed these under `The Unlicense` ie you can do what you like with them, no need to attribute to me (similar to Creative Commons Zero if you're familiar with that). That's because these snippets are so small it'd be ridiculous to copyright them, and also I copy/pasted most of the bits of them from other places anyway.