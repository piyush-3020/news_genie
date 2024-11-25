import "./NewsCard.css";
import SentimentChart from "../card/sentiment/analysis";
import Comments from "../card/comments/comment";
import { info } from "../../dummyData";


const data=await info("education");
const Education = () => {
  return (
    <>
    {data?.data?.articles?.map((val: { cover: string | undefined; catgeory: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | any[]; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
       if(val.title!=="[Removed]"&&val.description!=="[Removed]"&&val.urlToImage!==null){
              return (
               <>
               <div className={`news-card `}>
      <div className="par1">
        <img src={val.urlToImage===null?"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEBIWFRUVEhUVFRUWGBUVFRUVFhUXFhYYFxUYHSggGBolGxUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFSsZFRkrLSsrKy0rKysrKysrLSsrLS0tNy0tNystNy0rKy0rKzcrNzctKy0tKzcrKys3KysrK//AABEIALUBFwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAABAwIEAwcDAgUDBAMAAAABAAIRAyEEEjFBBVFhBhMicYGRoTKxwdHwBxRCUvEzYuEjU4KSFSRy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAB0RAQEBAAMBAAMAAAAAAAAAAAABEQISITFBUWH/2gAMAwEAAhEDEQA/API4STlIoCUEJJoBqZCFJw9UEYSKkpMcQQRqN9dOm6CCYZIOlgPWTFk6nPmooEhTe2089RyRTaJuYHlN4t8wgdJ0AyJm1/6evmmxwm45bkT67Kt4IPitIBE8jpHRSpiTEgeZgeRKC8M1ga6Hlf8AWQovYfhZ3DmBwg8xsJnkD+7rdnhsx4YgQYmfMzN1Go5j+XJjKDtMxrusvDcOJ10ldRg+CiQSbcyDYjTT00V9fDtotLnaAIsjRHAhjcxFlpMRUzOdtpAsZIPxusri3Fe8JDRA2O/otY0XG/Pn1EpEtMCYhIi6yK1PKTcEbGZHPXpIVIA3PwtMkIRCCUBAAKMJpoIQlPJTI56KyrXLzLzmJ3OvuoKE2i99NT5ck8oOh9/1U61EsOV9jYkWJuJGnQhBCoRJyiBJgG5Akxfyj1U6NIEw4hoO5BMegUM/IeupSQIpApwkEDQhCAQUIKBKYPRQClCBlJMCUIGnTvqSBNyLwPLmkCglBIDlp7fCdPM0yJB/46qIEqdasXGXGTpO9kDDN7G8EA+KPLZJxE+Cwm03dE80MaZEedugn9VCQR9/16IFmO9x+NE6bSTDRqCBMH7+SurvIJzASdQWgZSf7RNot7qTvD4REggkiI0tlOsEEG6CsV3tAvAIBAsAQywOlzM3/Z7HsvxRlQBj4zSANZOuu3JcW4zAJ0sOlyYHqSfVFF7mOkagyg9ceA1pJ20XA9qeJZ3ZWutE29bHrZZWP7VuNEU8vjESSPjy/Vcy8A7kmbGIaQRJjeQUW0j43EuMZgXaAXjlMC8oEc7dPySh20iw9De/5RlE+GYm06xtIG6IsqkTLZiIv02MeihVFgQI2N9TzjZTpb8wTAiZF5PmLKqdByP6QPv7qiKcq00TJAuQCTEEQIv8qoBAmpv+ymx4AIi5iHToNxl3lRFiMwkWkTG3Pa6gikVKBt7H9d1czDuy5y05MxaDsXgA5Z5wQfVBXUpFv1C8WB67qL768hf4umeZuen6/wDCnVMNHiF5zMEiADLcx0OsiCgx002idTEDeb9LbpIEUk0FAIQhABBQEIAKUoYReQdLXiDzTLd/lAipina5jQgRqDvMqtWU2FxgRYbkNEC+pMDRBAfsKQCmaJGouDHP7a+ak6nDZdIJggRYt5+XVBCkBuYgE3m/QQoOVgeDFgIAEjzN553RoZF/ONUCpVS241g/IIPwSnTfYgxpGmlwbFJ1IgG0gGMwu2eWYWKm05dNxB95t7KhONiLETIdFzGsclKkI6TZ06GNBHSEsO6HTExeDoTtPNNjyXA76eXJAUXMvLZkGNQASLGBrHIpODjY76dR08zELIohoa41GuuQ2REFwEnxHeclh1WVheGueC+kQe7pF7zN2xYy0xBkj3BUvi41Tmk3vOh5z1WXheHVKgfkYXBkFwEGJ3MbddlHEEl7i9oEyYFgCRI00290sHiXsDsjy0PblMGMw5FL/Cf1Fpc6Zd9WsQ4ktAiQDYdVW2k60A7GeV+egMq3D1nUznaSDBEg7HnyUaQLjGYS4/1EAE3N/Y+qIsayGvLr2DZDoh5MkRq7e6i+rmzAQAYdcAER/bG97jkq2OADhAMga7Ean8eqjnOgsEAGlM0xEy0Xgi5I6wLR6oFMkFwk5SAbGBmsJ5SZseSVCplII9iJ8rKiNtz8QpMv4QJJIDb7kwP2U6lAtMcgDaDYiRobGCJGo0KrNvNQSfRcDBaZBg73GukhWvLg0NIIEhwBkDxf1QegFxy6Kmo0CzTIteMu3LzsrswLXZiS6GBjbwBOpJ0gWA/3E7IKwAACDJO3Ll5qpyuEZCc15gNvOk5p5TaNVU4II6G/mhARCBFJMoKAQmBP+QEIAIlJJAyFaGwAZF5tPIkXHoqgmgup0wZuBAJvvHLqovB208594SpC/wAe6i4IJNm0Ag9JnqVfSmA6RIaCAbzcjTosZjyNCR5Ej7K3OIbEzfNpBuT625oBtTbKJmZuCQREcosUw+CSANxe5AI5pODZOUzexIiyspUxckt8MeGYLp5eSCoeGQ4GYttBsZPO0+6TND+5KsdPUz6yrcpYRmGUwTaRa4LY56j1QRfRDRB+ow4EEEQdjyd0UhSjLOrhLYIMCXDxRofDp1UG0R4g52WLXGvS2itpUs0mbtE7m1totE6qhtIkixAJjLIbNhMcv0WdjKHdOa4FjjUaYDQCAHQBbVpA9lgsLROWACYIPikG83Gg/KjRJa4G/hMi7hB8xcJ5ierqv0m7nOIlwu4y3SeZkm/VX8KosquIqOyZi5xdrNpFo57qugMj85nwnVpyukyJ89Torq3DH0206maRU3Ey1v0nNblOmt0+L9YuLDc0s0sf9wtcGObgSOhVNd8633JE3Jkk/K2mCw4puaHAHLUgOMOE5cwbk3JMarAxGKluVzGTmcQ4NDXtkyQSPqG0GY2QUAA5YGUZRmMyN79NkVcO5hhwINrbwRM/ayvr0iB4rQAfSB4rCw6qrFGSCGZRlEeECR/cY180Fd8uhAJ3mLdPVD6upaQJJ0sbzMcgsh1aWNY4hoY17m2JLnF0ga2nn0VbRZwDoAgls/XGkHfVBRSNpMnSBeI/RIlpM5YE3AO3+Eqrp2n0RTcAZIBvvMW6hQSLSHAhsZrtBAMgnw20P/CeKqlzi5xk/wBU6yLfhUg+iAUDSCEwECTDlEpoIuKJQUggaEIQCYCESgCknKcoG1370+UPcCSWiASYB1A2HmowhyBlOm6D5KAUmvidLiLgH2nTTVBJt9FNuXKZBkkQZsBeRli82vNsu8qthNo5/f8AwrquWSWiRtNo6e/VBPudIM+Ueg/Hmrm0g6G2Dy52ZxJgcgZtGtxdU5gGwAQTFyZBj/bFtbet1KqHOOZ8zaSfK3QWCCeQAZjE2sQXB3Wd4/CTKbdCcojUy7MCdwNN1a0EtBJLmghl7QL6ONhr8rJwVQZx3ozBoF/CH5WSAGnSY/BVGNQwch0OmBmiHTEwZta0Fb/s/wAEdiHPe8ZslMw3xNLnCGtgx1nrlKn2V4QcViIaC1r3G/IddtNl7pwXg1LDtDGNEgef7+63OMYvJ5Lhf4dVnsBOYE6jLadr8tJU+Idh8TTYQGlzAB9UyOZa6RlF9F7LVqhh1+p4HOJ530sqsNjg6ZgzmGWIMybXtdM38J2fOXEqLh9VLQhziG5Zc3XQaEdeq1xptEueJuIZ9JM7zeIkc5Xu3a3s9TrUnvpDQZn0wSDv/n06rxjHYPLdzRGbIBMF0Cb20iEsWXfrX067WumHGwicrvEANiILSdiqazb+Gc0HMDlsQZ8I22WW2j3mZzaZlobDWxltEuLSJIjYbmd1hPaJk2kdTe+gAsDOnRYbWYqoTlbVLiWMDADlhrQJbfWJO82KxXwIyk+cRfl6c1Y8kxNrC509Yuo1AdjImRExPrdBUHEev7ieSACdNBfyve+ylViefx10TbVIEaSLi+n+FBAtG0zJ5afqoplxQ5xIvtOw+6AlMqKC5AIKRQgSSChA0IQgaSkGk7KXcnkUEYQEJIHKJSQUADz0+6VuqSbXEGRYoLaDgD1gwIBvtPLe6iHxoq1MuEdZ9COp5oLRe9433IGm+ysoVi0j7bG0SRN9VVItB1F9vTroFJj9us+qDIzkgmxl3LTy5LKZULw1rm2YDdouMxtmPmsMsMSY8UHUT7LJoOABFyTAbeGnz5rUSvVv4UZHFzd+7MAxlLj9REXvA+V6NRa5sy4S4wBcC1iBItovDuyPEzQreEnNEwbeMC4EbaL1ng3F31awZUDRLSA4C8kZrfK6545363v8uCSYBIiIm3mdFgY7BkkCRlBLsjJl+9zoNIlbuABJNhqsPF4hpHheJ/3SAsSrcQwxuBUjM5pnSDm1tyFgvBe2sDFVIaIzEBo0F7QAvV+NceFNjwXsL7jwScoFzLuZXiPGaznPL5MOcS13P02WrMnqcfqjG44d451MBge8Q2bsixE7TJM/sa6rN4gAE3F/kW/yVdi6TpmCczcwPNuhPS4KxCSuTqKjpMkkk7/5U2vAaQCb68vK/wB1SU2ECJJ1vECBzB5qCREAg2IiwEkzE3mAq88mTJ225fZMndwJzSZvcnUzuotcL2vFjOnVBY5wgWvBk6ze1ugsoyTaZF7aaiDbyUCPyhA3A7gpJuckgaSAmgiUk3JIGhCEG2wrAs9lMLWUXrMZWWa6TCxHD2u0sVrcRgnN6hbbvVNrZUlsLxlc4gLft4dTe6Jg66wtrwzgVNrS/wCogEyVrWermqXBK7hmFMx1ICxMXhKlIxUYW8p0PkV1fDscX841hb59AVGRUaCOsFF6vMELoOI9m3CXUPEAT4P6hHLmtA9haSHCCNQbEeiM2YAVa1qpU2lVGVSaSHAAEC5O4A68k2nT0VAKsBWkbPAYotLTchpmBa56+YXquE4k1zaGJp82h/m3T8rxxr10nAOKmnQqNuRn0m12/r+VvjWbHvfFcQ403GmRs43AEFs6n0XGVsa/R2o13hQ4P2lpuwrhiXODm0XjKc0Fob4QItJBN4XO4njTWua2h4s5iDsNh1IWuPiWaxe13ESxxAMEtDTGptMn0Mei4bEVP3sszH8TdUeX1AHOLYM77AnqFri4XmdLeaxyurIhn8JuZkRyiDI+yqcVJ7/fn08vyqyVhsikU1v+Adne/GZ5IE2A1j8KVZNc9BNrn5+FJ+HeBJY4DnBXbcYwdLC92KDQ115cbu91sOFV5bJ9zdS1qcHmx6/KAvVMXgKVdvd1WAzoRAIPQgLnanZJtN13Fw20+U06ORpUS7QLY4bgzj9S6mnwWmBayg/CFh1WbVnD9tN/8AI1K1mO4a6n1C68PhY+Lgi4UnJbxjioSWRjaWVxA0WOV0cqEIQgyWPhT79YwTlRWXSrSVkVcWdGrWtdC2PBWtNVocJEoulQkVAHHqu74ZhA6kROrT8hcn2lwXdVGvGjguj7M8RGQA6o1HL8LLqVQ036g5TPQwu8wtVrmR0XH9r6Xd1w9ulQT6iAfwthwDEPd9IkDW6isXF4806tRmbSp97qGN7muBnidnaOHrusTtdh+7xJIBio1tTyN2n7LAoOOzSY1gT8BF2fK3OH7IU3NkVyTs0tADuQzTZco9paSDqCQehBiCvQ+znCMQ8glhps/ufb2Zqt1w/sVg6ZzVJquJJJfJudTGnwtcY588nx5NSY530tLvIE/ZZp4dVDc3dv1IjI+QBubaL3LCUcPTENZHk0BbGnVoncj3W8c9fOnQ68t103YR9J1R1GvTDg4Z2kzIc2zhqLFpnpl629f4j2awuKbD2MqeYDXDyeLhcRT7EOwWMp1aTyaUua5r3ZKlMuBy3DTmaYiY9t3wb6r2dpijFJkVCMs5yA5ptBvyXN4/gLMOx1euC3IDApvklxsxoJneJ6L1LAtkCb2GpzfJa1a3tVwinimtpVZyF4cQ0wTlMgWla0x88CTAEk8hJPsrf5Cr/2an/o/wDRfQ/C+A4eg2KVBjPQE+pN1sDSGymK+YX0sv8AqBzbHVp12F4WOvpvFYBjxD2Nd5tBXM8V/h9g60nugx3OnLfjQqdTXhS9N7OvAY1rQbC5AWs45/DSvSl2Hd3rRfKQG1PbQrZ8KxzcPSaKgyODbtdLTO8yFixvg0/b2qAaTm6+Jbrg2D/6QnUiVxfGuI/zWIaG2bmDR6kSvQmUSxkxYQstytLxjHHDxGpMhbShRNRgcdxK4ziuJ7/GBn9LSG+xkr0Gg5rWADkkK0wcaboddpKK7xpsdEY4F7HuGzregXOY3ipaGt3RZWxqvErCxFVa88QlY9fGSphuMfit1rwsnEvlYy1HK/TQhCqHKJTypZVFb3sxh2OLi8AnQTdYbqpZXO0OV3ZmoBVDXOyg7q3tXhwyoHBwMi8fCNfhuuLkYjD2+pozD01Wi4LWIeGzEn2W17LOY9pFRxBGl/xutNxKiaOIIF7za5v0Rfnrre1PD82GLvqdTGYHeNCCPJazshQr/U2k4tJsTbredl1PAsG8U5rXLhOU3jzlZmLx9KkJqPa0dSPgK4l5ZWFjuz1LEPZUrlzi1uUMBho3uRcm62WCwVKkIpU2t6gSfdczxDtvRZakC889Aub4h2ur1bBxaOTbfKfGLd9el4ridKnerVa3zN1p8T24wrPpzv8A/wAtgehOq8yfinEydeZufcpDEO2KaO+f/EcDTCu9XAfhW4b+JVL+vDvb1aWu+NV583FvGjirP50n6mtd5gA+4V0eycE7U4fEf6NWHf2uljvY6rpHYltVvd1pF5ZVH1U3Agg+XMbr52Bpky0mm4XBkkT5i4XofYftO+oRh8SZflJpP2qRq2ecaJo6bGdqsdhnPpv4e6q5pgVqTvBUafpc0ETe1tjZdHwOpXe0VsWMj3CRS17sbZzu88tAqOGnvKlNrjZhLr7gNJaP/aPZS4ljMziGnwg+6sRmV+IgfTfqdFh1uIOIu6PhcL2h7XFhczDZSW2fVcf+kw6QD/UQdguD4hxo1CTVq1ax8zTp+jRchNV7PU4pTH1Vmg9Xt/VRZj2O+mo0+TgfsV4S7GDamwekn3KbMe4GWtaD0EfYpo97binDcpV6rKgitTZUHJzQvFcL2nrs0cfc/ZbzA/xAeP8AUZPW0psHVcU7E4WoQ/D/AP16jXBzYBNMkXgtGg8lbicJim0nt7rvDlMGk4PaTFrGC31WDge22Gfq4sPVb3B8VpVP9Oo1x6ET7aqYsuPMux/DnuxTzWBY6mCSHWOZxiIPkb6LtOOPyNA3Ij12XR1sr/raCf7j9Q/8hdc7x7hby6kaZmm1+Z8m7QPp9JKmY1LEnUQ2jGsNv1K834+IqwP7QvQOKPDGXfrY9Oq5Dtjg2ZmVGODswgx0WdWxzzaiHVECknkTWcUuMqCuc1Qyq6mECEJ5Uk0xYghMIUEsPTvZTxdO4kkpUXIe6Sp615ieEY4fS7L1NgtlhOKUqL+8g1qo0c6zAeYCwqZEXUaVFpKSrZ4zOIdrMTV/ryDk2x9StLUqucZcSTzJlbN2CVTsLCvZnq1yIWcaCj3KaYwoTWX3SO6TTGKiFld2n3aadWIsvheMdSqMc3Z7THr91IUFlYTBZnCeasp1ey4fGiz2uAJE6jcLUdqOLChhnvaQXEZWidXOWgp0xA6BYnEqIcwtI8lbyOrisTiXVDL3TGg2HkFTC2lTCwqu5Wex1YCFndyjuU7HVgFC2Aop9wp2Xq1ytpYl7dHe91njDKxmE6K9k6rsD2sr09HujlOYezpj0XQ4H+IH/da0+UtP5BXPNwI5LIGDaBcBO9WcWdxl7MSCcNUs67qTokdWmfhc/WpkAAuJ81m1Q0aD1WFVMrNrWftVlUSFIqLioK3hVwpuSK3GKjCE4QgAmopygkCmFCUByDILlbQasXMsik9ZrUZwqbKwwVru8urhVU9aWupqDqSrNZNtdPQGmo5Vb30pFwT0VFqYap5kZggdNi2WCsteyosmjXVhXQ4Z8rDx9WCjD4iIWu4jiJK0xqmtdY5ao9+jvljG9OEAJd8jvUxFmVMNVPfIFdMXWSFYHLBdXUhWTDWZ3qjVq2WC6qk6smLqdWoqHPUHvUC5WcWLUyVElKUiVcTQSokoSVQ5QkhA4RCEICEBCEEoVjEISkEqcpoUaVlAQhVDBUpQhQOUpTQigFZFEoQrBnNfZYlcpIVRilJCFAJIQgEIQihSCEIREqLkIRKgQkhCIEIQgUJEIQgIQhCD/9k=":val.urlToImage} alt="News" className="news-card__image" />
      </div>

      <div className="par2">
        <div className="par21">
          <div className="news-card__content">
            <h2 className="news-card__title">{val?.title}</h2>
            <p className="news-card__description">{val?.description}+{val?.content}</p>
          </div>
        </div>
        <div className="par3">
          <p className="source">Source - {val?.source?.name}</p>
          <button className="news-card__button" onClick={()=>window.open(val?.url, "_blank")}>
            Read More
          </button>
        </div>
        <div className="par22">
          <div className="sentiment">
          <SentimentChart description={val?.description+val?.content} />
          </div>
          <div className="comment">
            <Comments />
          </div>
        </div>
      </div>
    </div>
               </>
              )
            }
            })}
    
    </>
  );
};

export default Education;
