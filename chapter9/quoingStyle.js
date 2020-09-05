// Imagine you have written a story and used single quotation marks 
// throughout to mark pieces of dialogue. Now you want to replace all 
// the dialogue quotes with double quotes, while keeping the single quotes 
// used in contractions like aren’t.

// Think of a pattern that distinguishes these two kinds of quote usage and craft
// a call to the replace method that does the proper replacement.

let text = "'I'm the cook,' he said, 'it's my job.'";

//It work, is not even close to how it could be correctly solved, but... it is MY
console.log(text.replace(/'([^]*?\W)'(.*)\s'([^]*?\W)'/g, '"$1" $2 "$3"' ));
// → "I'm the cook," he said, "it's my job."