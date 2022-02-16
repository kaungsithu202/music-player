const songs = [
	"bensound-ukulele",
	"lightswitch",
	"rumbling",
	"some",
	"watercoloreyes",
	"youngAndBeautiful",
	"Olivia Rodrigo - drivers license",
	"Adele - Easy On Me",
	"Chopper_Luffy - Dr. Tony Tony Chopper",
	"Imagine Dragons x J.I.D - Enemy",
	"PUBLIC - Make You Mine",
	"The Vamps - Somebody To You",
];
const player = document.getElementById("player");

function createSongList() {
	const list = document.createElement("ol");
	for (let i = 0; i < songs.length; i++) {
		const item = document.createElement("li");
		item.appendChild(document.createTextNode(songs[i]));
		list.appendChild(item);
	}
	return list;
}

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

songList.onclick = function (e) {
	document.getElementById("headphones").classList.remove("pulse");
	const source = document.getElementById("source");
	let currentSong = e.target.innerText;
	source.src = "songs/" + currentSong + ".mp3";
	document.querySelector(
		"#currentSong",
	).innerText = `Now Playing 🎶 ${currentSong}`;

	player.load();
	player.play();
	document.getElementById("headphones").classList.add("pulse");
};

function playAudio() {
	if (player.readyState) {
		player.play();
	}
}

function pauseAudio() {
	player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
	const volume = e.target.value;
	player.volume = volume;
};

function updateProgress() {
	if (player.currentTime > 0) {
		const progressBar = document.getElementById("progress");
		progressBar.value = (player.currentTime / player.duration) * 100;
	}
}
