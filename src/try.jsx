import React, { useState } from "react";

function TextFileReader() {
   const [fileContent, setFileContent] = useState("");
   const [searchPhrase, setSearchPhrase] = useState("");
   const [matches, setMatches] = useState([]);
   const [lowercaseCount, setLowercaseCount] = useState(0);
   const [uppercaseCount, setUppercaseCount] = useState(0);

   const handleFileChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
         const content = e.target.result;
         setFileContent(content);
         countLetterOccurrences(content);
      };

      reader.readAsText(file);
   };

   const countLetterOccurrences = (text) => {
      const lowercaseCount = (text.match(/[a-z]/g) || []).length;
      const uppercaseCount = (text.match(/[A-Z]/g) || []).length;
      setLowercaseCount(lowercaseCount);
      setUppercaseCount(uppercaseCount);
   };

   const handleSearch = () => {
      const regex = new RegExp(searchPhrase, "gi");
      const matches = [];
      const lines = fileContent.split("\n");

      lines.forEach((line, index) => {
         const lineMatches = line.match(regex);
         if (lineMatches) {
            matches.push({ line: index + 1, text: line });
         }
      });

      setMatches(matches);
   };

   return (
      <div>
         <input type="file" onChange={handleFileChange} />
         <pre style={{ whiteSpace: "pre-wrap" }}>{fileContent}</pre>
         <div>
            <p>
               Lowercase Count: {lowercaseCount}, Uppercase Count:{" "}
               {uppercaseCount}
            </p>
         </div>
         <div>
            <input
               type="text"
               placeholder="Search phrase"
               value={searchPhrase}
               onChange={(e) => setSearchPhrase(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
         </div>
         <div>
            <h3>Search Results:</h3>
            <ul>
               {matches.map((match, index) => (
                  <li key={index}>
                     Line {match.line}: {match.text}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}

export default TextFileReader;
