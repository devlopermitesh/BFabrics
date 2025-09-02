import StarIcon from "@/assets/StarIconhigh.png"
import StarHighImage from "@/assets/StarImage.png"
import FashionIcon from "@/assets/FashionIconHigh.png"
import FashionImage from "@/assets/FashionHighImage.png"
import LaughIcon from "@/assets/LaughFaceicon.png"
import LaughImage from "@/assets/LaughtImage.png"
import TrophyIcon from "@/assets/TrophyIcon.png"
import TrophyImage from "@/assets/TrophyImage.png"
import pencilIcon from "@/assets/PencilHighIcon.png"
import pencilImage from "@/assets/PencilImage.png"
import BrightIcon from "@/assets/brightIcon.png"
import BrightImage from "@/assets/BrightIconImage.png"
import Star3 from "@/assets/star3.png"
import Star2 from "@/assets/star2.png"
import Star1 from "@/assets/star1.png"
import ProductImage from "@/assets/ProductImage.png"
import testimonalUser from "@/assets/Boytestimonal.png"
import bgCard from "@/assets/BgCard.png"
export interface ImageItem {
  _id: string;
  url: string;
}

export const fakeSnapImages: ImageItem[] = [
  { _id: "1", url: "https://i.ibb.co/60TzGGZG/Screenshot-2025-09-02-093049.png" },
  { _id: "2", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MPzWjltaz6nmd4I2kBgEOCTLkho260p4vA&s" }
];


export const fakeCounterStatics=[
    {
        category:["All","MAN","WOMAN","KIDS"],
        punchLine:"Elevate Your Style with StyleLoom",
        descrption:"Explore a world of fashion at StyleLoom, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.",
        Statics:[
            {
                name:"Fashion Products",
                count:"1,500"
            },
            {
                name:"New arrivals every month.",
                count:"50"
            },
            {
                name:"OFF on select items.",
                count:"30%"
            },
             {
                name:"Customer Satisfaction Rate.",
                count:"95%"
            }
        ]
    }
]

export const fakeHighlightFeatures=[
    {
        punchLine:"Crafting Trends, Inspiring Confidence",
        descp:"Explore a world of fashion at StyleLoom, where trends meet affordability.",
        Features:[
            {
                cardType:"HighIconLight",
                icon:StarIcon.src,
                iconHighImage:StarHighImage.src,
                heading:"Passionate Craftsmanship",
                desc:"Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation."
            },
            {
                cardType:"HighIconLight",
                icon:FashionIcon.src,
                iconHighImage:FashionImage.src,
                heading:"Fashion Forward",
                desc:"We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence."
            },
            {
                cardType:"HighIconLight",
                icon:LaughIcon.src,
                iconHighImage:LaughImage.src,
                heading:"Customer-Centric Approach",
                desc:"At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success."
            },
            {
                cardType:"HighIconLight",
                icon:TrophyIcon.src,
                iconHighImage:TrophyImage.src,
                heading:"Global Inspiration",
                desc:"Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world."
            },
            {
               cardType:"HighIconLight",
                icon:pencilIcon.src,
                iconHighImage:pencilImage.src,
                heading:"Empowering Your Style",
                desc:"Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion"
            },
            {
                cardType:"HighIconLight",
                icon:BrightIcon.src,
                iconHighImage:BrightImage.src,
                heading:"Sustainable Practices",
                desc:"StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process."
            }
        ]
    }
]

export const fakeWorkflowSteps=[
    {
        punchLine:"Navigating the StyleLoom Fashion Journey. ",
        descp:"At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.",
        imageCover:Star2.src,
        Steps:[
            {
                heading:"Discover Trends",
                descp:"Explore our curated collection of over 1000 styles, spanning global fashion trends."
            },
            {
                heading:"Effortless Navigation",
                descp:"Intuitive filters and categories help you find the perfect pieces tailored to your style."
            },
            {
                heading:"Secure Checkout",
                descp:"Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase."
            },
            {
                heading:"Unbox Happiness",
                descp:"Unbox a fashion-forward experience delivered right to your door, ready to elevate your style."
            }
        ]

    }
]

export const fakeCollectionProducts = [
  {
    punchLine: "Elevate Your Style with Our Latest Collection",
    descp: "Each piece is crafted to enhance your fashion statement.",
    imageCover: Star1.src,
    category: ["All", "MAN", "WOMAN", "KIDS"],
    products: [
      {
        id: 1,
        image: ProductImage.src,
        name: "Timeless A-line Evening Dress",
        descp: "Silky to wear and cotton fine",
        category: "WOMAN",
        Fit: "Ankle-length",
        price: "104",
        current: "$",
      },
      {
        id: 2,
        image: ProductImage.src,
        name: "Classic White Cotton Shirt",
        descp: "Perfect for office and casual outings",
        category: "MAN",
        Fit: "Regular",
        price: "49",
        current: "$",
      },
      {
        id: 3,
        image: ProductImage.src,
        name: "Denim Slim Fit Jeans",
        descp: "Durable fabric with a modern cut",
        category: "MAN",
        Fit: "Slim",
        price: "79",
        current: "$",
      },
      {
        id: 4,
        image: ProductImage.src,
        name: "Floral Summer Dress",
        descp: "Lightweight & breathable design",
        category: "WOMAN",
        Fit: "Knee-length",
        price: "89",
        current: "$",
      },
      {
        id: 5,
        image: ProductImage.src,
        name: "Kids Cartoon Print T-shirt",
        descp: "Soft cotton fabric with fun prints",
        category: "KIDS",
        Fit: "Casual",
        price: "25",
        current: "$",
      },
      {
        id: 6,
        image: ProductImage.src,
        name: "Casual Sneakers",
        descp: "Comfortable all-day wear shoes",
        category: "MAN",
        Fit: "Standard",
        price: "65",
        current: "$",
      },
      {
        id: 7,
        image: ProductImage.src,
        name: "Woolen Winter Scarf",
        descp: "Stay warm with premium wool",
        category: "WOMAN",
        Fit: "One-size",
        price: "35",
        current: "$",
      },
      {
        id: 8,
        image: ProductImage.src,
        name: "Kids Denim Jacket",
        descp: "Trendy & durable outerwear",
        category: "KIDS",
        Fit: "Regular",
        price: "55",
        current: "$",
      },
    ],
  },
];

export const FakeTestinomal = [
  {
    punchLine: "The StyleLoom Testimonial Collection.",
    descp: "At StyleLoom, our customers are the heartbeat of our brand.",
    imageCover: Star3,
    testimonals: [
      {
        user: {
          _id: 1,
          name: "Sara K",
          coverImage: testimonalUser.src,
        },
        rate: 4,
        comment:
          "StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
      },
      {
        user: {
          _id: 2,
          name: "Daniel R",
          coverImage: testimonalUser.src,
        },
        rate: 5,
        comment:
          "Amazing craftsmanship! My suit fits perfectly and I received so many compliments at the event.",
      },
      {
        user: {
          _id: 3,
          name: "Emily W",
          coverImage: testimonalUser.src,
        },
        rate: 5,
        comment:
          "The fabric feels luxurious, and the attention to detail is unmatched. Will definitely shop again.",
      },
      {
        user: {
          _id: 4,
          name: "James L",
          coverImage: testimonalUser.src,
        },
        rate: 3,
        comment:
          "Overall good quality, but shipping took a little longer than expected. Still happy with my purchase.",
      },
      {
        user: {
          _id: 5,
          name: "Aisha M",
          coverImage: testimonalUser.src,
        },
        rate: 5,
        comment:
          "Absolutely in love with my dress! Fits like a dream and the customer service team was so helpful.",
      },
      {
        user: {
          _id: 6,
          name: "Carlos P",
          coverImage: testimonalUser.src,
        },
        rate: 4,
        comment:
          "Stylish and comfortable — I wore my new jacket on a trip and got tons of compliments.",
      },
    ],
  },
];


export const FakeFAQ = [
  {
    punchLine: "Have Questions? We Have Answers.",
    descp: "Ease into the world of StyleLoom with clarity. Our FAQs cover a spectrum of topics.",
    imagecover: Star1.src,
    category: ["All", "Ordering", "Shipping", "Return", "Support"],
    Question: [
      // Ordering
      {
        question: "How can I place an order on StyleLoom?",
        answer:
          "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
        category: "Ordering",
      },
      {
        question: "Can I modify my order after placing it?",
        answer:
          "Yes, you can make changes within 1 hour of placing your order by contacting our support team. After that, it may already be in processing.",
        category: "Ordering",
      },

      // Shipping
      {
        question: "What are the available shipping options?",
        answer:
          "We offer standard and express shipping. Delivery timelines vary depending on your location, typically between 3–7 business days.",
        category: "Shipping",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to over 30 countries worldwide. Shipping costs and delivery times depend on the destination.",
        category: "Shipping",
      },

      // Return
      {
        question: "What is your return policy?",
        answer:
          "You can return products within 7 days of delivery as long as they are unused, unwashed, and in original packaging.",
        category: "Return",
      },
      {
        question: "How long does it take to process a refund?",
        answer:
          "Refunds are processed within 5–7 business days after we receive your returned item.",
        category: "Return",
      },

      // Support
      {
        question: "How can I contact customer support?",
        answer:
          "You can reach us via live chat, email (support@styleloom.com), or by calling our helpline available Mon–Sat, 10am–7pm.",
        category: "Support",
      },
      {
        question: "Do you offer support for bulk or wholesale orders?",
        answer:
          "Yes! For bulk or wholesale inquiries, please reach out to our dedicated sales team at sales@styleloom.com.",
        category: "Support",
      },
    ],
  },
];

export const FakenewAddition=[
    {
        additionType:"visitNew",
        background:"#C2B4A3",
        heading:"elevate your wardrobe",
        descp:"Don't miss out – experience the epitome of fashion by clicking 'Buy Now' and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.",
        ImageCover:bgCard.src,
        visithref:"/newArrival",
        visitTitle:"Shop Now"
    }
]
export const FlipSlip = [
  "Kurta Classic",
  "DesiFusion Tee",
  "Nehru Collar Casual",
  "Angrakha Style Shirt",
  "Bandhani Print Top",
  "Khadi Comfort Tee",
  "Jodhpuri Sleeve Shirt",
  "Pathani Cut Casual",
  "IndieBlock Print Tee",
  "Sufi Kurta Fit",
  "Rajwadi Collar Tee",
  "ChikanKari Casual",
  "Bollywood Retro Tee",
  "Street Desi Tee",
  "Indigo Dye Shirt"
];
