import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  constructor() { }

  products = [
    {
      id: 'm1',
      name: 'Allopathic Medicine',
      img: 'assets/Catagory/Allopathic.png',
      medicine: [
        {
          mid: 'm01',
          mName: 'Calpol 500mg Tablet',
          genericName: 'Paracetamol IP 500 mg',
          mImg1: 'assets/Allopathic/Calpol-1.jpg',
          mImg2: 'assets/Allopathic/Calpol-2.jpg',
          uses: 'Fever & Pain, Headache, Migraine, Muscle ache, Dysmenorrhea, Sore throat',
          expiry: 'May 2025',
          price: '13.44',
          featuredProd: 'false'
        },
        {
          mid: 'm02',
          mName: 'Paracip 500 mg Tablet',
          genericName: 'Paracetamol IP 500 mg',
          mImg1: 'assets/Allopathic/Paracip-1.jpg',
          mImg2: 'assets/Allopathic/Paracip-2.jpg',
          uses: 'Paracip 500 mg Tablet is prescribed to ease mild to moderate pain and reduce fever. It is also used for the treatment of conditions including headache, migraine, backache, toothache, menstrual pain, musculoskeletal pain, and common colds.',
          expiry: 'Apr 2025',
          price: '11.09',
          featuredProd: 'false'
        },
        {
          mid: 'm03',
          mName: 'Dolo 650 Tablet',
          genericName: 'Paracetamol IP 650 mg',
          mImg1: 'assets/Allopathic/Dolo-650-1.jpg',
          mImg2: 'assets/Allopathic/Dolo-650-2.jpg',
          uses: 'Dolo 650 relieves pain and fever quickly. It can be used in headaches, toothaches, migraines, nerve pain, menstrual cramps, sore throats, osteoarthritis, musculoskeletal pain, sprains, and common colds.',
          expiry: 'Mar 2025',
          price: '30.07',
          featuredProd: 'false'
        },
        {
          mid: 'm04',
          mName: 'Pentids 400 Tablet',
          genericName: 'Penicillin G Potassium 400000units',
          mImg1: 'assets/Allopathic/Pentids-400-1.jpg',
          mImg2: 'assets/Allopathic/Pentids-400-2.jpg',
          uses: 'Bacterial Infection of respiratory tract, ear, skin, throat and nasal sinuses, Gonorrhoea, Syphilis, Rheumatic fever',
          expiry: 'Aug 2024',
          price: '21.95',
          featuredProd: 'false'
        },
        {
          mid: 'm05',
          mName: 'Hipen P 500 mg Capsule',
          genericName: 'Amoxicillin',
          mImg1: 'assets/Allopathic/Hipen_P_500_1.jpg',
          mImg2: 'assets/Allopathic/Hipen_P_500_2.jpg',
          uses: 'Amoxicillin is an aminopenicillin antibiotic effective against susceptible systemic bacterial infections.',
          expiry: 'Nov 2024',
          price: '73.47',
          featuredProd: 'false'
        },
        {
          mid: 'm06',
          mName: 'Clavam 625 mg Tablet',
          genericName: 'Amoxycillin 500mg + Clavulanic Acid 125mg',
          mImg1: 'assets/Allopathic/Clavam-1.jpg',
          mImg2: 'assets/Allopathic/Clavam-2.jpg',
          uses: 'Clavam 625 Tablet treats a wide range of bacterial infections in the body. It kills bacteria and can be used for a short period to treat infections of the lungs, ear, sinus, urinary tract, and skin. It is also used to treat teeth, bones, and joint infections.',
          expiry: 'Jul 2024',
          price: '182.78',
          featuredProd: 'true'
        },
        {
          mid: 'm07',
          mName: 'Betadine Ointment 125 gm',
          genericName: 'POVIDONE IODINE-5%W/W',
          mImg1: 'assets/Allopathic/Betadine_Ointment_1.jpg',
          mImg2: 'assets/Allopathic/Betadine_Ointment_2.jpg',
          uses: 'Skin infections, Cuts, Scrapes, and Burns.',
          expiry: 'Dec 2024',
          price: '347.00',
          featuredProd: 'true'
        },
        {
          mid: 'm08',
          mName: 'Betadine Gargle 50 ml',
          genericName: 'POVIDONE IODINE-2%W/V',
          mImg1: 'assets/Allopathic/Betadine_Gargle_1.jpg',
          mImg2: 'assets/Allopathic/Betadine_Gargle_2.jpg',
          uses: 'Sore throat, infections of the lining of the mouth and throat, and mouth ulcers.',
          expiry: 'Dec 2024',
          price: '277.00',
          featuredProd: 'false'
        },
        {
          mid: 'm09',
          mName: 'Norflox TZ RF Tablet',
          genericName: 'Norfloxacin 400mg + Tinidazole 600mg',
          mImg1: 'assets/Allopathic/Norflox-TZ-1.jpg',
          mImg2: 'assets/Allopathic/Norflox-TZ-2.jpg',
          uses: 'Norflox TZ RF Tablet is an antibiotic used to treat diarrhea and dysentery caused by bacteria and other microbes. It is also used to treat urinary tract infections. It kills the microbes and thus treats the infection.',
          expiry: 'Oct 2025',
          price: '107.48',
          featuredProd: 'false'
        },
        {
          mid: 'm10',
          mName: 'Metro 400 mg Tablet',
          genericName: 'Metronidazole 400mg',
          mImg1: 'assets/Allopathic/Metro-1.jpg',
          mImg2: 'assets/Allopathic/Metro-2.jpg',
          uses: 'Metronidazole is a wide spectrum anti-infective agent used to treat amoebiasis, giardiasis, trichomoniasis, and anaerobic bacterial infections including in H.pylori positive peptic ulcers.',
          expiry: 'Sep 2024',
          price: '18.50',
          featuredProd: 'false'
        },
        {
          mid: 'm11',
          mName: 'Entero Quinol Tablet',
          genericName: 'QUINIODOCHLOR-250MG',
          mImg1: 'assets/Allopathic/Entero_Quinol_1.jpg',
          mImg2: 'assets/Allopathic/Entero_Quinol_2.jpg',
          uses: 'Treatment of Worm infections, Intestinal amoebiasis',
          expiry: 'Nov 2024',
          price: '52.00',
          featuredProd: 'false'
        },
        {
          mid: 'm12',
          mName: 'Unienzyme Tablet',
          genericName: 'Activated Charcoal 75 mg+Fungal Diastase 100 mg+Papain 60 mg',
          mImg1: 'assets/Allopathic/unienzyme_1.jpg',
          mImg2: 'assets/Allopathic/unienzyme_2.jpg',
          uses: 'Relieves functional dyspepsia. Treats digestive disorders such as bloating, belching, flatulence, stomach discomfort and fullness',
          expiry: 'Oct 2024',
          price: '77.55',
          featuredProd: 'false'
        },
        {
          mid: 'm13',
          mName: 'Digene Acidity & Gas Relief Tablets',
          genericName: 'Pantoprazole',
          mImg1: 'assets/Allopathic/Digene_Tablet_1.jpg',
          mImg2: 'assets/Allopathic/Digene_Tablet_2.jpg',
          uses: 'Acidity, Heartburn, Indigestion, Gastritis (inflammation of the stomach), Stomach upset',
          expiry: 'Feb 2025',
          price: '24.14',
          featuredProd: 'false'
        },
        {
          mid: 'm14',
          mName: 'Carmozyme Syrup 450 ml',
          genericName: 'Carmozyme',
          mImg1: 'assets/Allopathic/Carmozyme-1.jpg',
          mImg2: 'assets/Allopathic/Carmozyme-2.jpg',
          uses: 'Carmozyme is a syrup of digestive enzymes with vitamin B2 and niacinamide that improves the digestion power of an individual.',
          expiry: 'May 2024',
          price: '201.00',
          featuredProd: 'false'
        },
        {
          mid: 'm15',
          mName: 'Duphalac Lemon Flavour Oral Solution 450ml',
          genericName: 'Lactulose 3.35gm',
          mImg1: 'assets/Allopathic/Duphalac-1.jpg',
          mImg2: 'assets/Allopathic/Duphalac-2.jpg',
          uses: 'Constipation, Hepatic Encephalopathy',
          expiry: 'Mar 2025',
          price: '580.00',
          featuredProd: 'false'
        },
        {
          mid: 'm16',
          mName: 'Jupiros F Tablet',
          genericName: 'Fenofibrate 160 mg+Rosuvastatin 10 mg',
          mImg1: 'assets/Allopathic/jupiros_1.jpg',
          mImg2: 'assets/Allopathic/jupiros_2.jpg',
          uses: 'Treat high blood cholesterol levels. Prevent the risk of heart attack, stroke or atherosclerosis',
          expiry: 'Jan 2025',
          price: '270.00',
          featuredProd: 'false'
        },
        {
          mid: 'm17',
          mName: 'Cardace 5mg Tablet',
          genericName: 'Ramipril 5 mg',
          mImg1: 'assets/Allopathic/cardace_1.jpg',
          mImg2: 'assets/Allopathic/cardace_2.jpg',
          uses: 'Treats increased blood pressure, heart failure. Treats and reduces the risk of getting a heart attack or stroke and slow down the worsening of kidney problems',
          expiry: 'Sep 2025',
          price: '122.64',
          featuredProd: 'true'
        },
        {
          mid: 'm18',
          mName: 'XLHA Eye Drops 10ml',
          genericName: 'Sodium Hyaluronate 0.1 %',
          mImg1: 'assets/Allopathic/Xlha-1.jpg',
          mImg2: 'assets/Allopathic/Xlha-2.jpg',
          uses: 'Mild to severe dry eyes, Post operated dry eyes, Corneal burns',
          expiry: 'Oct 2024',
          price: '450.00',
          featuredProd: 'true'
        },
        {
          mid: 'm19',
          mName: 'MOXISTAT P Eye Drops 5ml',
          genericName: 'Moxifloxacin 0.5 %+Prednisolone 1 %',
          mImg1: 'assets/Allopathic/moxistat_1.jpg',
          mImg2: 'assets/Allopathic/moxistat_2.jpg',
          uses: 'Treats and prevents eye infection and inflammation. Reduces eye pain, redness, itching or burning/stinging sensation following eye surgery',
          expiry: 'Aug 2024',
          price: '75.00',
          featuredProd: 'false'
        },
        {
          mid: 'm20',
          mName: 'Becosules Capsule',
          genericName: 'Ascorbic Acid 150 mg+Biotin 100 mcg+Folic Acid 1.5 mg+Methylcobalamin 15 mcg+Niacinamide 100 mg+Pantothenic Acid 50 mg+Pyridoxine 3 mg+Riboflavin 10 mg+Thiamine 10 mg',
          mImg1: 'assets/Allopathic/becosules_1.jpg',
          mImg2: 'assets/Allopathic/becosules_2.jpg',
          uses: 'Decreased intake due to restricted or unbalanced diet, Antibiotic treatment, prolonged diarrhea and in chronic digestion disorders, Increased requirements due to fast metabolic rate as in fever, Micronutrient deficiencies during pregnancy or breastfeeding',
          expiry: 'Feb 2025',
          price: '50.23',
          featuredProd: 'true'
        },
      ]
    },


    {
      id: 'm2',
      name: 'Ayurvedic Medicine',
      img: 'assets/Catagory/Ayurvedic.png',
      medicine: [
        {
          mid: 'a01',
          mName: 'Divya Dhara',
          genericName: 'pipermint, Karpoor bhimseni sat, Ajwain sat',
          mImg1: 'assets/Ayurvedic/Divya-Dhara-1.jpg',
          mImg2: 'assets/Ayurvedic/Divya-Dhara-2.jpg',
          uses: 'Headache, tooth ache, ear diseases, nose bleeding, injuries, cnidosis, cough, indigestion and dyspepsia',
          expiry: 'Nov 2025',
          price: '45.00',
          featuredProd: 'true'
        },
        {
          mid: 'a02',
          mName: 'Amla Juice 1 L',
          genericName: 'Amla',
          mImg1: 'assets/Ayurvedic/Amla-1.jpg',
          mImg2: 'assets/Ayurvedic/Amla-2.jpg',
          uses: 'Amla juice helps in metabolism, hyperacidity, blood purification, and strengthens immunity. Amla juice eases constipation.',
          expiry: 'Dec 2023',
          price: '140.00',
          featuredProd: 'true'
        },
        {
          mid: 'a03',
          mName: 'Aloevera Juice With Fiber 1 L',
          genericName: 'Aloevera',
          mImg1: 'assets/Ayurvedic/Aloevera-1.jpg',
          mImg2: 'assets/Ayurvedic/Aloevera-2.jpg',
          uses: 'Enriched with Vitamins, Minerals, and Antioxidants for our body. Promotes digestion, appetite, hair and skin health, and boosts immunity',
          expiry: 'Dec 2023',
          price: '210.00',
          featuredProd: 'true'
        },
        {
          mid: 'a04',
          mName: 'Kapiva Triphala Natural Herbal Laxative Juice',
          genericName: ' Amla, Bahera, Harad',
          mImg1: 'assets/Ayurvedic/Triphala-Juice-1.jpg',
          mImg2: 'assets/Ayurvedic/Triphala-Juice-2.jpg',
          uses: 'Kapiva Triphala Juice is an excellent choice for solving constipation and irregular bowels.',
          expiry: 'Feb 2024',
          price: '299.00',
          featuredProd: 'false'
        },
        {
          mid: 'a05',
          mName: 'Patanjali Divya Madhunashini Vati',
          genericName: 'Tinosporacordifolia',
          mImg1: 'assets/Ayurvedic/Madhunashini_1.jpg',
          mImg2: 'assets/Ayurvedic/Madhunashini_2.jpg',
          uses: 'Controls diabetes and cures complications arising from diabetes mellitus.',
          expiry: 'Jan 2024',
          price: '225.00',
          featuredProd: 'false'
        },
        {
          mid: 'a06',
          mName: 'Patanjali Divya Mukta Vati',
          genericName: 'Onosma Bracteatum',
          mImg1: 'assets/Ayurvedic/Muktavati_1.jpg',
          mImg2: 'assets/Ayurvedic/Muktavati_2.jpg',
          uses: 'Useful in high blood pressure.',
          expiry: 'May 2024',
          price: '225.00',
          featuredProd: 'false'
        },
        {
          mid: 'a07',
          mName: 'Dabur Tulsi Drops 30 ml',
          genericName: 'Tulsi',
          mImg1: 'assets/Ayurvedic/Tulsidrop_1.jpg',
          mImg2: 'assets/Ayurvedic/Tulsidrop_2.jpg',
          uses: 'Boosts Immunity, Cough And Cold Relief, Builds Respiratory Health',
          expiry: 'Feb 2025',
          price: '195.00',
          featuredProd: 'false'
        },
        {
          mid: 'a08',
          mName: 'Giloy Ghanvati',
          genericName: 'Giloy',
          mImg1: 'assets/Ayurvedic/giloy_ghanvati_1.jpg',
          mImg2: 'assets/Ayurvedic/giloy_ghanvati_1.jpg',
          uses: 'Improves general debility. Beneficial in different types of fever. Effective in skin and urinary disorders',
          expiry: '',
          price: '100.00',
          featuredProd: 'false'
        },
        {
          mid: 'a09',
          mName: 'Baidyanath (Nagpur) Arshkuthar Ras',
          genericName: 'Thoohar Panchang',
          mImg1: 'assets/Ayurvedic/Arshkuthar_1.jpg',
          mImg2: 'assets/Ayurvedic/Arshkuthar_2.jpg',
          uses: 'Piles crear',
          expiry: 'Apr 2024',
          price: '109.00',
          featuredProd: 'false'
        },
        {
          mid: 'a10',
          mName: 'Patanjali Divya Swasari Pravahi',
          genericName: 'Ocimum sanctum',
          mImg1: 'assets/Ayurvedic/SwasariPravahi_1.jpg',
          mImg2: 'assets/Ayurvedic/SwasariPravahi_2.jpg',
          uses: 'Relief from cough and cold',
          expiry: 'Jun 2025',
          price: '85.00',
          featuredProd: 'false'
        }, {
          mid: 'a11',
          mName: 'DIVYA LIPIDOM TABLET',
          genericName: 'Terminalia Arjuna',
          mImg1: 'assets/Ayurvedic/Lipidom_1.png',
          mImg2: 'assets/Ayurvedic/Lipidom_2.png',
          uses: 'Divya lipidom tablet is useful for reduce the actual cholesterol, dyslipidemia, helpful in fat metabolism. Aids in controlling blood sugar in people with diabetes.',
          expiry: 'Dec 2024',
          price: '300.00',
          featuredProd: 'false'
        },
        {
          mid: 'a12',
          mName: 'DIVYA CHURNA 100 G',
          genericName: 'Cassia Angustifolia',
          mImg1: 'assets/Ayurvedic/Divyachuran_1.png',
          mImg2: 'assets/Ayurvedic/Divyachuran_2.png',
          uses: 'Divya Churna is a time-tested medicine for constipation and indigestion. It is made from a combination of natural extracts that have the capacity to purge your system of toxins. Divya Churna also has laxative properties that induce peristaltic movements thus making evacuation of bowels pain-free. It improves digestion, increases appetite and reduces gas formation and discomfort. Don\'t let constipation and heartburn hold you back from enjoying life. Take Divya Churna to experience the soothing touch of Ayurvedic therapy.',
          expiry: 'Jun 2024',
          price: '65.00',
          featuredProd: 'false'
        },
        {
          mid: 'a13',
          mName: 'DIVYA ASHWAGANDHA CHURNA 100 G',
          genericName: 'Ashwagandha',
          mImg1: 'assets/Ayurvedic/ASHWAGANDHACHURNA_1.png',
          mImg2: 'assets/Ayurvedic/ASHWAGANDHACHURNA_2.png',
          uses: 'Ashwagandha churna helps you get relief from stress and boosts your health and immunity. It is made from the goodness of ashwagandha also known as the Indian ginseng. It helps you recover from anxiety and depression and helps you regain strength. It has antioxidant properties which helps in quick recovery from ailments and revitalizes your body. Divya pharmacy brings you ashwagandha churna for holistic cure of body and mind. Take ashwagandha churna to regain that perfect balance of physical-emotional well-being.',
          expiry: 'May 2024',
          price: '85.00',
          featuredProd: 'false'
        },
        {
          mid: 'a14',
          mName: 'DIVYA TRIPHALA CHURNA 100 G',
          genericName: 'Amla, Bahera, Harad',
          mImg1: 'assets/Ayurvedic/TRIPHALA_1.png',
          mImg2: 'assets/Ayurvedic/TRIPHALA_2.png',
          uses: 'Triphala Churna is an ayurvedic product, beneficial in vision related troubles, constipation and stomach problems. Base, salt and acid mixed powder is warm in nature, digestible, tasteful and ignites hunger.',
          expiry: 'Jan 2025',
          price: '30.00',
          featuredProd: 'false'
        },
        {
          mid: 'a15',
          mName: 'DIVYA MAKAR DHWAJ 2G',
          genericName: 'Shudh Swarna patra',
          mImg1: 'assets/Ayurvedic/Makardhwaj_1.png',
          mImg2: 'assets/Ayurvedic/Makardhwaj_2.png',
          uses: 'Makar Dhwaj is an ayurvedic medicine that improves general health and boosts libido. The tonic nourishes your body back to health, gives you strength and rejuvenates your physical desires.',
          expiry: 'Dec 2024',
          price: '100.00',
          featuredProd: 'false'
        },
        {
          mid: 'a16',
          mName: 'DIVYA SWASARI VATI',
          genericName: 'Glycyrrhiza Glabra',
          mImg1: 'assets/Ayurvedic/SWASARI_1.png',
          mImg2: 'assets/Ayurvedic/SWASARI_2.png',
          uses: 'Patanjali swasari vati treats cold, cough and other such diseases. The purity, quantity, and quality of the herbs utilized are the topmost priority.',
          expiry: 'Jul 2026',
          price: '120.00',
          featuredProd: 'false'
        },
        {
          mid: 'a17',
          mName: 'DIVYA SWASARI RAS 10G',
          genericName: 'Mulethi',
          mImg1: 'assets/Ayurvedic/SwasariRas_1.png',
          mImg2: 'assets/Ayurvedic/SwasariRas_2.png',
          uses: 'Divya swasari ras is a time-tested remedy for common cold, chronic cough and phlegm accumulated in your chest. Divya swasari ras soothes throat irritation thus curing cough. It heals the cold by eliminating viruses and dislodges the accumulated phlegm thus curing the ailment from its roots. Prepared from natural extracts with a lot of care divya swasari ras is divya pharmacy\'s offering to provide you lasting relief from common cold to serious asthmatic attack. Divya swasari ras heals and nourishes your respiratory system back to health. Discover the wholesome healing of ayurveda with divya swasari ras.',
          expiry: 'Jun 2028',
          price: '25.00',
          featuredProd: 'false'
        },
        {
          mid: 'a18',
          mName: 'DIVYA KUMARYASAVA 450 ML',
          genericName: 'Terminalia chebula',
          mImg1: 'assets/Ayurvedic/Kumariyasav_1.png',
          mImg2: 'assets/Ayurvedic/Kumariyasav_2.png',
          uses: 'Kumaryasav relieves discomfort from gas and acidity and prevents further gas forming. It stimulates digestive enzymes to form normally and provides relief in flatulence, belching, bloating, constipation and hemorrhoids. It is made from herbal extracts and has no side effects. It gives you long lasting relief from stomach problems.',
          expiry: 'Dec 2028',
          price: '88.00',
          featuredProd: 'false'
        },
        {
          mid: 'a19',
          mName: 'DIVYA IMMUNOGRIT 60 N',
          genericName: 'Purena Tuberosa',
          mImg1: 'assets/Ayurvedic/IMMUNOGRIT_1.png',
          mImg2: 'assets/Ayurvedic/IMMUNOGRIT_2.png',
          uses: 'Divya Immunogrit is useful in General weakness, use as immuno modulator. It contains Vidarikand, Meda, Shatavar, Kakoli, Kshir kakoli. This medicine is 100% vegetarian and it has no side effects. Improves mental health and physical wellness.',
          expiry: 'Jan 2025',
          price: '450.00',
          featuredProd: 'false'
        },
        {
          mid: 'a20',
          mName: 'DIVYA GILOY KWATH 200 G',
          genericName: 'Tinosporacordifolia',
          mImg1: 'assets/Ayurvedic/GiloyKwath_1.png',
          mImg2: 'assets/Ayurvedic/GiloyKwath_2.png',
          uses: 'Divya Giloy Kwath brings to you the goodness of giloy which has very effective and multifarious medicinal properties. Giloy cures fevers from viral infections (dengue, chikungunya, etc.) and helps you recover holistically. Giloy cures cold and weakness due to low platelet count. It detoxifies your system and gives you glowing skin. Giloy also boosts your immunity and keeps diseases at bay.',
          expiry: 'Jul 2024',
          price: '40.00',
          featuredProd: 'false'
        },
        {
          mid: 'a21',
          mName: 'Divya Bronchom 60N',
          genericName: 'Ocimum Sanctum',
          mImg1: 'assets/Ayurvedic/bronchom_1.png',
          mImg2: 'assets/Ayurvedic/bronchom_2.png',
          uses: 'This medicine is named from the disease bronchitis. Patanjali divya bronchom is a ayurvedic medicine which is designed to cure bronchitis. And its other uses are to cure cough, to treat asthma and diseases related to the bronchial tubes.',
          expiry: 'Dec 2026',
          price: '250.00',
          featuredProd: 'true'
        },
        {
          mid: 'a22',
          mName: 'Divya Tulsi Ghan Vati',
          genericName: 'Ocimum Sanctum',
          mImg1: 'assets/Ayurvedic/TulsiGhanvati_1.png',
          mImg2: 'assets/Ayurvedic/TulsiGhanvati_2.png',
          uses: 'Patanjali Divya Tulsi Ghan Vati is very beneficial for the health and immunity of the body. This is helpful in fever, dengue, cold, and chicken guinea.',
          expiry: 'Mar 2025',
          price: '110.00',
          featuredProd: 'true'
        }
      ]
    },


    {
      id: 'm3',
      name: 'Healthcare Products',
      img: 'assets/Catagory/Healthcare.png',
      medicine: [
        {
          mid: 'h01',
          mName: 'Omron Blood Pressure Monitor HEM-7124',
          genericName: 'Blood Pressure Monitor',
          mImg1: 'assets/Healthcare/BPmonitor_1.jpg',
          mImg2: 'assets/Healthcare/BPmonitor_2.jpg',
          uses: 'OMRON HEM-7124 Automatic Blood Pressure Monitor is a compact, fully automatic monitor that measures blood pressure (BP) and pulse rate simply and quickly.',
          expiry: 'NA',
          price: '2310',
          featuredProd: 'true'
        },
        {
          mid: 'h02',
          mName: 'Newnik Basic Stethoscope',
          genericName: 'Stethoscope',
          mImg1:'assets/Healthcare/Stethoscope_1.jpg',
          mImg2:'assets/Healthcare/Stethoscope_2.jpg',
          uses: 'can be used to listen to the sounds made by the heart, lungs or intestines, as well as blood flow in arteries and veins.',
          expiry: 'NA',
          price: '639.00',
          featuredProd:'false'
        },
        {
          mid: 'h03',
          mName: 'Dettol Instant Hand Sanitizer',
          genericName: 'Hand sanitizer',
          mImg1:'assets/Healthcare/Sanitizer_1.jpg',
          mImg2:'assets/Healthcare/Sanitizer_2.jpg',
          uses: 'Kills pathogens present on our hands and diminishes transmission of germs also from one person to another. Sanitisers have ethyl alcohol, isopropyl alcohol, and the antibacterial substance triclosan.',
          expiry: 'Sep 2024',
          price: '100.00',
          featuredProd:'flase'
        },
        // {
        //   mid: 'h04',
        //   mName: 'Band aid',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h05',
        //   mName: 'Bandage',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h06',
        //   mName: 'hand wash',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h07',
        //   mName: 'weight',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h08',
        //   mName: 'heart rate',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h09',
        //   mName: 'mask',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h10',
        //   mName: 'Sugar test',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h11',
        //   mName: 'pillow',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h12',
        //   mName: 'Ortopadic slippers',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h13',
        //   mName: 'injection',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h14',
        //   mName: 'Serilized cotton',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h15',
        //   mName: 'First aid',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h16',
        //   mName: '',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
        // {
        //   mid: 'h',
        //   mName: '',
        //   genericName: '',
        //   mImg1:'assets/Healthcare/',
        //   mImg2:'assets/Healthcare/',
        //   uses: '',
        //   expiry: '',
        //   price: '',
        //   featuredProd:''
        // },
      ]
    }
  ]
}
