var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Alert players that they are starting the round

    while (enemyHealth > 0 && playerHealth > 0) {

        //stop fight if player health reaches 0
        if (playerHealth <= 0) {

            window.alert(playerName + " has died!");

            break;
          }

          //stop fight if enemy health reaches 0
          if (enemyHealth <= 0) {

            window.alert(enemyName + " has died!");

            break;
          }
        //ask user if they want to fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            // if yes (true), leave fight
            if (confirmSkip) {

                window.alert(playerName + " has decided to skip this fight. Goodbye!");

                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;

                console.log("playerMoney", playerMoney);

                break;
            }

            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            /// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
            playerHealth = playerHealth - enemyAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            } 
            else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                } else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }
        }
    }
        
}

for (let i = 0; i < enemyNames.length; i ++) {

    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    let pickedEnemyName = enemyNames[i]
    
    enemyHealth = 50;

    fight(pickedEnemyName)
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
}