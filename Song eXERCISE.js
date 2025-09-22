function printedSong() {
  console.log("One, two, three, four,");
  console.log("O's inside a Stryofoam, (Wock', Wock') ");
  console.log("One, two, three, four,);
  console.log("hoes who tryna take me home (yeah), /");
  console.log("Five, six bracelets on my wrist, /");
  console.log("lookin like a pot of gold (Bitch), /");
  console.log(
    "I got money, money, money, money runnin' through my chromosomes (yeah), /"
  );
}

function refrain() {
  console.log("One, two, three, four, /");
}

function song() {
  refrain();
  console.log("O's inside a Stryofoam, (Wock', Wock') /");
  refrain();
  console.log("hoes who tryna take me home (yeah), /");
  console.log("Five, six bracelets on my wrist, /");
  console.log("lookin like a pot of gold (Bitch), /");
  console.log(
    "I got money, money, money, money runnin' through my chromosomes (yeah), /"
  );
}

song();

function refactoredSong() {
  return "One, two, three, four, /";
}

function refactoredSong() {
    console.log(refrain());
    console.log("O's inside a Stryofoam, (Wock', Wock') /");
    console.log(refrain());
    console.log("hoes who tryna take me home (yeah), /");
    console.log("Five, six bracelets on my wrist, /");
    console.log("lookin like a pot of gold (Bitch), /");
    console.log("I got money, money, money, money runnin' through my chromosomes (yeah), /");
}
refactoredSong();
