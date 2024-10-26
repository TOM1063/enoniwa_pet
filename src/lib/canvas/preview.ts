import P5 from "p5";


const Preview = (p: P5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
  }
  p.draw = () => {
    p.background(255);
    p.fill(0);
    p.ellipse(p.mouseX, p.mouseY, 100, 100);
  }
}
    
export default Preview;