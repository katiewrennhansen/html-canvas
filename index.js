    //variables
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    const color = document.getElementById('colorPicker');
    const width = document.getElementById('lineWidth');
    const clearButton = document.getElementById('clear');
    // const lineType = document.getElementById('lineType');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = width.value;
    ctx.strokeStyle = color.value;
    let drawX = 0;
    let drawY = 0;
    let drawing = false;

    //functions
    function draw(e){
        if (!drawing) {
            return
        }
        ctx.beginPath();
        ctx.moveTo(drawX, drawY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        drawX = e.offsetX;
        drawY = e.offsetY;
    }

    function colorChange(e){
        ctx.strokeStyle = e.target.value;
    }

    function lineChange(e){
        ctx.lineWidth = e.target.value;
    }

    // function lineTypeChange(e){
    //     console.log(e.target.value);
    //     if (e.target.value === 1 || e.target.value === '1'){
    //         ctx.lineCap = 'round';
    //     } else {
    //         ctx.lineCap = 'bevel';
    //     }  
    // }

    function clearCanvas(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


    //event listeners
    canvas.addEventListener('mousedown', function(e){
        drawing = true;
        drawX = e.offsetX;
        drawY = e.offsetY;
    });
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', function(){
        drawing = false;
    });
    canvas.addEventListener('mouseleave', function(){
        drawing = false;
    });
    color.addEventListener('input', colorChange);
    width.addEventListener('input', lineChange);
    // lineType.addEventListener('input', lineTypeChange);
    clearButton.addEventListener('click', clearCanvas);

