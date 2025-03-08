let quitId = sessionStorage.getItem("QUIZID");
let waifusQuiz = [
    { name: "Asuna Yuuki", image: "AsunaYuuki.jpg", anime: "Sword Art Online" },
    { name: "Darkness", image: "darkness.png", anime: "KonoSuba" },
    { name: "Rem", image: "Rem.jpg", anime: "Re:ZERO" },
    { name: "Emilia", image: "Emilia.jpg", anime: "Re:ZERO" },
    { name: "ZeroTwo", image: "ZeroTwo.jpg", anime: "DARLING in the FRANXX" },
    { name: "Saber", image: "Saber.jpg", anime: "Fate/stay night" },
    { name: "Tsuyu Asui", image: "TsuyuAsui.jpg", anime: "anime" },
    { name: "Shinobu Oshino", image: "ShinobuOshino.jpg", anime: "Monogatari" },
    { name: "Holo", image: "Holo.jpg", anime: "Spice & Wolf" },
    { name: "Yor Forger", image: "YorForger.jpg", anime: "Spy x Family" },
    { name: "Rae Taylor", image: "RaeTaylor.jpg", anime: "I’m in Love with the Villainess" },
    { name: "Karane Inda", image: "KaraneInda.jpg", anime: "The 100 Girlfriends Who Really, Really, Really, Really, REALLY Love You" },
    { name: "Mahiru Shiina", image: "MahiruShiina.jpg", anime: "The Angel Next Door Spoils Me Rotten" },
    { name: "Raeliana McMillan", image: "RaelianaMcMillan.jpg", anime: "Why Raeliana Ended Up at the Duke’s Mansion" },
    { name: "Sagiri ", image: "Sagiri.jpg", anime: "Hell’s Paradise" },
    { name: "Kana Arima", image: "KanaArima.jpg", anime: "Oshi no Ko" },
    { name: "Shizuka Mikazuki", image: "ShizukaMikazuki.jpg", anime: "Zom 100: Bucket List of the Dead" },
    { name: "Mitsuri Kanroji", image: "MitsuriKanroji.jpg", anime: "Demon Slayer" },
    { name: "Frieren", image: "Frieren.jpg", anime: "Frieren: Beyond Journey’s End" }
];
let husbandosQuiz = [
    { name: "Satoru Gojou", image: "SatoruGojou.jpg", anime: "Jujutsu Kaisen" },
    { name: "Levi Ackerman", image: "LeviAckerman.jpg", anime: "Attack on Titan" },
    { name: "Megumi Fushiguro", image: "MegumiFushiguro.jpg", anime: "Jujutsu Kaisen" },
    { name: "Loid Forger", image: "LoidForger.jpg", anime: "Spy x Family" },
    { name: "Sukuna", image: "Sukuna.jpg", anime: "Jujutsu Kaisen" },
    { name: "Osamu Dazai", image: "OsamuDazai.jpg", anime: "Bungo Stray Dogs" },
    { name: "Suguru Getou", image: "SuguruGetou.jpg", anime: "Jujutsu Kaisen" },
    { name: "Kakashi Hatake", image: "KakashiHatake.jpg", anime: "Naruto" },
    { name: "Touji Fushiguro", image: "ToujiFushiguro.jpg", anime: "Jujutsun Kaisen" },
    { name: "Giyu Tomioka", image: "GiyuTomioka.jpg", anime: "Demon Slayer" },
    { name: "Ken Kaneki", image: "KenKaneki.jpg", anime: "Tokyo Ghoul" },
    { name: "Yuuji Itadori", image: "YuujiItadori.jpg", anime: "Jujutsu Kaisen" },
    { name: "Karma Akabane", image: "KarmaAkabane.jpg", anime: "Assassination Classroom" },
    { name: "Nanami Kento", image: "NanamiKento.jpg", anime: "Jujutsu Kaisen" },
    { name: "Toge Inumaki", image: "TogeInumaki.jpg", anime: "Jujutsu Kaisen" },
    { name: "Itachi Uchiha", image: "ItachiUchiha.jpg", anime: "Naruto" },
    { name: "Sung Jin-Woo", image: "SungJin-Woo.jpg", anime: "Solo Leveling" },
    { name: "Zack Foster", image: "ZackFoster.jpg", anime: "Angels of Death" },
    { name: "Shoto Todoroki", image: "ShotoTodoroki.jpg", anime: "My Hero Academia" }
];
let weirdQuiz = [
    { name: "Sakura Haruno", image: "SakuraHaruno.webp", anime: "Naruto" },
    { name: "Nami", image: "Nami.jpg", anime: "One Piece" },
    { name: "Tsunade", image: "Tsunade.webp", anime: "Naruto" },
    { name: "Katara", image: "Katara.webp", anime: "The Last Airbender" },
    { name: "Mitsuri Kanroji", image: "MitsuriKanroji.jpg", anime: "Demon Slayer" },
    { name: "Nico Robin", image: "NicoRobin.webp", anime: "One Piece" },
    { name: "Hisoka", image: "Hisoka.webp", anime: "Hunter x Hunter" },
    { name: "Nezuko Kamado", image: "NezukoKamado.jpg", anime: "Demon Slayer" },
    { name: "Brook", image: "Brook.jpg", anime: "One Piece" },
    { name: "Reiji Andou", image: "ReijiAndou.jpg", anime: "Prison School" },
    { name: "Harou", image: "Harou.webp", anime: "" },
    { name: "Katsuyu", image: "Katsuyu.webp", anime: "Naruto" },
    { name: "Schlurp", image: "Schlurp.png", anime: "Pokemon" },
    { name: "Rosa", image: "schnecke.png", anime: "Monster AG" },
    { name: ".", image: "tp.webp", anime: "." }

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





