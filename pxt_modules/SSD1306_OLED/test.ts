
OLED.init(128, 64)
OLED.writeStringNewLine("the quick brown fox jumped over the lazy dog?")
OLED.writeStringNewLine("THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG!")
basic.pause(1000)
OLED.clear()
OLED.writeString("Your magic number is ")
OLED.writeNum(23 * 3)
OLED.writeStringNewLine("!")
OLED.writeNumNewLine(1)
basic.pause(100)
OLED.writeNumNewLine(2)
basic.pause(100)
OLED.writeNumNewLine(3)
basic.pause(1000)
for (let i = 0; i < 100; i++) {
    OLED.drawLoading(i)
}
basic.pause(1000)
OLED.clear()
OLED.drawRectangle(10, 10, 60, 60)
OLED.drawLine(0, 0, 128, 64)
OLED.drawLine(0, 64, 128, 0)