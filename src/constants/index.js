import {
  discAppartment,
  discHouse,
  discOffice,
  discShop,
  discVilla,
  discWarehouse,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card16,
  card17,
  card18,
  card19,
  bedIcon,
  bathIcon,
  livingIcon,
  blog,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  profile

} from "../assets";





export const navLinks = [
  {
    id: 1,
    value: "Home",
    path: "/",
  },
  {
    id: 2,
    value: "Property",
    dropdown: true,
    items: [
      { value: "Property List", path: "/propertyList" },
      { value: "Featured Property", path: "" },
    ],
  },
  {
    id: 3,
    value: "Blog",
    dropdown: true,
    items: [
      { value: "Blog", path: "" },
      { value: "Blog List", path: "/blogList" },
    ],
  },
  {
    id: 4,
    value: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    value: "Documentation",
    path: "/documentation",
  },
];

export default navLinks;


// Discover Properties Data


export const properties = [
  {
    propertyId:1,
    image:discAppartment,
    title:'Apartment',
    count:'3 Properties'
  },
  {
    propertyId:2,
    image:discHouse,
    title:'Villa',
    count:'3 Properties'
  },
  {
    propertyId:3,
    image:discOffice,
    title:'Office',
    count:'3 Properties'
  },
  {
    propertyId:4,
    image:discShop,
    title:'Shop',
    count:'3 Properties'
  },
  {
    propertyId:5,
    image:discVilla,
    title:'House',
    count:'3 Properties'
  },
  {
    propertyId:6,
    image:discWarehouse,
    title:'Warehouse',
    count:'3 Properties'
  },
]

// Featured Property Data

export const featuredProp = [
  {
    propertyId:1,
    image:card1,
    kind:'Modern Appartment',
    price:'$150,000',
    location:'California',
    bedCount:'2',
    bathCount:'1',
    Area:'85m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:2,
    image:card2,
    kind:'City Appartment',
    price:'$180,000',
    location:'Texas',
    bedCount:'3',
    bathCount:'2',
    Area:'110m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,
  },
  {
    propertyId:3,
    image:card3,
    kind:'Luxury Appartment',
    price:'$220,000',
    location:'New York',
    bedCount:'4',
    bathCount:'3',
    Area:'140m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:4,
    image:card4,
    kind:'Mithra Villa',
    price:'$200,000',
    location:'Florida',
    bedCount:'3',
    bathCount:'2',
    Area:'190m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:5,
    image:card5,
    kind:'Palm Villa',
    price:'$250,000',
    location:'Illinois',
    bedCount:'4',
    bathCount:'3',
    Area:'210m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:6,
    image:card6,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
];

// Property List data

export const propList = [
  {
    propertyId:1,
    image:card1,
    kind:'Modern Appartment',
    price:'$150,000',
    location:'California',
    bedCount:'2',
    bathCount:'1',
    Area:'85m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:2,
    image:card2,
    kind:'City Appartment',
    price:'$180,000',
    location:'Texas',
    bedCount:'3',
    bathCount:'2',
    Area:'110m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,
  },
  {
    propertyId:3,
    image:card3,
    kind:'Luxury Appartment',
    price:'$220,000',
    location:'New York',
    bedCount:'4',
    bathCount:'3',
    Area:'140m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:4,
    image:card4,
    kind:'Mithra Villa',
    price:'$200,000',
    location:'FlorpropertyIda',
    bedCount:'3',
    bathCount:'2',
    Area:'190m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:5,
    image:card5,
    kind:'Palm Villa',
    price:'$250,000',
    location:'Illinois',
    bedCount:'4',
    bathCount:'3',
    Area:'210m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:6,
    image:card6,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:7,
    image:card7,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:8,
    image:card8,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:9,
    image:card9,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:10,
    image:card10,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:11,
    image:card11,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:12,
    image:card12,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:13,
    image:card13,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:14,
    image:card14,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:16,
    image:card16,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:17,
    image:card17,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:18,
    image:card18,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
  {
    propertyId:19,
    image:card19,
    kind:'Sunset Villa',
    price:'$275,000',
    location:'California',
    bedCount:'5',
    bathCount:'4',
    Area:'250m²',
    bedIcon:bedIcon,
    bathIcon:bathIcon,
    livingIcon:livingIcon,

  },
]

// Property Details

export const propDetails = [
  {
    propertyId:1,
    mainImg:card1,
    gallery:blog8,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:2,
    mainImg:card2,
    gallery:blog7,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:3,
    mainImg:card3,
    gallery:blog6,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:4,
    mainImg:card4,
    gallery:blog5,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:5,
    mainImg:card5,
    gallery:blog4,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:6,
    mainImg:card6,
    gallery:blog3,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:7,
    mainImg:card7,
    gallery:blog2,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:8,
    mainImg:card8,
    gallery:blog2,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:9,
    mainImg:card9,
    gallery:blog,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:10,
    mainImg:card10,
    gallery:blog8,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:11,
    mainImg:card11,
    gallery:blog7,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:12,
    mainImg:card12,
    gallery:blog6,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:13,
    mainImg:card13,
    gallery:blog5,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:14,
    mainImg:card14,
    gallery:blog4,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:16,
    mainImg:card16,
    gallery:blog3,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:17,
    mainImg:card17,
    gallery:blog2,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:18,
    mainImg:card18,
    gallery:blog,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },
  {
    propertyId:19,
    mainImg:card19,
    gallery:blog8,
    description:'Aenean facilisis, neque id sagittis volutpat, sapien nibh porttitor neque, et ullamcorper justo lectus tempus neque. Donec maximus dolor mauris, ut lacinia sem blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    happyCustomers:'99%',
    propertySales:'780k',
    award:'160+',
    availlable: [
      {
        residence:'Amazon',
        room:4,
        bath:2,
        view:2,
        floor:1,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Danuble',
        room:4,
        bath:2,
        view:2,
        floor:3,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Volga',
        room:3,
        bath:1,
        view:1,
        floor:4,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Seine',
        room:4,
        bath:2,
        view:1,
        floor:1,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Rhine',
        room:4,
        bath:2,
        view:2,
        floor:2,
        terrace:2,
        layout:'View More'
      },
      {
        residence:'Hudson',
        room:3,
        bath:1,
        view:2,
        floor:3,
        terrace:1,
        layout:'View More'
      },
      {
        residence:'Trigris',
        room:1,
        bath:1,
        view:1,
        floor:2,
        terrace:1,
        layout:'View More'
      },
    ]
  },

]



// Blog Data
export const blogs = [
  {
    id:1,
    title1:'How to Design a User-', 
    title2:'Friendly Interface',
    date:'November 08, 2024',
    link:'Read More',
    image:blog
  },
  {
    id:2,
    title1:'A Guide to Buying Real',
    title2:'Estate in Metropolitan',
    date:'Nov 08, 2025',
    link:'Read More',
    image:blog2,
  }
] 

// Blog List Data
export const blogList = [
   {
    id:1,
    title1:'How to Design a User-', 
    title2:'Friendly Interface',
    date:'November 08, 2024',
    link:'Read More',
    image:blog
  },
  {
    id:2,
    title1:'A Guide to Buying Real',
    title2:'Estate in Metropolitan',
    date:'Nov 08, 2025',
    link:'Read More',
    image:blog2,
  },
  {
    id:3,
    title1:'How to Design a User-', 
    title2:'Friendly Interface',
    date:'November 08, 2024',
    link:'Read More',
    image:blog3
  },
  {
    id:4,
    title1:'A Guide to Buying Real',
    title2:'Estate in Metropolitan',
    date:'Nov 08, 2025',
    link:'Read More',
    image:blog4,
  },
  {
    id:5,
    title1:'How to Design a User-', 
    title2:'Friendly Interface',
    date:'November 08, 2024',
    link:'Read More',
    image:blog5
  },
  {
    id:6,
    title1:'A Guide to Buying Real',
    title2:'Estate in Metropolitan',
    date:'Nov 08, 2025',
    link:'Read More',
    image:blog6,
  },
  {
    id:7,
    title1:'How to Design a User-', 
    title2:'Friendly Interface',
    date:'November 08, 2024',
    link:'Read More',
    image:blog7
  },
  {
    id:8,
    title1:'A Guide to Buying Real',
    title2:'Estate in Metropolitan',
    date:'Nov 08, 2025',
    link:'Read More',
    image:blog8,
  },
] 

// Blog Details Data

export const blogDetails = [
  {
    id:1,
    comments:13,
    date:'28 Aug 2024',
    profImg:profile,
    authorName:'Silicaman',
    mainImg:blog,
  },
  {
    id:2,
    comments:10,
    date:'28 Aug 2025',
    profImg:profile,
    authorName:'Silicaman',
    mainImg:blog2,
  },
  {
    id:3,
    comments:16,
    date:'23 Dec 2025',
    profImg:profile,
    authorName:'Silicaman',
    mainImg:blog3,
  },
  {
    id:4,
    comments:10,
    date:'28 Jan 2023',
    profImg:profile,
    authorName:'Silicaman',
    mainImg:blog4,
  },
  {
    id:5,
    comments:12,
    date:'12 Aug 2025',
    profImg:profile,
    authorName:'Silicaman',
    mainImg:blog5,
  },
  {
    id:6,
    comments:19,
    date:'22 Nov 2023',
    profImg:profile,
    authorName:'Silicaman',
    mainImg:blog6,
  },
  {
    id:7,
    comments:13,
    date:'28 Aug 2025',
    profImg:profile,
    authorName:'Silicaman',
    mainImg:blog7,
  },
  {
    id:8,
    comments:23,
    date:'25 Feb 2024',
    profImg:profile,
    authorName:'Silicaman',
    mainImg:blog8,
  },
]





















