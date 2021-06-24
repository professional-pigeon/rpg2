import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './rpg.js';

let playerCharacter = new Character("Hector", 10, 10, 1, "Dagger") 
let enemyCharacter = new Character("Blobby", 10, 10, 2, "Mean looks")

// When enemy health reaches <= 0, this will be part of the if statment
// playerCharacter.levelUp();



$("#playerCharacterName").text(playerCharacter.name);
$("#playerCharacterHealth").text(playerCharacter.health);
$("#playerCharacterHeight").text(playerCharacter.height);
$("#playerCharacterWeapon").text(playerCharacter.weapon);

$("#enemyCharacterName").text(enemyCharacter.name);
$("#enemyCharacterHealth").text(enemyCharacter.health);
$("#enemyCharacterHeight").text(enemyCharacter.height);
$("#enemyCharacterWeapon").text(enemyCharacter.weapon);

$("#attack").click(function(){
  enemyCharacter.subtractHealth(playerCharacter.attackRoll());
  playerCharacter.subtractHealth(enemyCharacter.enemyRoll());
  $("#playerCharacterHealth").text(playerCharacter.health);
  $("#enemyCharacterHealth").text(enemyCharacter.health);
  if (playerCharacter.health <= 0) {
    $("#dead").show();
    $("#attack").hide();
  }else if (enemyCharacter.health === "dead") {
    $("#moveon").show();
    $("#attack").hide();
  }
});

$('#moveon').click(function(){
  playerCharacter.levelUp();
  $("#playerCharacterHealth").text(playerCharacter.health);
  $("#playerCharacterHeight").text(playerCharacter.height);
  $("#attack").show();
  $("#moveon").hide();
  enemyCharacter.name = "bloberta"
  enemyCharacter.health = 20;
  enemyCharacter.height = 4;
  enemyCharacter.weapon = ruler;
  $("#enemyCharacterHealth").text(enemyCharacter.health);
  $("#enemyCharacterName").text(enemyCharacter.name);
});
