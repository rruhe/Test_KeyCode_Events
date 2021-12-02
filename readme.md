Get the Event-Object from a function-call in HTML
...

"<body onkeypress="showKeys('onkeypress')">" ...

...let eventObj = document.body[strEventName]["arguments"][0];

