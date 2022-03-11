// function changeWord(selectedText, changedText, text) {
//     selectedText = "mencintai";
//     changedText = "membenci";
//     text = kalimat1.replace("mencintai", "membenci");

// }
// const kalimat1 = "andini sangat mencintai kamu selamanya";

// console.log(changeWord("mencintai", "membenci", kalimat1));

function changeWord(selectedText, changedText, text) {
    return text.replace(selectedText, changedText);
}
const kalimat1 = "andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));