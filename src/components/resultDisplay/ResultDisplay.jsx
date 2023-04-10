import ContentPreview from "./ContentPreview";
import HashTable from "./HashTable";

const ResultDisplay = ({ textContent }) => {
  let countTable = {};
  let wordCount = 0;

  const lowerCaseContent = textContent.toLowerCase();

  const wordsInText = lowerCaseContent.split(" ");

  for (let word of wordsInText) {
    word = word.replace(/[^a-zA-Z0-9]/g, "");
    wordCount += 1;

    if (word in countTable) countTable[word] += 1;
    else countTable[word] = 1;
  }

  console.log(countTable);

  return (
    <>
      <div className="d-flex justify-center">
        <h1 className="font-42 text-center">Count Results</h1>
      </div>
      <ContentPreview
        textContent={textContent}
        countTable={countTable}
      ></ContentPreview>
      <HashTable countTable={countTable} wordCount={wordCount}></HashTable>
    </>
  );
};

export default ResultDisplay;
