var products = [

  {
    id: 1234,
    maker: 'Smith & Wesson',
    model:'Detroit PD M&P 9',
    description: 'The Smith & Wesson M&P9 M2.0 is newest series of semi-automatic handguns that were developed to further evolve the already popular M&P series. This handgun was even submitted to the U.S. Army’s military handgun trials, ultimately losing out to the SIG P320. These M&P 9 M2.0’s are laser engraved with “Detroit Police Department” and a DPD Badge, and they bear a custom department serial number. The handguns show some very light wear from holster and duty use.',
    image: "../../../assets/slideshow.jpg",
    price: 445.99,
    type: 'Hand gun',
    subtype: 'Semi-automatic',
    otherInfo: {
      "Caliber/Gauge": '9mm Luger',
      Finish: "Black",
      "Barrel Length": '4.2 Barrel'
    }
  },
  {
    id: 1244,
    maker: 'North American Arms',
    model:'Mini Revolver',
    description: 'The NAA Mini-Revolver .22 Short runs in limited production each year to make the worlds smallest and lightest five-shot at just 4 oz unloaded. Using the half-way notch cylinder, the hammer may rest safely and securely without chance of accidental discharge.',
    image: "../../../assets/revolver.jpg",
    price: 212.99,
    type: 'Hand gun',
    subtype: 'Revolver',
    otherInfo: {
      "Caliber/Gauge": '.22 Short',
      Finish: "Stainless and Wood",
      "Barrel Length": '11 Barrel',
      Capacity: '6 Rounds'
    }
  },
  {
    id: 1235,
    maker: 'WINCHESTER',
    model:'67 CANADIAN CENTENNIAL',
    description: "A beautifully made lever-action rifle chambered in 30-30 Win, this Winchester Canadian Centennial '67 celebrates the 100th anniversary of the Canadian Confederation. Smooth wood furniture is complemented by a blued steel receiver, which boasts engraved maple leaves and branches. This rifle is in excellent condition and includes the owner's manual.",
    image: "../../../assets/rifle.jpg",
    price: 399.00,
    type: 'Long Gun',
    subtype: 'Rifle',
    otherInfo: {
      "Caliber/Gauge": '.30-30 WIN',
      Finish: "Black",
      "Barrel Length": '20 Barrel',
      Capacity: '6 Rounds'
    }
  },
  {
    id: 1236,
    maker: 'ESCORT',
    model:'SLUGGER TACTICAL',
    description: 'The Escort Slugger Tactical is a pump-action 12-gauge shotgun. It is designed for personal protection and is perfect for property and home defense. This Slugger Tactical has a fixed smooth bore cylinder choke and is in very good condition. It ships in the original box and includes the owners manual.',
    image: "../../../assets/shotgun.jpg",
    price:  436.79,
    type: 'Long Gun',
    subtype: 'Shotgun',
    otherInfo: {
      "Caliber/Gauge": '12 GA',
      Finish: "Black",
      "Barrel Length": '18 Barrel',
      Capacity: '4 Rounds'
    }
  },
  {
    id: 1237,
    maker: 'Double Tap',
    model:'AMMUNITION DT',
    description: 'DoubleTaps DT Defense is specifically designed for your compact 380s by KelTec Ruger Kahr DE and Taurus. This round virtually has no muzzle flash and is an excellent defensive load with excellent penetration.',
    image: "../../../assets/ammunition.jpg",
    price: 28.00,
    type: 'Other',
    subtype: 'Ammunition',
    otherInfo: {
      "Caliber/Gauge": '9mm Luger',
      "Casing": "Brass",
      "Rounds Per Box": '20 Rounds',
      "Bullet Type": "Jacketed Hollow Point"
    }
  },
  {
    id: 1238,
    maker: 'Lancer',
    model:'L5AWM',
    description: 'Lancer set out to design a better 5.56 magazine one with the reliability of steel durability of polymer and weight of aluminum the L5AWM. The magazine design includes a onepiece wraparound steel feed lip assembly and an aggressive surface texture to create the ultimate hybrid magazine tough enough for military LE and commercial use. The L5AWM is compatible with modern weapon systems including M4M16AR SCAR16 HK416 ARX160 SIG556 ARC and SA80 chambered in 5.56x45mm .223 Rem. Designed tooled manufactured and assembled in the USA.',
    image: "../../../assets/accessory.jpg",
    price: 19.99,
    type: 'Other',
    subtype: 'Accessory',
    otherInfo: {
      "Caliber/Gauge": '.223 REM/5.56 NATO',
      Finish: "Stainless",
      Capacity: '30 Rounds',
      "Model Fit": "AR 15"
    }
  },
  {
    id: 1299,
    maker: 'Crosman',
    model:'160 gas rifle',
    description: 'Walnut finished hardwood stock, used condition with a few chips, dings and scratches',
    image: "../../../assets/part.jpg",
    price: 23.99,
    type: 'Other',
    subtype: 'Part',
    otherInfo: {
      "Caliber/Gauge": '22 CAL',
      Finish: "Walnut"
    }
  },
];


module.exports = products;
