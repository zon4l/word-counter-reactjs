import WordCount from "./WordCount";

const HashTable = ({ countTable, wordCount }) => {
  const countTableArray = Object.entries(countTable);

  const sortedCountTableArray = countTableArray.sort(function (a, b) {
    return b[1] - a[1];
  });

  return (
    <>
      <div className="mt-30 d-flex justify-between">
        <p className="font-24 font-bold">Total word count:</p>
        <p className="font-24">{wordCount}</p>
      </div>
      <table className="hash-table mt-20">
        <tr>
          <th>Word</th>
          <th>Count</th>
        </tr>
        {sortedCountTableArray.map((sortedCount, index) => (
          <WordCount sortedCount={sortedCount} />
        ))}
      </table>
    </>
  );
};

export default HashTable;
