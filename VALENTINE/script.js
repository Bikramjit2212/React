
prompt("YOU NEED TAP ON THE COUPLE REPEATEDLY FOR THE MESSEAGE TO POPUP 'ARE YOU READY THEN WRITE OK' ")



function changeImage() {
    var imageElement = document.getElementById('myImage');
    var currentImage = imageElement.src;
    alert("I LOVEEEEEEEEEEEEEEEEEE YOU & HAPPY ROSE DAY")
    // Example: If the current image is image1.jpg, change it to image2.jpg
    if (currentImage.endsWith('https://i.pinimg.com/originals/5c/95/8c/5c958c1aa1c3d439a2b593b4e770707b.gif')) {
        imageElement.src = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXM2cXgzdzUza29keHVmbHZ6eTQzbTJjbTRlZHlrMW8zdGowMXJnbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Y4Oq5EuIeodNlzzI4q/giphy.gif';
    } else {
        imageElement.src = 'https://i.pinimg.com/originals/5c/95/8c/5c958c1aa1c3d439a2b593b4e770707b.gif';
    }
    
}