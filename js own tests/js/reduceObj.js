function validBraces(braces) {

    let arr = Array.from(braces);

    const res = arr.reduce((acc, item) => {
        console.log(item);
        switch (item) {
            case "(" : {
                acc.a++;
                break;
            }
            case ")" : {
                acc.a--;
                break;
            }
            case "{" : {
                acc.b++;
                break;
            }
            case "}" : {
                acc.b--;
                break;
            }
            case "[" : {
                acc.c++;
                break;
            }
            case "]" : {
                acc.c--;
                break;
            }
        }
        return acc;

    }, {
        a: 0,
        b: 0,
        c: 0
    });
    console.log(res);
    console.log(Object.values(res).reduce((acc, item) => {
        acc += item;
        return acc;
    }) === 0);

}

braces = "(({{[[]]}}))";

validBraces(braces);