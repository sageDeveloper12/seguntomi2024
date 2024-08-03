import {events} from '../data'
import { ministers } from '../data';
import { orderOfPhotograph } from '../data';
import { orderOfReception } from '../data';

const Events = () => {
  const event2 = events.slice(6,10);
  const event3 = events.slice(9,18);

  console.log(event2)
  return (
   <>
   <section className="title">
      <p>Order of Service for theSolemnization of Holy Matrimony
          Between <em>Oluwatomisin Racheal Oyewale
          & Oluwasegun Charles Alaba</em></p>  
      <p>At First Baptist Church Kubwa, Abuja</p>
      <p>On Saturday 10th August, 2024 Time: 11:00 am Prompt</p>
      <p>
        <em>Mrs. Oluwakemi Adeduyite </em>
        <span>Church Secretary</span>
      </p>
      <p>
        <em>Revd. Dr. Emmanuel Olufemi Adewara, MNIM </em>
        <span>Church Pastor</span>
      </p>
      <p>Love does not envy… 1 Corinthians 13:4 </p>
   </section>
   <section>
      <h2>OFFICIATING MINISTERS</h2>
      <div className="event__container">
        {
        ministers.map((minister) =>(
          <ul key = {minister.id}>
              <li className="event__item">
                {minister.text}
              </li>
          </ul>
        ))
      }
      </div>
   </section>
   <section>
    <div className='event__container'>
      <h2>ORDER OF SERVICE</h2>
        {
        events.map((event)=>(
            <ul key ={event.id}>
                <li className='event__item'>{event.text}</li>
            </ul>
        ))
        }
    </div>
  </section>
  <section>
    <h2>POPOOLA</h2>
    <p>Dearly beloved, we assemble here in the presence of 
      God and before this congregation to join together, 
      <em>OLUWATOMISIN RACHEAL OYEWALE and 
      OLUWASEGUN CHARLES ALABA</em> in holy matrimony.
       Marriage is a holy estate instituted by God and 
       commanded in the Scripture as honourable to all who enter it lawfully and 
       in true love. It was confirmed by Christ’s solemn words and hallowed by His gracious
        presence at the marriage feast in Cana of Galilee and it is declared by the great 
        apostle Paul as signifying the mystical union between Christ and His church. 
        Therefore, it ought not to be entered into lightly, unadvisedly, but thoughtfully
        , reverently, discreetly, soberly and in the 
       fear of God considering the cause for which it was
        ordained.</p>
        <p>
        <em>First</em> marriage was ordained for companionship, 
        mutual sobriety, help and comfort which husband and 
        wife ought to have for each other in all circumstances.
        </p>
        <p>
        <em>Second,</em>it was ordained for remedy against sin and to 
        avoid fornication, which such persons as have not 
        the gift of celibacy might marry and keep themselves 
        undefiled members of Christ’s body.
        </p>
        <p>
        <em>Third, </em>it was ordained for procreation of children according to the will of God, to be brought up in the 
        fear and nurture of the Lord and to the praise of His holy name
        </p>
        <p>
        It is this holy estate that <em>OLUWATOMISIN RACHEAL OYEWALE 
        and OLUWASEGUN CHARLES ALABA</em>have come to be joined. 
        Therefore, if any man can show any just cause why they 
        may not be lawfully joined toget
        her let him now speak or else hereafter 
        forever hold his peace.
        </p>
  </section>
  <section className='hymm'>
    <h2>1.	Hymn of Adoration BH 41 – <em>To God Be the Glory</em> </h2>
    <p>1.	To God be the glory, great things He hath done; 
      So loved He the world that He gave us His Son. 
      Who yielded His life an atonement for sin, 
      And opened the life gate that all may go in.
    </p>
    <p>
      <em><i>
      Praise the Lord, praise the Lord, 
      Let the earth hear His voice! 
      Praise the Lord, praise the Lord, 
      Let the people rejoice! 
      O come to the Father;
      Thro Jesus the Son, 
      And give Him the glory, 
      Great things He hath done.
      </i>
      </em>
    </p>
    <p>
    2.	O perfect redemption, the purchase of blood
      To ev’ry believer the promise of God;
      The vilest offender who truly believes,
      That moment from Jesus a pardon receives.
    </p>
    <p>
    3.	Great things He hath taught us, great things 
        He hath done, And great our rejoicing thro’ Jesus the Son;  
        But purer, and higher, and greater will be 
        Our wonder, our transport, when Jesus we see. Amen
    </p>
  </section>
  <section>
    <h2>Joining and Blessing – Revd. Dr. Emmanuel O. Adewara</h2>
    <p>
    <em>MINISTER: OLUWATOMISIN RACHEAL OYEWALE and OLUWASEGUN CHARLES</em>
     ALABA the vows you are about to make are to be made in the name of the Lord God Almighty with 
     whom we shall have to do, before whom all creatures are made manifest and before whose eyes all 
     things are naked and made open. I require and charge you, as you will answer on the Day of 
     Judgment when the secrets of all hearts shall be disclosed, 
    that if either of you know of any impediment why you may not
     be lawfully joined together in holy matrimony, you confess 
     it now. You know for sure that if any persons are joined 
     together otherwise than as God’s word allows, their
      marriage is not lawful.  
    </p>
    <p>
    GROOM: <em>I</em> do solemnly declare that I do not know of any lawful impediment why 
    <em>I, OLUWASEGUN CHARLES</em> may not be joined in holy matrimony to 
    <em>OLUWATOMISIN RACHEAL</em>
    </p>
    <p>
    BRIDE: <em>I</em> do solemnly declare that I do not know of any 
    lawful impediment why <em>I, OLUWATOMISIN RACHEAL</em>
     may not be joined in holy matrimony to <em>OLUWASEGUN CHARLES</em></p>
     <p>
     <em>MINISTER:</em> In the absence of any known and declared 
     impediment, I commend you to the only wise God and 
     Saviour who will keep you from falling and present 
     you faultless before His glory with exceeding joy, 
     and I declare, standing on His Word, that He will build 
     and establish your home, bless your union with the 
     fruit of the womb and make your lives and home an 
     instrument of praise to His Holy name.
     </p>
     <p>
     <em>MINISTER TO THE GROOM: OLUWASEGUN CHARLES,</em> do you 
     take <em>OLUWATOMISIN RACHEAL</em> to be your wedded wife, to live 
     together after God’s ordinance in the Holy estate of 
     matrimony? Will you love her, comfort her, honour her,
      protect her, forsake all 
     others, and be faithful to her as long as you both shall 
     live?
     </p>
     <p>
     <em>GROOM:</em> I do; may God help me. 
     </p>
     <p><em>MINISTER TO THE BRIDE: OLUWATOMISIN RACHEAL,</em> do you take
       OLUWASEGUN CHARLES to be your wedded husband, to live
        together after God’s ordinance in the holy estate 
        of matrimony? Will you love him comfort him, honour him, protect him, forsake all others, 
        and be faithful to him as long as you both shall live? 
        </p>
        <p>
        <em>BRIDE:</em> I do; may God help me.
        </p>
        <p>
        <em>MINISTER:</em>
         Who is giving OLUWATOMISIN to be married to OLUWASEGUN?
         <span><i>(The bride’s father takes her right hand and gives 
          it to the groom who receives it with his right hand)</i></span>
        </p>
        <p>
        BRIDE’S FATHER: I, Prince Oyetunji Oyewale, on behalf of the entire family of
         <em>OYEWALE do give OLUWATOMISIN in marriage to OLUWASEGUN in the name
          of the Father, of the Son and of the Holy Spirit.</em>
          <span><i>(The Minister beckons on the Groom to unveil the bride).</i></span>
          <span><i>(The bride and the groom each take the other by the right hand, facing each other)</i></span>
        </p>
        <p>
        <em>GROOM: I, OLUWASEGUN CHARLES</em> in the presence of the Lord, 
        His angels and the entire congregation present here as 
        witnesses, join my life to yours, <em>OLUWATOMISIN RACHEAL</em> as 
        my wife in the covenant of marriage; to have and to hold
         from this day forward, for better for worse, for richer 
         for poorer, in sickness and in health, to love and to 
         cherish. I lay down my life for you so that the two of us 
         may come together into one new entity under the Lordship 
         of Jesus Christ towards the fulfilment of every single 
         purpose of God for our lives. I promise to have and to 
         hold you, cleave to and live with you, love, cherish and 
         encourage you till our days and ministry here on earth are 
         fulfilled according to God’s holy law and ordinance,and this is my solemn vow.
        </p>
        <p>
        <em>BRIDE: I, OLUWATOMISIN RACHEAL</em> in the presence of the Lord, 
        His angels and the entire congregation present here as 
        witnesses, join my life to yours, <em>OLUWASEGUN CHARLES</em>
        as my husband in the covenant of marriage; to have and 
        to hold from this day forward, for better for worse, 
        for richer for poorer, in sickness and in health, to 
        love and to cherish. I lay down my life for you so that 
        the two of us may come together into one new entity 
        under the Lordship of Jesus Christ towards the fulfilment of every single purpose of God for our lives. I promise to have and to hold you, cleave to and live with you, love, cherish and encourage you till our days and ministry here on earth are fulfilled 
        according to God’s holy law and ordinance, and this is 
        my solemn vow.
        </p>
        <p>
        MINISTER: May I have the seal of your covenant for 
        your wedding?
        <span><i>(The Groom presents the Bible to the Minister)</i></span>
        </p>
        <p>
        <em>MINISTER:</em> The Bible is the written covenant of God to 
        man. It is an everlasting book to guide and help you in your life. May God help you to allow His holy book to direct and guide your life.
      <span><i>(The Minister gives the Bible to the groom 
        who presents it to the bride)</i>
        </span>
        </p>
        <p>
        <em>GROOM:</em> This Bible is a seal of my covenant with you 
        <em>OLUWATOMISIN RACHEAL</em> as we join together in Christian
         marriage. May God help me
        to follow its guidance for the leadership of our family.
         Amen.
        </p>
        <p>
        <em>BRIDE:</em> I joyfully and wholeheartedly accept this Bible
           as a seal of our covenant today. May God help me to 
           follow the guidance of His Words in patience and humility towards God and you,
           <em>OLUWASEGUN CHARLES</em> my husband for the joy of our family.
           <em>MINISTER: OLUWATOMISIN and OLUWASEGUN</em> may I have your token of love to each other?
          (The Ring Bearer hands over the ring to the Minister)
          Oh Lord bless these rings which we bless in Your Name and grant that they who shall wear them shall both abide in peace according to Your will and ever live, in mutual love until their lives end, through Jesus Christ our Lord, Amen.
          And the groom holding the ring shall say:
        </p>
        <p>
        <em>GROOM:</em> With this ring, I wed you. It is a token of my love and an emblem of our covenant, 
        which we now make, standing on the sure foundation of God’s word. Henceforth, I yield my body to you, and all my worldly goods I endow you with, in the
         name of the Father, and of the Son, and the Holy Spirit. Amen. 
        </p>
        <p>
        <em>BRIDE:</em> With this ring, I wed you. It is the 
        token of my love and an emblem of our covenant, 
        which we now make, standing on the sure foundation 
        of God’s Word. Henceforth, I yield my body to you, 
        and all my worldly goods I endow you with, in the 
        name of the Father, and of the Son, and the Holy Spirit. Amen.
        <span>The Groom’s Man and Chief Bride’s Maid sit down</span>
        </p>
        <p>
        <em>THE MINISTER HEREAFTER DECLARES:</em>
        For as much as you, <em>OLUWATOMISIN RACHEAL and OLUWASEGUN CHARLES</em> 
        have known the will of God for your lives
         consented to live together in holy wedlock and have testified before God, His ministers and this congregation, and hereto, 
         you have pledged your faith to each other and declared the same by joining hands and by giving and receiving of the Bible and rings,
          I now pronounce you husband and wife in the name of the Father, and the Son and the Holy Spirit. I now present to you
          <em>Mr OLUWASEGUN CHARLES & Mrs OLUWATOMISIN RACHEAL ALABA THESE ARE NO LONGER TWO BUT ONE; THEREFORE, WHATEVER GOD HAS JOINED 
           TOGETHER LET NO MAN PUT ASUNDER.</em> 
         </p>
  </section>
  <section>
    <h1>ORDER OF EVENTS(contd )</h1>
    <div className="event__container">
        {
        event2.map((item) =>(
          <ul key = {item.id}>
              <li className="event__item">{item.text}
              </li>
          </ul>
        ))
      }
      </div>
  </section>
  <section className='hymn'>
      <h2>Hymn BH 377 – GOD GIVE US CHRISTIAN HOMES</h2>
      <p>1.	God, give us Christian homes!
        Homes where Bible is loved and taught, 
       Homes where Master’s will is sought, 
       Homes crowned with beauty Thy love hath wrought; 
      God, give us Christian homes; 
       God, give us Christian homes! 
    </p>
    <p>2.	God, give us Christian homes!
       Homes where the father is true and strong, 
        Homes that are free from the blight of wrong, 
      Homes that are joyous with love and song; 
        God, give us Christian homes; 
      God, give us Christian homes! 
    </p>
    <p> 
      3.	God, gives us Christian homes! 
    Homes where mother, in queenly guest, 
		Strives to show others Thy way is best, 
		Homes where Lord is an honoured guest; 
	God, give us Christian homes; 
	God, give us Christian homes!
    </p>
    <p>4.	God, give us Christian homes! 
      Homes where Children are led to know 
		Christ in His beauty who loves them so,
    Homes where the altar fires burn and glow; 
		God, give us Christian homes;
		God, give us Christian homes! <em>Amen</em>
    </p>
</section>
      
<section className="order">
  <h2>Order of Events(contd)</h2>
  <div className="event__container">
        {
        event3.map((item) =>(
          <ul key = {item.id}>
              <li className="event__item">
                {item.text}
              </li>
          </ul>
        ))
      }
      </div>
</section>

<section className="hymn">
  <h2>THROUGH THE LOVE OF GOD OUR SAVIOUR </h2>
  <p>
    1.	Through the love of God our Saviour,
      All will be well,
      Free and changeless is His favour;
      All, all is well.
      Precious is the blood that healed us,
      Perfect is the grace that sealed us,
      Strong the hand stretched forth to shield us,
      All must be well.
</p>
  <p>
  2.	Though we pass through tribulation.
  All will be well,
  Ours is such a full salvation;
  All, all is well.
  Happy, still in God confiding,
  Fruitful, if in Christ abiding,
  Holy, through the Spirit’s guiding,
  All must be well.

  </p>
  <p>
    3.	 We expect a bright to-morrow;
  All will be well,
  Faith can sing through days of sorrow,
  All, all is well.
  On our Father’s love relying,
  Christ our every need supplying,
  Whether living now, or dying,
  All must be well!

  </p>

</section>
<section>
   <h2>ORDER OF PHOTOGRAPH</h2>

   <div className="event__container">
    <h3 id='photograph__text'>1.A COUPLE WITH:</h3>
      {
        orderOfPhotograph.map((item)=>(
          <ul key={item.id}>
            <li className="event__item">{item.text}</li>
          </ul>
        ))
      }
     <h3 id='photograph__text'>2.BRIDE ALONE</h3>
     <h3 id='photograph__text'>3.GROOM ALONE</h3>
     <h3 id='photograph__text'>4.COUPLE</h3>
   </div>
</section>
<section>
  <h2>ORDER OF RECEPTION</h2>

  <div className="event__container">
        {
        orderOfReception.map((item) =>(
          <ul key = {item.id}>
              <li className="event__item">
                {item.text}
              </li>
          </ul>
        ))
      }
      </div>
</section>
    </>
  )
}

export default Events