package main

import (
	"github.com/andlabs/ui"
	"time"
)

func main() {
	err := ui.Main(func() {
		input := ui.NewEntry()
		button := ui.NewButton("Greet")
		nwin:=ui.NewWindow("fuck",300,400,false)
		greeting := ui.NewLabel("")
		box := ui.NewVerticalBox()
		box.Append(ui.NewLabel("Enter your name:"), false)
		box.Append(input, false)
		box.Append(button, false)
		box.Append(greeting, false)
		window := ui.NewWindow("Hello", 200, 100, false)
		window.SetMargined(true)
		window.SetChild(box)
		
		button.OnClicked(func(*ui.Button) {
			greeting.SetText("Hello, " + input.Text() + "!")
			nwin.Show()
		})
		window.OnClosing(func(*ui.Window) bool {
			ui.Quit()
			return true
		})
		go func(){
			time.Sleep(5e9)
			greeting.SetText("goroutine")
		}()
		window.Show()
	})
	if err != nil {
		panic(err)
	}
}
