export function uniq(tab: any[]) {
  let res = [];
  for (let i = 0; i < tab.length; i++) {
    if (res.indexOf(tab[i]) === -1) {
      res.push(tab[i]);
    }
  }

  return res;
}

export function uniqStr(input: string) {
  const tab = input.split("");
  let res = [];
  for (let i = 0; i < tab.length; i++) {
    if (res.indexOf(tab[i]) === -1) {
      res.push(tab[i]);
    }
  }

  return res.join("");
}
