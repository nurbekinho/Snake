class CollisionController (private val head: Head, private val food: Food) {
    fun update() {
        if (head.x == food.x && head.y == food.y) {
            println("food has been eaten")
        }
    }
}
