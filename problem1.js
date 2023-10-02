
function isValidBracketSequence(str) {
    //return false if empty string or only one bracket.
    if (str.length <= 1)
        return false;
    return isValidBracketSequenceRecursive(str);
}


function isValidBracketSequenceRecursive(str) {

    //case when we have only one char its false
    if (str.length === 1)
        return false;
    //case when we have 0 char its true (all duplicate are replaced)
    if (str.length === 0)
        return true;

    //replace all the duplicates
    const newStr = str.replace("()", "").replace("[]", "").replace("{}", "");

    //case when nothing chage after replace
    if (newStr.length === str.length)
        return false;

    return isValidBracketSequenceRecursive(newStr);
}

isValidBracketSequence("{({})[]}{()([][}([][])])}")
isValidBracketSequence("()[]{}")
isValidBracketSequence("([{}])")
isValidBracketSequence("(")
isValidBracketSequence("[(])")
isValidBracketSequence("{[}]")