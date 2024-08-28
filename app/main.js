function matchPattern(inputLine, pattern) {
  if (pattern.length === 1) {
    return inputLine.includes(pattern);
  }else if(pattern === "\\d"){
    
    for(let i = '0';i<='9';i++){
      if(inputLine.includes(i)){
        return true;
      }
    }
    return false;
  }else if(pattern === "\\w"){
    for(let i = '0';i<='9';i++){
      if(inputLine.includes(i)){
        return true;
      }
    }
    for(let i = 'a';i<='z';i++){
      if(inputLine.includes(i)){
        return true;
      }
    }
    for(let i = 'A';i<='Z';i++){
      if(inputLine.includes(i)){
        return true;
      }
    }
    if(inputLine.includes('_')){return true;}
    return false;
  } else {
    throw new Error(`Unhandled pattern ${pattern}`);
  }
}

function main() {
  const pattern = process.argv[3];
  const inputLine = require("fs").readFileSync(0, "utf-8").trim();

  if (process.argv[2] !== "-E") {
    console.log("Expected first argument to be '-E'");
    process.exit(1);
  }

  // You can use print statements as follows for debugging, they'll be visible when running tests.
  console.log("Logs from your program will appear here");

  // Uncomment this block to pass the first stage
  if (matchPattern(inputLine, pattern)) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

main();
