# "Beyond the Browser: PWAs & the future of web apps" - Codebar Feb Monthly

My slides for [Codebar Monthly, Feb 2017](https://codebar.io/meetings/monthly-feb-2017). 

## To view the slides

Check them out at: [poshaughnessy.github.io/codebar-beyond-browser-2017/](https://poshaughnessy.github.io/codebar-beyond-browser-2017/)

Use arrow keys or the arrow buttons to move left/right.


## To run locally

```
npm install
npm start
```


## To use the Bluetooth remote control

Load up the Remote page on a Web Bluetooth supporting browser, e.g. Chrome for Android, on the device you want to use 
as a presentation remote: http://localhost:9000/remote.html

Press Connect and (as long as you have the Node server running and Bluetooth enabled on both devices) you should see
a device option called 'Remote Receiver'. Select that, wait til it says Connected, then you can use the buttons to send 
commands!


## To deploy (for Peter's reference)

```
./deploy.sh
```
