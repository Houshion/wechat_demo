export const seatData = new Array();
for (let i = 0; i < 24; i++) {
  seatData.push({
    id: i,
    selected: false,
    status: 1
  });
}

export const time = new Array();
for (let i = 1; i < 6; i++) {
  time.push(5 * i)
}
