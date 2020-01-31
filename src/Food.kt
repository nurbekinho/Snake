import org.w3c.dom.CanvasRenderingContext2D

class Food(private val context: CanvasRenderingContext2D) {
    var x = 0.0
    var y = 0.0

    fun getRandomPosition() {
        val randomX = (0..((GAME_WIDTH - Head.SIZE)/Head.SIZE).toInt()).shuffled().first() * Head.SIZE
        val randomY = (0..((GAME_HEIGHT - Head.SIZE)/Head.SIZE).toInt()).shuffled().first() * Head.SIZE

        x = randomX
        y = randomY
    }

    fun draw() {
        context.fillRect(x, y, Head.SIZE, Head.SIZE)
    }
}
