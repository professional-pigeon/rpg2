import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './rpg.js';

let playerCharacter = new Character("Hector", 10, 10, 1, "Dagger") 
let enemyCharacter = new Character("Blobby", 10, 10, 2, "Mean looks")
let bloberta = new Character("Bloberta", 20, 20, 3, "Eye rolls")
let blobbySr = new Character("Blobby Sr.", 30, 30, 12, "Yard stick")

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
  if (playerCharacter.health === "dead") {
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
  $("#attack2").show();
  $("#moveon").hide();
  $("#enemyCharacterHealth").text(bloberta.health);
  $("#enemyCharacterName").text(bloberta.name);
  $("#enemyCharacterHeight").text(bloberta.height);
  $("#enemyCharacterWeapon").text(bloberta.weapon);
});

$("#attack2").click(function(){
  bloberta.subtractHealth(playerCharacter.attackRoll());
  playerCharacter.subtractHealth(bloberta.enemyRoll());
  $("#playerCharacterHealth").text(playerCharacter.health);
  $("#enemyCharacterHealth").text(bloberta.health);
  if (playerCharacter.health === "dead") {
    $("#dead").show();
    $("#attack2").hide();
  }else if (bloberta.health === "dead") {
    $("#moveon2").show();
    $("#attack2").hide();
  }
});

$('#moveon2').click(function(){
  playerCharacter.levelUp();
  $("#playerCharacterHealth").text(playerCharacter.health);
  $("#playerCharacterHeight").text(playerCharacter.height);
  $("#attack3").show();
  $("#moveon2").hide();
  $("#enemyCharacterHealth").text(blobbySr.health);
  $("#enemyCharacterName").text(blobbySr.name);
  $("#enemyCharacterHeight").text(blobbySr.height);
  $("#enemyCharacterWeapon").text(blobbySr.weapon);
});

$("#attack3").click(function(){
  blobbySr.subtractHealth(playerCharacter.attackRoll());
  playerCharacter.subtractHealth(blobbySr.enemyRoll());
  $("#playerCharacterHealth").text(playerCharacter.health);
  $("#enemyCharacterHealth").text(blobbySr.health);
  if (playerCharacter.health === "dead") {
    $("#dead").show();
    $("#attack2").hide();
  }else if (blobbySr.health === "dead") {
    $("#winner").show();
    $("#attack3").hide();
  }
});
