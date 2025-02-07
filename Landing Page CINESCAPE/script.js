function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = trailer.querySelector('video');
    trailer.classList.toggle('active');
    if (trailer.classList.contains('active')) {
      video.play();
    } else {
      video.pause(); 
      video.currentTime = 0; 
    }
  }
  function changeBg(bgUrl, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("${bgUrl}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    
    contents.forEach(content => {
        content.classList.remove('active'); 
        if (content.classList.contains(title)) {
            content.classList.add('active'); 
        }
    });
}
const movies = {
  joker: {
    title: "Joker",
    year: "2019",
    ageRating: "12+",
    duration: "2 Hours 2 Min",
    genre: "Psychological Thriller, Crime",
    description:
      "Joker tells the haunting story of Arthur Fleck, a man descending into madness in Gotham City, exploring themes of isolation and societal neglect.",
      
    backgroundUrl:
      "https://static01.nyt.com/images/2019/10/05/arts/04Joker-Cover/merlin_161549496_c55020b5-50f8-432b-a141-64fea126a42b-videoSixteenByNineJumbo1600.jpg",
    imgSrc: "/assets/joker.png",
  },
  alice: {
    title: "Alice in Borderland",
    year: "2020",
    ageRating: "15+",
    duration: "8 Episodes",
    genre: "Fantasy",
    description:
      "A group of aimless gamers find themselves in a parallel Tokyo, where they're forced to compete in a series of sadistic games to survive.",
    backgroundUrl:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/alice-in-borderland-cast.jpg",
    imgSrc: "/assets/alice.png",
  },
  squid: {
    title: "Squid Game",
    year: "2021",
    ageRating: "16+",
    duration: "9 Episodes",
    genre: "Survival, Thriller, Drama",
    description:
      "A group of desperate individuals compete in deadly childhood games for a chance to win a life-changing prize, while risking their own survival.",
    backgroundUrl:
      "https://image.milimaj.com/i/milliyet/75/0x0/6561da7286b244718416c914.jpg",
    imgSrc: "/assets/squid.png",
  },
  carryOn: {
    title: "Carry On",
    year: "2024",
    ageRating: "16+",
    duration: "1 Hour 50 Min",
    genre: "Action, Thriller, Crime",
    description:
      "When TSA agent Ethan Kopek is blackmailed to allow a dangerous package through security on Christmas Day, he is thrust into a deadly web of intrigue.",
    backgroundUrl:
      "https://external-preview.redd.it/carry-on-2024-netflix-movie-review-taron-egerton-is-v0-qoHv3KX0B2TRixUhEakqDKCiA8ORcsAyRKF9Icgr6Ao.jpg?auto=webp&s=911055f38b0decb360bf65a222e5fb4140007755",
    imgSrc: "/assets/carryon.png",
  },
  gladiator: {
    title: "Gladiator 2",
    year: "2024",
    ageRating: "16+",
    duration: "2 Hours 30 Min",
    genre: "Action, Drama, Historical",
    description:
      "The highly anticipated sequel to Ridley Scott's epic, Gladiator 2 follows the story of Lucius, the son of Lucilla, as he navigates the political intrigue and deadly battles of Ancient Rome.",
    backgroundUrl:
      "https://cambridgedaymediafiles.s3.amazonaws.com/public_html/wp-content/uploads/2024/11/18142910/112124i-Gladiator-II.jpg",
    imgSrc: "/assets/gladiator.png",
  },
  harry: {
    title: "Harry Potter and the Sorcerer's Stone",
    year: "2001",
    ageRating: "PG",
    duration: "2 Hours 32 Min",
    genre: "Fantasy, Adventure, Family",
    description:
      "Follow the magical journey of Harry Potter, an ordinary boy who discovers he’s a wizard and embarks on his first year at Hogwarts School of Witchcraft and Wizardry, uncovering mysteries and making lifelong friends.",
    backgroundUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/l/q/f/medium-harry-potter-hd-wallpaper-on-fine-art-paper-13x19-original-imah368fbudammbu.jpeg?q=90&crop=false",
    imgSrc: "/assets/harrypotter.png",
  },
  landMan: {
    title: "Land Man",
    year: "2025",
    ageRating: "TV-MA",
    duration: "TBA",
    genre: "Drama, Comedy",
    description:
      "A modern-day story set in the West Texas oilfields, chronicling the booms and busts in the lives of rugged men and women seeking their fortune in the energy capital of the world.",
    backgroundUrl:
      "https://www.joblo.com/wp-content/uploads/2024/07/landman-1002x524.jpg", 
    imgSrc: "/assets/landman.png",
  },
  mufasa: {
    title: "Mufasa: The Lion King",
    year: "2024",
    ageRating: "PG",
    duration: "TBA",
    genre: "Animation, Adventure, Family",
    description:
      "A prequel to the beloved Lion King story, exploring the journey of Mufasa's rise to become the king of the Pride Lands.",
    backgroundUrl:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/04/mufasa-poster.jpg", 
    imgSrc: "/assets/mufasa.png", 
  },
  venom: {
    title: "Venom: Let There Be Carnage",
    year: "2021",
    ageRating: "PG-13",
    duration: "1h 37m",
    genre: "Action, Sci-Fi, Thriller",
    description:
      "Eddie Brock struggles to adapt to his new life as the host of the alien symbiote, Venom, which grants him superhuman abilities. When Cletus Kasady, a deranged serial killer, becomes the host of an equally dangerous symbiote known as Carnage, a deadly clash ensues. With the city at stake, Eddie and Venom must confront their differences and work together to stop Carnage's rampage.",
    backgroundUrl:
      "https://de.web.img3.acsta.net/img/4f/1b/4f1b7e66e41760803ef827c261b4f0c0.jpg",
    imgSrc: "/assets/venom.png", 
  },
  wicked: {
    title: "Wicked",
    year: "2024",
    ageRating: "PG",
    duration: "TBD",
    genre: "Musical, Fantasy, Drama",
    description:
      "Discover the untold story of the Witches of Oz. Before Dorothy landed in Oz, there was a deep and complex relationship between two unlikely friends—Elphaba, the misunderstood, intelligent, and green-skinned young woman, and Glinda, the popular and ambitious blonde. Their journey through friendship, rivalry, and self-discovery unravels a tale of love, courage, and how they became the Wicked Witch of the West and Glinda the Good.",
    backgroundUrl:
      "https://media.cnn.com/api/v1/images/stellar/prod/2551-sb-00048.jpg?c=16x9&q=h_833,w_1480,c_fill",
    imgSrc: "/assets/wicked.png", 
  },
  redNotice: {
    title: "Red Notice",
    year: "2021",
    ageRating: "PG-13",
    duration: "1h 58m",
    genre: "Action, Comedy, Crime",
    description:
      "When an Interpol-issued Red Notice—the highest-level warrant to hunt and capture the world's most wanted criminals—is issued, top FBI profiler John Hartley is on the case. His global pursuit brings him into a daring heist where he reluctantly teams up with Nolan Booth, the world’s second-best art thief, to catch Sarah Black, aka The Bishop, the most elusive art thief of them all. Filled with twists, witty banter, and high-octane action, this star-studded adventure delivers a thrilling ride across the globe.",
    backgroundUrl:
      "https://pimwp.s3-accelerate.amazonaws.com/2021/12/RED-NOTICE.jpg", 
    imgSrc: "/assets/REDNOTICE.png", 
  },
  avengers: {
    title: "Avengers: Infinity War",
    year: "2018",
    ageRating: "PG-13",
    duration: "2h 29m",
    genre: "Action, Adventure, Sci-Fi",
    description:
      "In a universe-spanning race against time, the Avengers and their allies must come together to stop Thanos, an intergalactic warlord bent on acquiring all six Infinity Stones. With the power to wipe out half of all life, Thanos unleashes chaos as the heroes face their greatest challenge yet. Packed with epic battles, emotional moments, and stunning visuals, this Marvel blockbuster sets the stage for the ultimate showdown that reshaped the Marvel Cinematic Universe.",
    backgroundUrl:
      "https://static.wixstatic.com/media/eb6f96_b48193298cf4426e93d9cf97ee1d7d5a~mv2.jpg/v1/fill/w_640,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/eb6f96_b48193298cf4426e93d9cf97ee1d7d5a~mv2.jpg", 
    imgSrc: "/assets/avengers.png", 
  },
};
function changeMovieDetails(movieKey) {
  const movie = movies[movieKey];
  if (!movie) return;

  const banner = document.querySelector(".banner");
  const contentImage = banner.querySelector("img");
  const contentTitle = banner.querySelector("h4");
  const contentDescription = banner.querySelector("p");

  // Update banner background
  banner.style.background = `url("${movie.backgroundUrl}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  // Update movie details
  contentImage.src = movie.imgSrc;
  contentTitle.innerHTML = `
    <span class="px-[15px] py-0 border-r-[2.5px] border-r-[rgb(177,30,30)]">${movie.year}</span>
    <span class="px-[15px] py-0 border-r-[2.5px] border-r-[rgb(177,30,30)]">
      <i class="bg-[var(--primary)] text-white px-[8px] inline-block rounded-md">${movie.ageRating}</i>
    </span>
    <span class="px-[15px] py-0 border-r-[2.5px] border-r-[rgb(177,30,30)]">${movie.duration}</span>
    <span class="px-[15px] py-0 border-r-[2.5px] border-r-[rgb(177,30,30)]">${movie.genre}</span>
  `;
  contentDescription.textContent = movie.description;
}

  