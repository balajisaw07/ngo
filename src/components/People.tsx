import React from 'react';

const people = [
  {
    name: 'Dr. Kantikumar Anant Pawar',
    title: 'Founder/ General Secretary',
    bio: `Dr. Kantikumar Anant Pawar is a dedicated academician with 15 years of experience as an Assistant Professor in postgraduate teaching, research, and consultancy in archaeology. His expertise spans interdisciplinary research, student mentorship, academic administration, and international collaboration. He has a strong background in archaeological Excavation, exploration, conservation, and heritage management.\nHe holds a Ph.D. in Ancient Indian History, Culture, and Archaeology from Deccan College, Pune (2015), a Post Graduate Diploma in Archaeology (PGDA) from the Institute of Archaeology, ASI, New Delhi (2007), and has qualified UGC-NET with JRF (2007).\nHis research contributions include participation in 30 national and 28 international seminars, with 27 national and 3 international published research papers. He has delivered numerous lectures and guided research scholars at the Ph.D., M.Phil., and M.A. levels. He has directed three major archaeological excavations in Maharashtra and surveys in different parts of the country. He was actively involved in the Polavaram Dam Salvage Archaeology Project (2017-18).\nDr. Pawar is recipient of JRF (UGC) and INTACH National Research Fellowship. He is a life member of several professional organizations, including ISPQS, SOSAA, RASI, IAS. He has served on various academic committees and has coordinated major international conferences on rock art and salvage archaeology. Currently, he continues to contribute to archaeological research, heritage conservation, and student mentorship.`
  },
  {
    name: 'Prof. Yashadatta S. Alone',
    title: 'Vice President',
    bio: `Prof. Y. S. Alone is a Professor of Visual Studies at the School of Arts and Aesthetics, Jawaharlal Nehru University, New Delhi. He holds a Ph.D. and M.Phil. from the Centre for Historical Studies at Jawaharlal Nehru University and M.A. in Fine Arts (Art History) from M. S. University, Baroda. With over 18 years of teaching and research at JNU, he has previously taught at Deccan College Postgraduate Research Institute, Pune, and Kurukshetra University. He was nominated as  ICCR Chair visiting Professor at Shenzhen University, China. He was invited as a short-term visiting professor at Renmin University, Beijing, East China Normal University, Shanghai, Autonoma University Madrid, Spain, and Heidelberg University, Germany. His areas of specialization include ancient Indian and Buddhist art, cave architecture, the visual culture of marginalized communities, and Ambedkarite aesthetics. He has lectured widely in India and abroad, mainly in China, the USA, Spain, and Germany. He has published extensively, including the book "Buddhist Caves of Western India: Forms and Patronage", and is known for his work on western Indian Buddhist caves, Ajanta, Ambedkarian aesthetics, and contemporary art practices.  Prof. Alone is a recipient of the UGC Research Fellowship and has served as an expert member on the Planning Commission’s Expert Group on Culture, Ministry of Culture, Government of India, and academic bodies of several universities. He is known for conceptual formulation termed as "Protected Ignorance" and has published papers on it.`
  },
  {
    name: 'Adv. Ganesh Halkare',
    title: 'Treasurer',
    bio: `Adv. Ganesh Vitthalrao Halkare is a seasoned advocate based in Amravati, Maharashtra, practicing independently with a client-centered and ethically grounded approach. He also holds a post‑graduate degree in Archaeology and Anthropology from Nagpur University and has a notable scholarly presence, with over a dozen research papers—including contributions to tribal astronomy studies—focusing on tribal education, superstition eradication, and the rights awareness among indigenous communities.`
  },
  {
    name: 'Ms. Leena Zilpe',
    title: 'Member',
    bio: `Leena Zilpe is a leading national conservator of cultural property at the National Research Laboratory for Conservation of Cultural Property (NRLC), under India’s Ministry of Culture. Based in Nagpur, she has spearheaded the preservation of iconic collections, including Mahatma Gandhi’s personal artifacts (2008–2010) and over 170 items belonging to Dr. B. R. Ambedkar for a museum in Chicholi. A postgraduate in Applied Art as well as Archaeology from Nagpur University, she topped her museology course at NRLC’s Lucknow center and holds multi-disciplinary expertise in ancient Indian history, linguistics (Sanskrit, Prakrit, Pali, Urdu), and conservation techniques. Her projects include restoring masterpieces by Gaitonde and Raza, reconstructing a 51‑feet Bhagavad Gita scroll, and preserving temple paintings, palm-leaf manuscripts, and historic textiles. Through her initiatives, she advocates minimal-intervention principles and sustainable preservation practices tailored to climate‑vulnerable contexts.`
  },
  {
    name: 'Mr. Shivam Dubey',
    title: 'Project Supervisor',
    bio: `Shivam Dubey, a PhD scholar at Nagpur University, specializes in Ancient Indian Culture and Archaeology. A 2016 postgraduate from St. Xavier's College, Mumbai, he has expertise in temple architecture, iconography, and heritage studies, focusing on the Kalachuris and Central India. He has led key projects like the Sirpur Heritage Assessment and Bandhavgarh excavations, the latter earning global acclaim. Shivam has presented 25+ papers, authored 19+ publications and 11 books, and conducted extensive fieldwork across Madhya Pradesh. He collaborates with ASI, Indian Archaeological Society, and others, promoting heritage awareness via platforms like the G20 Summit and Heritage Pathshala.`
  },
  {
    name: 'Mr. Satish Dekhane',
    title: 'Project Fellow',
    bio: `Mr. Satish Gajana Dhakne is a Ph.D. scholar at Deccan College, Pune, with an M.A. (2020) and a recent PG Diploma in Museology (2025). He also holds a certificate in Digital Archaeology (2023). He has participated in major excavations at Nagpur, Phanigiri, and Tandoor, and worked with the Department of Archaeology, Maharashtra (2022–2024), gaining experience in conservation and heritage documentation. Currently, he teaches at SNDT College, Pune, and conducts freelance archaeological research. His interests include temple architecture, iconography, conservation, and field survey.`
  },
  {
    name: 'Mr. Abhijit Khedkar',
    title: 'Project Research Fellow',
    bio: `Abhijit Khedkar, a dedicated scholar of archaeology and cultural heritage, holds a Master’s degree in Ancient Indian History, Culture, and Archaeology from Deccan College Postgraduate and Research Institute, Pune (2019), following a Bachelor's in History from Fergusson College, Pune (2017). He completed his schooling from Army Public School, Pune under the CBSE board. He has also pursued a Diploma in Marine Archaeology jointly offered by Deccan College and the National Institute of Oceanography, Goa, and a Certificate Course in Persian Language and Literature from the Culture House of Iran, Mumbai. Abhijit has gained substantial field experience, having participated in the archaeological excavation at Nagardhan (Nagpur), representing a cultural sequence from the Early Iron Age to the medieval period, and worked as a Trench Supervisor during the excavation at Phubgaon (Amravati), organized by the Archaeological Survey of India. He also attended the 22nd International Congress of the Rock Art Society of India, showcasing his engagement with wider archaeological discourses. His academic and field training reflect a strong commitment to archaeological research and cultural preservation.`
  },
  {
    name: 'Mrs. Sarla (Rashmi) Bhirud',
    title: 'Blogger and Independent Researcher',
    bio: `Sarla (Rashmi) Bhirud is a versatile scholar and writer with a rich academic and professional background spanning zoology, communication, Indology, and archaeology. She completed her B.Sc. in Zoology from M.J. College, Jalgaon and Fergusson College, Pune in 1991, followed by a Master’s in Communication Studies from the University of Pune in 1994. She gained a decade of experience as an Associate Producer at EMRC, Pune. Her deep interest in cultural heritage led her to pursue an M.A. in Indology (2015) from Tilak Maharashtra Vidyapith, Pune, and later an M.Phil. in Archaeology (2019) from Deccan College Post Graduate and Research Institute under the guidance of Dr. Pramod Joglekar. She also has hands-on experience in artifact documentation from archaeological sites during her time at Deccan College.\nRashmi Bhirud has authored multiple research papers and published works in archaeology and cultural studies, focusing particularly on the Khandesh region, including topics such as Toranmal, Jalgaon’s archaeological landscape, and tribal memorials in Nandurbar. Her Marathi books—विविध धर्मांची ओळख, पूर्वजांचे संचित, and अदिती ते ती—are widely appreciated, and several others are in press. She actively contributes to academic conferences and writes on heritage, history, and social issues in newspapers like Lokmat and Janadesh. A committed poet, she has published four poetry collections each in Hindi/Urdu and Marathi. Her work reflects a deep commitment to cultural preservation, regional history, and community engagement through both scholarship and creative writing.`
  }
];

const People = () => (
  <section className="py-12 px-4 max-w-6xl mx-auto" id="people">
    <h2 className="text-3xl font-bold mb-8">People</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {people.map((person, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 dark:text-white">
          <h3 className="text-xl font-semibold mb-2">{person.name}</h3>
          <p className="text-sm text-gray-600 mb-1">{person.title}</p>
          <p className="text-gray-800 whitespace-pre-line">{person.bio}</p>
        </div>
      ))}
    </div>
  </section>
);

export default People; 