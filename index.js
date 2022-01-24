/* TEST 1
Function called introduction
1 parameter (name)
Returns "Hi, my name is ${name}." 
*/
function introduction(name) {
    return (`Hi, my name is ${name}.`);
}

/* TEST 2
Function called introductionWithLanguage 
2 parameters (name, language) 
Returns "Hi, my name is [name] and I am learning to program in [language]."
*/
function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

/* TEST 3
Copy the function you created for the second test and name it introductionWithLanguageOptional
2 parameters (name, language)
Second parameter should have a default value of "JavaScript"
*/
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
