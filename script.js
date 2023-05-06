let jokesArr = ["1. What do you call a boomerang that won’t come back?\nA stick.",
"2. What does a cloud wear under his raincoat?\n Thunderwear.",
"3. Two pickles fell out of a jar onto the floor. What did one say to the other?\nDill with it.",
"4. What time is it when the clock strikes 13?\nTime to get a new clock.",
"5. How does a cucumber become a pickle?\nIt goes through a jarring experience.",
"6. What did one toilet say to the other?\nYou look a bit flushed.",
"7. What do you think of that new diner on the moon?\nFood was good, but there really wasn’t much atmosphere.",
"8. Why did the dinosaur cross the road?\nBecause the chicken wasn’t born yet.",
"9. Why can’t Elsa from Frozen have a balloon?\nBecause she will let it go",
"10. What musical instrument is found in the bathroom?\nA tuba toothpaste.",
"11. Why did the kid bring a ladder to school?\nBecause she wanted to go to high school.",
"12. What do you call a dog magician?\nA labracadabrador.",
"13. Where would you find an elephant?\nThe same place you lost her.",
"14. How do you get a squirrel to like you?\nAct like a nut.",
"15. What do you call two birds in love?\nTweethearts",
"16. How does a scientist freshen her breath?\nWith experi-mints.",
"17. How are false teeth like stars?\nThey come out at night.",
"18. What building in your town has the most stories?\nThe public library.",
"19. What’s worse than finding a worm in your apple?\nFinding half a worm.",
"20. What is a computer's favorite snack?\nComputer chips.",
"21. What did one volcano say to the other?\nI lava you.",
"22. How do we know that the ocean is friendly?\nIt waves.",
"23. What is a tornado’s favorite game to play?\nTwister.",
"24. How does the moon cut his hair?\nEclipse it.",
"25. How do you talk to a giant?\nUse big words.",
"26. What animal is always at a baseball game?\nA bat.",
"27. What falls in winter but never gets hurt?\nSnow.",
"28. What did the Dalmatian say after lunch?\nThat hit the spot.",
"29. Why did the kid cross the playground?\nTo get to the other slide.",
"30. What do you call a droid that takes the long way around?\nR2 detour.",
"31. Why did the cookie go to the hospital?\nBecause he felt crummy.",
"32. Why was the baby strawberry crying?\nBecause her mom and dad were in a jam.",
"33. What did the little corn say to the mama corn?\nWhere is pop corn?\n",
"34. How do you make a lemon drop?\nJust let it fall.",
"35. What did the limestone say to the geologist?\nDon’t take me for granite.",
"36. Why does a seagull fly over the sea?\nBecause if it flew over the bay, it would be a baygull.",
"37. What kind of water can’t freeze?\nHot water.",
"38. What kind of tree fits in your hand?\nA palm tree.",
"39. What do you call a dinosaur that is sleeping?\nA dino-snore.",
"40. What is fast, loud and crunchy?\nA rocket chip.",
"41. Why did the teddy bear say no to dessert?\nBecause she was stuffed.",
"42. What has ears but cannot hear?\nA cornfield.",
"43. What did the left eye say to the right eye?\nBetween us, something smells.",
"44. What did one plate say to the other plate?\nDinner is on me.",
"45. Why did the student eat his homework?\nBecause the teacher told him it was a piece of cake.",
"46. When you look for something, why is it always in the last place you look?\nBecause when you find it, you stop looking.",
"47. What is brown, hairy and wears sunglasses?\nA coconut on vacation.",
"48. What do you say to a rabbit on its birthday?\nHoppy Birthday.",
"49. What’s the one thing will you get every year on your birthday, guaranteed?\nA year older.",
"50. Why do candles always go on the top of cakes?\nBecause it's hard to light them from the bottom.",
"51. What do cakes and baseball teams have in common?\nThey both need a good batter.",
"52. What goes up but never comes down?\nYour age.",
"53. What does every birthday end with?\nThe letter Y.",
"54. What did the tiger say to her cub on his birthday?\nIt's roar birthday.",
"55. Why did the girl put her cake in the freezer?\nShe wanted to ice it.",
"56. Does a green candle burn longer than a pink one?\nNo, they both burn shorter.",
"57. Why did the little girl hit her birthday cake with a hammer?\nIt was a pound cake."]
let a = document.getElementsByClassName('jokeContainer')[0]
a.innerHTML = jokesArr[Math.floor(Math.random() *56)]
const changeBg=(color)=>{
  document.body.style.background = color;
  let b = document.getElementsByClassName('jokeContainer')
  if(color=='black'){
    for(let elm of b){
     elm.style.color="white";
    }
  }
  else{
    for(let elm of b){
     elm.style.color="black";
    }
  }
}
