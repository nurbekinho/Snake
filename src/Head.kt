import org.w3c.dom.CanvasDirection
import org.w3c.dom.CanvasRenderingContext2D


class Head(private val context: CanvasRenderingContext2D) {
    companion object {
        const val UP = "up"
        const val DOWN = "down"
        const val RIGHT = "right"
        const val LEFT = "left"
    }

    private val width = 10.0
    private val height = 10.0
    private val speed = 10
    private var x = 0.0
    private var y = 0.0
    private var direction = RIGHT

    fun changeDirection(keyCode: Int) {
        when (keyCode) {
            37 -> if (direction != RIGHT) direction = LEFT
            38 -> if (direction != DOWN) direction = UP
            39 -> if (direction != LEFT) direction = RIGHT
            40 -> if (direction != UP) direction = DOWN
        }
    }

    fun update() {
        when (direction) {
            LEFT -> x -= speed
            UP -> y -= speed
            RIGHT -> x += speed
            DOWN -> y += speed
        }

        if (x < 0) x = GAME_WIDTH - width
        else if (x > GAME_WIDTH) x = 0.0

        if (y < 0) y = GAME_HEIGHT - height
        else if (y > GAME_HEIGHT) y = 0.0
    }

    fun draw() {
        context.fillRect(x, y, width, height)
    }
}
