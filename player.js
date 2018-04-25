var songs = ["Ben Howard - In Dreams.mp3",
            "Ben Howard - Diamonds.mp3",
            "Ben Howard - Keep Your Head Up.mp3",
        ];
        var song = document.createElement('audio');
        var currentSong = 0;
        var songTitle = document.getElementById('songTitle');

        function loadSong() {
            song.src = 'songs/' + songs[currentSong];
            songTitle.textContent = (currentSong + 1) + ". " + songs[currentSong];
            song.play();
        };

        function nextSong() {
            currentSong = (currentSong + 1 <= songs.length - 1) ? currentSong + 1 : 0;
        	loadSong();
        };

    	function previousSong() {
	        currentSong-=1;
	        currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
	        loadSong();
    	};

		(function () {
		    let playlist = document.getElementById('playlist');
		    for (let i = 0, max = songs.length - 1; i <= max; i++) {
		        let node = document.createElement('p');
		        let title = document.createTextNode(songs[i]);
		        node.appendChild(title);
		        playlist.appendChild(node);

		    }

})();

    window.onload = loadSong;
