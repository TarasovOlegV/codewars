function mazeRunner(maze, directions) {
  let currentCell;

  //search start cell
  maze.map((row, rowIdx) => {
    const colIdx = row.indexOf(2);
    if (colIdx !== -1) currentCell = [rowIdx, colIdx];
  });

  while (directions.length) {
    switch (directions.shift()) {
      case 'N':
        currentCell = [currentCell[0] - 1, currentCell[1]];
        break;
      case 'S':
        currentCell = [currentCell[0] + 1, currentCell[1]];
        break;
      case 'E':
        currentCell = [currentCell[0], currentCell[1] + 1];
        break;
      case 'W':
        currentCell = [currentCell[0], currentCell[1] - 1];
        break;
    }

    if (
      maze[currentCell[0]] === undefined ||
      maze[currentCell[0]][currentCell[1]] === undefined ||
      maze[currentCell[0]][currentCell[1]] === 1
    ) {
      return 'Dead';
    }

    if (maze[currentCell[0]][currentCell[1]] === 3) {
      return 'Finish';
    }
  }

  return 'Lost';
}
