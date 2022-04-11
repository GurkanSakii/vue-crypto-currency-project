import millify from "millify";

const valueConverter = (val, symbol, precision) => {
  if (isNaN(val) && !symbol) return val;

  //use none currency or percentage values
  if (val && !isNaN(val) && !precision) {
    return val;
  }

  if (val && !isNaN(val) && precision) {
    const convertedVal = millify(val, {
      unit: ["", "", "m", "b", "t"],
      precision,
    });

    if (symbol === "$") {
      return symbol + convertedVal;
    } else if (symbol === "%") {
      return convertedVal + symbol;
    }
  }
};

export default valueConverter;
