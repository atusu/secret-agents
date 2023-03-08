const info = {
    1234: {"url":"images/black-cat.jpg", "name":"Vali", "secret":"Secretly wants to play with mice and not eat them", "text":'Looks cute, might attack your legs later', "achievements":'This secret agent has successfully completed 435 missions and conquered everyone with his leadership skills. This has brought him "The Best Secret Agent of the year" award. <br><br>Doesn\'t understand why Silviu avoids him.'},
    2345: {"url":"images/orange-cat.jpg", "name":"Silviu", "secret":"Secretly enjoys itchy tasty but doesn't wanna admit", "text":"Looks stiff... is stiff. Will scratch couch if disturbed from cat business.", "achievements":'This secret agent has successfully completed 882 missions and received "The Best Stolen Secret" award and won the prize for "The Best Secret Agent of the year" twice. Very competitive spirit.<br><br>Lost to Vali this year, still believes it\'s a joke.'},
    3456: {"url":"images/white-cat.jpg", "name":"Catalin","secret":"Used the innocent look to blame the dog for the broken pot", "text":"Pretends he doesn't enjoy pliculetz to fool the enemies","achievements":"This secret agent has successfully completed 538 missions and refused all awards because he believes that prizes or the mere concept of competition are just a construct meant to encourage individual performance and rivalry as it is a zero-sum game.."}
};

 function getAgentInfo(id){
    if(id==null){
        return info;
    }
    
    if (id in info) {
        return info[id];
    }
    return null;
}


