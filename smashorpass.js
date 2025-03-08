let quitId = sessionStorage.getItem("QUIZID");
let waifusQuiz = [
    { name: "Asuna Yuuki", image: "images/AsunaYuuki.jpg", anime: "Sword Art Online" },
    { name: "Darkness", image: "images/darkness.png", anime: "KonoSuba" },
    { name: "Rem", image: "images/Rem.jpg", anime: "Re:ZERO" },
    { name: "Emilia", image: "images/Emilia.jpg", anime: "Re:ZERO" },
    { name: "ZeroTwo", image: "images/ZeroTwo.jpg", anime: "DARLING in the FRANXX" },
    { name: "Saber", image: "images/Saber.jpg", anime: "Fate/stay night" },
    { name: "Tsuyu Asui", image: "images/TsuyuAsui.jpg", anime: "anime" },
    { name: "Shinobu Oshino", image: "images/ShinobuOshino.jpg", anime: "Monogatari" },
    { name: "Holo", image: "images/Holo.jpg", anime: "Spice & Wolf" },
    { name: "Yor Forger", image: "images/YorForger.jpg", anime: "Spy x Family" },
    { name: "Rae Taylor", image: "images/RaeTaylor.jpg", anime: "I’m in Love with the Villainess" },
    { name: "Karane Inda", image: "images/KaraneInda.jpg", anime: "The 100 Girlfriends Who Really, Really, Really, Really, REALLY Love You" },
    { name: "Mahiru Shiina", image: "images/MahiruShiina.jpg", anime: "The Angel Next Door Spoils Me Rotten" },
    { name: "Raeliana McMillan", image: "images/RaelianaMcMillan.jpg", anime: "Why Raeliana Ended Up at the Duke’s Mansion" },
    { name: "Sagiri ", image: "images/Sagiri.jpg", anime: "Hell’s Paradise" },
    { name: "Kana Arima", image: "images/KanaArima.jpg", anime: "Oshi no Ko" },
    { name: "Shizuka Mikazuki", image: "images/ShizukaMikazuki.jpg", anime: "Zom 100: Bucket List of the Dead" },
    { name: "Mitsuri Kanroji", image: "images/MitsuriKanroji.jpg", anime: "Demon Slayer" },
    { name: "Frieren", image: "images/Frieren.jpg", anime: "Frieren: Beyond Journey’s End" }
];
let husbandosQuiz = [
    { name: "Satoru Gojou", image: "images/SatoruGojou.jpg", anime: "Jujutsu Kaisen" },
    { name: "Levi Ackerman", image: "images/LeviAckerman.jpg", anime: "Attack on Titan" },
    { name: "Megumi Fushiguro", image: "images/MegumiFushiguro.jpg", anime: "Jujutsu Kaisen" },
    { name: "Loid Forger", image: "images/LoidForger.jpg", anime: "Spy x Family" },
    { name: "Sukuna", image: "images/Sukuna.jpg", anime: "Jujutsu Kaisen" },
    { name: "Osamu Dazai", image: "images/OsamuDazai.jpg", anime: "Bungo Stray Dogs" },
    { name: "Suguru Getou", image: "images/SuguruGetou.jpg", anime: "Jujutsu Kaisen" },
    { name: "Kakashi Hatake", image: "images/KakashiHatake.jpg", anime: "Naruto" },
    { name: "Touji Fushiguro", image: "images/ToujiFushiguro.jpg", anime: "Jujutsun Kaisen" },
    { name: "Giyu Tomioka", image: "images/GiyuTomioka.jpg", anime: "Demon Slayer" },
    { name: "Ken Kaneki", image: "images/KenKaneki.jpg", anime: "Tokyo Ghoul" },
    { name: "Yuuji Itadori", image: "images/YuujiItadori.jpg", anime: "Jujutsu Kaisen" },
    { name: "Karma Akabane", image: "images/KarmaAkabane.jpg", anime: "Assassination Classroom" },
    { name: "Nanami Kento", image: "images/NanamiKento.jpg", anime: "Jujutsu Kaisen" },
    { name: "Toge Inumaki", image: "images/TogeInumaki.jpg", anime: "Jujutsu Kaisen" },
    { name: "Itachi Uchiha", image: "images/ItachiUchiha.jpg", anime: "Naruto" },
    { name: "Sung Jin-Woo", image: "images/SungJin-Woo.jpg", anime: "Solo Leveling" },
    { name: "Zack Foster", image: "images/ZackFoster.jpg", anime: "Angels of Death" },
    { name: "Shoto Todoroki", image: "images/ShotoTodoroki.jpg", anime: "My Hero Academia" }
];
let weirdQuiz = [
    { name: "Sakura Haruno", image: "images/SakuraHaruno.webp", anime: "Naruto" },
    { name: "Nami", image: "images/Nami.jpg", anime: "One Piece" },
    { name: "Tsunade", image: "images/Tsunade.webp", anime: "Naruto" },
    { name: "Katara", image: "images/Katara.webp", anime: "The Last Airbender" },
    { name: "Mitsuri Kanroji", image: "images/MitsuriKanroji.jpg", anime: "Demon Slayer" },
    { name: "Nico Robin", image: "images/NicoRobin.webp", anime: "One Piece" },
    { name: "Hisoka", image: "images/Hisoka.webp", anime: "Hunter x Hunter" },
    { name: "Nezuko Kamado", image: "images/NezukoKamado.jpg", anime: "Demon Slayer" },
    { name: "Brook", image: "images/Brook.jpg", anime: "One Piece" },
    { name: "Reiji Andou", image: "images/ReijiAndou.jpg", anime: "Prison School" },
    { name: "Harou", image: "images/Harou.webp", anime: "" },
    { name: "Katsuyu", image: "images/Katsuyu.webp", anime: "Naruto" },
    { name: "Schlurp", image: "images/Schlurp.png", anime: "Pokemon" },
    { name: "Rosa", image: "images/schnecke.png", anime: "Monster AG" },
    { name: ".", image: "images/tp.webp", anime: "." }

];


function getQuizList(quizId) {
    switch (quizId) {
        case "waifus":
            return waifusQuiz;
        case "husbandos":
            return husbandosQuiz;
        case "weird":
            return weirdQuiz;
        default:
            return [];
    }
}

let endOfQuiz = false; 

let quizList = getQuizList(quitId);
let smashed = 0;
let passed = 0;

let buttons = document.querySelectorAll(".button")
let personNumber = 0;
let picture = document.getElementById("picture");
let name = document.getElementById("name");
let anime = document.getElementById("anime");

picture.src = quizList[0].image; 
name.textContent = quizList[0].name; 
anime.textContent = quizList[0].anime;


function next(smashOrPass) {
    if ( personNumber < quizList.length - 1 ) {
        if ( smashOrPass == "smash" ) {
            smashed++;
        } else {
            passed++;
        }
        personNumber++;
        picture.src = quizList[personNumber].image;
        name.textContent = quizList[personNumber].name;
        anime.textContent = quizList[personNumber].anime; 

    } else {
        endOfQuiz = true;
        picture.style.opacity = "0";
        buttons.forEach(button => {
            button.style.display = "none";
        });
        name.textContent = "Complete!";
        anime.innerHTML = `You hugged ${smashed} people, and passed ${passed} people!<br>(${smashed} out of ${quizList.length - 1})`;
        button
    }


};





