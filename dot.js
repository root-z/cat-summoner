
function play(color = '#00ff00', speed = 1) {

    pos = {
        x: 50,
        y: 50
    }

    direction = {
        x: speed,
        y: 0
    };
    
    function draw() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = color;
        pos.x += direction.x;
        pos.y += direction.y;

        pos.x = Math.max(0, pos.x);
        pos.x = Math.min(pos.x, canvas.width);
        pos.y = Math.max(0, pos.y);
        pos.y = Math.min(pos.y, canvas.height);

        ctx.fillRect(pos.x, pos.y, 5, 5);
        
        if (pos.x <= 0) {
            min = - Math.PI / 2;
            max = Math.PI / 2;

            if (pos.y <= 0) {
                min = 0;
            } else if (pos.y >= canvas.height) {
                max = 0;
            }
            radian = rand(min, max);
            updateDirection(radian);
        } else if (pos.x >= canvas.width) {
            min = Math.PI / 2;
            max = Math.PI * 3 / 2;

            if (pos.y <= 0) {
                max = Math.PI;
            } else if (pos.y >= canvas.height) {
                min = Math.PI;
            }
            radian = rand(min, max);
            updateDirection(radian);
        } else if (pos.y <= 0) {
            updateDirection(rand(0, Math.PI));
        } else if (pos.y >= canvas.height) {
            updateDirection(rand(Math.PI, Math.PI * 2));
        }
        window.requestAnimationFrame(draw);
    }

    function updateDirection(radian) {
        direction.x = speed * Math.cos(radian);
        direction.y = speed * Math.sin(radian);

    }

    draw();
}

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

