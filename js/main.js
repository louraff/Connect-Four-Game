	/*----- constants -----*/
	// only const variables have capslock names so we know for sure they are const
const COLORS = {
	'0': 'white',
	'1': 'purple',
	'-1': 'orange',
};

	/*----- state variables -----*/
/* declaring state variables*/
let board; /*array of 7 column arrays*/
let turn; // 1 or -1 to represent player turns
let winner; // holds vlues of null (no winner), 1 or -1 means there is winner. 'T' = tie game.


	/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#markers > div')];

	/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop);

	/*----- functions -----*/
init();

	//initialise all state, then call render(). The renders transfers the state to visualise the state on the page
function init() {
	// To visualise the board's mapping to the DOM, rotate the board array 90 degrees counter clockwise.
	board = [ // don't put let in front because it is local scope and we want to use our global variables
	[0, 0, 0, 0, 0, 0], // col 0 
	[0, 0, 0, 0, 0, 0], // col 1
	[0, 0, 0, 0, 0, 0], // col 2
	[0, 0, 0, 0, 0, 0], // col 3
	[0, 0, 0, 0, 0, 0], // col 4
	[0, 0, 0, 0, 0, 0], // col 5
	[0, 0, 0, 0, 0, 0], // col 6
];
	turn = 1;
	winner = null;
	render();
}
// In response to user interaction, update all impacted state then call render()
function handleDrop(evt) {
	const colIdx = markerEls.indexOf(evt.target);// use indexOf to find the element
//Guards...
	if (colIdx === -1) return; // Guards against if the space next to an arrow is clicked (-1) 
	const colArr = board[colIdx]; //Shortcut to the column array
// Find the index of the firtst 0 in colArr
	const rowIdx = colArr.indexOf(0);
// Update the board state with the current player value (turn state variable)
	colArr[rowIdx] = turn //col array
//switch player turn
	turn *= -1;

	render();
};

// This function visualises all state in the DOM
function render() {
	renderBoard();
	renderMessage();
	renderControls(); // Hiding and showing UI elements (game controls)
}
function renderBoard() {
	 board.forEach(function(colArr, colIdx) {
		//Iterate over the cells in the cur column (colArr)
		colArr.forEach(function(cellVal, rowIdx) { 
			const cellId = `c${colIdx}r${rowIdx}`;
			const cellEl = document.getElementById(cellId);
			cellEl.style.backgroundColor = COLORS[cellVal]; // Use square brackets to access dynamic values in an object
		});
	 });
}

function renderMessage() {
	if(winner === 'T'){
		messageEl.innerText = "It's a tie!";
	} else if (winner) {
		messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> wins!`
	} else {
		// game is in play in this condition
		messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s turn`
	};
};

function renderControls() {
// HIDE PLAY AGAIN BUTTON IF GAME IS IN SESSION
	// Ternary expression: when we want one of two values returned
	// <conditional expression> ? <truthy exp> : <falsy exp>
	playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
//HIDE OR SHOW ARROWS DEPENDING ON WHETHER COLUMN IS FULL OR NOT
	// next, iterate over the marker elements to hide/show according to the column being full (no 0s) or not
	markerEls.forEach(function(markerEl, colIdx){
		const hideMarker = !board[colIdx].includes(0) || winner; // hideMarker is going to be true or false
		markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
	});
}

