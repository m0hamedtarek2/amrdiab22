//song list
let All_song = [
    {
        name: "makank fe albi",
        path: "/Amr Diab - Makanak Fe Alby _ عمرو دياب - مكانك في(MP3_160K).mp3",
        img:"/copy_718854168.png",
        singer: "1"
      },
      {
        name: "bayn habit",
        path: "/Amr Diab - Bayen Habeit (Audio عمرو دياب - باين حبيت (كلمات(MP3_160K).mp3",
        img: "/download.jfif",
        singer: "2"
      },
      {
        name: "anta maghror",
        path: "/Amr Diab - Enta Maghroor (Audio عمرو دياب - أنت مغرور (كلمات(MP3_160K).mp3",
        img: "/favpng_amr-diab-music-we-maloh-song-alby.png",
        singer: "3"
      },
      {
        name: "Rag3een",
        path: "/Amr Diab - Rag3een _ عمرو دياب - راجعين(MP3_160K).mp3",
        img: "/favpng_amr-diab-singer-songwriter-composer-lafetha-belad.png",
        singer: "4"
      },
      {
        name: "Sebt Faragh Kebeer",
        path: "/Amr Diab - Sebt Faragh Kebeer _ عمرو دياب - سبت فراغ كبير(MP3_160K).mp3",
        img: "/images.jfif",
        singer: "5"
    }
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
 
 /*please follow all the rules so that you do not face any problem*/