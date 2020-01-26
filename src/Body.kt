import org.w3c.dom.CanvasRenderingContext2D

class Body(private val context: CanvasRenderingContext2D) {
    private val width = 10.0
    private val height = 10.0
    var x = 0.0
    var y = 0.0

    fun draw() {
        context.fillRect(x, y, width, height)
    }
}
