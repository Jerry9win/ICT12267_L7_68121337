window.onload = function() {
    
    const video = document.getElementById("myVideo");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");

    if (video && playBtn && pauseBtn) {
        
        playBtn.addEventListener("click", function() {
            video.play();
            console.log("Video is playing");
        });

        pauseBtn.addEventListener("click", function() {
            video.pause();
            console.log("Video is paused");
        });
    }

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.innerText;
            const value = this.getAttribute('data-value');
            document.getElementById('posButton').innerText = text;
            document.getElementById('posInput').value = value;
        });
    });
};