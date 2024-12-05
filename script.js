$(document).ready(function () {
    const canvas = $('#drawingCanvas')[0];
    const ctx = canvas.getContext('2d');
  
    let brushSize = $('#brushSize').val();
    let brushColor = $('#brushColor').val();
  
    canvas.width = window.innerWidth * 0.8;
    canvas.height = 400;
  
    let isDrawing = false;
  
    $(canvas).on('mousedown', function (e) {
      isDrawing = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    });
  
    $(canvas).on('mousemove', function (e) {
      if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.lineWidth = brushSize;
        ctx.strokeStyle = brushColor;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    });
  
    $(canvas).on('mouseup', function () {
      isDrawing = false;
      ctx.closePath();
    });
  
    $(canvas).on('mouseout', function () {
      isDrawing = false;
      ctx.closePath();
    });
  
    $('#brushSize').on('input', function () {
      brushSize = $(this).val();
      $('#brushSizeValue').text(brushSize); 
    });
  
    $('#brushColor').on('input', function () {
      brushColor = $(this).val();
    });
  
    $('#clearCanvas').click(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  });
  