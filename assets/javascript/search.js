config = {
  apiKey: "AIzaSyDcy6KUvKqXpNWI65gnl57TF-pQL57FlWs",
  authDomain: "pet-finder-8e4bf.firebaseapp.com",
  databaseURL: "https://pet-finder-8e4bf.firebaseio.com",
  projectId: "pet-finder-8e4bf",
  storageBucket: "pet-finder-8e4bf.appspot.com",
  messagingSenderId: "67912018638"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  
  //website reads database when laded, and identifies the relevent fields. This is done to solve scope issues
  //that happened when it was put inside the .on(click) event
  

  database.ref().on("child_added", function (childSnapshot) {

      firstName = childSnapshot.val().storedFirstName;
      lastName = childSnapshot.val().storedLastName;
      email = childSnapshot.val().storedEmail;
      petName = childSnapshot.val().storedPetName;
      species = childSnapshot.val().storedSpecies;
      imageURL = childSnapshot.val().storedImageURL;
      coatColors = childSnapshot.val().storedCoatColors;
      latitude = childSnapshot.val().storedLatitude;
      longitude = childSnapshot.val().storedLongitude;
      address = childSnapshot.val().storedAddress;
      addressTwo = childSnapshot.val().storedAddressTwo;
      city = childSnapshot.val().storedCity;
      state = childSnapshot.val().storedState;
      zip = childSnapshot.val().storedZip;
      comments = childSnapshot.val().storedComments;

      //creates an array bin for data
      var accountsArray = [];
              //accountsArray.push

      console.log("~~~~~~~~~Account Information Relavent to Search~~~~~~~~~");
      //put childSnapshot data into array
      //for (var i=0; i < 1; i++) {
      accountsArray.push(firstName + " " + lastName, species, zip, coatColors);
      //}
              //var coatColorArr = new Array(coatColors) 
              //var speciesArr = new Array(species) 
              //var zipArr = new Array(zip)

              //$("#coat-color option:selected").each(function () {
                  //petColor.push(this.value);
              //});
              
              //var i
              //for (i = 0; i < accountArray.length; i++) {
                  //accountsArray.push(vvvvvvvvvvvvvvvvvvvvvvvvi)
                  //console.log(i)

                  //console.log(database.ref("pet-finder-8e4bf").storedFirstName)
      
      
      console.log("Name "+ firstName + " " + lastName);
      var coatArr = [];
      coatArr.push(coatColors);
      for (i = 0; i < coatArr.length; i++) {
          (console.log("Coat Colors: " + coatArr[i])) 
          //coatColors = undefined
      };
      console.log("Species: " + accountsArray[1]);
      console.log("Zip: " + accountsArray[2]);
      console.log("Search info in Array ["  + accountsArray +"]");

      
  
  // get the options for Lost/Found, species, and make an array for the colors

      $("#submit-btn").on("click", function (event) {
      //console.clear()

          //console.log("snapshot", firstName)
          // Handle errors


          event.preventDefault();
          //variables to store values
          var petStatus = ""
          var petSpecies = ""
          //Lost Or Found Input Value
          var lostOrFound = $("#selectStatus option:selected").val();
          if (lostOrFound === "1") {
              petStatus = "Lost"
          } else {
              petStatus = "Found"
          };
          //Cat Or Dog Input Value
          var catOrDog = $("#selectSpecies option:selected").val();
          if (catOrDog === "1") {
              petSpecies = "Cat"
          } else {
              petSpecies = "Dog"
          };
          //Pet Color Input Value
          var petColor = []
          $("#coat-color option:selected").each(function () {
              petColor.push(this.value)
          })
          //Zip Input Value
          var inputZip = $("#inputZip").val();

          //Temporary/Local Storage of Data
          var newSearch = {
              status: petStatus,
              species: petSpecies,
              color: petColor,
              tempZip: inputZip,
          }
          
          //hitting the submit key should match should console.log accounts that match the search input species. 
          //If an Account Matches, it will appear in the console.log
          //I think there might be something wrong with the form? I had to delete some
          //of the color entries from firebase but it may have messed with the value
          //of the array
          
          var searchFilter = " "
          var coatResult = " "
          var speciesResult = " "
          var zipResult = " "
          console.log("=====Start if/then for color=====")
          if (
              accountsArray.indexOf(newSearch.color[0], 3) === "0"
              ){console.log("color 1(" + newSearch.color + ") = Match" )}
              else {console.log("Account: " + accountsArray)
              console.log("Searched Color: " + newSearch.color[0])};
          //if (
              //accountsArray.indexOf(newSearch.color, 3) === "0"
              //){console.log("color 2(" + newSearch.color[1] + ") = Match" )}
              //else {console.log("Account Color/s: " + coatArr)
              //console.log("Searched Color: " + newSearch.color[1])};
          //if (
              //accountsArray.indexOf(newSearch.color, 3) === "0"
              //){console.log("color 3(" + newSearch.color[2] + ") = Match" )}
              //else {console.log("Account Color/s: " + coatArr)
              //console.log("Searched Color: " + newSearch.color[2])};

              console.log("indexOf1 = " + accountsArray.indexOf(newSearch.color[0], 3));
              //console.log("indexOf2 = " + coatArr.indexOf(coatArr[1]));
              //console.log("indexOf3 = " + coatArr.indexOf(coatArr[2]));
          //){
          //    coatResult = 1;
          //} else {
          //    coatResult = 0;
          //}

          if (newSearch.species === accountsArray[1] 
          //&& [newSearch.color].includes(coatArr)
          //&& coatArr.indexOf(newSearch.color) != 0
          //&& $.inArray(newSearch.color, coatArr) === 0
          //&& coatResult === 1
          //&& newSearch.tempZip === accountsArray[2] 
          ) {
              //when run by hitting submit, this will display accounts that match species. 
              console.log("[~~Match!~~]");
              console.log("Name: " + accountsArray[0]);
              console.log("Species: " + newSearch.species);
              console.log("Color: " + coatArr);
              console.log("Color Searched: " + newSearch.color);
              console.log("Status: " + newSearch.status);
              console.log("Zip: " + newSearch.tempZip);


              // Change the HTML to reflect
              var newRow = $("<tr>").append(
                  $("<td>").text(accountsArray[0]),
                  //<th scope="col">Species</th>,
                  $("<td>").text(accountsArray[3]),
                  //<th scope="col">Color</th>,
                  $("<td>").text(newSearch.species),
                  $("<td>").text(newSearch.tempZip),        
              );
              $("#pet-table > tbody").append(newRow);




              //console.log("~~~~~~~Search Match~~~~~~~ = True!");;
          } else { 
              console.log("No Match")
          };

          //else {console.log("[xNo_Matchx]")
              //};

          
          
          //coatColors = undefined
  });

          //grab data from firebase
          //database.ref().on("child_added", function (childSnapshot) {
          
              //firstName = childSnapshot.val().storedFirstName;
              //lastName = childSnapshot.val().storedLastName;
              //email = childSnapshot.val().storedEmail;
              //petName = childSnapshot.val().storedPetName;
              //species = childSnapshot.val().storedSpecies;
              //imageURL = childSnapshot.val().storedImageURL;
              //coatColors = childSnapshot.val().storedCoatColors;
              //latitude = childSnapshot.val().storedLatitude;
              //longitude = childSnapshot.val().storedLongitude;
              //address = childSnapshot.val().storedAddress;
              //addressTwo = childSnapshot.val().storedAddressTwo;
              //city = childSnapshot.val().storedCity;
              //state = childSnapshot.val().storedState;
              //zip = childSnapshot.val().storedZip;
              //comments = childSnapshot.val().storedComments;
              
          //trying to pull firebase data (coatColors, species, zip)
          //so I can create a loop to compare to user data above
          //accountsArray is storing data from
          
              //var accountsArray = [];
              //accountsArray.push

              //console.log("~~~~~~~~~Account Information Relavent to Search~~~~~~~~~")
              //for (var i=0; i < 1; i++) {
                  //accountsArray.push(firstName + " " + lastName, coatColors, species, zip)
              //}
              //var coatColorArr = new Array(coatColors) 
              //var speciesArr = new Array(species) 
              //var zipArr = new Array(zip)

              //$("#coat-color option:selected").each(function () {
                  //petColor.push(this.value);
              //});
              
              //var i
              //for (i = 0; i < accountArray.length; i++) {
                  //accountsArray.push(vvvvvvvvvvvvvvvvvvvvvvvvi)
                  //console.log(i)

                  //console.log(database.ref("pet-finder-8e4bf").storedFirstName)
              //console.log("~~" + firstName + " " + lastName + "~~");
              //console.log("Coat Colors: " + coatColors);
              //console.log("Species: " + species);
              //console.log("Zip: " + zip)
              //console.log("Search info in Array ["  + accountsArray +"]")
  });