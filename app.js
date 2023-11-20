function inputChecker() {

    let inputFromHTML = document.getElementById("input").value;
    let inputSplitArray = inputFromHTML.split("");
    let rowSelector = document.getElementById("row1");
    let count = 0;

    for (element of rowSelector.getElementsByTagName("div")) {
        element.innerHTML = inputSplitArray[count];
        count++;
    }
    count = 0;

}
