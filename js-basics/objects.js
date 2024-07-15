// here Ac is an object with property height, width, isGoodAc,temp
// and has method called increaseTemp which does the work for increasing temperature

const ac = {
  height: "20feet",
  width: "30feet",
  isGoodAc: false,
  temp: 22,
  increaseTemp: function () {
    this.temp = temp + 1;
    temp++;
    console.log(temp);
    console.log("temp has increased");
  },
};

ac.increaseTemp();

// console.log();
