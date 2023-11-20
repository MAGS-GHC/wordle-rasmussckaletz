function inputChecker() {

    let inputFromHTML = document.getElementById("input").value;
    let testarray = inputFromHTML.split("");
    console.log(testarray[0]);
    /*document.getElementById("row1-column1").innerHTML = testarray[0];
    document.getElementById("row1-column2").innerHTML = testarray[1];
    document.getElementById("row1-column3").innerHTML = testarray[2];
    document.getElementById("row1-column4").innerHTML = testarray[3];
    document.getElementById("row1-column5").innerHTML = testarray[4];*/

    var div = document.getElementById('row1');
    var divs = div.getElementsByTagName('div');
    var divArray = [];
    for (var i = 0; i < divs.length; i += 1) {
        divArray.push(divs[i]);
        divArray.innerHTML = testarray[i];
    }

    console.log(divArray);
}