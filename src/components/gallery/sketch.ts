import { P5CanvasInstance } from "react-p5-wrapper";
import P5 from "p5";

const sketch = (p5: P5CanvasInstance) => {
  let shadowLayer: P5.Graphics;
  let lineLayer: P5.Graphics;
  let prevMouseX: number;
  let prevMouseY: number;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    shadowLayer = p5.createGraphics(400, 400);
    lineLayer = p5.createGraphics(400, 400);
    prevMouseX = p5.mouseX;
    prevMouseY = p5.mouseY;
  };

  p5.draw = () => {

        // 影を描画
        shadowLayer.stroke(230); // 半透明の黒
        shadowLayer.strokeWeight(5);
        shadowLayer.line(prevMouseX + 14, prevMouseY + 14, p5.mouseX + 14, p5.mouseY + 14);


    // 線を描画
    lineLayer.stroke(255, 100, 0); // 赤色
    lineLayer.strokeWeight(3);
    lineLayer.line(prevMouseX, prevMouseY, p5.mouseX, p5.mouseY);

    // 影のレイヤーをメインキャンバスに描画
    p5.image(shadowLayer, 0, 0);

    // 線のレイヤーをメインキャンバスに描画
    p5.image(lineLayer, 0, 0);

    // 現在のマウス位置を次のフレームのために保存
    prevMouseX = p5.mouseX;
    prevMouseY = p5.mouseY;
  };
};

export default sketch;