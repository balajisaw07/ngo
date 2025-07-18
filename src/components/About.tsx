import { Award, Users, Building, Heart } from 'lucide-react';
import vinayImg from '../assets/vinay-dhavalaey.jpg';
import sarlaImg from '../assets/sarla-bhirud.jpg';
import kantikumarImg from '../assets/kantikumar-pawar.jpg';
import yashadattaImg from '../assets/yashadatta-alone.jpg';
import leenaImg from '../assets/leena-zilpe.jpg';
import ganeshImg from '../assets/97200635_1635974116570437_4582947709350051840_n.jpg';

export const AboutMain = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising quality in every restoration and preservation project we undertake.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Deep love for cultural heritage drives our commitment to preserving history.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with communities, historians, and architects to honor legacy.'
    },
    {
      icon: Building,
      title: 'Innovation',
      description: 'Blending traditional craftsmanship with modern conservation techniques.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cream via-white to-heritage-gold/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-heritage-gold/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-heritage-gold font-semibold text-sm uppercase tracking-wider">About VARASA</span>
              <h2 className="text-4xl md:text-5xl font-bold text-heritage-navy font-serif mt-2 mb-6">
                Guardians of
                <span className="text-heritage-gold"> Cultural Legacy</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed dark:text-gray-100">
              <p className="text-lg">
                VĀRASĀ Association for Cultural Heritage and Archaeology, Pune, established under the Societies Registration Act, 1860 and Bombay Public Trust Act (est. 4th November 2011 Reg. No. Maha. 1918/2011), is a non-profit organization committed to the heritage preservation, research, and promotion of tangible and intangible cultural heritage and archaeology. Our mission is to safeguard historical treasures, raise awareness about the significance of cultural heritage, and support archaeological research and conservation efforts. With a team of passionate archaeologists, scientists, historians, conservationists, and heritage professionals, VĀRASĀ actively engages in excavation projects, documentation, conservation, and restoration of heritage sites, ensuring that history remains accessible and meaningful for future generations.
              </p>
              <p>
                Our team of master craftsmen, historians, and conservation experts work tirelessly to
                ensure that the stories embedded in stone, wood, and mortar continue to inspire
                future generations. We believe that heritage is not just about preserving the past,
                but about creating a bridge to the future.
              </p>
              <p>
                From ancient temples to colonial mansions, from traditional art forms to architectural
                marvels, we approach each project with reverence, expertise, and an unwavering
                commitment to authenticity.
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-heritage-gold font-serif">25+</div>
                <div className="text-sm text-gray-500">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-heritage-gold font-serif">150+</div>
                <div className="text-sm text-gray-500">Heritage Projects</div>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Heritage restoration work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-heritage-gold rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold font-serif">Est.</div>
                <div className="text-xl font-bold">1998</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Card base styles for all member sections
const cardBase =
  "py-12 px-6 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto rounded-3xl shadow-xl mt-12 border-2 border-heritage-gold bg-white/90 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 dark:border-heritage-gold/60 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]";
const imgBase =
  "w-64 h-80 object-cover rounded-2xl shadow-lg border-4 border-heritage-gold dark:border-heritage-gold/80 transition-all duration-300";
const nameBase =
  "text-3xl font-extrabold text-heritage-navy dark:text-heritage-gold mb-2 font-serif tracking-wide";
const roleBase =
  "text-lg text-heritage-gold dark:text-heritage-gold/80 font-semibold mb-2";
const textBase =
  "text-base md:text-lg text-gray-700 dark:text-gray-100 mb-2 leading-relaxed";
const paraBase =
  "text-gray-600 dark:text-gray-200 mb-2";

export const VinaySection = () => (
  <section className={cardBase}>
    <img
      src={vinayImg}
      alt="Vinay Dhavalaey"
      className={imgBase}
      style={{ minWidth: '16rem' }}
    />
    <div className="flex-1">
      <h3 className={nameBase}>Vinay Dhavalaey</h3>
      <p className={roleBase}>Founder at V9 - the interior studio</p>
      <p className={paraBase}>
        Vinay Dhavalaey, Founder at V9 - the interior studio, is one of the significant entities responsible for the success of our firm. Having published articles for AURA 2015 magazine as chief editor, he has also showcased his skills greatly since 2014 via A&l Digest Design Exhibition, which intents to bring architecture and interior design trends, worldwide and ethnic, to the masses, as said by Amit Danait.
      </p>
      <p className={paraBase}>
        Furthermore, A&l Digest Design Exhibition 2016, 2017, and 2018 were also lucky to once again experience the skillset of Mr. Dhavalaey. He grabbed audiences attention by grabbing the second position for Product Exhibition Display Competition in 2019.
      </p>
      <p className={paraBase}>
        Our work and designs were extremely capable and sufficient to get mentioned in Yug Designs, a national level magazine, not once, not twice, but three times in a row. This reflects our ability to fulfill user requirements and gain their trusts.
      </p>
    </div>
  </section>
);

export const SarlaSection = () => (
  <section className={cardBase}>
    <img
      src={sarlaImg}
      alt="Mrs. Sarla (Rashmi) Bhirud"
      className={imgBase}
      style={{ minWidth: '16rem' }}
    />
    <div className="flex-1">
      <h3 className={nameBase}>Mrs. Sarla (Rashmi) Bhirud</h3>
      <p className={roleBase}>Blogger and Independent Researcher</p>
      <p className={paraBase}>
        Sarla (Rashmi) Bhirud is a versatile scholar and writer with a rich academic and professional background spanning zoology, communication, Indology, and archaeology. She completed her B.Sc. in Zoology from M.J. College, Jalgaon and Fergusson College, Pune in 1991, followed by a Master’s in Communication Studies from the University of Pune in 1994. She gained a decade of experience as an Associate Producer at EMRC, Pune. Her deep interest in cultural heritage led her to pursue an M.A. in Indology (2015) from Tilak Maharashtra Vidyapith, Pune, and later an M.Phil. in Archaeology (2019) from Deccan College Post Graduate and Research Institute under the guidance of Dr. Pramod Joglekar. She also has hands-on experience in artifact documentation from archaeological sites during her time at Deccan College.
      </p>
      <p className={paraBase}>
        Rashmi Bhirud has authored multiple research papers and published works in archaeology and cultural studies, focusing particularly on the Khandesh region, including topics such as Toranmal, Jalgaon’s archaeological landscape, and tribal memorials in Nandurbar. Her Marathi books—विविध धर्मांची ओळख, पूर्वजांचे संचित, and अदिती ते ती—are widely appreciated, and several others are in press. She actively contributes to academic conferences and writes on heritage, history, and social issues in newspapers like Lokmat and Janadesh. A committed poet, she has published four poetry collections each in Hindi/Urdu and Marathi. Her work reflects a deep commitment to cultural preservation, regional history, and community engagement through both scholarship and creative writing.
      </p>
    </div>
  </section>
);

export const KantikumarSection = () => (
  <section className={cardBase}>
    <img
      src={kantikumarImg}
      alt="Dr. Kantikumar Anant Pawar"
      className={imgBase}
      style={{ minWidth: '16rem' }}
    />
    <div className="flex-1">
      <h3 className={nameBase}>Dr. Kantikumar Anant Pawar</h3>
      <p className={roleBase}>Founder / General Secretary</p>
      <p className={paraBase}>
        Dr. Kantikumar Anant Pawar is a dedicated academician with 15 years of experience as an Assistant Professor in postgraduate teaching, research, and consultancy in archaeology. His expertise spans interdisciplinary research, student mentorship, academic administration, and international collaboration. He has a strong background in archaeological Excavation, exploration, conservation, and heritage management.
      </p>
      <p className={paraBase}>
        He holds a Ph.D. in Ancient Indian History, Culture, and Archaeology from Deccan College, Pune (2015), a Post Graduate Diploma in Archaeology (PGDA) from the Institute of Archaeology, ASI, New Delhi (2007), and has qualified UGC-NET with JRF (2007).
      </p>
      <p className={paraBase}>
        His research contributions include participation in 30 national and 28 international seminars, with 27 national and 3 international published research papers. He has delivered numerous lectures and guided research scholars at the Ph.D., M.Phil., and M.A. levels. He has directed three major archaeological excavations in Maharashtra and surveys in different parts of the country. He was actively involved in the Polavaram Dam Salvage Archaeology Project (2017-18).
      </p>
      <p className={paraBase}>
        Dr. Pawar is recipient of JRF (UGC) and INTACH National Research Fellowship. He is a life member of several professional organizations, including ISPQS, SOSAA, RASI, IAS. He has served on various academic committees and has coordinated major international conferences on rock art and salvage archaeology. Currently, he continues to contribute to archaeological research, heritage conservation, and student mentorship.
      </p>
    </div>
  </section>
);

export const YashadattaSection = () => (
  <section className={cardBase}>
    <img
      src={yashadattaImg}
      alt="Prof. Yashadatta S. Alone"
      className={imgBase}
      style={{ minWidth: '16rem' }}
    />
    <div className="flex-1">
      <h3 className={nameBase}>Prof. Yashadatta S. Alone</h3>
      <p className={roleBase}>Vice President</p>
      <p className={paraBase}>
        Prof. Y. S. Alone is a Professor of Visual Studies at the School of Arts and Aesthetics, Jawaharlal Nehru University, New Delhi. He holds a Ph.D. and M.Phil. from the Centre for Historical Studies at Jawaharlal Nehru University and M.A. in Fine Arts (Art History) from M. S. University, Baroda. With over 18 years of teaching and research at JNU, he has previously taught at Deccan College Postgraduate Research Institute, Pune, and Kurukshetra University. He was nominated as ICCR Chair visiting Professor at Shenzhen University, China. He was invited as a short-term visiting professor at Renmin University, Beijing, East China Normal University, Shanghai, Autonoma University Madrid, Spain, and Heidelberg University, Germany.
      </p>
      <p className={paraBase}>
        His areas of specialization include ancient Indian and Buddhist art, cave architecture, the visual culture of marginalized communities, and Ambedkarite aesthetics. He has lectured widely in India and abroad, mainly in China, the USA, Spain, and Germany. He has published extensively, including the book "Buddhist Caves of Western India: Forms and Patronage", and is known for his work on western Indian Buddhist caves, Ajanta, Ambedkarian aesthetics, and contemporary art practices.
      </p>
      <p className={paraBase}>
        Prof. Alone is a recipient of the UGC Research Fellowship and has served as an expert member on the Planning Commission’s Expert Group on Culture, Ministry of Culture, Government of India, and academic bodies of several universities. He is known for conceptual formulation termed as "Protected Ignorance" and has published papers on it.
      </p>
    </div>
  </section>
);

export const LeenaSection = () => (
  <section className={cardBase}>
    <img
      src={leenaImg}
      alt="Ms. Leena Zilpe"
      className={imgBase}
      style={{ minWidth: '16rem' }}
    />
    <div className="flex-1">
      <h3 className={nameBase}>Ms. Leena Zilpe</h3>
      <p className={roleBase}>Member</p>
      <p className={paraBase}>
        Leena Zilpe is a leading national conservator of cultural property at the National Research Laboratory for Conservation of Cultural Property (NRLC), under India’s Ministry of Culture. Based in Nagpur, she has spearheaded the preservation of iconic collections, including Mahatma Gandhi’s personal artifacts (2008–2010) and over 170 items belonging to Dr. B. R. Ambedkar for a museum in Chicholi. A postgraduate in Applied Art as well as Archaeology from Nagpur University, she topped her museology course at NRLC’s Lucknow center and holds multi-disciplinary expertise in ancient Indian history, linguistics (Sanskrit, Prakrit, Pali, Urdu), and conservation techniques.
      </p>
      <p className={paraBase}>
        Her projects include restoring masterpieces by Gaitonde and Raza, reconstructing a 51‑feet Bhagavad Gita scroll, and preserving temple paintings, palm-leaf manuscripts, and historic textiles. Through her initiatives, she advocates minimal-intervention principles and sustainable preservation practices tailored to climate‑vulnerable contexts.
      </p>
    </div>
  </section>
);

export const GaneshSection = () => (
  <section className={cardBase}>
    <img
      src={ganeshImg}
      alt="Adv. Ganesh Halkare"
      className={imgBase}
      style={{ minWidth: '16rem' }}
    />
    <div className="flex-1">
      <h3 className={nameBase}>Adv. Ganesh Halkare</h3>
      <p className={roleBase}>Treasurer</p>
      <p className={paraBase}>
        Adv. Ganesh Vitthalrao Halkare is a seasoned advocate based in Amravati, Maharashtra, practicing independently with a client-centered and ethically grounded approach. He also holds a post‑graduate degree in Archaeology and Anthropology from Nagpur University and has a notable scholarly presence, with over a dozen research papers—including contributions to tribal astronomy studies—focusing on tribal education, superstition eradication, and the rights awareness among indigenous communities.
      </p>
    </div>
  </section>
);

export default AboutMain;