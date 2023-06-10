import react from "react";
import { useState } from "react";
const Type = ({
  words,
  currentWordIndex,
  currentWordRef,
  caretRef,
  currentExtraLetter,
  typedWords,
  timer,
}) => {

  const [typedCount ,setTypedCount]=useState([]);

  const currentcount = () => {
    //setTypedCount()
  }
  return (
    <div className="content">
     <div class = " innerContent">
     <p className="timer">{timer}</p>
      <p  class = " inner"> Typed Words : { typedWords.length} </p>
      <p  class = " inner" > Total Words : { words.length} </p>
      <p   class = " inner"> Remaining  Words : { words.length -  typedWords.length} </p>
     </div>

   
      <div className="typing-field">
        {words.map((word, idx) => (
          <>
            <span
              ref={idx === currentWordIndex ? currentWordRef : null}
              key={idx}
              className="word"
            >
              {word?.split("")?.map((letter, lIdx) => (
                <>
                  {idx === currentWordIndex && lIdx === 0 && (
                    <span
                      className="caret"
                      ref={caretRef}
                      style={{ left: "-8px" }}
                      key={lIdx + "caret"}
                    >
                      {"|"}
                    </span>
                  )}
                  <span key={lIdx} className="letter">
                    {letter}
                  </span>
                </>
              ))}
              {idx === currentWordIndex && currentExtraLetter
                ? currentExtraLetter.split("")?.map((letter, lIdx) => (
                    <span key={lIdx + letter} className="letter extra">
                      {letter}
                    </span>
                  ))
                : typedWords[idx]
                    ?.substring(word.length)
                    .split("")
                    ?.map((letter, lIdx) => (
                      <span key={letter + lIdx} className="letter extra">
                        {letter}
                      </span>
                    ))}
            </span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Type;
