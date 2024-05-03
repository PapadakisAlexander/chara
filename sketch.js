function setup() {
  createCanvas(400, 400); // Δημιουργία ενός καμβά 400x400 pixels
}

function draw() {
  background(52, 201, 235); // Καθαρισμός του καμβά και γέμισμά του με χρώμα φόντου (προκειμένου να επανασχεδιαστούν τα στοιχεία)

  // Υπολογισμός συντεταγμένων για τις γωνίες του καμβά
  let topLeftX = 0; // η αρχή της x-άξονα
  let topLeftY = 0; // η αρχή της y-άξονα
  let topRightX = width; // το τέλος της x-άξονα
  let topRightY = 0; // η αρχή της y-άξονα
  let bottomLeftX = 0; // η αρχή της x-άξονα
  let bottomLeftY = height; // το τέλος της y-άξονα
  let bottomRightX = width; // το τέλος της x-άξονα
  let bottomRightY = height; // το τέλος της y-άξονα

  // Σχεδίαση γραμμών από τις γωνίες του καμβά προς το κέντρο του τετραγώνου
  let centralEllipseSize = 100; // Ορισμός μεγέθους του κεντρικού ελλείψου
  let squareSize = 70; // Ορισμός μεγέθους του τετραγώνου
  let squareX = width / 2 - squareSize / 2; // Υπολογισμός x-συντεταγμένης του τετραγώνου
  let squareY = height / 2 - squareSize / 2; // Υπολογισμός y-συντεταγμένης του τετραγώνου
  let squareCenterX = squareX + squareSize / 2; // Υπολογισμός του κέντρου του τετραγώνου στον άξονα x
  let squareCenterY = squareY + squareSize / 2; // Υπολογισμός του κέντρου του τετραγώνου στον άξονα y

  stroke(0,0,0); // Ορισμός του χρώματος για τη γραμμή σε μαύρο
  strokeWeight(2)

  // Σχεδίαση γραμμών από τις γωνίες του καμβά προς το κέντρο του τετραγώνου
  line(topLeftX, topLeftY, squareCenterX, squareCenterY); // Γραμμή από την πάνω αριστερή γωνία προς το κέντρο του τετραγώνου
  line(topRightX, topRightY, squareCenterX, squareCenterY); // Γραμμή από την πάνω δεξιά γωνία προς το κέντρο του τετραγώνου
  line(bottomLeftX, bottomLeftY, squareCenterX, squareCenterY); // Γραμμή από την κάτω αριστερή γωνία προς το κέντρο του τετραγώνου
  line(bottomRightX, bottomRightY, squareCenterX, squareCenterY); // Γραμμή από την κάτω δεξιά γωνία προς το κέντρο του τετραγώνου

  // Σχεδίαση του κεντρικού ελλείψου
  ellipse(width / 2, height / 2, centralEllipseSize, centralEllipseSize);

  fill(255, 0, 0); // Ορισμός του χρώματος τοn sxedion σε κόκκινο
  // Σχεδίαση του τετραγώνου στο κέντρο του καμβά
  square(squareX, squareY, squareSize);

  // Σχεδίαση ελλείψων που ακουμπούν το κεντρικό ελλείψο σε κάθε πλευρά
  ellipse(200, 100, centralEllipseSize, centralEllipseSize); // Ελλείψη στην πάνω πλευρά
  ellipse(width / 2, height * 0.75, centralEllipseSize, centralEllipseSize); // Ελλείψη στην κάτω πλευρά
  ellipse(100, height / 2, centralEllipseSize, centralEllipseSize); // Ελλείψη στην αριστερή πλευρά
  ellipse(300, height / 2, centralEllipseSize, centralEllipseSize); 
}



 /*Συνοπτικά, το τετράγωνο βρίσκεται στο κέντρο του 
  κύκλου επειδή η κάτω-δεξιά γωνία του συμπίπτει με την 
  άκρη του κύκλου, και το κέντρο του κύκλου είναι ο αναφερόμενος 
  σημείο για τη θέση του τετραγώνου.*/

  ellipse(300, height / 2, centralEllipseSize, centralEllipseSize); 