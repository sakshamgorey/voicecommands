var outlook;
var controla;
var google;

function openoutlook(){
    outlook = window.open("https://outlook.office365.com/mail/inbox")
};

function closeoutlook(){
    outlook.close();
};
function opencontrola(){
    controla = window.open("https://controla.in/")
};

function closecontrola(){
    controla.close();
};
function google(tag) {
  var url = 'https://www.google.com/search?q='+tag;
  google=window.open(url,"_blank");
  
}
   
if (annyang) {
  // Let's define a command.
  const commands = {
    'outlook': () => { openoutlook(); },
    'close outlook': () => { closeoutlook(); },
    'control a': () => { opencontrola(); },
    'close control a': () => { closecontrola(); },
    'search *tag': (tag) => { google(tag);}
    
    
  };
  
  // Add our commands to annyang
  annyang.addCommands(commands);
  

  // Start listening.
  annyang.start();
}
