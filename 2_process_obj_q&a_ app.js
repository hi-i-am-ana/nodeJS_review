const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
];
// ask function will print questions
const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
};
// Ask 1st question
ask();
// Define array for answers
const answers = [];
// on function is event listener, has two arguments: event name ('data') and event handler function
// data event - when you typed something and pressed enter
process.stdin.on('data', answer => {
  answers.push(answer.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    // To exit process when all questions were asked
    process.exit();
  }
});
// Event listener on exit event
process.on('exit', () => {
  const [name, activity, language] = answers;
  // White spaces with inside backticks will be honored
  console.log(`
  
  Thank you for your anwsers.

  Go ${activity} ${name} you can write ${language} code later!

  `);
});