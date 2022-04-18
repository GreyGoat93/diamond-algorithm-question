const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const addSpacesToString = (string, spaceAmount) => {
    let _string = string;
    for(let i = 0; i < spaceAmount; i++){
        _string += " ";
    }
    return _string;
}

const printWidestLetter = (letter) => {
    const indexOfLetter = LETTERS.indexOf(letter);
    const spaceAmount = (indexOfLetter * 2) - 1;
    let _string = "";
    _string += letter;
    _string = addSpacesToString(_string, spaceAmount);
    console.log(_string + letter);
}

const printDiamond = (letter) => {
    if(letter === "A") {
        console.log("A")
        return;
    }
    const indexOfLetter = LETTERS.indexOf(letter);
    const widestLength = (indexOfLetter * 2) + 1;
    for(let i = 0; i < indexOfLetter; i++){
        const degreeOfLetter = indexOfLetter + 1 - i; 
        const sidesLength = degreeOfLetter - 1;
        let spacesLength;
        if(degreeOfLetter === indexOfLetter + 1){
            spacesLength = 0;
        } else {
            spacesLength = widestLength - (degreeOfLetter * 2);
        }
        
        let _string = ""
        if(spacesLength === 0){
            _string = addSpacesToString(_string, sidesLength);
            _string += LETTERS[i];
            _string = addSpacesToString(_string, sidesLength);
        } else {
            _string = addSpacesToString(_string, sidesLength);
            _string += LETTERS[i];
            _string = addSpacesToString(_string, spacesLength);
            _string += LETTERS[i];
            _string = addSpacesToString(_string, sidesLength);
        }
        console.log(_string);
    }
    printWidestLetter(letter);
    for(let i = indexOfLetter - 1; i >= 0; i--){
        const degreeOfLetter = indexOfLetter + 1 - i; 
        const sidesLength = degreeOfLetter - 1;
        let spacesLength;
        if(degreeOfLetter === indexOfLetter + 1){
            spacesLength = 0;
        } else {
            spacesLength = widestLength - (degreeOfLetter * 2);
        }
        
        let _string = ""
        if(spacesLength === 0){
            _string = addSpacesToString(_string, sidesLength);
            _string += LETTERS[i];
            _string = addSpacesToString(_string, sidesLength);
        } else {
            _string = addSpacesToString(_string, sidesLength);
            _string += LETTERS[i];
            _string = addSpacesToString(_string, spacesLength);
            _string += LETTERS[i];
            _string = addSpacesToString(_string, sidesLength);
        }
        console.log(_string);
    }
}