import org.w3c.dom.CENTER
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.CanvasTextAlign
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.window

class Game(private val context: CanvasRenderingContext2D) {
    companion object {
        const val INTRO = "intro"
        const val PLAYING = "playing"
        const val PAUSED = "paused"
        const val FINISHED = "finished"
    }

    var state = ""
    private var isLooped = false
    private val head = Head(context)
    private var food = Food(context)
    private val collisionController = CollisionController(head, food)
    private var timer: Int = 0

    init {
        window.addEventListener("keydown", {onKeyDown(it)})
        window.addEventListener("keyup", {onKeyUp(it)})

        intro()
    }

    private fun intro() {
        state = INTRO

        context.font = "30px Arial"
        context.fillStyle = "black"
        context.textAlign = CanvasTextAlign.CENTER
        context.fillText(
                "Press [Space Bar] To Start The Game!",
                GAME_WIDTH / 2,
                GAME_HEIGHT / 2
        )
    }

    private fun start() {
        if (timer == 0) {
            stop()
            state = PLAYING
            timer = window.setInterval({ loop() }, 500)
            //loop()
        }
    }

    private fun stop() {
        if (timer > 0) {
            window.clearInterval(timer)
            timer = 0
        }
    }

    private fun loop() {
        context.clearRect(0.0, 0.0, GAME_WIDTH, GAME_HEIGHT)
        update()
        draw()

        // TODO()
        //food.getRandomPosition()
        food.draw()

        isLooped = true
        //window.requestAnimationFrame { run { loop() } }
    }

    private fun update() {
        head.update()
        collisionController.update()
    }

    private fun draw() {
        head.draw()
    }

    private fun onKeyDown(event: Event) {
        val keyboardEvent = event as KeyboardEvent
        if (isLooped) head.changeDirection(keyboardEvent.keyCode)
        isLooped = false
        /*println(keyboardEvent.keyCode)
        when (keyboardEvent.keyCode) {
            37 -> println("left")
            39 -> println("right")
        }*/
    }

    private fun onKeyUp(event: Event) {
        val keyboardEvent = event as KeyboardEvent
        when (keyboardEvent.keyCode) {
            //37 -> println("left up")
            //39 -> println("right up")
            32 -> if (state == INTRO) start()
        }
    }
}
