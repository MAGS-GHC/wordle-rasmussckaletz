function inputChecker() {

    let inputFromHTML = document.getElementById("input").value;
    let testarray = inputFromHTML.split("");
    let div = document.getElementById('row1');
    let count = 0;

    for (element of div.getElementsByTagName('div')) {
        element.innerHTML = testarray[count];
        count++;
    }
    count = 0;

}
