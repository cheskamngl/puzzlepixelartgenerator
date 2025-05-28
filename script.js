// All puzzles, solutions, pixelArt for easy, medium, hard:
const puzzles = {
    easy: {
      puzzle: [
        [1, 8, '', 9, 5, 4, '', 7, 6],
        [3, '', '', '', 8, 2, 1, '', ''],
        [7, 5, 4, 1, '', '', 9, 8, 2],
        [2, '', 7, 8, 3, 5, 6, '',''],
        [9, 6, '', '', '', '', 8, '', 7],
        [8, '', '', 6, 9, 7, 2, 3, 4],
        ['', 2, 1, '', 7, 6, '', 9, ''],
        [6, 7, 8, 4, '', '', '', 2, ''],
        [4, '', 9, '', '', '', 7, 6, 1]
      ],
      solution: [
        [1, 8, 2, 9, 5, 4, 3, 7, 6],
        [3, 9, 6, 7, 8, 2, 1, 4, 5],
        [7, 5, 4, 1, 6, 3, 9, 8, 2],
        [2, 4, 7, 8, 3, 5, 6, 1, 9],
        [9, 6, 3, 2, 4, 1, 8, 5, 7],
        [8, 1, 5, 6, 9, 7, 2, 3, 4],
        [5, 2, 1, 3, 7, 6, 4, 9, 8],
        [6, 7, 8, 4, 1, 9, 5, 2, 3],
        [4, 3, 9, 5, 2, 8, 7, 6, 1]
      ],
      pixelArt: [
        ['#ffffff', '#ffffff', '#ffffff', '#cd8304', '#cd8304', '#cd8304', '#ffffff', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#cd8304', '#eea202', '#ffffff', '#ffffff', '#cd8304', '#ffffff', '#ffffff'],
        ['#ffffff', '#cd8304', '#eea202', '#f5d101', '#f5d101', '#f5d101', '#ffffff', '#cd8304', '#ffffff'],
        ['#ffffff', '#cd8304', '#eea202', '#f5d101', '#f5d101', '#f5d101', '#f5d101', '#cd8304', '#ffffff'],
        ['#ffffff', '#cd8304', '#eea202', '#f5d101', '#f5d101', '#f5d101', '#f5d101', '#cd8304', '#ffffff'],
        ['#ffffff', '#ffffff', '#cd8304', '#eea202', '#f5d101', '#f5d101', '#cd8304', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#ffffff', '#cd8304', '#cd8304', '#cd8304', '#ffffff', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#ffffff', '#595959', '#595959', '#595959', '#ffffff', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#ffffff', '#404040', '#404040', '#404040', '#ffffff', '#ffffff', '#ffffff']
      ],
    },
  
    medium: {
      puzzle: [
        ['', 9, 4, 8, '', 5, '', '', ''],
        [1, '', '', 6, 7, 2, 9, 4, ''],
        [2, 6, '', '', '', '', '', 7, ''],
        ['', 7, '', '', 9, 6, 1, '', ''],
        [3, 5, '', '', '', '', '', 6, 9],
        ['', '', 6, 1, 8, '', '', 5, ''],
        ['', 2, '', '', '', '', '', 9, 1],
        ['', 8, 9, 3, 5, 1, '', '', 6],
        ['', '', '', 7, '', 9, 4, 8, '']
      ],
      solution: [
        [7, 9, 4, 8, 3, 5, 6, 1, 2],
        [1, 3, 5, 6, 7, 2, 9, 4, 8],
        [2, 6, 8, 9, 1, 4, 5, 7, 3],
        [8, 7, 2, 5, 9, 6, 1, 3, 4],
        [3, 5, 1, 2, 4, 7, 8, 6, 9],
        [9, 4, 6, 1, 8, 3, 2, 5, 7],
        [5, 2, 7, 4, 6, 8, 3, 9, 1],
        [4, 8, 9, 3, 5, 1, 7, 2, 6],
        [6, 1, 3, 7, 2, 9, 4, 8, 5]
      ],
      pixelArt: [
        ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#87e6fa', '#ffffff', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#ffffff', '#87e6fa', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#262626', '#262626', '#262626', '#262626', '#262626', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#ffffff', '#262626', '#ffffff', '#262626', '#ffffff', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#ffffff', '#262626', '#48c0e5', '#262626', '#ffffff', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#262626', '#1DA9D5', '#48c0e5', '#48c0e5', '#262626', '#ffffff', '#ffffff'],
        ['#ffffff', '#262626', '#1da9d5', '#48c0e5', '#48c0e5', '#48c0e5', '#92e2fc', '#262626', '#ffffff'],
        ['#ffffff', '#262626', '#1da9d5', '#1da9d5', '#92e2fc', '#48c0e5', '#48c0e5', '#262626', '#ffffff'],
        ['#ffffff', '#ffffff', '#262626', '#262626', '#262626', '#262626', '#262626', '#ffffff', '#ffffff']
      ]
    },
  
    hard: {
      puzzle: [
        [8, '', '', '', 5, 1, 7, 9, 4],
        ['', '', '', '', 3, '', 1, '', 8],
        ['', '', '', '', 7, 9, 3, 6, ''],
        ['', 1, 5, '', '', '', '', '', 3],
        ['', 8, '', '', '', 5, 9, '', ''],
        ['', '', '', 7, 8, '', '', '', ''],
        [2, '', '', '', 9, '', 6, '', 5],
        ['', 9, 6, '', 2, 8, '', '', 7],
        [7, 4, '', 5, 6, 3, 2, 1, 9]
      ],
      solution: [
        [8, 6, 3, 2, 5, 1, 7, 9, 4],
        [9, 7, 2, 6, 3, 4, 1, 5, 8],
        [1, 5, 4, 8, 7, 9, 3, 6, 2],
        [6, 1, 5, 9, 4, 2, 8, 7, 3],
        [4, 8, 7, 3, 1, 5, 9, 2, 6],
        [3, 2, 9, 7, 8, 6, 5, 4, 1],
        [2, 3, 1, 4, 9, 7, 6, 8, 5],
        [5, 9, 6, 1, 2, 8, 4, 3, 7],
        [7, 4, 8, 5, 6, 3, 2, 1, 9]
      ],
      pixelArt: [
        ['#ffffff', '#0c9797', '#0c9797', '#0c9797', '#0c9797', '#0c9797', '#0c9797', '#0c9797', '#ffffff'],
        ['#ffffff', '#0c9797', '#d2f6f4', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#0c9797', '#ffffff'],
        ['#ffffff', '#ffffff', '#0c9797', '#d2f6f4', '#ffffff', '#ffffff', '#0c9797', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#0c9797', '#d2f6f4', '#ffffff', '#0c9797', '#0c9797', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#0c9797', '#d2f6f4', '#ffffff', '#ffffff', '#0c9797', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#0c9797', '#d2f6f4', '#ffffff', '#0c9797', '#0c9797', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#0c9797', '#d16362', '#eb8183', '#eb8183', '#0c9797', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#0c9797', '#d16362', '#d16362', '#eb8183', '#0c9797', '#ffffff', '#ffffff'],
        ['#ffffff', '#ffffff', '#ffffff', '#0c9797', '#0c9797', '#0c9797', '#ffffff', '#ffffff', '#ffffff']
      ]
    }
  };
  
  let currentLevel = null;
  
  function startGame(level) {
    currentLevel = level;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('level-title').textContent = level.charAt(0).toUpperCase() + level.slice(1) + ' Puzzle';
  
    loadPuzzle(level);
  }
  
  function loadPuzzle(level) {
    const grid = document.getElementById('sudoku-grid');
    grid.innerHTML = ''; // Clear old grid
  
    const puzzle = puzzles[level].puzzle;
  
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const input = document.createElement('input');
        input.id = `cell-${i}-${j}`;
  
        // Add border classes for 3x3 blocks
        const classes = [];
        if (i % 3 === 0) classes.push('top-border');
        if (j % 3 === 0) classes.push('left-border');
        if (i === 8) classes.push('bottom-border');
        if (j === 8) classes.push('right-border');
        input.className = classes.join(' ');
  
        if (puzzle[i][j] !== '') {
          input.value = puzzle[i][j];
          input.disabled = true;
          input.style.backgroundColor = '#eee';
        } else {
          input.value = '';
          input.disabled = false;
          input.style.backgroundColor = 'white';
        }
  
        // Only allow digits 1-9
        input.addEventListener('input', (e) => {
          const val = e.target.value;
          if (!/^[1-9]?$/.test(val)) e.target.value = '';
          e.target.style.borderColor = '#ccc'; // Reset border color on input
        });
  
        grid.appendChild(input);
      }
    }
  }
  
  function checkSolution() {
    const solution = puzzles[currentLevel].solution;
    let allCorrect = true;
  
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const input = document.getElementById(`cell-${i}-${j}`);
  
        // Skip disabled cells (pre-filled)
        if (input.disabled) continue;
  
        const val = input.value;
        if (val === '' || Number(val) !== solution[i][j]) {
          input.style.borderColor = 'red';
          allCorrect = false;
        } else {
          input.style.borderColor = '#ccc';
        }
      }
    }
  
    if (allCorrect) {
      revealArt();
    }
  }
  
  function revealArt() {
    const pixelArt = puzzles[currentLevel].pixelArt;
    const grid = document.getElementById('sudoku-grid');
    grid.innerHTML = ''; // Clear grid to show pixel art
  
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const pixel = document.createElement('div');
        pixel.style.width = '60px';
        pixel.style.height = '60px';
        pixel.style.backgroundColor = pixelArt[i][j];
        pixel.style.border = '1px solid #ddd';
        grid.appendChild(pixel);
      }
    }
  }
  
  function resetPuzzle() {
    loadPuzzle(currentLevel);
  }
  
