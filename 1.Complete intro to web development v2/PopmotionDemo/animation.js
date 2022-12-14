import popmotion, { styler as _styler, value as _value, listen as _listen, pointer as _pointer, spring } from "popmotion";

const { styler, sprin, listen, pointer, value } = popmotion;

const ball = document.querySelector(".box");
const divStyler = _styler(ball);
const ballXY = _value({ x: 0, y: 0 }, divStyler.set);

_listen(ball, "mousedown touchstart").start(e => {
  e.preventDefault();
  _pointer(ballXY.get()).start(ballXY);
});

_listen(document, "mouseup").start(() => {
  spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200
    })
    .start(ballXY);
});
