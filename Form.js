class Form {

  constructor() {
    this.character = createButton("Characters");
    //this.play = createButton('Play');
    this.settings = createButton('Settings');
    this.instruction = createButton('Instructions')
    this.title = createElement('h1');
    this.greeting = createElement('h3')

  }
  hide() {
   // this.play.hide();
    this.instruction.hide();
    this.settings.hide();
    this.character.hide();
    this.background.hide();
  }

  display() {

    playB = createSprite(displayWidth / 2+100, displayHeight / 2+200);
    playB.addImage(playBImg);
    //set position of all elements measuring it from the center and only after giving required size and style.

    //create title
    this.title.html("Escape Town");
    this.title.position(displayWidth / 2, displayHeight / 2 - 400);
    this.title.style('font-size', ' 100px')
    this.title.style('color', 'pink ');

    //create character(button)

    this.character.position(displayWidth / 2 - 500, displayHeight / 2 - 150);
    this.character.style('width', ' 300px')
    this.character.style('height', '50px ')
    this.character.style('background', 'pink ')
    this.character.style('font-size' , '20px')


    //this.play.position(displayWidth / 2+100, displayHeight / 2+200);
    //this.play.style('width', '200px ')
    //this.play.style('height', ' 50px')
    //this.play.style('font-size' , '20px')
    //this.play.style('font-family', 'Cursive		')

    this.settings.position(displayWidth / 2+900, displayHeight / 2-350)
    this.settings.style('font-size', '20px ')
    this.settings.style('width', '100px ')
    this.settings.style('height', ' 40px')
    this.settings.style('background', 'lightblue  ')

    this.instruction.position(displayWidth / 2 +900, displayHeight / 2-300)
    this.instruction.style('font-size', '20px ')
    this.instruction.style('width' , '120px')
    this.instruction.style('height', '40px')
    this.instruction.style('fontfamily ', 'Algerian')
    this.instruction.style('background', 'lightblue ')

 

    //this.play.mousePressed(() => {

      //call hide() function for elemants that should hide after pressing a certain button

     
     
    //});


    this.settings.mousePressed(() => {
      this.character.hide();
      this.instruction.hide();
      //this.play.hide();
     this.settings.hide();

      
      this.greeting.html("Hello");
      this.greeting.position(displayWidth / 2, displayHeight / 2);
      this.greeting.style('font-family' , 'cursive')
      this.greeting.style('font-size', ' 70px')
      this.greeting.style('color', 'pink ');


    })
  }
}
