// https://www.codewars.com/kata/58ce8725c835848ad6000007/solutions/javascript?filter=me&sort=best_practice&invalids=false

function potatoes(p0, w0, p1) {
    let dryMatter = w0 * (100 - p0) / 100;
    let w1 = dryMatter * 100 / (100 - p1);
    return Math.floor(w1);
}