import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay();

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSprite("bean", "sprites/golf2.webp", {
  sliceX: 12,
  sliceY: 12,
  anims: {
    idle: {from: 6, to: 7}
  }
});

const player = k.add([k.pos(0,0), k.sprite("bean")]);
player.play("idle");

k.onClick(() => k.addKaboom(k.mousePos()));
