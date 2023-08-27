#include <U8g2lib.h>

U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE, 21, 18);

// Arrow bitmap (replace with your arrow design)
static const unsigned char PROGMEM arrow_bits[] = {
  0b00000100,
  0b00001100,
  0b00011100,
  0b00111100,
  0b01111111,
  0b00111100,
  0b00011100,
  0b00001100,
  0b00000100
};

#define BUTTON_PIN 35

// Variables will change:
int lastState = HIGH; // the previous state from the input pin
int currentState;     // the current reading from the input pin

void setup() {
  u8g2.begin();

  Serial.begin(9600);
  pinMode(BUTTON_PIN, INPUT_PULLDOWN);
}

int counter = 0;
char * note = "start";

void loop() {
  currentState = digitalRead(BUTTON_PIN);
  Serial.println(currentState);

  u8g2.setFont(u8g2_font_ncenB14_tr);
  u8g2.firstPage();
  if(currentState == HIGH){
    counter++;

    do {
      if (counter == 1){
        note = "forward, 3";
      }else if (counter == 2){
        note = "left, 5";
      }else if (counter == 3){
        note = "right, 2";
      }else{
        note = "end";
      }
    } while ( u8g2.nextPage() );

    
  } else {
    do {
      u8g2.drawStr(0,15,note);
    } while ( u8g2.nextPage() );
  }
  
  delay(1000);
}