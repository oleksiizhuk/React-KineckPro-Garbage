function groupCheck(s){
    var r = /\{\}|\[\]|\(\)/;
    while(r.test(s))
        s = s.replace(r, '');
    return !s.length;
}

function printResult(a, b) {
     console.log(a === b ? 'correct' : 'incorrect ' + a + typeof a);
}

printResult(groupCheck("()"), true);
printResult(groupCheck("{(})"), false);
printResult(groupCheck("[])"), false);
printResult(groupCheck("([{)]}"), false);