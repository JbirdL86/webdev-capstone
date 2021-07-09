function Speaker(name, profession, description, featureImg) {
  this.name = name;
  this.profession = profession;
  this.description = description;
  this.featureImg = featureImg;
}

const speakers = [];

function createSpeakers() {
  let speaker;

  speaker = new Speaker('Bill Gates', 'Software developer, investor, entrepreneur', 'William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist.', 'assets/billgates.jpeg');
  speakers.push(speaker);

  speaker = new Speaker('Elon Musk', 'Founder, CEO and Chief Engineer of SpaceX', 'Elon Reeve Musk is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early stage investor, CEO, and Product Architect of Tesla, Inc.', 'assets/elonmusk.png');
  speakers.push(speaker);

  speaker = new Speaker('Mark Zuckerberg', 'Internet entrepreneur, philanthropist, media mogul', 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook, Inc.', 'assets/markzuk.jpeg');
  speakers.push(speaker);

  speaker = new Speaker('Steve Jobs', 'Chairman, chief executive officer, and co-founder of Apple Inc.', 'Steven Paul Jobs was an American business magnate, industrial designer, investor, and media proprietor.', 'assets/stevejobs.jpeg');
  speakers.push(speaker);

  speaker = new Speaker(' Dan Bricklin', 'Founder and president of Software Garden', 'Dan Bricklin was co-creator of VisiCalc, the first spreadsheet software available for personal computers. He also founded Trellix, a website software company now owned by Web.com', 'assets/danbricklin.jpg');
  speakers.push(speaker);

  speaker = new Speaker('Larry Ellison', 'Executive chairman and chief technology officer of Oracle Corporation.', 'Lawrence Joseph Ellison is an American businessman and investor who is a co-founder, he was listed by Bloomberg Billionaires Index as the ninth-wealthiest person in the United States and as the tenth-wealthiest in the world', 'assets/larryellison.jpg');
  speakers.push(speaker);
}

function populateSpeakers() {
  const featuredSpeakers = document.querySelector('.speakers-section');
  let speakersBuff = document.createElement('div');
  speakersBuff.classList.add('speakers-container');

  for (let i = 0; i < speakers.length; i += 1) {
    const speakerWrapper = document.createElement('article');

    speakerWrapper.classList.add('speakers-wrapper');
    speakerWrapper.innerHTML = `
        <div>
          <div class="speaker-image-container">
            <div class="speaker-pattern">
              <img src="assets/qrcode.jpeg">
            </div>
            <div class="speaker-image">
              <img src="${speakers[i].featureImg}">
            </div>
          </div>
        </div>
        <div class="speaker-text">
          <h4>${speakers[i].name}</h4>
          <h5>${speakers[i].profession}</h5>
          <div class="divisor"></div>
          <p>${speakers[i].description}</p>
        </div>
    `;

    speakersBuff.appendChild(speakerWrapper);

    if (i % 2 === 1) {
      const speakerContainer = speakersBuff;
      speakerContainer.appendChild(speakerWrapper);

      speakerContainer.classList.add('speakers-container');
      if (i > 2) {
        speakerContainer.classList.add('hidden-speakers');
      }
      featuredSpeakers.appendChild(speakerContainer);
      speakersBuff = document.createElement('div');
      speakersBuff.classList.add('speakers-container');
    }
  }
}

createSpeakers();
populateSpeakers();