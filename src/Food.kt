import org.w3c.dom.CanvasRenderingContext2D

class Food(private val context: CanvasRenderingContext2D) {
    var x = 0.0
    var y = 0.0

    fun draw() {
        context.fillRect(x, y, Head.SIZE, Head.SIZE)
    }
}
