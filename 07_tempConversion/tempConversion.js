const ftoc = function(F) {
  let C = (F - 32) * (5 / 9);
  if (C % 1 != 0) {
    C = C * 10;
    C = Math.round(C);
    C = C / 10;
  }
  return C;
};

const ctof = function(C) {
  let F = (C * (9 / 5) + 32);
  if (F % 1 != 0) {
    F = F * 10;
    F = Math.round(F);
    F = F / 10;
  }
  return F;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
