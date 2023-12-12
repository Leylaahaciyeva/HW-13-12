

//1.
// const countries =["Pakistan","India","Tajikistan","Russia"]
// const country =countries.filter((a)=> a.endsWith("stan"))
// console.log(country)




//2.
// const sentence="In the end,we only regret the chances we didn't take";
// const capitalize =sentence.split(" ").map((w,i,arr)=> w[0].toUpperCase() + w.slice(1))
// console.log(capitalize.join(" "))


//3.
// const sentence="In the end,we only regret the chances we didn't take";
// const split =sentence.split(" ")
// const reverse=split.reverse()
// const reversesentence=reverse.join(" ")
// console.log(reversesentence)


//4.

// const sentence="In the end,we only regret the chances we didn't take";
// const splitarray =sentence.split(" ")
// let longestWord = " ";
// longestWord = splitarray[0]; 
// splitarray.forEach((word)=>{
//     if(word.length>longestWord.length){
//         longestWord=word;
//     }
// })
// console.log(longestWord)
 


const books = [
    "To Kill a Mockingbird",
    "1984",
    "The Great Gatsby",
    "Pride and Prejudice",
    "The Catcher in the Rye",
    "The Lord of the Rings",
    "Animal Farm",
    "Brave New World",
    "The Grapes of Wrath",
    "The Hobbit",
    "One Hundred Years of Solitude",
    "The Catcher in the Rye",
    "Catch-22",
    "The Brothers Karamazov",
    "Moby Dick",
    "The Odyssey",
    "Frankenstein",
    "Alice's Adventures in Wonderland",
    "The Picture of Dorian Gray",
    "War and Peace",
  ];
//5.
//   books.sort()
//   console.log(books)

//6.

// let longestWord = " ";
// longestWord = books[0]; 
// books.forEach((word)=>{
//     if(word.length>longestWord.length){
//         longestWord=word;
//     }
// })
// console.log(longestWord)


//7.

// const string =books.toString()
// const char =string.split("")
// console.log(char.length)