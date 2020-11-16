var variousThings = [
    true,
    true,
    true,
    false,
    true,
    true,
    1,
    true,
    true,
    false,
    true,
    false,
    true,
    "hello",
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    "world",
    true,
  ];
  function findFirstString(arr) {
    var result = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        result[j] = arr[i];
        j++;
      }
    }
    console.log(result[0]);
  }
  findFirstString(variousThings);
  
  // findFirstString(variousThings);
  
  // console.log(normalizeEmails(emails));
  var str = "The Quick Brown Fox Jumps Over The Lazy Dog.";
  var emails = ["  PETER@gmail.com", "Mia1024@gmail.COM  ", " Dorian@gmail.com "];
  
  function normalizeEmails(arr) {
    var b = [];
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].toLowerCase().trim();
      b.push(a);
    }
    return b;
  }
  
  console.log(normalizeEmails(emails));
  
  function splitNames(fullName) {
    var obj = {};
    var arr = fullName.split(" ");
    obj.firstName = arr[0];
    obj.lastName = arr[1];
    return obj;
  }
  console.log(splitNames("Peter Parker"));
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomString(length) {
    // Your code here
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      result += characters[getRandomInt(0, characters.length - 1)];
    }
    return result;
  }
  
  console.log(getRandomString(10));
  