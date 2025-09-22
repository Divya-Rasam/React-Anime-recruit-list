
// 🧪 Challenge: Anime Recruit List

import { useState } from "react"

import style from "./AnimeRecruitList.module.css"

// 📌 Your Task: Build a component called AnimeRecruitList that lets users add anime characters to a list.

// 🛠️ Functional Requirements:
// Heading
// If no characters yet → show: No anime characters recruited.
// If characters exist → show: Current Anime Recruits: [Name1, Name2, ...]

// Input Field      User types character name here.

// Button         On click, adds character to the list and clears the input.

// 🔧 What You'll Practice:      useState with arrays and strings, Controlled inputs, Conditional rendering, Dynamic list rendering

// 💻 Example Output:                     No anime characters recruited.
//                            [ Tanjiro                  ]  [ Recruit Character ]
//     → After clicking button:            Current Anime Recruits: Tanjiro
//                           [ Nezuko                   ]  [ Recruit Character ]

// → Output: Current Anime Recruits: Tanjiro, Nezuko

// 🧠 Bonus Ideas:
// Make input case-insensitive and ignore blank names
// Add emoji 🎴, 🌸 or 🎌 in the heading
// Limit total characters to 10 (hint: if(recruits.length >= 10))

export function AnimeRecruitList () {                      // const [ variable, function ] = useState(initial value)
  const [ recruite, setRecruite ] = useState([]);               // used two useStates               recruits is the array → like ["Tanjiro", "Nezuko"]
  const [ newCharacter, setNewCharacter ] = useState("");      // gives value to input    // no array here          newCharacter is just a string → like "Inosuke"    

// recruite is an array that stores the names of recruited anime characters (like: ["Tanjiro", "Naruto"]), setRecruite is a function that lets you update the recruite array
// newCharacter stores the text input the user types, setNewCharacter updates that input value.

  function handleClick () {
    if ( newCharacter.trim() !== "" && recruite.length < 10 ) {               // .trim() removes spaces from both sides of the string.
      setRecruite([...recruite, newCharacter]);             // add to array
      setNewCharacter("");                                    // clear input
    }
    
  }
   return (
    <>
    <div className={style.wrapper}>
      <h1 className={style.heading}>{ recruite.length === 0 ? "🎌 No anime characters recruited." : `Current Anime Recruits: 🌸${recruite.join(", ")}`}</h1>
      <h3>Enter a character name: <input value={newCharacter} className={style.input} type="text" placeholder="Enter here" onChange={(e) => setNewCharacter(e.target.value)}></input></h3>
      <button className={style.button} onClick={handleClick} disabled={newCharacter.trim() === "" || recruite.length >= 10}>Recruit Character</button>
      {recruite.length === 10 && (<p className={style.limitText} >Max recruits reached!</p>)}
    </div>
    </>
   )
}




//         Feature	                                                                                        Notes
// useState for array (recruite)                                                          	Tracks list of anime characters
// useState for input (newCharacter)	                                                         Controls the input field
// Controlled <input>	                                                                      value and onChange working properly
// Immutable update with spread [...]	                                              	setRecruite([...recruite, newCharacter]) is correct
// Input clears after adding	                                                                     	Using setNewCharacter("")
// Character limit check	                                                                         	recruite.length < 10 
// Conditional heading	                                                                 	Smart use of ternary to handle empty list
// CSS modules used properly	                                                                	Clean separation of style logic





//             Concept	                                                                                Explanation
// .trim()	                                                                  Removes unwanted spaces from start and end of input
// .join(", ")	                                                                Combines array into a string like: "Naruto, Luffy"
// useState([])	                                                                                Starts with an empty list
// setRecruite([...recruite, new])	                                                       Adds new name without changing the original
// disabled={...}	                                                                                Disables button if needed
// value + onChange	                                                                                    Controlled input field














































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
