import {mdBody_Rozi} from "./md/mdBody_Rozi";
import {mdBody_DiveGuide} from "./md/mdBody_DiveGuide";
import {mdBody_UmElFaroud} from "./md/mdBody_UmElFaroud";
import {mdBody_Garmin} from "./md/mdBody_Garmin";
import {mdBody_Octopus} from "./md/mdBody_Octopus";

const list = [

  { 
    value: {
      uid: "SNK_6698as0das0002",
      title: "L-Aħrax tal-Madonna",
      slug: "divesites/l=ahrax-tal-madonna",
      category: "divesites",
      tags:["snorkelling", "family"],
      icon: "spearo",
      image: "/jpg/AnthraxIsland/AnthraxIsland.jpg",
      bodyFormat: "html",
      excerpt: "The Rdum tal-Madonna Important Bird Area comprises a 4 ha linear strip of cliffed coastline about 200 m long near L-Aħrax tal-Mellieħa, at the north-western end of the island of Malta, in the Maltese archipelago of the Mediterranean Sea. Its rugged cliffs rise from sea level, where there is much rock debris, to a height of 25 m",
      body: "<p>The Rdum tal-Madonna Important Bird Area comprises a 4 ha linear strip of cliffed coastline about 200 m long near L-Aħrax tal-Mellieħa, at the north-western end of the island of Malta, in the Maltese archipelago of the Mediterranean Sea</p><iframe width='100%' height='315' src='https://www.youtube.com/embed/qT2e_D9vhj4?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      links: [
        {
          label: "Google Map",
          value: "https://mapcarta.com/Campsite_1_-_Ahrax_tal-Madonna_1512822",
        },
        {
          label: "jabriffa",
          value: "https://jabriffa.wordpress.com/2018/09/04/il-madonna-tal-ahrax/",
        },
        
        
      ],
    },
  },


  { 
    value: {
      uid: "D_66RZ000002",
      title: "The Tugboat Rozi",
      slug: "wreck-dives/rozi",
      category: "wreck dives",
      tags:["wreck", "shore", ],
      icon: "dive",
      excerpt: "Rozi is one of the two wrecks in Cirkewwa on the northwest side of Malta, and one of the most popular dive sites in the Maltese islands. Rozi was a former tugboat that operated in Grand Harbour of Valletta. She was scuttled in 1992 as an underwater tourist attraction for submarine tours, and also became an artificial reef for scuba divers. Tugboat Rozi wreck is easily dived from the shore, and is located close to Patrol Boat P29 wreck.",
      image: "/jpg/The-Tugboat-Rozi/The-Tugboat-Rozi.jpg",
      bodyFormat: "md",
      body: mdBody_Rozi,
      links: [
        {
          label: "Wikipedia",
          value: "https://en.wikipedia.org/wiki/MV_Rozi",
        },
        {
          label: "Wrecksite.eu",
          value: "https://www.wrecksite.eu/wreck.aspx?58012",
        },
        {
          label: "Sketchfab 3d model",
          value: "https://sketchfab.com/3d-models/mv-rozi-47a7541a59c8425e888db372739fce0f",
        },
      ],
    },
  },

  { 
    value: {
      uid: "P_0000000021",
      title: "Maltese Islands Diving Guide",
      slug: "maltese-islands-diving-guide",
      category: "education",
      tags: ["history"],
      icon: "dive",
      excerpt: "This app is based on the book _Maltese Islands Dives Guide_ published in 1997 by Ned Middleton",
      image: "/jpg/Maltese-Islands-Diving-Guide/Maltese-Islands-Diving-Guide_800.jpg",
      bodyFormat: "md",
      body: mdBody_DiveGuide,
      links:[
        {label: "Amazon", value: "https://" },
      ],
    },
  },  
  { 
      value: {
        uid: "GARMIN_000000001",
        title: "Garmin Descent™ Mk1",
        slug: "gear/garmin-descent-mk1",
        category: "Gear",
        tags: ["computer"],
        icon: "watch",
        excerpt: "Dive",
        image: "/jpg/Garmin/Garmin.jpg",
        bodyFormat: "md",
        body: mdBody_Garmin,
        links:[
          {label: "Product Image", value: "https://res.garmin.com/en/products/010-01760-00/v/cf-lg.jpg" },
        ],
      },
    },

    { 
      value: {
        uid: "DM_00000asdf21",
        slug: "diveshops/abc-diving",
        category: "diveshops",
        tags: ["rental", "guided diving", "courses"],
        icon: "diveshop",
        title: "ABC Diving",
        excerpt: "Small, bespoke PADI dive centre set in an idyllic waterfront location",
        image: "/jpg/ABCDiving/ABCDiving.jpg",
        bodyFormat: "md",
        body: "ABC Diving is a small, bespoke PADI dive centre set in an idyllic waterfront location at Turtle Bay just up from St Paul’s Bay in Malta.",
      },
    }, 
    { 
      value: {
        uid: "DS_OC000asdf21",
        slug: "diveshops/octopus",
        category: "diveshops",
        tags: ["german"],
        icon: "diveshop",
        title: "Octopus Garden",
        excerpt: "DEINE DEUTSCHE TAUCHBASIS UND AUSBILDUNGSAKADEMIE AUF MALTA",
        image: "/jpg/Octopus/Octopus.jpg",
        bodyFormat: "md",
        body: mdBody_Octopus,
      },
    }, 
    { 
    value: {
      uid: "ABC_000000001",
      title: "The Um El Faroud wreck",
      slug: "wreck-dives/umelfaroud",
      category: "wreck dives",
      tags: ["shore", "wreck"],
      icon: "dive",
      excerpt: "MV Um El Faroud was a Libyan oil tanker that was scuttled off the coast of Wied iz-Zurrieq in 1998 as an artificial reef and a scuba Dives attraction, after suffering damage in an explosion at the dry docks.",
      image: "/jpg/UmElFaroud/UmElFaroud.jpg",
      bodyFormat: "md",
      body: mdBody_UmElFaroud,
      links:[
        {label: "wikipedia.org", value: "http://en.wikipedia.org/wiki/Um_El_Faroud" },
        {label: "maltadives.com", value: "https://maltadives.com/sites/umelfaroud-wiedizzurrieq" },
        {label: "wrecksite.eu", value: "http://www.wrecksite.eu/wreck.aspx?97698" },
        {label: "teesbuiltships.co.uk", value: "http://www.teesbuiltships.co.uk/view.php?ref=170647" },
        {label: "calypsosac.org", value: "http://www.calypsosac.org/um-el-faroud/" },
      ],
    },
  },
  
  
  {
    value: {
      uid: "D_0AB3000002",
      title: "Anchor Bay (Popeye)",
      slug: "dives/anchor-bay",
      category: "dives",
      tags:["cave", "wreck"],
      icon: "dive",
      image: "/jpg/Anchor-Bay/Anchor-Bay_800.jpg",
      excerpt: "AKA Scorpion Cave & Popeye Village",
      bodyFormat: "text",
      body: "Anchor Bay Cave, also known as Scorpion Cave, is the best dive site in Anchor Bay. The cave is located on the south side of the bay, approximately 150 m from the entry/exit point at the concrete jetty",
    },
  },
  

    { 
      value: {
        uid: "GM_000xyz0001",  
        title: "Spearfishing in Malta", 
        slug: "spearfishing/spearo",
        icon: "spearo",
        category: "spearfishing",
        tags: ["regulations"],
        image: "/jpg/Spearfishing/Spearfishing.jpg",
        excerpt: "With no boat",
        bodyFormat: "text",
        body: "Spearfishing does not require a permit. There are specific fish that require permits to catch, such a tuna, but the sport itself requires none. Spearfishing with SCUBA equipment is illegal. You're going to free dive if you want to go spearfishing in Malta.",
        links: [
          {
            label: "Google Map",
            value: "https://www.google.com/maps/d/edit?hl=en&mid=1XFsejc8Ly90nQ-Vng1YCcBKX0wdeSso&ll=35.94954525492767%2C14.357649241738182&z=10",
          }
        ],
      },
    },

    { 
      value: {
        uid: "D_001XL01001",
        title: "Xlendi Caves",
        slug: "dives/xlendi-caves",
        icon: "dive",
        category: "dives",
        tags:["cave", "shore"],
        image: "/jpg/XlendiCaves/XlendiCaves.jpg",
        excerpt: "Not what you might think a cave dive to be",
        bodyFormat:"html",
        body: "<p>If you enter the water on the left hand side of the valley by the fifth ladder and following a compass heading of 300 degrees you will find the entrance to Xlendi Cave and the tunnel entrance is located just 2 metres deep on the cliff side</p><p>Ix Xledni Bay is a typical Gozitan fishing village located in a valley on the south west coast of Gozo. There are a number of bars restaurants and hotels serving the village. And the bay has a small beach, Xlendi bay is very popular with swimmers, snorkelers and divers.</p><p>If you enter the water on the left hand side of the valley by the fifth ladder and following a compass heading of 300 degrees you will find the entrance to Xlendi Cave and the tunnel entrance is located just 2 metres deep on the cliff side</p>",
        links: [
          {
            label: "paradiseDives",
            value: "https://paradiseDives.com/xlendi-cave/",
          }
        ],
        
      },
    },

    { 
      value: {
        uid: "SH_0000000001",
        title: "Decathlon",
        excerpt: "Buy the right gear",
        slug: "gear/decathlon",
        icon: "shopping",
        category: "Gear",
        image: "/jpg/Decathlon/Decathlon.jpg",
        bodyFormat: "md",
        tags:["Shopping"],
        body: "TO SUSTAINABLY MAKE THE PLEASURE AND BENEFITS OF SPORT ACCESSIBLE TO THE MANY",
        links: [
          {
            label: "Decathlon Shop, Malta",
            value: "https://www.decathlon.mt",
          }
        ],
      },
    },
       
  ]

export { list }
