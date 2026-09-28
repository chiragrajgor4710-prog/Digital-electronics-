function convert() {

    let ch = Number(document.getElementById("choice").value);
    let value = document.getElementById("num").value.trim();
    let result = "";

    switch(ch){

        case 1:
            result = Number(value).toString(2);
            break;

        case 2:
            result = Number(value).toString(8);
            break;

        case 3:
            result = Number(value).toString(16).toUpperCase();
            break;

        case 4:
            result = parseInt(value,2);
            break;

        case 5:
            result = parseInt(value,8);
            break;

        case 6:
            result = parseInt(value,16);
            break;
    }

    document.getElementById("output").value = result;
}function convert() {

    let ch = Number(document.getElementById("choice").value);
    let value = document.getElementById("num").value.trim();
    let result = "";

    switch(ch){

        case 1:
            result = Number(value).toString(2);
            break;

        case 2:
            result = Number(value).toString(8);
            break;

        case 3:
            result = Number(value).toString(16).toUpperCase();
            break;

        case 4:
            result = parseInt(value,2);
            break;

        case 5:
            result = parseInt(value,8);
            break;

        case 6:
            result = parseInt(value,16);
            break;
    }

    document.getElementById("output").value = result;
}