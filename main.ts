let tmp_x = 0
let led_x = 0
let tmp_y = 0
let led_y = 0
let led_pos_list: number[][] = []
let led_pos: number[] = []
let remove_led: number[] = []
function validate () {
    if (tmp_x == led_x + 1 || tmp_x == led_x - 1) {
        return false
    }
    if (tmp_y == led_y + 1 || tmp_y == led_y - 1) {
        return false
    }
    if (tmp_x == led_x && tmp_y == led_y) {
        return false
    }
    return true
}
basic.forever(function () {
    led_pos_list = []
    tmp_x = 0
    tmp_y = 0
    while (true) {
        led_x = randint(0, 4)
        led_y = randint(0, 4)
        while (validate()) {
            tmp_x = randint(0, 4)
            tmp_y = randint(0, 4)
        }
        led_x = tmp_x
        led_y = tmp_y
        led_pos = [led_x, led_y]
        led_pos_list.push(led_pos)
        for (let index = 0; index < 4; index++) {
            led.unplot(led_x, led_y)
            basic.pause(1)
            led.plot(led_x, led_y)
        }
        led.plot(led_x, led_y)
        basic.pause(30)
        if (led_pos_list.length > 4) {
            remove_led = led_pos_list.shift()
            led.unplot(remove_led[0], remove_led[1])
        }
    }
})
