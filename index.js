document.addEventListener('DOMContentLoaded', () => {
    const recommendedVideos = [
        {title: "Video 1", url: "video1.mp4"},
        {title: "Video 2", url: "video2.mp4"},
        {title: "Video 3", url: "video3.mp4"},
    ];

    const videoGrid = document.querySelector('.video-grid');
    recommendedVideos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.innerHTML = `<h3>${video.title}</h3><button onclick="playVideo('${video.url}')">Watch</button>`;
        videoGrid.appendChild(videoDiv);
    });

    document.getElementById('submitComment').addEventListener('click', () => {
        const commentInput = document.getElementById('commentInput');
        const commentText = commentInput.value;
        if (commentText) {
            const commentDiv = document.createElement('div');
            commentDiv.textContent = commentText;
            document.querySelector('.comments-list').appendChild(commentDiv);
            commentInput.value = '';
        }
    });

    window.playVideo = function(url) {
        document.getElementById('videoSource').src = url;
        document.getElementById('currentVideo').load();
        document.getElementById('homepage').classList.add('hidden');
        document.getElementById('videoPlayer').classList.remove('hidden');
    };
});
