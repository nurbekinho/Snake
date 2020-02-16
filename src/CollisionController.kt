class CollisionController (private val head: Head, private val food: Food) {
    var isFoodEaten = false

    fun update() {
        isFoodEaten = (head.x == food.x && head.y == food.y)
    }
}
