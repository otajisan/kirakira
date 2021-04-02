tmp_x = 0
led_x = 0
tmp_y = 0
led_y = 0
led_pos_list: List[List[number]] = []
led_pos: List[number] = []
remove_led: List[number] = []
def validate():
    if tmp_x == led_x + 1 or tmp_x == led_x - 1:
        return False
    if tmp_y == led_y + 1 or tmp_y == led_y - 1:
        return False
    if tmp_x == led_x and tmp_y == led_y:
        return False            
    return True

def on_forever():
    global led_pos_list, tmp_x, tmp_y, led_x, led_y, led_pos, remove_led
    led_pos_list = []
    tmp_x = 0
    tmp_y = 0
    while True:
        led_x = randint(0, 4)
        led_y = randint(0, 4)
        while validate():
            tmp_x = randint(0, 4)
            tmp_y = randint(0, 4)
        led_x = tmp_x
        led_y = tmp_y
        led_pos = [led_x, led_y]
        led_pos_list.append(led_pos)
        led.plot(led_x, led_y)
        basic.pause(100)
        if len(led_pos_list) > 3:
            remove_led = led_pos_list.shift()
            led.unplot(remove_led[0], remove_led[1])
basic.forever(on_forever)
