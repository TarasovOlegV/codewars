function partlist(arr) {
  const answer = [];
  for (let i = 1; i < arr.length; i++) {
    answer.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
  }
  return answer;
}
