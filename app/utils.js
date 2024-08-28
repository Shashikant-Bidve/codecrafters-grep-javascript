function matchDigits(inputLine)
{
    for(let i = '0';i<='9';i++){
        if(inputLine.includes(i)){
          return true;
        }
    }
    return false;
}

function alphaNumeric(inputLine)
{
    for(let i = 0;i<inputLine.length;i++)
        {
          if(inputLine[i]>='a' && inputLine[i]<='z'){return true;}
          if(inputLine[i]>='0' && inputLine[i]<='9'){return true;}
          if(inputLine[i]>='A' && inputLine[i]<='Z'){return true;}
          if(inputLine[i] == '_'){return true;}
        }
        return false;
}

function positiveCharGrp(inputLine, pattern)
{
    for(let i = 1;i<pattern.length-2;i++)
    {
        if(inputLine.includes(pattern[i])){
            return true;
        }
    }
    return false;
}

export {matchDigits, alphaNumeric, positiveCharGrp};