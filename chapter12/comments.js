//Add Comments for Egg

function skipSpace(string) {
    let first = string.search(/\S/);
    if (first == -1) return "";
    string = string.slice(first);
    
    //remove comment
    while(string.includes("#")){
        const comment = string.match(/#.*\s/);
      string = string.replace(comment[0], "");
   }
    return string;
  }
  
  console.log(parse("# hello\nx"));
  // → {type: "word", name: "x"}
  
  console.log(parse("a # one\n   # two\n()"));
  // → {type: "apply",
  //    operator: {type: "word", name: "a"},
  //    args: []}