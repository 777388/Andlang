chrome.contextMenus.create({
    id: "HallsOfTheGods",
    title: "HallsofTheGods",
    contexts: ["selection", "page"]
});
chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "HallsOfTheGods") {
        const time = info.selectionText;
        const positions = [["a", "c", "h", "l", "y", "s"], ["a", "e", "t", "h", "e", "r"], ["a", "i", "o", "n"], ["a", "n", "a", "n", "k", "e"], ["c", "h", "a", "o", "s"], ["c", "h", "r", "o", "n", "o", "s"], ["e", "r", "e", "b", "u", "s"], ["e", "r", "o", "s"], ["g", "a", "i", "a"], ["h", "e", "m", "e", "r", "a"], ["h", "y", "p", "n", "o", "s"], ["n", "e", "m", "e", "s", "i", "s"], ["p", "h", "a", "n", "e", "s"], ["n", "e", "s", "o", "i"], ["n", "y", "x"], ["o", "u", "r", "e", "a"], ["p", "o", "n", "t", "u", "s"], ["t", "a", "r", "t", "a", "r", "u", "s"], ["t", "h", "a", "l", "a", "s", "s", "a"], ["t", "h", "a", "n", "a", "t", "o", "s"], ["u", "r", "a", "n", "u", "s"], ["c", "r", "o", "n", "u", "s"], ["r", "h", "e", "a"], ["o", "c", "e", "a", "n", "u", "s"], ["t", "e", "t", "h", "y", "s"], ["h", "y", "p", "e", "r", "i", "o", "n"], ["t", "h", "e", "i", "a"], ["l", "a", "p", "e", "t", "u", "s"], ["c", "r", "i", "u", "s"], ["c", "o", "e", "u", "s"], ["p", "h", "o", "e", "b", "e"], ["t", "h", "e", "m", "i", "s"], ["m", "n", "e", "m", "o", "s", "y", "n", "e"], ["z", "e", "u", "s"], ["d", "e", "m", "e", "t", "e", "r"], ["p", "o", "s", "e", "i", "d", "o", "n"], ["h", "a", "d", "e", "s"], ["h", "e", "r", "a"], ["a", "p", "o", "l", "l", "o"], ["a", "r", "t", "e", "m", "i", "s"], ["a", "p", "h", "r", "o", "d", "i", "t", "e"], ["a", "r", "e", "s"], ["h", "e", "p", "h", "a", "e", "s", "t", "u", "s"], ["h", "e", "r", "m", "e", "s"], ["a", "t", "h", "e", "n", "a"], ["d", "i", "o", "n", "y", "s", "u", "s"], ["h", "e", "s", "t", "i", "a"], ["h", "e", "c", "a", "t", "e"], ["a", "e", "o", "l", "u", "s"], ["a", "s", "c", "l", "e", "p", "i", "u", "s"], ["E", "r", "i", "s"], ["p", "a", "n"]];
        let bring = time + " %26 %28 ";
        for (var f = 0; f < positions.length; f++) {
            let position = false;
            for (var v = 0; v <= time.length; v++) {
                if (time.replace(" ", "")[v] == positions[f][v] || time.replace(" ", "")[v] == positions[f][v % positions[f].length]) {
                    if (position != true) {
                        position = true;
                        chrome.tabs.create({ url: "https://www.google.com/search?q=" + time + " %26 " + positions[f].join("")});
                        bring +=  positions[f].join("") + " %7C ";
                        continue;
                    };
                };
            };
            continue;
        };
        
        chrome.tabs.create({url: "https://www.google.com/search?q=" + bring + "%29"});
        
        chrome.scripting.executeScript({target: {tabId: tab.id, allFrames: true}, files: ['content.js']});
    };       
});
