var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name )
var fight = function (enemyName) {
  // Alert players that they are starting the round
  window.alert(
    'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
  );

  // if player choses to skip confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
  }

  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - enemyAttack;
  console.log(
    playerName +
      " attacked " +
      enemyName +
      " . " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining. "
  );

  // check enemy's health
  if (enemyHealth <= 0) window.alert(enemyName + " has died ");

  // leave while() loop since enemy is dead
  {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  //   check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died! ");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left. ");
  }

  // Log a resulting message to the console so we know that it worked
  console.log(
    playerName +
      " attacked " +
      enemyName +
      " . " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining. "
  );

  // Subtract the value of "enemyAttack" from the value of "playerHealth" and use that result to update the value in the "playerHealth" variable.
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName +
      " attacked " +
      playerName +
      " . " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining. "
  );

  // put new code under this
  console.log(
    playerName +
      " attacked " +
      enemyName +
      " . " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining. "
  );

  // put new code under this
  console.log(
    enemyName +
      " attacked " +
      playerName +
      " . " +
      " now has " +
      playerHealth +
      " health remaining "
  );

  for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }
};
