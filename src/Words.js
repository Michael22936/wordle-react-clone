import wordBank from './wordle-bank.txt'

export const boardDefault = [
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
];

const generateWordSet = async () => {
    let wordSet;
    await fetch(wordBank)
}