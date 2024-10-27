import { P5CanvasInstance } from "react-p5-wrapper";
import P5 from "p5";

class Canvas {
  shadowLayer: P5.Graphics | null;
  lineLayer: P5.Graphics | null;
  prevMouseX: number;
  prevMouseY: number;
  picker: any;
  p5: P5;
  canvas: any;
  container: HTMLElement;
  uploadDataCallback: (data: any) => void;
  constructor( container: HTMLElement, uploadData: (data: any) => void) {
      this.prevMouseX = 0;
      this.prevMouseY = 0;
      this.picker = null;
      this.canvas = null;
      this.shadowLayer = null;
      this.lineLayer = null;
      this.container = container;
      this.p5 = new P5(this.sketch, container);
      this.uploadDataCallback = uploadData;
  }
  sketch = (p5: P5) => {
      p5.setup = () => {
            this.setup(p5);
      }
      p5.draw = () => {
            this.draw(p5);
      }
  }
  setup(p5: P5) {
      p5.createCanvas(800, 800);
      this.shadowLayer = p5.createGraphics(800, 800);
      this.lineLayer = p5.createGraphics(800, 800);
      this.prevMouseX = p5.mouseX;
      this.prevMouseY = p5.mouseY;
      this.picker = p5.createColorPicker("deeppink");
      this.picker.position(200, 100);
  }
  draw(p5: P5) {
      if (this.shadowLayer && this.lineLayer) {
      this.shadowLayer.clear();
      this.lineLayer.clear();
  
          // 影を描画
          this.shadowLayer.stroke(200); // 半透明の黒
          this.shadowLayer.strokeWeight(5);
          this.shadowLayer.line(this.prevMouseX + 14, this.prevMouseY + 14, p5.mouseX + 14, p5.mouseY + 14);
          this.shadowLayer.filter(p5.BLUR, 5);
  
  
      // 線を描画
      this.lineLayer.stroke(this.picker.color()); // 赤色
      this.lineLayer.strokeWeight(3);
      this.lineLayer.line(this.prevMouseX, this.prevMouseY, p5.mouseX, p5.mouseY);
  
      // 影のレイヤーをメインキャンバスに描画
      p5.image(this.shadowLayer, 0, 0);
  
      // 線のレイヤーをメインキャンバスに描画
      p5.image(this.lineLayer, 0, 0);
  
      // 現在のマウス位置を次のフレームのために保存
      this.prevMouseX = p5.mouseX;
      this.prevMouseY = p5.mouseY;
      }
      p5.noStroke();
      p5.fill(255, 0, 0);
      p5.circle(100, 100, 10);
  }
  uploadData() {
      this.uploadDataCallback("test");
  }
  destroy() {
      if (this.canvas) {
            this.container.removeChild(this.canvas);
            this.canvas = null;
      }
      if (this.shadowLayer) {
            this.shadowLayer.remove();
      }
      if (this.lineLayer) {
            this.lineLayer.remove();
      }
      this.prevMouseX = 0;
      this.prevMouseY = 0;
      this.picker = null;
      this.p5.remove();
    }
}

export {Canvas};
