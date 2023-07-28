// Get All Cookies
function getALlCookies() {
  return document.cookie.split(";");
}

// Get A Cookie
function getACookie(cookieNameTarget) {
  if (arguments.length == 0) return;

  const allCookies = getALlCookies();
  const cookiesObj = {};

  for (let i = 0; i < allCookies.length; i++) {
    const cookieName = allCookies[i].split("=")[0].trim();
    const cookieValue = allCookies[i].split("=")[1].trim();

    cookiesObj[cookieName] = cookieValue;
  }

  //   console.log(cookiesObj[cookieNameTarget]);
  return cookiesObj[cookieNameTarget];
}
// Get The Targeted User
function getTargetuser() {
  // if (arguments.length == 0) return;

  const allCookies = getALlCookies();

  let targetedUser = null;

  for (let i = 0; i < allCookies.length; i++) {
    const cookieName = allCookies[i].split("=")[0].trim();
    const cookieValue = allCookies[i].split("=")[1].trim();

    if (cookieName.includes("expires") && i == allCookies.length - 1)
      targetedUser = cookieName.slice(0, cookieName.indexOf("expires"));
  }
  // console.log(targetedUser);

  return targetedUser;
}

function getUsersInfo() {
  const userName = getTargetuser();
  const usersGender = getACookie(`${userName}gender`);
  const userAge = getACookie(`${userName}Age`);
  const userNoVisits = getACookie(`${userName}visits`);
  const userColor = getACookie(`${userName}color`);

  return { userName, usersGender, userAge, userNoVisits, userColor };
}

function displayMessage() {
  const userInfo = getUsersInfo();
  const maleImg = "./IMG-20230728-WA0023.jpg";
  const femaleImg = "./IMG-20230728-WA0021.jpg";

  document.writeln(
    `<img src="${
      userInfo.usersGender == "male" ? maleImg : femaleImg
    }"> Welcome <span style="color: ${
      userInfo.userColor
    }; font-size: 25px; font-weight: bold;">${
      userInfo.userName
    }</span>  You visited the site <span style="color: ${
      userInfo.userColor
    }; font-size: 25px; font-weight: bold;">${
      userInfo.userNoVisits
    }</span> times:)`
  );
}

console.log("kl");
getTargetuser();
displayMessage();
