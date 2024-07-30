function superbowlWin(record) {
    // Use the find() method to locate the object with result "W"
    const winningRecord = record.find(game => game.result === "W");
    
    // If a winning record is found, return the year; otherwise, return undefined
    return winningRecord ? winningRecord.year : undefined;
  }
  
  // Example data to test the function
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // Add more records as needed
  ];
  
  // Testing the function
  console.log(superbowlWin(record)); // Should output "2015"
  
