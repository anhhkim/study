export function randomizer(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
export function shuffle(array: any[]) {
    for (let i = 0; i < array.length; i++) {
      const j = randomizer(0, array.length - 1);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
