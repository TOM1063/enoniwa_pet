import { P5CanvasInstance } from "react-p5-wrapper";
import P5 from "p5";

const p5Canvas = (p5: P5CanvasInstance, color: string) => {
  let shadowLayer: P5.Graphics;
  let lineLayer: P5.Graphics;
  let prevMouseX: number;
  let prevMouseY: number;
  let picker: P5.ColorPicker;

  p5.setup = () => {
    p5.createCanvas(800, 800);
    shadowLayer = p5.createGraphics(800, 800);
    lineLayer = p5.createGraphics(800, 800);
    prevMouseX = p5.mouseX;
    prevMouseY = p5.mouseY;
    picker = p5.createColorPicker("deeppink");
    picker.position(200, 100);
  };

  p5.draw = () => {
    shadowLayer.clear();
    lineLayer.clear();

        // 影を描画
        shadowLayer.stroke(200); // 半透明の黒
        shadowLayer.strokeWeight(5);
        shadowLayer.line(prevMouseX + 14, prevMouseY + 14, p5.mouseX + 14, p5.mouseY + 14);
        shadowLayer.filter(p5.BLUR, 5);


    // 線を描画
    lineLayer.stroke(picker.color()); // 赤色
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

export default p5Canvas;
