// For each of the following items, write a regular expression to test whether any of the given
// substrings occur in a string. The regular expression should match only strings containing 
// one of the substrings described.

// 1. car and cat
const carCat = /ca(t|r)/;

// 2. pop and prop
const popProp = /pr?op/;

// 3. ferret, ferry, and ferrari
const ferr = /ferr(et|y|ari)/;

// 4. Any word ending in ious
const ious = /ious\b/;

// 5. A whitespace character followed by a period, comma, colon, or semicolon
const space = /\s(\.|,|:|;)/;

// 6. A word longer than six letters
const sixLetters = /\w{6,}/;

// 7. A word without the letter e (or E)
const noE = /\b[^\We]+\b/i;

verify(carCat,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(popProp,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(ferr,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(ious,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(space,
    ["bad punctuation ."],
    ["escape the period"]);

verify(sixLetters,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);

verify(noE,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
    }
}