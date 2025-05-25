let userScore = 0;
let compScore = 0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");


 const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
 };

 const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "game is draw. Play gain";
 };

 const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `youWin! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `youLost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
 };

 const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice ==="rock"){
            //Scissors, paper
            userWin=compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            //rock, Scissor
            userWin = compChoice === "Scissors" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
         
    }
 };

 choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
 });