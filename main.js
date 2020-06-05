//create white keys on the keyboard.

//idea: array of notes, rather than keys.
//array can be of objects and include note and relevant key.
//then we can map over this and append it to the html for a generic key
//(so like a div with a key class that we've already styled and then a function set up to take whatever note comes from the array...);
//need to think about how to incorporate computer keys as well

//onclick: bong

//Key: <div class='key' onkeydown="playNote()" ></div>

const notes = [
  { note: "C4", key: "s", keyNumber: 83, color: "red" },
  { note: "D4", key: "d", keyNumber: 68, color: "orange" },
  { note: "E4", key: "f", keyNumber: 70, color: "yellow" },
  { note: "F4", key: "g", keyNumber: 71, color: "green" },
  { note: "G4", key: "h", keyNumber: 72, color: "blue" },
  { note: "A4", key: "j", keyNumber: 74, color: "indigo" },
  { note: "B4", key: "k", keyNumber: 75, color: "violet" },
  { note: "C5", key: "l", keyNumber: 76, color: "red" },
  { note: "D5", key: "l", keyNumber: 76, color: "orange" },
  { note: "E5", key: "l", keyNumber: 76, color: "yellow" },
  { note: "F5", key: "l", keyNumber: 76, color: "green" },
  { note: "G5", key: "l", keyNumber: 76, color: "blue" },
  { note: "A5", key: "l", keyNumber: 76, color: "indigo" },
  { note: "B5", key: "l", keyNumber: 76, color: "violet" },
];

const blackNotes = [
  { note: "C#4", display: true },
  { note: "D#4", display: true },
  { note: "", display: false }, //ghost key
  { note: "F#4", display: true },
  { note: "G#4", display: true },
  { note: "A#4", display: true },
  { note: "", display: false }, //ghost key
  { note: "C#5", display: true },
  { note: "D#5", display: true },
  { note: "", display: false }, //ghost key
  { note: "F#5", display: true },
  { note: "G#5", display: true },
  { note: "A#5", display: true },
];

// var piano = SampleLibrary.load({
//   instruments: "piano",
// });

function startNote(event, note) {
  console.log(event?.keyCode, event?.detail, { note });
  var synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease(note, "8n");
}

//attach a listener to the keyboard events

// const app = document.querySelector(".app");
// app.innerHTML = notes.map((item) => {
//   const key = document.createElement("div");

const app = document.querySelector(".app");

const whiteKeyWrapper = document.createElement("div");
whiteKeyWrapper.classList.add("whiteKeyWrapper");
notes.map((item, index) => {
  const keyDiv = document.createElement("div");
  keyDiv.classList.add("key");
  keyDiv.id = index;
  keyDiv.addEventListener("click", () => {
    startNote(event, item.note);
    //add the style of the color like we did inside the interval but without an interval
    keyDiv.style.backgroundColor = item.color;
    //have a setTimeout that changes the color back (removes the new style thing) after 1 sec
    //setTimeOut(change it back here after 1s)
    const setColor = setTimeout(() => {
      keyDiv.style.backgroundColor = "whitesmoke";
    }, 500);

    keyDiv.classList.add("clicked");
  });
  whiteKeyWrapper.appendChild(keyDiv);
});
app.appendChild(whiteKeyWrapper);

const blackKeyWrapper = document.createElement("div");
blackKeyWrapper.classList.add("blackKeyWrapper");
blackNotes.map((item, index) => {
  const keyDiv = document.createElement("div");
  keyDiv.classList.add("blackKey");
  keyDiv.id = `black${index}`;
  if (!item.display) {
    keyDiv.style.backgroundColor = "rgb(0, 0, 0, 0)";
  }
  if (item.display) {
    keyDiv.addEventListener("click", () => {
      startNote(event, item.note);
      //add the style of the color like we did inside the interval but without an interval
      keyDiv.style.backgroundColor = item.color;
      //have a setTimeout that changes the color back (removes the new style thing) after 1 sec
      //setTimeOut(change it back here after 1s)
      const setColor = setTimeout(() => {
        keyDiv.style.backgroundColor = "black";
      }, 500);

      keyDiv.classList.add("clicked");
    });
  }
  blackKeyWrapper.appendChild(keyDiv);
});
app.appendChild(blackKeyWrapper);

// const watchButton = document.querySelector(".watchBtn");
// watchButton.addEventListener("click", () => {
//   playVid();
// });
