	/*----- constants -----*/
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


	/*----- event listeners -----*/


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

}

function renderControls() {

}