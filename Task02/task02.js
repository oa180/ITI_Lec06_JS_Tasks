// Function Accepts only two Arguments

function tryCatchExeptions() {
  try {
    if (arguments.length !== 2)
      throw new Error(
        "This function accepts only 2 arguments, you may have enterd more or less than that."
      );
    console.log("Congrats, You have entered exactly two parameters.");
  } catch (error) {
    console.error(error.message);
  }
}

tryCatchExeptions(1, 2);
