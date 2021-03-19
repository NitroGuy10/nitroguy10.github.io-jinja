const collectionNames = ["Older Tracks", "Candy Fractals EP", "Jump", "Neddie - Figment (The Sass Remix)"]

const isSingle = [false, false, true, true]

const fieldNames = {
    name: "Name",
    description: "Description",
    releaseDate: "Release Date",
    genre: "Genre",
    coverLink: "Artwork",
    mp3Link: "MP3 Link",
    wavLink: "WAV Link",
    itLink: "IT Link",
    midiLink: "MIDI Link",
    youtubeLink: "YouTube Link",
    soundcloudLink: "SoundCloud Link"
}

const songData = [[]]

// Older Tracks

songData[0][0] = {
    name: "Freedom",
    description: "A happy little progressive house song! This song represents the last one of mine from my \"NCS-style\" progressive house phase. This song had been in the workings for a LONG time. I had started it back in October of 2018 but kept having instances of writer's block. I kept trying out different melody ideas and new directions to take the song in, but nothing seemed to fit. About six months went by and I finally decided to wrap it up and only ended up having to work on it for a day before it was done!",
    releaseDate: "25 May 2019",
    genre: "Progressive House",
    coverLink: "Freedom.png",
    mp3Link: "https://drive.google.com/open?id=1O8QOwco8Hi4lQbz1rSuKM8OG-tBsVMWy",
    wavLink: "https://drive.google.com/open?id=10-srH1l_Zy-5PD8dphE51UlmuqnfKXP4",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/uqHb9nARYSI",
    soundcloudLink: "https://soundcloud.com/the-sass-music/freedom"
}

songData[0][1] = {
    name: "Party on the Gangplank",
    description: "Just a silly cover of Gangplank Galleon from Donkey Kong Country. The soundtrack of the Donkey Kong Country trilogy is simply immaculate. I have tons of respect for David Wise for his amazing work on the soundtrack of those games. This cover, however, is short, uninspired, and rather simplistic but hey, it was still a blast to make and even more of a blast to sample the timeless DK Rap from Donkey Kong 64. I dedicate this song to Noah and Izzy.",
    releaseDate: "21 December 2018",
    genre: "Progressive House",
    coverLink: "Gangplank.png",
    mp3Link: "https://drive.google.com/open?id=1RKNGqcZwn_rOk06phrx4ooa7lA2rd2yy",
    wavLink: "https://drive.google.com/open?id=1mdJDwDdK5rjlYU2cKqDu9tjeiLUevv2X",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/wO0uL6QBKt4",
    soundcloudLink: "https://soundcloud.com/the-sass-music/party-on-the-gangplank"
}

songData[0][2] = {
    name: "Ultimate",
    description: "I'm not really that into hardstyle but I got my hands on a hardstyle kick sample and decided to try it out. I didn't try very hard to adhere to the typical characteristics hardstyle (nor do I really know what they are lol) but I think the final product ended up sounding pretty fun.",
    releaseDate: "7 October 2018",
    genre: "Hardstyle",
    coverLink: "Ultimate.png",
    mp3Link: "https://drive.google.com/open?id=1RtQKFjcSEQFYf1CHeEVC2IxN_8igvJZA",
    wavLink: "https://drive.google.com/open?id=11jjakxKEZifKs7QB0CGLjz97R2J9omRe",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/Lozz1q2zquA",
    soundcloudLink: "https://soundcloud.com/the-sass-music/ultimate"
}

songData[0][3] = {
    name: "Sunshine",
    description: "A wonderfully happy future bass tune with a name that I literally came up with the day I released it because I needed a better title than \"Silly Koala\", which was what a random name generator thought would be a suitable title. As always, a juicy saxophone solo is all one needs to round out a piece and the wonderful alto saxophone patch from SGM-V2.01 did the trick. Dang, I really am obsessed with putting sax solos in my music. I can't play saxophone myself but maybe I should consider learning how to...",
    releaseDate: "25 August 2018",
    genre: "Future Bass",
    coverLink: "Sunshine.png",
    mp3Link: "https://drive.google.com/open?id=1PmHHHaNo3OiQPXqwwdEdia1VTcU0SKFv",
    wavLink: "https://drive.google.com/open?id=1g_A4nZvgp9JbuucUEv-a7pXy00qLwfMj",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/bdsqBfUzd2g",
    soundcloudLink: "https://soundcloud.com/the-sass-music/sunshine"
}

songData[0][4] = {
    name: "Pursuit",
    description: "My attempt at drum and bass. I tried a lot of new things in this song that I had never done before. I also used a whole bunch of samples from Team Fortress 2, one of my favorite games. I actually remember cranking this one out quite fast as it was summer and I wasn't doing much else... or maybe I just had an abundance of creative energy, who knows? I'll take this time to point out that I made this and Friendship with FL Studio 20 whereas the rest of the FL songs in this list were made with FL 12. For some reason, EWQLSO, the plugin I use for orchestra sounds, had some beef with FL 20 and would never render properly. Because of that, as of the time of writing this, I still use FL 12. I don't know if the issue has been resolved but I'm too used to FL 12 at the moment to update lol.",
    releaseDate: "18 June 2018",
    genre: "Drum and Bass",
    coverLink: "Pursuit.png",
    mp3Link: "https://drive.google.com/open?id=1mnnEZS1iWls5GcY0CYZhCmCpST8lT0X5",
    wavLink: "https://drive.google.com/open?id=18Q5t-qi7Ax64ZbRVpptfyMB7XXQ2WZW3",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/sy4EhOiL68E",
    soundcloudLink: "https://soundcloud.com/the-sass-music/pursuit"
}

songData[0][5] = {
    name: "Friendship",
    description: "This is one of many of my songs where I take a small snippet of a melody from another song and make it the main hook of a separate song. The song from which I stole the melody hasn't and probably will never be released. Not really sure what else to talk about here. This is just yet another happy, Progressive House song. I guess I can talk about the album art. My early album art looks like a two-year-old's drawing in Microsoft Paint. I seriously don't know what I was thinking. For this wave of FL songs I switched to real photos I had taken on my travels. The pic for this song is pretty cool, huh?",
    releaseDate: "3 June 2018",
    genre: "Progressive House",
    coverLink: "Friendship.png",
    mp3Link: "https://drive.google.com/open?id=1Hm-Je-LyjiZYSK4BgXvVNUhxKPsw9mEQ",
    wavLink: "https://drive.google.com/open?id=1aAHNjd5oVG6g1HoKAVQoh8nwTiZRX4ZT",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/O0nDPindE00",
    soundcloudLink: "https://soundcloud.com/the-sass-music/friendship"
}

songData[0][6] = {
    name: "Dominate",
    description: "One of my first FL Songs that's not just a sawtooth-fest. I come up with most of my melodies purely on the pianoroll but I actually came up with this melody by doodling around on a piano (one of my favorite pastimes). I tried out a slightly less boring chord progression in this one but it's really not THAT out there. I also established my love for orchestral breakdowns in this one though I feel like this particular one drags on a bit too long.",
    releaseDate: "19 May 2018",
    genre: "Progressive House",
    coverLink: "Dominate.png",
    mp3Link: "https://drive.google.com/open?id=1qRqsHsKbp_R2q8HkeZUw_xSJvLji1OTc",
    wavLink: "https://drive.google.com/open?id=19RhDlvt-3W9p6QFh7olazo0MgRRoAGkK",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/SV-asdeXD5Y",
    soundcloudLink: "https://soundcloud.com/the-sass-music/dominate"
}

songData[0][7] = {
    name: "Awaken",
    description: "This one sure is wacky, huh? I wanted to do something a little more minimal and out of my comfort zone and I think I achieved that. Listening to this song again after all this time, I realize that I really like the melodic structure of this song but don't really like the instrumentation lol. I had been wanting to do a VIP of this song but ultimately decided against it. Maybe one day I'll decide against my decision against it. Who knows?",
    releaseDate: "24 December 2017",
    genre: "Electro House",
    coverLink: "Awaken900.png",
    mp3Link: "https://drive.google.com/open?id=1EUgTAvcCuiI0K5uaoLbj43hC5Qs3AnKe",
    wavLink: "https://drive.google.com/open?id=1eCum4S1pkXd1IMncAseAb-9R59WZyhBt",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/EWJSzLHwxCk",
    soundcloudLink: "https://soundcloud.com/the-sass-music/awaken"
}

songData[0][8] = {
    name: "NightSky v1",
    description: "The second of my only two complete chiptunes in OpenMPT. I have always had a love for chiptunes. Some of the most creative and funky melodies I've heard have been in chiptunes made in trackers. My personal favorites are the AMIGA MOD chiptunes (presumably made in ProTracker) from the early 2000s. My favorite chiptune artists are Tempest and Reed.",
    releaseDate: "12 May 2018",
    genre: "Chiptune",
    coverLink: "Nightsky.png",
    mp3Link: "https://drive.google.com/open?id=1nqCNpRuxcGTZHLsr03T_ycxXa3INGD5x",
    wavLink: "https://drive.google.com/open?id=1uGDLTDt8hpPxnW3mWXEGWiDqYq3eA7zo",
    itLink: "https://drive.google.com/open?id=1hsSkxegz-jOCOPPLLZNYcz49E8YbRFri",
    midiLink: null,
    youtubeLink: "https://youtu.be/TfN1lxy59Xo",
    soundcloudLink: "https://soundcloud.com/the-sass-music/nightsky-v1"
}

songData[0][9] = {
    name: "Nightlight",
    description: "Another *yawn* progressive house song with a good ol' key change at the end. WHAT? There's a sax solo in this one too? I'm not fully convinced my early songs were different at all from one another. Nah, this one was pretty fun to make. I think I started just after I finished Sawtooth",
    releaseDate: "11 October 2017",
    genre: "Progressive House",
    coverLink: "Nightlight.png",
    mp3Link: "https://drive.google.com/open?id=1W4fdGHAGfZkn0BFPMQyT0cpi6GHHTAM4",
    wavLink: "https://drive.google.com/open?id=1PGM1hX19Scl8AZ0-pb9zg_kHDJv1vXC1",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/V_Sk2__LbVg",
    soundcloudLink: "https://soundcloud.com/the-sass-music/nightlight"
}

songData[0][10] = {
    name: "Bon Voyage",
    description: "My last fully orchestral song. I had actually come up with this melody when I was still making songs with midi. The first phrase was played by a pan flute and the second by a brass section. Once I starting using FL, I decided to recreate it and finally finish it.",
    releaseDate: "6 August 2017",
    genre: "Orchestral",
    coverLink: "Bon Voyage.png",
    mp3Link: "https://drive.google.com/open?id=1iHKGdktCwaq5jJR3Nt8FODkIDDN5qajC",
    wavLink: "https://drive.google.com/open?id=11xEM5TamjxljRmt7zspzcxQLrYJuCWId",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/Zp5yFigGqZo",
    soundcloudLink: "https://soundcloud.com/the-sass-music/bon-voyage"
}

songData[0][11] = {
    name: "Celestial",
    description: "This melody has such a rich vivid history that you'll never get know the nitty gritty details of mwahahahaha! It started with a tiny snippet of Rough Waters, became a SHEET MUSIC composition for ACTUAL REAL INSTRUMENTS WOW, and was finally put to rest in an FL production. I'm not too thrilled about how this rendition turned out, though. Maybe I'll make a VIP some day.",
    releaseDate: "5 May 2018",
    genre: "Progressive House",
    coverLink: "Celestial.png",
    mp3Link: "https://drive.google.com/open?id=1E7CBHay91_U1s1mPIYOaSWtLuoc8WSpW",
    wavLink: "https://drive.google.com/open?id=1U9WlaHftVK7T6LRsjI7K1CGmb_lVewAm",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/EKku-2eJpsg",
    soundcloudLink: "https://soundcloud.com/the-sass-music/celestial"
}

songData[0][12] = {
    name: "Fury",
    description: "This ultra-repetitive techno thing was made in Auxy on my phone while I was out of town and away from any computers. The YouTube video for this song was the first time I used FL Studio's ZGameEditor Visualizer. It was also when I switched my alias to SassyMonkey.",
    releaseDate: "28 April 2018",
    genre: "Techno",
    coverLink: "Fury.png",
    mp3Link: "https://drive.google.com/open?id=1fIberjwTUi9vdKF6Ly1-QyA1bUUnVe1V",
    wavLink: "https://drive.google.com/open?id=1Ll5cVHrRqofoCfHnEimPxo37C-kdntvj",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/Ns8lGUKpv64",
    soundcloudLink: "https://soundcloud.com/the-sass-music/fury"
}

songData[0][13] = {
    name: "Shiny",
    description: "This song was made super quickly for Andrew Huang's #makeshiny challenge. It's just more silly 3xOsc stuff. Because it was made so fast, I don't have a lot to say about it. I guess the YouTube video for this song is pretty cool.",
    releaseDate: "19 June 2017",
    genre: "Shiny",
    coverLink: "Random.png",
    mp3Link: "https://drive.google.com/open?id=1E7CBHay91_U1s1mPIYOaSWtLuoc8WSpW",
    wavLink: "https://drive.google.com/open?id=1U9WlaHftVK7T6LRsjI7K1CGmb_lVewAm",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/gQCrMQ-g3iw",
    soundcloudLink: "https://soundcloud.com/the-sass-music/shiny"
}

songData[0][14] = {
    name: "Dodge3 Theme",
    description: "I made this snappy sawtooth-fest of a song reeeally quick to use as music for my HTML5 web game Dodge3. Not much else to say here. If I had to give an actual name to this song, I would probably call it \"Running in the 80s\" ...nah, that's stupid.",
    releaseDate: "18 March 2017",
    genre: "Techno",
    coverLink: "Dodge3.png",
    mp3Link: "https://drive.google.com/open?id=1VMD5EwTWOCAr2QmbhLfSsxa3MpPEc7K-",
    wavLink: "https://drive.google.com/open?id=1szBGQ0eT_sCrV8UqEfq6mY7FJadaCTcw",
    itLink: null,
    midiLink: null,
    youtubeLink: null,
    soundcloudLink: "https://soundcloud.com/the-sass-music/dodge3-theme"
}

songData[0][15] = {
    name: "Sawtooth",
    description: "Ahhhh, my third ever project in FL Studio. Don't worry, my first and second were nothing noteworthy. I have so many good memories from making this song. I don't think I used a single external plugin or sample in this song. Just stock FL Studio 12 stuff. Wack.",
    releaseDate: "11 March 2017",
    genre: "Electro House",
    coverLink: "Sawtooth.png",
    mp3Link: "https://drive.google.com/open?id=129ptJUnc30Og0KQl_U-LdI8vd80xC6f-",
    wavLink: "https://drive.google.com/open?id=177npBWwP-76wgzbMfVCsmp55n5y7L6NT",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/EWJSzLHwxCk",
    soundcloudLink: "https://soundcloud.com/the-sass-music/sawtooth"
}

songData[0][16] = {
    name: "The Count",
    description: "This was actually for a school project (I'll let you guess over which book). This was supposed to be like an opening theme for a TV show. What I uploaded to SoundCloud is actually an extended version I made after I had turned in the project. I don't remember what grade I got but I hope it was an 'A'.",
    releaseDate: "27 January 2017",
    genre: "Electronic...?",
    coverLink: "Random.png",
    mp3Link: "https://drive.google.com/open?id=10CyZtKMy_KVTD8zw3mO3GLS0zqF_rBGV",
    wavLink: "https://drive.google.com/open?id=1B_krCQUhdGBWsK3D0Ba2eiegXVBFPp-z",
    itLink: null,
    midiLink: null,
    youtubeLink: null,
    soundcloudLink: "https://soundcloud.com/the-sass-music/the-count"
}

songData[0][17] = {
    name: "Dance.it",
    description: "My first ever OpenMPT chiptune. Not too much else to say here. I talk more about my love for chiptunes in the description for NightSky.",
    releaseDate: "12 March 2017",
    genre: "Chiptune",
    coverLink: "Dance.png",
    mp3Link: "https://drive.google.com/open?id=1e-sON856yfiO717_lF0gOAALjwzIMoRC",
    wavLink: "https://drive.google.com/open?id=1NlpOgOpvWY2HXArtFkxfUFyY-pda0qt5",
    itLink: "https://drive.google.com/open?id=1jj9Nd1mIb7NDrWTvjbhybksnowSwpDRU",
    midiLink: null,
    youtubeLink: "https://youtu.be/6JIvZaZh4iA",
    soundcloudLink: "https://soundcloud.com/the-sass-music/danceit"
}

songData[0][18] = {
    name: "Onto the Battlefield",
    description: "The last song I made before entering the world of DAWs. This was the end of a big chapter in my life and my music production journey. The song is orchestral and triumphant and has a lovely key change at the end. Fun fact: I included a snippet of this song in the sheet music version of Celestial that I talked about in the description for that song.",
    releaseDate: "29 November 2016",
    genre: "Orchestral",
    coverLink: "Hurricane.png",
    mp3Link: "https://drive.google.com/open?id=1somXX_7ZjL6dyJrFmMpOFeKNhxktCa9h",
    wavLink: "https://drive.google.com/open?id=1Ccbo-6hlsFFFoDwpZnhi6t9Xy2ukrpat",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/OTDKtJq-WnU",
    soundcloudLink: "https://soundcloud.com/the-sass-music/onto-the-battlefield"
}

songData[0][19] = {
    name: "Hurricane",
    description: "Hurricane. Oh Hurricane. I have soooooo many memories of this song from writing it, to showing it to my music teacher, to having my friends play it in class, to having my mom force me to play it for my grandmother. This song is a journey. I was heavily inspired by the kind of music we were playing in school band at the time.",
    releaseDate: "29 July 2016",
    genre: "Orchestral",
    coverLink: "Hurricane.png",
    mp3Link: "https://drive.google.com/open?id=1cjm9-B-Ln_WeQKBILVjx0NAENJ2Vxr5r",
    wavLink: "https://drive.google.com/open?id=1woVOzYOfErDg45mEE3S0J2h0vQtjELaJ",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/E3EKM6W4PPw",
    soundcloudLink: "https://soundcloud.com/the-sass-music/hurricane"
}

songData[0][20] = {
    name: "Overdrive (MIDI)",
    description: "...this is just the MIDI version of Overdrive without the magic of SGM-V2.01.",
    releaseDate: "13 June 2016",
    genre: "Rock?",
    coverLink: "Adventure.png",
    mp3Link: "https://drive.google.com/open?id=1VS85ViX2dYdZ-TjG8tF71PSD9b7QNLKX",
    wavLink: "https://drive.google.com/open?id=1sTZ9e3Eme54JsD5nWTXnjVi8iHSo02Pi",
    itLink: null,
    midiLink: "https://drive.google.com/open?id=1rmc2H9EzF_5SQkXCNoGKm9JHseiZhNBj",
    youtubeLink: null,
    soundcloudLink: "https://soundcloud.com/the-sass-music/overdrive-midi"
}

songData[0][21] = {
    name: "Overdrive",
    description: "Can you even call this rock? I don't think you can, but \"Rock\" was the feeling I was going for when producing this song. I dunno, I still kinda like this song all this time later. Especially the piano. Also, a word of caution to MIDI composers: NEVER PUT A DRUM SOLO IN MIDI LOL.",
    releaseDate: "16 June 2016",
    genre: "Rock?",
    coverLink: "Adventure.png",
    mp3Link: "https://drive.google.com/open?id=1RkorunCDqhn18GttOEZOFFen0wOVDi_2",
    wavLink: "https://drive.google.com/open?id=1faq1R3WF1ZVeAbVQckh9ah_d_79VQCGw",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/8RImovwi3Qo",
    soundcloudLink: "https://soundcloud.com/the-sass-music/overdrive"
}

songData[0][22] = {
    name: "Spring in Your Step",
    description: "\"Rough Waters was such a dramatic and sad tune. I'd better follow it up with something happy.\" This was probably my thought process when making this song. What came of it was a piece of insufferably happy, unclassifiable garbage, haha.",
    releaseDate: "28 April 2016",
    genre: "Who knows",
    coverLink: "Adventure.png",
    mp3Link: "https://drive.google.com/open?id=10ZuvPnQsfgWRqSyrITXXQF03Fc54Aees",
    wavLink: "https://drive.google.com/open?id=1RVIsOihmZfDocnkx5T1R9zN_ODT7-KMB",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/2ETnfOrO3cc",
    soundcloudLink: "https://soundcloud.com/the-sass-music/spring-in-your-step"
}

songData[0][23] = {
    name: "Rough Waters",
    description: "Dramatic and orchestral with a side of weird instrument choices. Maracas? Vibraphone? Barely audible tenor sax? You betcha. This was the first track where I tried to make something orchestral and grand sounding. I keep saying orchestral because I don't know how else to describe this lol. This and The Challenge Ahead were both made for a project with some friends that never got finished, but these songs paved the way for a fun and eventful music production journey!",
    releaseDate: "30 March 2016",
    genre: "Orchestral",
    coverLink: "Adventure.png",
    mp3Link: "https://drive.google.com/open?id=1B7vyCt1ZO3UY8Cony_4m0LsgLuBlq2SK",
    wavLink: "https://drive.google.com/open?id=1dR6fxjvgvGK6kfmIPhfKTfa9IdcRc4oO",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/gWN_rcKLWRY",
    soundcloudLink: "https://soundcloud.com/the-sass-music/rough-waters"
}

songData[0][24] = {
    name: "The Challenge Ahead",
    description: "My fifth ever music production and the first one I ever released! Yeah... this song is absolute garbage. I have no idea what I was thinking. The way I made songs before I got FL Studio was by using Anvil Studio to compose MIDIs and them opening them up in SynthFont2 to put SGM-V2.01.sf2 on them and export them. What a weird start to one's music production career lol.",
    releaseDate: "30 March 2016",
    genre: "Who knows",
    coverLink: "Adventure.png",
    mp3Link: "https://drive.google.com/open?id=1ZmHjOtwuGwZvGZAuL2AB1_BGXYdMRecw",
    wavLink: "https://drive.google.com/open?id=1A7IspH8DhhoRkBFbf_8pekFV2EFbc_gp",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/K-7OgM7RcPI",
    soundcloudLink: "https://soundcloud.com/the-sass-music/the-challenge-ahead"
}

songData[1] = []

songData[1][0] = {
    name: "Candy Fractals",
    description: "An unbelievably joyful future bass tune with various silly samples and lot of chiptune influence. This song's production is actually quite simplistic but I think it fits the future bass style quite well and I'm super happy with the final product. The name of this song and the EP was actually a suggestion from a friend for the name of my track Sunshine. I really loved that name but I felt that I could make another song that would match the mood of the title better in the future... and here we are!",
    releaseDate: "26 June 2020",
    genre: "Future Bass",
    coverLink: "candy_fractals_cover_final.png",
    mp3Link: "https://drive.google.com/file/d/1nXRjylFq9iPulqlLiwo4U6rmliMOO-_r/view?usp=sharing",
    wavLink: "https://drive.google.com/file/d/1AVXTkWQkvyOB3pb8q49zWNlA99ICCfo_/view?usp=sharing",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/_nC0nNW-6Qg",
    soundcloudLink: "https://soundcloud.com/the-sass-music/candy-fractals"
}

songData[1][1] = {
    name: "Soaring",
    description: "Another one of those nondescript EDM tunes, huh? This was the first song I started from the EP and it was then that my production reached a turning point. I got myself some new samples, new plugins (namely Serum), and I finally figured out that the default Fruity Limiter settings alone may not be the best for mastering lol.",
    releaseDate: "26 June 2020",
    genre: "Electro House",
    coverLink: "candy_fractals_cover_final.png",
    mp3Link: "https://drive.google.com/file/d/1W5ZUUp2plCgIbXsq6dagT8RmIZaPYlD0/view?usp=sharing",
    wavLink: "https://drive.google.com/file/d/1YTGspoHUSz2fCSSigo2xI_GVtM6UbhAZ/view?usp=sharing",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/ushAx6Bljwk",
    soundcloudLink: "https://soundcloud.com/the-sass-music/soaring"
}

songData[1][2] = {
    name: "Endless (ft. Vishnu)",
    description: "A somber but powerful melodic dubstep tune. This is another one of those songs that went through a MASSIVE rework to get to where it is now. This particular one was in 4/4, in the key of C minor, and was going to have a normie progressive house drop. When I was itching to try making dubstep, I decided to flip this song and I'm so happy I did! Also, huge thanks to my buddy Vishnu for the sax solo!",
    releaseDate: "26 June 2020",
    genre: "Melodic Dubstep",
    coverLink: "candy_fractals_cover_final.png",
    mp3Link: "https://drive.google.com/file/d/1xZJim46fqY32XLa4aoa-_tfRR6v_XyYr/view?usp=sharing",
    wavLink: "https://drive.google.com/file/d/1qClCC8uMwINCPVyv6_C8IDg-c1ay9Y3i/view?usp=sharing",
    itLink: null,
    midiLink: null,
    youtubeLink: "https://youtu.be/SSRHiM3Tujo",
    soundcloudLink: "https://soundcloud.com/the-sass-music/endless-ft-vishnu"
}

songData[2] = []

songData[2][0] = {
    name: "Jump",
    description: "My first proper growly Brostep track. This was super fun to make and I sat on it for nearly a YEAR before finally calling it done and releasing it. More music theory than sound design in this one but I think that's gonna be a trend in my music... at least for a while.",
    releaseDate: "5 March 2021",
    genre: "Dubstep",
    coverLink: "Jump.png",
    mp3Link: "https://drive.google.com/file/d/1ERQg6GqDAtpX4E9nc6AEpdICyIM71NBU/view?usp=sharing",
    wavLink: "https://drive.google.com/file/d/1xVNQlv46hiih_XZbNfhaNsOpJ9YgXxqk/view?usp=sharing",
    itLink: null,
    midiLink: null,
    youtubeLink: null,
    soundcloudLink: "https://soundcloud.com/the-sass-music/jump"
}

songData[3] = []

songData[3][0] = {
    name: "Neddie - Figment (The Sass Remix)",
    description: "A cinematic melodic dubstep remix of Neddie - Figment for his Figment Remix Contest. Definitely my most polished and well-constructed track yet. I think my production is improving O_o. This one actually placed first! I'm so grateful for all the support I've gotten from this tune! You guys are the best <3",
    releaseDate: "8 March 2021",
    genre: "Melodic Dubstep",
    coverLink: "Figment_Remix.png",
    mp3Link: "https://drive.google.com/file/d/1JMOu1NaaLvtRoC0an9Q1i7XkC9I7ZJ2u/view?usp=sharing",
    wavLink: "https://drive.google.com/file/d/1XA71_iXlzOJupow4zOLq8z-vHhjqgLlj/view?usp=sharing",
    itLink: null,
    midiLink: null,
    youtubeLink: null,
    soundcloudLink: "https://soundcloud.com/the-sass-music/neddie-figment-the-sass-remix"
}


const songsByName = new Map()

for (let i = 0; i < songData.length; i++)
{
    for (let song of songData[i])
    {
        songsByName.set(replaceAll(song.name.toLowerCase(), ["(", "", ")", ""]), song)
    }
}

const collectionBySongName = new Map()

for (let i = 0; i < songData.length; i++)
{
    if (isSingle[i])
    {
        continue
    }
    for (let song of songData[i])
    {
        collectionBySongName.set(song.name.toLowerCase(), collectionNames[i])
    }
}




function replaceAll(string, replacePairs)
{
    for (let i = 0; i < replacePairs.length; i += 2)
    {
        string = string.split(replacePairs[i]).join(replacePairs[i + 1])
    }
    return string
}
