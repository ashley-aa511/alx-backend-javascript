export default function taskblock(trueorFalse) {
  const task = false;
  const task2 = true;

  if (trueorFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
