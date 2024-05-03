  function slidehome()
  {
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }


  }
    display('home');


      function display(sidname)
      {

        let maincontenHTML=document.querySelector('.js-stumaincontent')
        let homeHTML=''
          if(sidname==='history') 
          {
             const homeHTML=`<h1>የኤረር በር ምሥራቀ ፀሐይ ቅዱስ ዑራኤል ቤተ ክርስቲያን አመሠራረት ታሪካዊ ዳራ </h1>
            <p>
             <h2>ምዕራፍ አንድ<h2>
              
               </p>
               <p>የኤረር በር ምሥራቀ ፀሐይ ቅዱስ ዑራኤል ቤተ ክርስቲያን  ከመተከሉ በፊት የአካቢበው  ምእመናን ከወንዙ ባሻገር  በሚገኘው የቅዱስ ገብረኤል ቤተ ክርስቲያን አጥቢያ የሚተዳደሩ ነበሩ ፤የቅዱስ ገብርኤል ቤተ ክርስቲያን አሁን ካለበት ወዲህ ማዶ በመሻገር ለ2 ዓመታት የዑራኤል ቤተ ክርስቲያን  ያለበትን ቦታ እየባረከ የጥምቀት በዓልን ከፍ ብሎ በሚገኘው የምስማር  ፋብሪካ ያድር ነበር፡፡ 
             
               በ1993 ዓ.ም. የጥምቀት ባሕሩ አወጣጥ በተለያዩ ምክንያቶች በመቋረጡ የኤረር በር አካባቢ ምዕመናን በመገናኘት በአካባቢው ይኖሩ ከነበሩት የመሬት ባለ ይዞታዎች ከነበራቸው መሬት በበጎ አድራጎት መልክ እንዲሰጡ በመጠየቅ ለበተ ክርስቲያን  ግንባታ ሰጡ፡፡ የተሰጠውን የመሬት ሥጦታ ምዕመኑ በመረከብ በቦታው ላይ መተከል የሚገባውን ታቦት በመመካከር የትኛው ታቦት መተከል እንዳለበት ከፍተኛ መንፈሳዊ ውይይት አድርገው የቅዱስ ዑራኤል ታቦት ተመረጠ፡፡ የተመረጠውን ታቦት ለመትከል በተደረገው እንቅስቃሴ የአጽራር ቤተ ክርስቲያን አቋም ባላቸው  ግለሰቦች መቃኞው ሁለት ጊዜ እንዲፈርስ ሆኗል፡፡
               
               የአጥቢያው ምዕመናን በመሥራች ኮሚቴውና በደጅ ጠኝ ካህናት ባልተቆጠበ ፍጽም በሆነ ቆራጥነት፣ እልህ አስጨራሽ ከፍተኛ መስዋትነት እና ተጋድሎ ከተደረገ በኋላ መስከረም 1 ቀን 1998 ዓ.ም በእለተ እሁድ የቅዳሴ ቤቱ መቃኞ ተገንብቶ ታቦተ ህጉ ገብቶ  አገልግሎት መስጠት ጀመረ፡፡ </P>
                <p> 
                <h2>ምዕራፍ ሁለት </h2>

                ቤተ ክርስቲያኑ እንደተተከለ የአዲስ አበባ ሀገረ ስብከት ለአጥቢያው እውቅና በመስጠት አስተዳዳሪና ልዩ ልዩ ክፍል ሠራተኞች መደቦ፣ የሰበካ ጉባኤ አቋቁሞ አገልግሎቱ በተሟላ ሁኔታ እንዲከናወን አድርጓል፡፡ ከዚያም በመቀጠል በሰበካው መንፈሳዊ ጉባኤ አስተዳደርና በምዕመናን በተደረገው ከፍተኛ እንቅስቃሴ ቤተ ክርስቲያኑ ያረፈበትን  8467 ካሬ ሜትር ቦታ ሰኔ 1998 ዓ.ም. ከአዲስ አበባ ከተማ መስተዳደር ለቤተ ክርስቲያኑ ተሰጠ፡፡ 
                የሰበካ መንፈሳዊ አስተዳደር ጉባኤው የሥራው መጀመሪያ በማድረግ የሕንጻ አሰሪ ኮሚቴ በመቋቋም የቤተ ክርስቲያንኑ ሕንጻ ግንባታ ለማፋጠን ይፋዊ እንቅስቃሴ ማድረግ ጀመረ፡፡ በቤተ ክርስቲያኗ አሳሳቢነት መጋቢት 1/2005 ዓ.ም. የወቅቱ ሊቀ ጳጰስ በሆኑት በብፅዑ አባታችን አቡነ ዳንኤል የአዲስ አበባ ሀገረ ስብከት ሊቀ ጳጰስ እና የቅዱስ ሲኖደስ አባል የቤተ-ክርስቲያኑ መሰረት ተጣለ፡፡
                

                በዚሁ መሠረት የሚገነባው የህንጻ ቤተ ክርስቲያን የሥራ ፈቃድ ይገኝ ዘንድ በበጎ አድራጊ የዲዛይን ባለሙያዎች የቤተ ክርስቲያኑ ዲዛይን በነጻ ተሠርቶ ቀረበ፡፡ ሆኖም ይህ ዲዛይን ከቦታው አጠቃቀም ጋር ሲገናዘብ ጠቀሜታው ዝቅተኛ  በመሆኑና እንደታሰበው በአስቸኳይ ወደ ግንባታ መግባት ስላልተቻለ ሊዘገይ ችሏል፡፡  
                 </p>`
                 maincontenHTML.innerHTML=homeHTML;
          }

          else if(sidname==='New') 
          {
             const homeHTML=`<h1>የአዲሱ ቤተ ክርስቲያን  ግንባታ እንቅስቃሴ ሂደት በአጭሩ </h1>
            <p>
             <h2>ምዕራፍ አንድ<h2>
              
               </p>
               <p> 
               ጥር 1/2008 ዓ.ም. ለቤተ ክርስቲያኗ አደሲ በተመደቡት አባት በመላእከ ገነት ዘማርያም ሙጬ፣ በሰበካ ጉባኤውና  በህንጻ አሰሪ ኮሚቴ በተደረገው ከፍተኛ እንቅስቃሴ አዲስ የህንጻ አሰሪ ኮሚቴ በድጋሜ ተዋቅሮ አዲስ የግንባታ ንቅናቄ ተጀመረ፡፡

አዲሱን ግንባታ  ለመጀመር በተደረገው መንፈሳዊ ንቅናቄ በአዲስ አበባ አስተዳደርና በቦሌ ከ/ከተማ የመሬት አስተዳደር በተፈጠረው የቦታ ተደራራቢነት ስህተት የቦታው ስፋት በድጋሜ እንዲስተካከል ተደርጎ አሁን በቤተ ክርስቲያኗ ይዞታ ሥር የሚገኘውን 4603 ካሬ ሜትር ይዞታዋ መሆኑ ተረጋገጠ፡፡

በ2005 ዓ.ም ቀደም ብሎ የተዘጋጀው ዲዛይን ከቦታው ተፈጠረዊ ገጽታ አንጻር እና ከሚሰጠው ጠቀሜታ አንጻር ሲታይ የሚያሰራ ባለመሆኑ ከምዕመናን፣ ከሰበካ ጉባኤ፣ ከህንጻ አሰሪ ኮሚቴ፣  ከዲዛይነሮች፣ ከኮንትራክተሮች ጋር የጋራ የምክክር ውይይት ተደረጎ አዲስና አዋጭ ዲዛይን እንዲሠራ ስምምነት ላይ ተደረሰ፡፡

አዲሱ ዋና ሕንጻ ቤተ ክርስቲያን ይሰራ ዘንድ ቦታውን ለማመቻቸት መጀመሪያ የነበረው መቀኞ ፈርሶ መልቀቅ ስለነበረበት ከየካቲት 15 እስከ 27/2008 ወደ አዲሱ መቃኞ ቤተ ክርስቲያን ታቦተ ህጉ እንዲዛወር ተደርጓል፡፡

ከመቃኞ ቤተ ክርስቲያኑ ጎን ለጎን ለተለያዩ አገልግሎት የሚያስፈልጉ ቤተልሄም፣  ግብር ቤት፣ የማስቀደሻ አዳራሽ፣ የክርስትና ቤት፣ የመጸዳጃ ቤት፣ የጥበቃ ማማ፣ መለስተኛ የዕቃ መጋዘን፣ ካህናት ማረፊያ ፣ የሕንጻ አሰሪ ቢሮ፣ የተለያዩ የሙዳይ ምጸዋት መቀበያ ሣጥኖች እና ልዩ ልዩ ጽ/ቤቶች  ተሠርተዋል፡፡

በአዲስ መልክ ለሚገነባው ቤተ ክርሲቲያን አዲስ ዲዛይን ለማሰራት በተደረገው ስምምነት ጨረታ  የዲዛይን ውድድር ተደርጎ አሸናፊው ድርጅት ተለይቶ፣  ውል በመፈጸም  ተፈጽሞ ዲዛይኑ ተሠርቶ ክፍያ ተከፍሎ ዲዛይኑን መረከባችንን እና በዲዛይኑ መሠረት ግንባታ ተጀመረ፡፡


ቤተ ክርስቲያኗ የተረከበችው ቦታ ቀደም ሲል በምልስ አፈር የተሞላ በመሆኑ በዲዛይኑ መሠረት ከ650 ገልባጭ መኪና አፈር ተነስቷል፡፡ ፈታኝና አድካሚ የሆኑ የመዘጋጃ ቤት ስራዎች ተከናውኖ ጥቅምት 7 ቀን 2010 ዓ.ም. ግንባታ ፍቃድ ተገኝቷል፡፡ 

ሐምሌ 30 ቀን 2009 ዓ.ም የዲዛይን ጨረታ አሸናፊ ከሆነው ሴይ አማካሪዎች ኃ/የተ/የግ/ማህበር ከሚባል አማካሪ ድርጅት የተዘጋጀውን የቤተ ክርስቲያኗን እና ተጓዳኝ የህንጻውን የተለያዩ የዲዛይን ንድፎችን ተረክበናል፡፡
የቤተ ክርስቲያኑን መሠረት የተሟላና ጥንካሬውን የጠበቀ እንዲሆን ያፈር ምርመራ ጨረታ ወጥቶ ከአሸናፊው ድርጅት ጋር ውል ተፈርሞ የምርመራ ውጤት ለመዘጋጃ ቤት እንዲላክ ተደርጓል፡፡ 

በጥር ወር 2010 ዓ.ም  የግንባታ ቁጥጥር አማካሪ ድርጅትና ቤተ ክርስቲያን ሕንጻ የሚገነባ  የሕንጻ ተቋራጭ በጨረታ በመለየት በተደረገው ጥረት ተቆጣጣሪ መሀንዲስና ኮንትራክተር በውድድር  በመምረጥ ውል ተፈርሞ ወደ ሥራው ተገብቷል፡፡

በየካቲት 2010 ዓ.ም. ከግንባታ ፈቃድና ቁጥጥር መ/ቤት  የግንባታ ማስጀመሪያ ፍቃድ ተገኝቶ የካቲት 1 ቀን 2010 ዓ.ም  ሥራው ተጀምሯል፡፡ 
 </P>
                <p> 
                <h2>ምዕራፍ ሁለት </h2>

                የአዲሱ ቤተ  ክርስቲየን ገጽታ፤- 

አዲሱ ቤተ ክረስቲያን እጅግ ዘመናዊ በዓይነቱና በመሰረታዊ አወቃቀሩ አደረጃጀቱ፣ ከቀደምት አብያተ ክርስቲያናት በገጽታም ሆነ በቦታ አቀማመጡና አጠቃቀሙ፣ ማለትም በእስትራክቸራል፣ በኤሌክትሪካል፣ በሳኒቴሪ ዲዛይኖቹ ዘመኑ የደረሰባቸውን ቴክኖሎጂዎች በመጠቀም የሚገነባ ሕንጻ ሆኖ የተቀረጸ በመሆኑና፤ዘመናዊ ቴክኖሎጂ ከመጠቀሙም በላይ ከፍተኛ መዋለ ንዋይ የሚጠይቅ፣ ለቀጣዩ ትውልድ ትልቅ አሻራ የሚጥልና በዚህ ትውልድ የሚገነባ ታሪካዊ ቅርስ ጭምር ነው፡፡

የቤተ ክርስቲያኑ የሚገኙ አገልግሎቶችና ገጽታዎች፤ 
የቤተ ክርስቲያኑ አጠቃላይ ግንባታ የሚያርፍበት ቦታ 600 ካሬ ሜትር ሲሆን ከ1ኛ ወለል አስከ 3ኛ ወለል ወደ ምድር 13.59 ሜትር ከፍታ ያለው ሲሆን ከወለል በላይ ከመስቀሉ ወጪ 29.06 ሜትር  ከፍታ ያለው መሆኑ ከዲዛይኑ ማረጋገጥ ተችሏል፡፡

በዋነው ቤተ- ክርሲቲያኑ የሚሰጡ አገልግሎቶችና የሚገነቡ  ግንባታዎች ከመሬት ወለል በላይ
ቤተልሄም ፣በየማዕዘናቱ የሚገነቡ ውብ የሆኑ ባለ ሦስት ወለል ማስቀደሻ ገረገራዎች፤
ደውል ቤት፣ የወንዶችና የሴቶች ማስቀደሻ፣ የማስቀደሻ ሠገነት፣ ለተለያዩ አገልግሎቶች  የሚውሉ ቢሮዎች፣ የቅኔ ማህሌት፣ ቅድስት መቅደስና ወዘተ፣ ናቸው
የመጀመሪያ ቤዝመንት ላይ የሚገኙ አገልግሎቶች
የአብነት መንፈሳዊ ት/ቤት፣
የመሰብሰቢያ አዳራሾች፣
የወንድና የሴት ፀበል ቤት፣
ክርስትና ማስነሻ ቤት፣
ቅኔ ማህሌት 2ኛ፣
ግብር ቤት፣
የወንድና የሴት መጸዳጃ ቤቶች፣ ወዘተ፣ ናቸው

ሁለተኛና ሦስተኛ ቤዝመንት ላይ የሚገኙ አገልግሎቶች

የምዕመናን የመኪናዎች ማቆሚያ/ ፓርኪንግ ናቸው፣

                


                 </p>
                 <h2>አዲስ እተገነባ ያለው ህንጻ ቤተክርስቲያን</h2>
        <!--<p>Change image every 2 seconds:</p>-->
        
        <div class="slideshow-container">
        
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="Image/StuBul_front.jpg" style="width:100%">
          <div class="text">Caption Text</div>
        </div>
        
        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src="Image/sturalbulmimen_n.jpg" style="width:100%">
          <div class="text">Caption Two</div>
        </div>
        
        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src="Image/stuBu_round.jpg" style="width:100%">
          <div class="text">Caption Three</div>
        </div>
        
        </div>
        <br>
        
        <div style="text-align:center">
          <span class="dot"></span> 
          <span class="dot"></span> 
          <span class="dot"></span> 
        </div>
                 
                 
                 `

 
                 
                 maincontenHTML.innerHTML=homeHTML;
          }
      else if(sidname==='home')
      {
        homeHTML=`<h2>አዲስ እተገነባ ያለው ህንጻ ቤተክርስቲያን</h2>
        <!--<p>Change image every 2 seconds:</p>-->
        
        <div class="slideshow-container">
        
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="Image/StuBul_front.jpg" style="width:100%">
          <div class="text">Caption Text</div>
        </div>
        
        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src="Image/sturalbulmimen_n.jpg" style="width:100%">
          <div class="text">Caption Two</div>
        </div>
        
        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src="Image/stuBu_round.jpg" style="width:100%">
          <div class="text">Caption Three</div>
        </div>
        
        </div>
        <br>
        
        <div style="text-align:center">
          <span class="dot"></span> 
          <span class="dot"></span> 
          <span class="dot"></span> 
        </div>
        `
        maincontenHTML.innerHTML=homeHTML;

        slidehome();
      }
     
      else if(sidname==='video')
      {
        homeHTML=`<div class="slideshow-container"><video width="720" height="640" controls>
        <source src="Video/mirtnesh Video.mp4" type=video/ogg>
        
      </video></div>`;
      maincontenHTML.innerHTML=homeHTML;
      }

      else if(sidname==='Adress'){
        homeHTML=`<div class="google-map"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.67454367953!2d38.82185543942823!3d9.002064542296207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b4d159d110d%3A0x696cd4be23031d15!2zWWVyZXIgU3QuIFVyYWVsIENodXJjaCB8IOGLqOGIqOGIrSDhiYXhi7HhiLUg4Yqh4Yir4Yqk4YiNIOGJpOGJsOGKreGIreGIteGJsuGLq-GKlQ!5e0!3m2!1sam!2set!4v1695122258355!5m2!1sam!2set" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      ` 

      maincontenHTML.innerHTML=homeHTML;
    }

    else if(sidname==='material'){
      homeHTML=`  <table id="my-table">
      <caption>አስፈላጊ የሕንጻ ግባዐት ዝርዝር</caption>
      <thead>
        <tr>
          <th>ተ.ቁ</th>
          <th>ዓይነት</th>
          <th>ብዛት</th>
          <th>የአንድ ዋጋ</th>
          <th>ማብራሪያ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>ባለ 8ቤርጋ</td>
          <td>1050</td>
          <td>600</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>ባለ 10ቤርጋ</td>
          <td>1410 </td>
          <td>900 </td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>ባለ 12ቤረጋ</td>
          <td>3,780 </td>
          <td>1,300 </td>
          <td></td>
        </tr>
  
        <tr>
        <td>4</td>
        <td>ባለ 14 ቤርጋ</td>
        <td>2332</td>
        <td>1,750</td>
        <td></td>
      </tr>
      <tr>
        <td>5</td>
        <td>ባለ 16ቤርጋ</td>
        <td>2,292</td>
        <td>2,275</td>
        <td></td>
      </tr>
      <tr>
        <td>6</td>
        <td>ባለ 20ቤርጋ</td>
        <td>1,0980 </td>
        <td>3,560 </td>
        <td></td>
      </tr>
       


      <tr>
          <td>7</td>
          <td>ባለ 24ቤርጋ</td>
          <td>4,186</td>
          <td>5,120</td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td>አሸዋ</td>
          <td>50 ቢያጆ </td>
          <td>40,000 </td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td>02 የአርማታ ጠጠር</td>
          <td>75 ቢያጆ </td>
          <td>30,000</td>
          <td></td>
        </tr>
  
        <tr>
        <td>10</td>
        <td>ኦፒሲ ሲሚንቶ</td>
        <td>8,800</td>
        <td>2,000</td>
        <td></td>
      </tr>
      <tr>
        <td>11</td>
        <td>ሞራሌ </td>
        <td>1000</td>
        <td>300</td>
        <td></td>
      </tr>
      <tr>
        <td>12</td>
        <td>ፕላይ ውድ</td>
        <td>5,00</td>
        <td>500 </td>
        <td></td>
      </tr>


      <tr>
          <td>13</td>
          <td>አጠና</td>
          <td>3,250</td>
          <td>250</td>
          <td></td>
        </tr>
        <tr>
          <td>14</td>
          <td>የቤተመቅደስ በሮች</td>
          <td>3</td>
          <td> </td>
          <td></td>
        </tr>

        <tr>
          <td>15</td>
          <td>የቤተ ክርስቲያን መግቢያ በሮች</td>
          <td> 10 </td>
          <td> </td>
          <td>2 በሮች ተይዘዋል</td>
        </tr>

        <tr>
          <td>16</td>
          <td>የአጥር ግቢ በሮች</td>
          <td> 4 </td>
          <td> </td>
          <td>2 በሮች ተይዘዋል</td>
        </tr>
        <tr>
          <td>17</td>
          <td>መስኮት</td>
          <td>36</td>
          <td> </td>
          <td></td>
        </tr>
  
        <tr>
        <td>18</td>
        <td>የቤተ መቅደስ መጋረጃ</td>
        <td>3</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>19</td>
        <td>መንበር</td>
        <td>3</td>
        <td>2 ተይዘዋል</td>
        <td></td>
      </tr>
      <tr>
        <td>20</td>
        <td>ለጉልላት መስቀል</td>
        <td>2 </td>
        <td> </td>
        <td>ዋጋ ወደፊት ይገለጻል</td>
      </tr>

      <tr>
        <td>21</td>
        <td>የፍኒሺንግ ግብዐት</td>
        <td> </td>
        <td> </td>
        <td>ዓይነትና ዋጋ ወደፊት ይገለጻል</td>
      </tr>
      <tr>
        <td>22</td>
        <td>የጉልበት ዋጋ </td>
        <td> </td>
        <td> </td>
        <td>አልተጨመረም</td>
      </tr>
      </tbody>
    </table>
 
    <br>
    <div class="bank">
    &#128176; የሕንጻ ማሠሪያ አካውንት ቁጥር ኢትዮጲያ ንግድ ባንክ:  <a  style="color: blue;">1000029569208</a>
</div>

<br>
    <div class="tele">
    &#128241; በእነዚህ ስልክ ቁጥሮች ተጨማሪ መረጃ ያገኛሉ: 
    <a  style="color: blue;">0910651918</a> / 
    <a  style="color: blue;">0911667185</a>
</div>

  `

  /*<tr class="summary-row">
  <td></td>
  <td></td>
  <td>ጠቅላላ ድምር</td>
  <td>97,300,000</td>
</tr>*/
  maincontenHTML.innerHTML=homeHTML;
  summery();
    }



    function summery(){
      var table = document.getElementById('my-table');
      var summaryRow = table.insertRow(-1);
      summaryRow.classList.add('summary-row');

      var columnsCount = table.rows[0].cells.length;

      for (var i = 1; i < columnsCount; i++) {
        var cell = summaryRow.insertCell(i);

        if (i === 1) {
          cell.innerHTML = 'Summary';
        } else {
          var sum = 0;
          for (var j = 1; j < table.rows.length; j++) {
            sum += parseInt(table.rows[j].cells[i].innerHTML);
          }
          cell.innerHTML = sum;
        }
      }
    }

   
      }