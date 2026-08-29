import './style.css';
import './phone.css';
import Navbar from './Components/1navbar.jsx';
import Home from './Components/2home.jsx';
import BestSellers from './Components/3.best_sellers.jsx';
import Service from './Components/4service.jsx';
import Signin from './Components/5signin.jsx';
import Contact from './Components/6contact.jsx';
import Footer from './Components/7footer.jsx';
import {useState} from 'react';
// import Productcart from './Components/8.productcart.jsx';



function App() {


// Enable Dark Mode feature Step 1: setting our state ,purpose:(Whether dark mode is enable or not)
  const[mode,setMode] = useState('light') ;

// Creating state for multiple language feature
const[language,setLanguage]= useState("en");


// All website translation
      const text ={
en:{
          // For Navbar Component
          home:"Home",
          services:"Services",
          contact:"Contact Us",
          login:"Login",
          signin:"Sign in",

          // For Home Component
          title:"Welcome To Indian Indian Kitchen Asma",
          homedescription:"Enjoy the rich taste of restaurant-style food, freshly prepared with homemade love, care, and hygiene",
          ordernow:"Order Now",       

          // For Best Sellers Component 
          bestsellers:"Best Sellers",
          currency:"₹",
          dish1:"Chicken Biryani",
          price1:140,
          dish2:"Chicken Nahari",
          price2:110,
          dish3:"2 Tandoori Leg Piece",
          price3:120,
          dish4:"Paneer Biryani",
          price4:150,
          dish5:"Tandoori Paneer Tikka",
          price5:160,
          dish6:"Pav Bhaji",
          price6:100,
          dish7:"Shahi Tudka",
          price7:90,
          dish8:"Malai Kheer",
          price8:90,
          cart:"Add To Cart",

          // For Service Component 
          ourservices:"Our Services",
          heading1:"Food Ordering",
          description1:"We provide delicious and hygienically prepared food for weddings, parties, family gatherings, and other special occasions, bringing quality taste and warm hospitality to every event.",
          heading2:"Food Catering",
          description2:"Enjoy freshly prepared meals made with quality ingredients, authentic flavors, and careful attention to taste, freshness, and hygiene for a satisfying dining experience. ",
          heading3:"Free Delivery",
          description3:"Enjoy your favorite meals delivered fresh and conveniently to your doorstep. Get free delivery on orders above ₹249.",

          // For Signin Form Heads Component 
          name:"Name :",
          email:"Email :",
          phno:"Phone Number",
          address:"Address",

          // Forms Place holder
          namep:"Enter Your Name",
          emailp:"Enter Your Email",
          phnop:"Enter Your Phone Number",

          submit:"Submit",

          // and , Characters
          and:" and ",
          char:"Characters",

          // footer Us Component
          footer:"Copyright © www.IndianKitchenAsma.com .All Rights Reserved!"



          
        },
      
      hi: {
              // For Navbar Component
              home: "होम",
              services: "सेवाएँ",
              contact: "संपर्क करें",
              login: "लॉगिन",
              signin: "साइन इन",

              // For Home Component
              title: "इंडियन किचन अस्मा में आपका स्वागत है",
              homedescription: "रेस्तरां जैसे स्वाद का आनंद लें, जो घर के प्यार, देखभाल और स्वच्छता के साथ ताज़ा तैयार किया जाता है",
              ordernow: "अभी ऑर्डर करें",

              // For Best Sellers Component
              bestsellers: "सबसे पसंदीदा व्यंजन",
              currency:"₹",
              dish1: "चिकन बिरयानी",
              price1:  140,
              dish2: "चिकन निहारी",
              price2: 110,
              dish3: "2 तंदूरी लेग पीस",
              price3: 120,
              dish4: "पनीर बिरयानी",
              price4: 150,
              dish5: "तंदूरी पनीर टिक्का",
              price5: 160,
              dish6: "पाव भाजी",
              price6: 100,
              dish7: "शाही टुकड़ा",
              price7: 90,
              dish8: "मलाई खीर",
              price8: 90,
              cart: "कार्ट में जोड़ें",

              // For Service Component
              ourservices: "हमारी सेवाएँ",
              heading1: "खाना ऑर्डर करना",
              description1: "हम शादियों, पार्टियों, पारिवारिक समारोहों और अन्य विशेष अवसरों के लिए स्वादिष्ट और स्वच्छता से तैयार भोजन प्रदान करते हैं, जो हर आयोजन में बेहतरीन स्वाद और गर्मजोशी भरी मेहमाननवाज़ी लाता है।",
              heading2: "खाद्य कैटरिंग",
              description2: "गुणवत्तापूर्ण सामग्री, प्रामाणिक स्वाद और स्वाद, ताज़गी व स्वच्छता पर विशेष ध्यान देकर तैयार किए गए ताज़ा भोजन का आनंद लें।",
              heading3: "मुफ़्त डिलीवरी",
              description3: "अपने पसंदीदा भोजन को ताज़ा और सुविधाजनक तरीके से अपने दरवाज़े तक मंगवाएँ। ₹249 से अधिक के ऑर्डर पर मुफ़्त डिलीवरी पाएँ।",

              // For Signin Form Heads Component
              name: "नाम :",
              email: "ईमेल :",
              phno: "फ़ोन नंबर",
              address: "पता",

              // Forms Place holder
              namep: "अपना नाम दर्ज करें",
              emailp: "अपना ईमेल दर्ज करें",
              phnop: "अपना फ़ोन नंबर दर्ज करें",

              submit: "सबमिट करें",

              // and , Characters
              and: " और ",
              char: "अक्षर",

              // footer Us Component
              footer: "कॉपीराइट © www.IndianKitchenAsma.com .सर्वाधिकार सुरक्षित!"
            },

            gu: {
              // For Navbar Component
              home: "હોમ",
              services: "સેવાઓ",
              contact: "અમારો સંપર્ક કરો",
              login: "લૉગિન",
              signin: "સાઇન ઇન",

              // For Home Component
              title: "ઇન્ડિયન કિચન અસ્મામાં આપનું સ્વાગત છે",
              homedescription: "ઘરના પ્રેમ, કાળજી અને સ્વચ્છતા સાથે તાજું તૈયાર કરવામાં આવેલા રેસ્ટોરન્ટ જેવા સ્વાદનો આનંદ માણો",
              ordernow: "હમણાં ઓર્ડર કરો",

              // For Best Sellers Component
              bestsellers: "સૌથી વધુ પસંદગીના વ્યંજન",
              currency:"₹",
              dish1: "ચિકન બિરયાની",
              price1: 140,
              dish2: "ચિકન નેહારી",
              price2: 110,
              dish3: "2 તંદૂરી લેગ પીસ",
              price3: 120,
              dish4: "પનીર બિરયાની",
              price4: 150,
              dish5: "તંદૂરી પનીર ટિક્કા",
              price5: 160,
              dish6: "પાવ ભાજી",
              price6: 100,
              dish7: "શાહી ટુકડો",
              price7: 90,
              dish8: "મલાઈ ખીર",
              price8: 90,
              cart: "કાર્ટમાં ઉમેરો",

              // For Service Component
              ourservices: "અમારી સેવાઓ",
              heading1: "ફૂડ ઓર્ડરિંગ",
              description1: "અમે લગ્ન, પાર્ટીઓ, પારિવારિક સમારંભો અને અન્ય ખાસ પ્રસંગો માટે સ્વાદિષ્ટ અને સ્વચ્છતાપૂર્વક તૈયાર કરેલું ભોજન પૂરું પાડીએ છીએ, જે દરેક પ્રસંગમાં ઉત્તમ સ્વાદ અને ઉષ્માભરી મહેમાનગતિ લાવે છે.",
              heading2: "ફૂડ કેટરિંગ",
              description2: "ગુણવત્તાયુક્ત સામગ્રી, અસલ સ્વાદ અને સ્વાદ, તાજગી તથા સ્વચ્છતા પર વિશેષ ધ્યાન આપીને તૈયાર કરવામાં આવેલા તાજા ભોજનનો આનંદ માણો.",
              heading3: "મફત ડિલિવરી",
              description3: "તમારું મનપસંદ ભોજન તાજું અને સુવિધાજનક રીતે તમારા ઘર સુધી મંગાવો. ₹249થી વધુના ઓર્ડર પર મફત ડિલિવરી મેળવો.",

              // For Signin Form Heads Component
              name: "નામ :",
              email: "ઈમેલ :",
              phno: "ફોન નંબર",
              address: "સરનામું",

              // Forms Place holder
              namep: "તમારું નામ દાખલ કરો",
              emailp: "તમારું ઈમેલ દાખલ કરો",
              phnop: "તમારો ફોન નંબર દાખલ કરો",

              submit: "સબમિટ કરો",

              // and , Characters
              and: " અને ",
              char: "અક્ષરો",

              // footer Us Component
              footer: "કૉપિરાઇટ © www.IndianKitchenAsma.com .સર્વાધિકાર સુરક્ષિત!"
            },

            ch: {
              // For Navbar Component
              home: "首页",
              services: "服务",
              contact: "联系我们",
              login: "登录",
              signin: "注册",

              // For Home Component
              title: "欢迎来到 Indian Kitchen Asma",
              homedescription: "享受餐厅级的美味，每道菜都以家的温暖、用心和卫生标准新鲜制作",
              ordernow: "立即订购",

              // For Best Sellers Component
              bestsellers: "畅销美食",
              currency:"¥",
              dish1: "鸡肉印度香饭",
              price1: 9.83,
              dish2: "鸡肉尼哈里",
              price2: 7.73,
              dish3: "2 块坦都里鸡腿",
              price3: 8.43,
              dish4: "芝士印度香饭",
              price4: 10.57,
              dish5: "坦都里芝士块",
              price5: 11.28,              
              dish6: "印度香料蔬菜泥配面包",
              price6: 7.02,
              dish7: "皇家甜面包布丁",
              price7: 6.32,
              dish8: "奶油米布丁",
              price8: 6.32,
              cart: "加入购物车",

              // For Service Component
              ourservices: "我们的服务",
              heading1: "美食订购",
              description1: "我们为婚礼、派对、家庭聚会和其他特殊场合提供美味且卫生的餐食，以优质的口味和热情周到的服务，为每个活动带来美好的用餐体验。",
              heading2: "餐饮服务",
              description2: "享用采用优质食材、新鲜制作的美食，融合正宗风味，并注重口感、新鲜度和卫生，为您带来满意的用餐体验。",
              heading3: "免费配送",
              description3: "您喜爱的美食新鲜、便捷地送到家门口。订单金额超过 ¥17.49 可享受免费配送。",

              // For Signin Form Heads Component
              name: "姓名：",
              email: "电子邮件：",
              phno: "电话号码",
              address: "地址",

              // Forms Place holder
              namep: "请输入您的姓名",
              emailp: "请输入您的电子邮件",
              phnop: "请输入您的电话号码",

              submit: "提交",

              // and , Characters
              and: " 和 ",
              char: "字符",

              // footer Us Component
              footer: "版权所有 © www.IndianKitchenAsma.com .保留所有权利！"
      },
            ur: {
            // For Navbar Component
            home: "ہوم",
            services: "خدمات",
            contact: "ہم سے رابطہ کریں",
            login: "لاگ اِن",
            signin: "سائن اِن",

            // For Home Component
            title: "انڈین کچن اسما میں خوش آمدید",
            homedescription: "گھر جیسی محبت، خیال اور صفائی کے ساتھ تازہ تیار کیا گیا ریستوران کے ذائقے والا مزیدار کھانا",
            ordernow: "ابھی آرڈر کریں",

            // For Best Sellers Component
            bestsellers: "سب سے زیادہ پسند کیے جانے والے کھانے",
            currency: "₹",

            dish1: "چکن بریانی",
            price1: 140,

            dish2: "چکن نہاری",
            price2: 110,

            dish3: "2 تندوری لیگ پیس",
            price3: 120,

            dish4: "پنیر بریانی",
            price4: 150,

            dish5: "تندوری پنیر ٹکہ",
            price5: 160,

            dish6: "پاؤ بھاجی",
            price6: 100,

            dish7: "شاہی ٹکڑا",
            price7: 90,

            dish8: "ملائی کھیر",
            price8: 90,

            cart: "کارٹ میں شامل کریں",

            // For Service Component
            ourservices: "ہماری خدمات",

            heading1: "کھانے کا آرڈر",
            description1: "ہم شادیوں، پارٹیوں، خاندانی تقریبات اور دیگر خاص مواقع کے لیے مزیدار اور حفظانِ صحت کے اصولوں کے مطابق تیار کیا گیا کھانا فراہم کرتے ہیں۔",

            heading2: "فوڈ کیٹرنگ",
            description2: "معیاری اجزاء، روایتی ذائقوں اور صفائی کا خاص خیال رکھتے ہوئے تازہ تیار کیے گئے کھانوں سے لطف اندوز ہوں۔",

            heading3: "مفت ڈیلیوری",
            description3: "اپنے پسندیدہ کھانے تازہ اور آسانی سے اپنے دروازے تک منگوائیں۔ ₹249 سے زیادہ کے آرڈر پر مفت ڈیلیوری حاصل کریں۔",

            // For Signin Form Heads Component
            name: "نام :",
            email: "ای میل :",
            phno: "فون نمبر",
            address: "پتہ",

            // Forms Placeholder
            namep: "اپنا نام درج کریں",
            emailp: "اپنا ای میل درج کریں",
            phnop: "اپنا فون نمبر درج کریں",

            submit: "جمع کریں",

            // And, Characters
            and: " اور ",
            char: "حروف",

            // Footer
            footer: "کاپی رائٹ © www.IndianKitchenAsma.com۔ جملہ حقوق محفوظ ہیں!"
          },
};


// step 3 Changing our mode by using condtional statements 
    const toggleMode = ()=>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#061625";

    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";

    }

  }
  return (
    
  <>
  {/* step 2 passing our mode  */}
  {/* step 4 passing toggleMode for our dark mode light mode ,We will use this toggle in our button */}
  <Navbar mode={mode} toggleMode={toggleMode} language={language} text={text} setLanguage={setLanguage} /> 

  <Home language={language} text={text} setLanguage={setLanguage}/> 

  <BestSellers mode={mode} language={language} text={text} setLanguage={setLanguage}/>
  <Service mode={mode} language={language} text={text} setLanguage={setLanguage}/>
  <Signin mode={mode} language={language} text={text} setLanguage={setLanguage}/>
  <Contact mode={mode} language={language} text={text} setLanguage={setLanguage}/>
  <Footer language={language} text={text} setLanguage={setLanguage}/>
  {/* <Productcart language={language} text={text} setLanguage={setLanguage}/> */}
  </>
    
  );
}

export default App;
