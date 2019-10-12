input.onButtonPressed(Button.A, function () {
    Base.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Base.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.AB, function () {
    Missile = game.createSprite(Base.get(LedSpriteProperty.X), Base.get(LedSpriteProperty.Y))
    Missile.change(LedSpriteProperty.Brightness, 86)
    for (let index = 0; index < 4; index++) {
        Missile.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (Missile.isTouching(INVADERS)) {
            game.addScore(1)
            Missile.delete()
            INVADERS.delete()
        }
    }
    if (Missile.get(LedSpriteProperty.Y) <= 0) {
        Missile.delete()
    }
})
let INVADERS: game.LedSprite = null
let Missile: game.LedSprite = null
let Base: game.LedSprite = null
Base = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    INVADERS = game.createSprite(Math.randomRange(0, 4), 0)
    INVADERS.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    INVADERS.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        INVADERS.move(1)
        basic.pause(500)
        if (INVADERS.isTouching(Base)) {
            game.gameOver()
        }
    }
    if (INVADERS.isTouchingEdge()) {
        INVADERS.delete()
    }
})


// for my assignment 2 makeup i made a primitve version of the classic arcade game space invaders 
// on button a pushed will move the "base" your ship to the left 
// on button b pushed will move the "base" your ship to the right 
// on buttons a and b pushed will fire missiles 
// INVADERS spawn at random using rng from the top of the lcd grid 
// contact between your ship and an INVADER will cause game over 
// on start the score is set to 0 
