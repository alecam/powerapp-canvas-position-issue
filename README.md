# Steps to reproduce:

1. Create a new Canvas App (Phone format)
1. In Settings, Display, disable "Scale to Fit" and "Lock aspect ratio"
1. Import the MapComponent code component
1. Set the MapComponent properties as follow:
   * ScreenOrientation: App.ActiveScreen.Orientation
	* ScreenWidth: App.ActiveScreen.Width
	* ScreenHeight: App.ActiveScreen.Height
	* Width: App.ActiveScreen.Width
	* Height: App.ActiveScreen.Height
1. Publish the PowerApp and test it on a Smartphone
1. Rotate the device in landscape mode you will an image. Clicking on the image (eg. on the right side of it), you will see that the property "clientX" of the html click event shown in the alert, is not compliant to where you really clicked on the screen (it appears to be half of the pixels)
