// import React, { createContext, useState } from 'react'

// export const store = createContext()

// const Details = (props) => {
//   const [details, setDetails] = useState([
//     {
//       "id": 1,
//       "title": "Rohit Shetty: The thought of 'Bollywood khatam' gives some kind of a high to people, but Bollywood kabhi khatam nahi hoga",
//       "Image": "https://static.toiimg.com/thumb/imgsize-123456,msid-91856927,width-300,resizemode-4/91856927.jpg",
//       "category": "Bollywood",
//       "description": "As the north-south cinema debate goes on, Rohit Shetty is the latest one to share his views. The director opined that people enjoy trying to pull Bollywood down, but nothing can affect the industry."
//     },
    
//     {
//       "id": 51,
//       "title": "Jacqueline Fernandez steps in to help Bollywood photog in distress",
//       "Image": "https://static.toiimg.com/thumb/imgsize-123456,msid-91724323,width-300,resizemode-4/91724323.jpg",
//       "category": "bollywood",
//       "description": "Last year, she had also launched her foundation 'You Only Live Once' or YOLO to spread kindness through various mediums. Recently, Jacqueline stepped in to help Bollywood photographer Manoj Mehara who was in dire need for funds for his brother's medical treatment."
//     },
//     {
//       "id": 2,
//       "title": "Shiamak Davar: Choreographing Ranveer Singh isn't easy",
//       "Image": "https://static.toiimg.com/thumb/imgsize-123456,msid-91910165,width-300,resizemode-4/91910165.jpg",
//       "category": "Bollywood",
//       "description": "Celebrated choreographer Shiamak Davar, who was behind the dance performance of the Bollywood star Ranveer Singh at the IPL 2022 grand finale in Ahmedabad on Sunday, says matching up to the energy of the actor wasn't easy."
//     },
//     {
//       "id": 61,
//       "title": "Tamannaah Bhatia opens up on ‘Himmatwala’s failure and making mistakes in Bollywood",
//       "Image": "https://static.toiimg.com/thumb/imgsize-123456,msid-91660452,width-300,resizemode-4/91660452.jpg",
//       "category": "footer1",
//       "description": "Back in 2013, Tamannaah Bhatia made her Bollywood debut with Himmatwala which bombed at the box office. The film, which is a remake of Jeetendra-Sridevi starrer 1983 film by the same name, also starred Ajay Devgn and Paresh Rawal in pivotal roles."
//     },
    
//     {
//       "id": 3,
//       "title": "SS Rajamouli's RRR hailed by Eternals star Patton Oswalt: F**ken RRR is insane",
//       "Image": "https://filmfare.wwmindia.com/content/2022/may/rrrpattonoswalt41653717404.jpg",
//       "category": "Bollywood",
//       "description": "Hollywood comedian and actor Patton Oswalt cannot get enough of RRR. The actor who is best known for his Marvel roles including Eternals was left impressed with director SS Rajamouli's latest magnum opus. He recently took to Twitter to recommend the movie.RR was a megahit that had a successful box office run. Apart from breaking records in Indian cinemas, the film also garnered huge praise from international critics and audiences. In a Tweet, Patton Oswalt urged people to watch RRR. He wrote, “If this ISN’T playing near you in IMAX then this is the next best way to watch it. Fucken @RRRMovie is insane.When the team of RRR responded to thank Oswalt, he replied, “You guys are out of your f**king minds, you should not be allowed to make films, and I can’t wait to see what you do next.RR is a period drama starring Ram Charan and NTR Jr and follows two revolutionaries - Alluri Sitarama Raju and Komaram Bheem as they go up against the British rule in India. The film was released on March 24 this year. Since then, it has garnered significant buzz. It also kickstarted a debate on the way pan-India films are perceived."
//     },
//     {
//       "id": 4,
//       "title": "‘Bhool Bhulaiyaa 2’ box office collection",
//       "Image": "https://static.toiimg.com/thumb/msid-91885360,imgsize-29234,width-800,height-600,resizemode-75/91885360.jpg",
//       "category": "Bollywood",
//       "description": "‘Bhool Bhulaiyaa 2’ has observed a drop in collection in its second weekend but has managed to enter the coveted 100 crore club. The movie recorded a drop of 45 per cent from last week and added Rs 30 crore nett to its total, reports Boxofficeindia. The film recorded a good score on its second Saturday, but dropped on Sunday because of a cricket tournament. New releases this week, like ‘Anek’ and ‘Top Gun: Maverick’ have faced a dull response at the box office, with only ‘Bhool Bhulaiyaa 2’ managing to triumph.      "
//     },
//     {
//       "id": 5,
//       "title": "'Brahmastra' star Ranbir Kapoor reveals THIS Telugu actor is his favourite",
//       "Image": "https://static.toiimg.com/thumb/msid-91915598,width-800,height-600,resizemode-75,imgsize-32890,pt-32,y_pad-40/91915598.jpg",
//       "category": "Bollywood",
//       "description": "During an interaction with the media, the actor was asked who his favourite Telugu actor was. After a brief pause, Ranbir quipped, “I love my darling Prabhas. He is a dear friend of mine.” Ranbir also went on to add, "
//     },
//     {
//       "id": 6,
//       "title": "Neetu Kapoor on Viral Bhayani's comment about Alia Bhatt-Ranbir Kapoor wedding: 'Will host special reception for him'",
//       "Image": "https://images.hindustantimes.com/img/2022/05/30/550x309/neetu_kapoor_1650036794774_1653923025524.jpg",
//       "category": "Bollywood",
//       "description": "Actor Neetu Kapoor has reacted to paparazzo Viral Bhayani's remark that he was upset that actors Alia Bhatt and Ranbir Kapoor did not hold a reception after their wedding. In a new interview, Neetu said that she doesn't like it when a person is upset, and added that she will 'host a special reception only for him'."
//     },
    
//     {
//       "id": 54,
//       "title": "Neetu Kapoor on Viral Bhayani's comment about Alia Bhatt-Ranbir Kapoor wedding: 'Will host special reception for him'",
//       "Image": "https://images.hindustantimes.com/img/2022/05/30/550x309/neetu_kapoor_1650036794774_1653923025524.jpg",
//       "category": "mix",
//       "description": "Actor Neetu Kapoor has reacted to paparazzo Viral Bhayani's remark that he was upset that actors Alia Bhatt and Ranbir Kapoor did not hold a reception after their wedding. In a new interview, Neetu said that she doesn't like it when a person is upset, and added that she will 'host a special reception only for him'."
//     },
    
//     {
//       "id": 7,
//       "title": "Salman Khan has finished 5 days of 'Kabhi Eid Kabhi Diwali' shoot in Mumbai",
//       "Image": "https://static.toiimg.com/thumb/msid-91911724,imgsize-24512,width-800,height-600,resizemode-75/91911724.jpg",
//       "category": "Bollywood",
//       "description": "Now, Salman may still keep Sajid Nadiadwala's name in the credits as we had told you. But what takes us by surprise now is an information from a top source that Salman has already shot the film for 5 days."
//     },
   
//     {
//     "id": 8,
//     "title": "Is Ajay Devgn set to begin work on 'Raid 2' next year?",
//     "Image": "https://static.toiimg.com/thumb/msid-91907814,imgsize-28874,width-800,height-600,resizemode-75/91907814.jpg",
//     "category": "Bollywood",
//     "description": "Bollywood star Ajay Devgn has a lot on his plate right now. The actor, who is currently shooting for 'Drishyam 2', also has 'Bholaa' and Rohit Shetty's 'Singham 3' getting ready to roll out soon. According to the latest reports, the actor may also have to add the 'Raid' sequel to his calendar."
//   },
  
//   {
//     "id": 9,
//     "title": "Bollywood Deepika Padukone looks jaw droppingly stunning in latest photos",
//     "Image": "https://www.pinkvilla.com/imageresize/deepika_69.jpg?width=752&format=webp&t=pvorg",
//     "category": "Bollywood",
//     "description": "Deepika Padukone never fails to impress us with her style. The stunning actress is an epitome of grace and charm. Deepika is the highest paid actress in the country today and has made it to the Top 5 of Forbes List of Richest Indian Celebs. The actor was featured in TIME magazine’s 100 Most Influential People List and is one of the few Indian actors to have attended coveted events abroad. "
//   },
 
//   {
//     "id": 10,
//     "title": "After 'Bhool Bhulaiyaa', Kartik Aaryan is set to take over Akshay Kumar's 'Housefull' franchi",
//     "Image": "https://static.toiimg.com/thumb/msid-91907852,width-800,height-600,resizemode-75,imgsize-45766,pt-32,y_pad-40/91907852.jpg",
//     "category": "Bollywood",
//     "description": "The actor, who stepped into the character of Akshay Kumar in the second instalment of the ‘Bhool Bhulaiyaa’ franchise, is garnering praise from all quarters for his performance. If the reports doing the rounds on the internet are anything to go by then the young actor is all set to take over yet another popular film franchise from the ‘Khiladi’ star."
//   },
//   {
//     "id": 11,
//     "title": "Tom Cruise furious with ex-wife Katie Holmes for contacting his enemy ",
//     "Image": "https://static.toiimg.com/thumb/msid-49724925,width-800,height-600,resizemode-75/49724925.jpg",
//     "category": "Hollywood",
//     "description": "As controversy about Scientology continues to hit the headlines, it appears Tom is angry that ex-wife Katie has reached out to the Scientology enemy. With Leah Rimini in the Church’s bad books following her penning a tell-all book, Trouble Maker, about her time as a Scientologist, the Mission Impossible actor has reacted badly to Katie apologising to Remini for the way she has been treated in the past."
//   },
//   {
//     "id": 55,
//     "title": "Jake Gyllenhaal reacalls hilarious complaint letter to eatery",
//     "Image": "https://static.toiimg.com/thumb/msid-48942461,width-800,height-600,resizemode-75/48942461.jpg",
//     "category": "mix",
//     "description": "Gyllenhaal, 34, said when he found out that his favourite item at KFC, Chicken Littles, had been taken off the menu, he wrote a letter to bring it back, reported Entertainmnet Tonight."
//   },
//   {
//     "id": 12,
//     "title": " Hollywood comes to Uttarakhand to 'find meaning' ",
//     "Image": "https://static.toiimg.com/thumb/msid-49428076,width-800,height-600,resizemode-75/49428076.jpg",
//     "category": "Hollywood",
//     "description": "The 'search for spiritual and emotional solutions' in the East does not seem to be particular to Liz, though. Hollywood actors often come to this side of the world to do some 'quiet thinking' and soul-searching. Some end up settling down here, some pay periodic visits, and some even have ashrams named after them."
//   },
  
//   {
//     "id": 13,
//     "title": "Robert De Niro: Enjoy giving advice to younger actors' ",
//     "Image": "https://static.toiimg.com/thumb/msid-49086446,width-800,height-600,resizemode-75/49086446.jpg",
//     "category": "Hollywood",
//     "description": "Speaking about what each generation can learn from the other, De Niro, 72, said, There is no downside in asking somebody who is been around a lot longer than you especially if they have done things that you have done, or in that area."
//   },
 
//   {
//     "id": 14,
//     "title": "Gauri Khan praises Manish Malhotra for making her look 'so slim', says Maheep Kapoor 'firing me even while posing' ",
//     "Image": "https://images.hindustantimes.com/img/2022/05/28/550x309/gauri-khan_1653743810258_1653743890064.jfif",
//     "category": "Hollywood",
//     "description": "In the first picture she posted on Instagram, Gauri sat on a bar stool as she posed sideways for the camera. She faced the lens in the second photo. Gauri gave another pose in the last picture. She captioned the post, Wow !!! You’ve made me look so slim and tagged Manish Malhotra. Reacting to the post, Manish dropped red heart emojis and Maheep added fire, heart eyes and heart emojis. Ananya Panday wrote, Love it. Namrata Shirodkar and Shanaya Kapoor posted heart eyes emojis. Malaika Arora commented, Awesome G. On her Instagram Stories, Gauri also shared a clip in which she seemingly tried to hold Maheep's hand as they posed for the photos at Karan's birthday venue. As Maheep quickly turned and told her something, Gauri made a face, laughed and looked at her."
//   },
//   {
//     "id": 15,
//     "title": "Elon Musk to borrow less in Twitter bid, filing says ",
//     "Image": "https://images.hindustantimes.com/img/2022/05/26/550x309/TWITTER-AGM-0_1653534087051_1653534101559.JPG",
//     "category": "Hollywood",
//     "description": "Tesla CEO Elon Musk has been courting major Twitter investors including co-founder Jack Dorsey in the hope of getting them to partner with him in taking the San Francisco-based company private.Elon Musk notified US regulators on Wednesday that he will rely less on loans in his bid to buy Twitter, as he and partners put $33.5 billion into the deal.Twitter shares climbed more than 5 percent on the news, as the market evidently took it as a sign the acquisition is moving forward despite Musk declaring it on hold due to his concerns about the number of accounts that might be software bots instead of real people. Musk said in the regulatory filing that he had new commitments that will allow him to rely less on loans to buy Twitter, but did not specify whether he was reaching into his own pocket for money or had won over others with big stakes in the company Analysts were concerned about Musk using billions of dollars worth of his Tesla shares to back loans, meaning the electric car company's stock price would be affected by the fortunes of Twitter  ."
//   },
//   {
//     "id": 16,
//     "title": "'Deadpool' trailer: Ryan Reynolds is Marvel's most unconventional superhero till date",
//     "Image": "https://static.toiimg.com/thumb/msid-48355484,width-800,height-600,resizemode-75/48355484.jpg",
//     "category": "Hollywood",
//     "description": "Ryan Reynolds, who plays a disfigured and mentally unstable mercenary with the superhuman ability of an accelerated healing factor. He is known as the Merc with a Mouth because of his talkative nature and a tendency to break the fourth wall, which is also seen at the end of the trailer."
//   },
//   {
//     "id": 17,
//     "title": "Cannes full list of winners: Swedish film Triangle of Sadness wins Palme d'Or ",
//     "Image": "https://images.hindustantimes.com/img/2022/05/29/550x309/FILMFESTIVAL-CANNES-AWARDS-354_1653794715337_1653794733888.JPG",
//     "category": "Hollywood",
//     "description": "The 75th Cannes Film Festival - Closing ceremony - Cannes, France, May 28, 2022. Song Kang-ho, Best Actor award winner for his role in the film Broker (Les bonnes etoiles), director Ruben Ostlund, Palme d'Or award winner for the film film Triangle of Sadness, and Vincent Lindon, Jury President of the 75th Cannes Film Festival, react on stage. REUTERS/Sarah Meyssonnier TPX IMAGES OF THE DAY(REUTERS). The 75th edition of the Cannes Film Festival came to a glittering close on Saturday with the nine-member jury giving out the big awards at the prestigious festival. Swedish director Ruben Ostlund’s class warfare comedy took the top honours by winning the festival's top prize--the Palme d’Or. Korean cinema again showed its dominance by taking home multiple awards for different films.The awards were selected by a nine-member jury headed by French actor Vincent Lindon and presented Saturday in a closing ceremony inside Cannes' Grand Lumière Theater. The jury included an Indian face in actor Deepika Padukone. A separate section of two awards for documentary films was adjudged e earlier on Saturday. Those awards were adjudged by a separate jury."
//   },
//   {
//     "id": 18,
//     "title": "Woody Allen dreams of perfect murder",
//     "Image": "https://static.toiimg.com/thumb/msid-48131438,width-800,height-600,resizemode-75/48131438.jpg",
//     "category": "Hollywood",
//     "description": "The director said since childhood he was preoccupied with a few subjects including magic tricks, baseball and crime, reported the Huffington Post."
//   },
//   {
//     "id": 19,
//     "title": "Chris Pratt, Anna Faris debunk marriage problem ",
//     "Image": "https://static.toiimg.com/thumb/msid-48029128,width-800,height-600,resizemode-75/48029128.jpg",
//     "category": "Hollywood",
//     "description": "On their sixth wedding anniversary, the much-in-love couple exchanged sweet tweets to each other, debunking the rumours that their marriage is no longer intact, reported Ace Showbiz."
//   },
//   {
//     "id": 20,
//     "title": "Leonardo DiCaprio sues magazine over baby rumours with Rihanna",
//     "Image": "https://static.toiimg.com/thumb/msid-47575141,width-800,height-600,resizemode-75/47575141.jpg",
//     "category": "Hollywood",
//     "description": "He has sued Oops! for its May 28 cover story, which also said that the 40-year-old 'Inception' actor would not recognise the baby as his, reported TMZ."
//   },
//   {
//     "id": 21,
//     "title": "Apple iPhone 14 may get Always-On Display, but what is it and why should you care? ",
//     "Image": "https://images.indianexpress.com/2022/05/iPhone-14-Pro-Ian-Zelbo-1.jpg",
//     "category": "Technology",
//     "description": "Always-On Display, or AoD is expected to be one of the major features coming to select models of iPhone 14 later this year. While those who have been using iPhones for a long time may be new to the term, Android users have enjoyed Always On Display for years."
//   },
//   {
//     "id": 56,
//     "title": "What Samsung has to say about user data leaked in July ",
//     "Image": "https://static.toiimg.com/thumb/resizemode-4,msid-93996711,imgsize-37396,width-720/93996711.jpg",
//     "category": "mix",
//     "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
//   },
//   {
//     "id": 52,
//     "title": "What Samsung has to say about user data leaked in July ",
//     "Image": "https://static.toiimg.com/thumb/resizemode-4,msid-93996711,imgsize-37396,width-720/93996711.jpg",
//     "category": "technology",
//     "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
//   },
//   {
//     "id": 22,
//     "title": "What is Twitter Circle? Here’s all you need to know",
//     "Image": "https://images.indianexpress.com/2022/01/Twitter-Reutters-1-1.jpg",
//     "category": "Technology",
//     "description": "Microblogging platform Twitter is rolling out Twitter Circle to more people on iOS and Android. This function is quite similar to the Instagram story where you select people and share your thoughts with a smaller crowd. “You choose who’s in your Twitter Circle, and only the individuals you’ve added can reply to and interact with the Tweets you share in the Circle,” according to a blog post by Twitter."
//   },
//   {
//     "id": 63,
//     "title": "The sub-Rs 10,000 smartphone segment is no longer the biggest market in India, here's why ",
//     "Image": "https://static.toiimg.com/thumb/resizemode-4,msid-93996861,imgsize-52560,width-720/93996861.jpg",
//     "category": "footer3",
//     "description": "For $29.99 a month, a website called PimEyes offers a potentially dangerous superpower from the world of science fiction: the ability to search for a face, finding obscure photos that would otherwise have been as safe as the proverbial needle in the vast digital haystack of the internet.A search takes mere seconds. You upload a photo of a face, check a box agreeing to the terms of service and then get a grid of photos of faces deemed similar, with links to where they appear on the internet. The New York Times used PimEyes on the faces of a dozen Times journalists, with their consent, to test its powers.PimEyes found photos of every person, some that the journalists had never seen before, even when they were wearing sunglasses or a mask, or their face was turned away from the camera, in the image used to conduct the search. PimEyes found one reporter dancing at an art museum event a decade ago, and crying after being proposed to, a photo that she didn’t particularly like but that the photographer had decided to use to advertise his business on Yelp. A tech reporter’s younger self was spotted in an awkward crush of fans at the Coachella music festival in 2011. A foreign correspondent appeared in countless wedding photos, evidently the life of every party, and in the blurry background of a photo taken of someone else at a Greek airport in 2019. A journalist’s past life in a rock band was unearthed, as was another’s preferred summer camp getaway."
//   },
//   {
//     "id": 22,
//     "title": "This is the space station China is building to challenge the US ",
//     "Image": "https://images.indianexpress.com/2022/05/tiangong-space-station-model.jpg",
//     "category": "Technology",
//     "description": "China released new details about the final stages of work on its Tiangong space station, an under-construction orbiter started after the US barred Beijing from participating in the International Space Station."
//   },
//   {
//     "id": 23,
//     "title": "Ather responds to fire incident in Chennai showroom; blames service error ",
//     "Image": "https://images.indianexpress.com/2022/05/Ather-Energy-showroom-fire-factory-hosur.jpg",
//     "category": "Technology",
//     "description": "Indian electric two-wheeler manufacturer Ather Energy has given an official statement about the fire that happened in one of its showrooms in Chennai on May 27. Shortly after the incident was reported, Ather’s official Twitter handle confirmed the fire while saying that no employee was harmed during the incident.According to a statement issued by the company later, the incident happened due to a vehicle that was brought into the showroom for servicing after it had an accident. Since there was a lot of dust and mud on the vehicle, the staff at the service centre reportedly used a high-pressure water wash to clean the vehicle before inspecting it.Ather says that the service team discovered some cracks in the top casing of the battery pack. But by then, water had entered the battery casing due to the high-pressure wash. The company says that letting in water into the battery is an “impossible to solve scenario,” and that the scooter was “moved to a safer area,” as soon as this was observed."
//   },
//   {
//     "id": 24,
//     "title": "NASA video shows Ingenuity Mars Helicopter on a daring record-breaking flight",
//     "Image": "https://images.indianexpress.com/2022/05/Ingenuity-helicopter-illustration-record-flight.jpg",
//     "category": "Technology",
//     "description": "NASA has published dramatic footage of the Ingenuity Mars helicopter completing its record-breaking 25th flight where the helicopter covered a distance of 704 metres at a speed of 5.5 metres per second, marking the rotorcraft’s longest and fastest flight to date. The video was taken on April 8 during the flight but was only released by the space agency on May 27."
//   },
//   {
//     "id": 25,
//     "title": "Raju Narisetti interview: ‘Wikipedia is building trust with transparency’ ",
//     "Image": "https://images.indianexpress.com/2022/05/raju-narisetti.jpg",
//     "category": "Technology",
//     "description": "Within hours of the shooting in Texas, the Wikipedia page of the Robb Elementary School in Uvalde had seen 765 edits from 154 different contributors and was overseen by 103 page-watchers who ensure only accurate information is published. This ability to offer “reliable information”, especially in critical times, is for Raju Narisetti, a member of the Board of Trustees of the Wikimedia Foundation, the “significant opportunity” for Wikipedia in countries like India."
//   },
//   {
//     "id": 26,
//     "title": "Airtel launches new broadband plans with unlimited internet, OTT subscriptions",
//     "Image": "https://images.indianexpress.com/2022/05/Airtel-Xstream-new-unlimited-packages-ott-subscription.jpg",
//     "category": "Technology",
//     "description": "The Rs 699 plan gives you 40 Mbps of unlimited internet, along with a Disney+ Hotstar subscription. You also get an Airtel Xstream Premium single login for 14 OTTS: SonyLIV, ErosNow, Lionsgate Play, Hoichoi, ManoramaMax, Shemaroo, Ultra, HungamaPlay, EPICon, DivoTV, Klikk, Nammaflix, Dollywood and Shorts TV. You also get 350 channels on the Airtel 4K Xstream Box."
//   },
//   {
//     "id": 27,
//     "title": "Instagram launches exclusive ‘1 minute music’ tracks for Reels ",
//     "Image": "https://images.indianexpress.com/2021/12/Instagram-AP-1.jpg",
//     "category": "Technology",
//     "description": "Instagram has launched a new exclusive ‘1 Minute Music’ track for its Reels, which is a set of music tracks and videos, exclusively available on its platform.The new 1-minute music set includes music from 200 artists across India, including the likes of Dhvani Bhanushali, Neeti Mohan, Shaan, Himanshi Khurana, Anirudh and GV Prakaash Kumar. The Meta-owned platform believes that will make your Instagram content more entertaining, and inspire other artists to release their one-minute music on the platform as well.“Music is a catalyst for trends on Instagram today. In fact, Reels is becoming the platform for people to discover music and artists too. With ‘1 Minute Music’, we’re now giving people access to an exclusive set of tracks they could use to make their reels more entertaining. We’re also hoping this platform serves as a paradigm for established and emerging artists to share their own music, and create their own videos, all on Reels,” said Paras Sharma, Director, Content & Community Partnerships, Facebook India (Meta).The music will be accompanied by music videos, which too will be available exclusively on Instagram.  Music distribution and artist services company, Believe, has worked with Instagram for this association"
//   },
//   {
//     "id": 28,
//     "title": "iQOO Z6 Pro review: What’s the X factor here? ",
//     "Image": "https://images.indianexpress.com/2022/05/iQOO-Z6-Pro-review-1.jpg",
//     "category": "Technology",
//     "description": "The iQOO Z6 Pro is yet another performance-oriented phone for the masses. Starting at Rs 23,999, the phone comes with a Snapdragon 778G  processor, 66W fast charging, and other features, which are geared towards gaming. Now I have used a number of phones running this same processor already, and all of them seem to target a particular use case. The Xiaomi 11 Lite NE 5G for instance, is a compact phone, while the Realme 9 5G SE is a gaming phone on a budget.The iQOO Z6 Pro doesn’t seem to hit a particular string, and neither is it the most affordable phone with the chip. So should you care about this phone at all? Let’s find out.iQOO Z6 Pro specs: 6.44-inch AMOLED 90Hz screen | Snapdragon 778G chip | 64MP + 8MP + 2MP camera, 16MP front camera | 4700mAh battery with 66W fast charging One of the first things noticeable about the iQOO Z6 Pro is a unique looking rear-design, complete with two large circles holding in the three camera sensors. The phone has a plastic body but the build quality is really nice and everything feels solid to the touch when using this."
//   },
//   {
//     "id": 29,
//     "title": " Google hit with fresh UK investigation over ad tech dominance",
//     "Image": "https://images.indianexpress.com/2022/05/Google-reuters-1.jpg",
//     "category": "Technology",
//     "description": "The UK’s antitrust watchdog started a new investigation of Alphabet Inc.’s Google, over suspicions it may have abused its dominant position across its ad tech that goes to the heart of the tech giant’s business model.The move by the Competition and Markets Authority opens a fresh front in its regulatory tussle with Google. The CMA said it was concerned Google sought to illegally favor its own ad exchange services, while taking steps to exclude the services offered by rivals.“Weakening competition in this area could reduce the ad revenues of publishers, who may be forced to compromise the quality of their content to cut costs or put their content behind pay walls,” said Andrea Coscelli, the CMA’s Chief Executive Officer.Watchdogs around the world have started to home in on the huge power that firms such as Google and Meta’s Facebook wield over ad markets — striking at the heart of the tech giants’ money making machines. Google faces a separate probe by the CMA into possible collusion over the way it operates online display advertising services.The CMA has been examining the way Google buys and sells advertising since at least 2020, saying that its advertising stack is a potential conflict of interest. It’s called for powers that would even allow for a structural changes."
//   },
//   {
//     "id": 30,
//     "title": "Realme GT Neo 3 get a special Naruto Edition: All you need to know ",
//     "Image": "https://images.indianexpress.com/2022/05/Realme-Naruto-edition-1.jpg",
//     "category": "Technology",
//     "description": "Realme is no stranger to launching special edition devices targeted at anime fans out there. The brand’s GT Neo 2 smartphone came out with a limited Dragon Ball edition complete with the titular character Goku’s colours and more. Now, the company has revealed yet another anime-edition phone.The Realme GT Neo Naruto Edition phone is based on the Naruto-series. Taking elements from both Naruto and the sequel series Naruto: Shippuden, the phone’s design takes cues from the signature black and orange jacket worn by the show’s lead character Naruto Uzumaki, as well as the silver headband most ninja in the show wear, complete with the Konoha seal.However, that’s just the device. Realme has also thrown in other themed goodies into the package, including a neat-looking Naruto-themed case, a black and orange charging adapter and a black USB type-C to type-C cable to go with it. Additionally, there is also a Naruto-themed SIM-ejector pin and a 10,000mAh power bank.Asides from the aesthetics, the phone itself is a regular Realme GT Neo 3 (the 150W fast charging variant) and includes the same hardware as its standard counterpart. This includes a MediaTek Dimensity 8100 chip. A 6.7-inch AMOLED display with 120Hz HDR10+ and an under-display fingerprint scanner. The single storage variant will also feature 12GB RAM and 256GB UFS 3.1 storage."
//   },
//   {
//     "id": 31,
//     "title": "Gul Panag shares her experience of cycling in the mountains: ‘It’s a different ball game’",
//     "Image": "https://images.indianexpress.com/2022/05/Gul-Panag-1200.jpg",
//     "category": "Fitness",
//     "description": "Actor Gul Panag, who is a fitness enthusiast, took to Instagram to share her experience riding her bike or cycle in the mountains in Himachal Pradesh. In one of her recent posts, as she posed with her two wheeler in a blue jacket and a hat, smiling at the camera, she wrote, “Day 1 of training to ride in the mountains. And it’s a whole different ball game!”"
//   },
//   {
//     "id": 32,
//     "title": "Feeling weary? Try these ‘killer’ upper body workout routines to get a burst of energy",
//     "Image": "https://images.indianexpress.com/2022/05/GettyImages-workout-session-1200.jpg",
//     "category": "Fitness",
//     "description": "If you are feeling particularly lazy, or are exhausted and not sure as to what kind of exercises to add to your routine, Yasmin Karachiwala has just the solution. The celebrity fitness trainer, who has trained many Bollywood A-listers, took to Instagram to demonstrate in a video how to perform upper body exercises.   "
//   },
//   {
//     "id": 33,
//     "title": " Asanas and breathing exercises to enhance mood, boost energy levels",
//     "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-breathing-1200.jpg",
//     "category": "Fitness",
//     "description": "Stress has become a part of life, but instead of living with it, we must find the tools with which to combat it. Yoga is one such tool that can deal with physical, emotional and mental issues caused by stress, and give you a better perspective of life.According to Samiksha Shetty, a certified yoga educator and the founder of Moon Village Cafe, yoga postures (asanas), breathwork (Pranayama) and meditation induce a sense of calm and relaxation from within, and if you are looking for how you can de-stress, this is what you need to know.According to Samiksha Shetty, a certified yoga educator and the founder of Moon Village Cafe, yoga postures (asanas), breathwork (Pranayama) and meditation induce a sense of calm and relaxation from within, and if you are looking for how you can de-stress, this is what you need to know.“In yoga, we use movement and breath to release stuck energy along the spine and throughout the body. The mind-body connection created in yoga facilitates change at a cellular level. Our nervous systems can rewire by retraining psychological or emotional triggers that set off our flight-or-fight response,” she explains."
//   },
//   {
//     "id": 34,
//     "title": "Losing weight or losing fat: What should you focus on? ",
//     "Image": "https://images.indianexpress.com/2022/05/GettyImages-weight-loss-fat-loss-1200.jpg",
//     "category": "Fitness",
//     "description": "When it comes to weight loss, a lot of people are confused about where to direct their attention — whether the focus should be on shedding a few kilos or should they lose inches from their belly and arms."
//   },
//   {
//     "id": 35,
//     "title": "Should yoga be done on an empty stomach? Here’s what experts say ",
//     "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-1200.jpg",
//     "category": "Fitness",
//     "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
//   },
//   {
//     "id": 37,
//     "title": "Should yoga be done on an empty stomach? Here’s what experts say ",
//     "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-1200.jpg",
//     "category": "mix",
//     "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
//   },
//   {
//     "id": 36,
//     "title": " Feeling lazy on a vacation? Try doing these simple exercises",
//     "Image": "https://images.indianexpress.com/2022/05/GettyImages-workout-session-beach-1200.jpg",
//     "category": "Fitness",
//     "description": "Many people feel lazy when they are on a vacation, because of a change in schedule. If they are physically active otherwise, a few days of inactiveness can take a toll on their body. When it comes to exercising, it is important to be consistent and disciplined.    "
//   },
//   {
//     "id": 37,
//     "title": "Celeb fitness: Sooraj Pancholi is ‘back to the game ",
//     "Image": "https://images.indianexpress.com/2022/05/sooraj-pancholi_1200_insta.jpg",
//     "category": "Fitness",
//     "description": "Sooraj Pancholi, who loves to work out, is back to the fitness grind after long. His fitness trainer, Pawan Jatwa, recently shared a video in which the Hero actor could be seen flexing his muscles. According to Bala Krishna Reddy Dabbedi, a fitness expert, and co-founder, director at Fittr, people usually think that they can pick up from where they left and that their original strength will be the same — “but that will not be the case”. “It’s easy to compare yourself to the times when you were training regularly. But, if there has been a gap in your gymming routine, it’s reasonable to see a decline in strength, endurance, and overall muscle,” he expressed.Assess again, test your current strength levels and train accordingly, he suggested. “There is something called muscle memory which helps one get back to their previous strength levels and muscle mass, but this takes times — from a few weeks to even some months. Just be consistent and positive till you get there. On resuming, do not start with an intense program. Keep it minimal, start slow, and you may even experience muscle soreness and pain. Eventually increase the intensity with every passing week,” she said."
//   },
//   {
//     "id": 38,
//     "title": "Exercise Reduces Risk of Type 2 Diabetes, Studies Show ",
//     "Image": "https://www.verywellfit.com/thmb/3MvvjaqTvCD5A7YBCj51B7KR6ec=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/exerciseCecilie_Arcurs-9b4222509db94b4ba991e86217bdc542.jpg",
//     "category": "Fitness",
//     "description": "Being physically active can help reduce the risk of developing type 2 diabetes. A recent study in Diabetes Care found that women who get more steps have a lower risk of developing diabetes, compared to women who are more sedentary.1And a study in the journal Metabolites found that men who are more active have a lower risk of developing type 2 diabetes compared to men who are more sedentary.2 It seems that physical activity significantly changes the body’s metabolite profile, and many of these changes are associated with a lower risk of type 2 diabetes, says Maria Lankinen, PhD, research scientist, Institute of Public Health and Clinical Nutrition at the University of Eastern Finland, and one of the researchers on the study published in Metabolites. Increased physical activity also improved insulin secretion.The study published in Diabetes Care focused on 4,838 older women (median age 78.9) without diabetes, who were followed for up to 6.9 years. Their steps were monitored by accelerometers to account for the number of steps and the intensity of steps, which were labeled as light-intensity or moderate- to vigorous-intensity.For diabetes among older adults, our findings indicate that moderate- to vigorous-intensity steps were more strongly associated with a lower risk of diabetes than light-intensity steps, adds John Bellettiere, PhD, an assistant professor of family medicine and public health at UC San Diego, and a co-author on the study."
//   },
//   {
//     "id": 39,
//     "title": "Do these three things to lose weight and not regain it ",
//     "Image": "https://images.indianexpress.com/2022/05/weight_Getty1200_May2.jpg",
//     "category": "Fitness",
//     "description": "Many people undertake weight loss journeys and successfully manage to lose weight, too. But, they are not able to sustain this lost weight for long, gradually putting on some. So, what can be done to shed extra fat and stay that way for a long time? Consistency and a lot of discipline."
//   },
//   {
//     "id": 40,
//     "title": "Walking Shoe Types and Buying Tips",
//     "Image": "https://www.verywellfit.com/thmb/1LJpQJpL0Ek812XT-GlNOpOjE_4=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-606353299-46be0bd52ffb43558df62348abf5fffb.jpg",
//     "category": "Fitness",
//     "description": "Walking shoes are your most important item of walking gear. Not only do you want to choose the best pair for your health and performance, but you also want to make sure that you are spending your money wisely.It's helpful to know what to look for in a good fitness walking shoe and how to understand that the pair you pick is the right set of shoes for your walking style.There's no one best shoe for all walkers. The best shoe for you is the one that fits you best. It should give you proper support, flexibility, and cushioning and compensate for any stride problems you may have, such as overpronation. Each person's feet are differentIt can be hard to determine all of that on your own, however. Find a shoe fitting expert to help you discover the best shoe for your walking distance, speed, style, and surface, as well as your weight and stride. The best place to find that person is at the most serious running shoe store in your area.Once you have found a shoe that fits you right, you may become more familiar with shoe lasts and shapes so that you can make your own selections in the future.Shoe manufacturers put the best design and technology into running shoe styles while walking shoe styles are designed primarily for market appeal rather than performance."
//   },
//   {
//     "id": 41,
//     "title": "Ensure your cheese does not turn sticky on grating with this tip",
//     "Image": "https://images.indianexpress.com/2022/05/cheese_1200_pexels.jpg",
//     "category": "Food",
//     "description": "Kitchen tips and tricks are always welcome. They make cooking seem like a breeze, and the experience hassle-free and enjoyable. They are also perfect for days when you want to whip up a dish in a jiffy!"
//   },
//   {
//     "id": 42,
//     "title": "Guinness alert: World’s largest Scotch egg weighs…",
//     "Image": "https://images.indianexpress.com/2022/05/scotch-egg-record_1200_guinnessworldrecords.com_.jpg",
//     "category": "Food",
//     "description": "For the unversed, the Scotch egg is known to be a British snack which consists of a hard-boiled egg enclosed in sausage meat, rolled in breadcrumbs, and fried."
//   },
//   {
//     "id": 43,
//     "title": "Points Every Diabetic Fruit Lover Must Keep in Mind",
//     "Image": "https://images.news18.com/ibnlive/uploads/2022/05/untitled-design-2-51-16529608873x2.png?impolicy=website&width=510&height=356",
//     "category": "Food",
//     "description": "With summers already here, who doesn’t want to thoroughly enjoy the seasonal fruits that come with it. But if you have diabetes, then you must have been told countless times to consume fruits with utmost caution. Seasonal fruits like watermelon and grapes are high in glycemic index (GI), and thus with it comes the question — Can a diabetic have fruits? Is it safe?However, bursting the myth, a diabetic can enjoy fruits, but simply need to make strategic decisions based on fruit and how much to consume as per its GI as it assists the person in selecting fruit.  Fruits like watermelon have a glycemic index (GI) of 72 per 100 g serving, but one watchful serving of the fruit contains little carbs and will have minimal effect on the blood sugar level.It is safe to consume blackberries, apples, avocados, strawberries, plums, grapefruit, peaches, pears, and cherries in watchful quantity as they have 20-49 GI levels, which technically classifies them as low GI fruit. With lots of fibre and a low GI, these fruits help improve blood sugar tolerance.People who have diabetes are usually advised to keep an eye on the number of carbohydrates and portion size of their meal, even if it contains low GI, which is indeed true. While consuming fruits certain factors such as the ripeness of the fruit that influences its GI should be taken into account."
//   },
//   {
//     "id": 44,
//     "title": "Excessive Consumption of Ginger can Lead to These Side Effects",
//     "Image": "https://images.news18.com/ibnlive/uploads/2022/05/ginger-16521781103x2.jpg?impolicy=website&width=510&height=356",
//     "category": "Food",
//     "description": "Ginger is a very common Indian household ingredient, which is well known for its amazing flavour. For many, morning tea is incomplete without crushing ginger in it. Not only as spices, but ginger has been a traditional remedy in many cultures for thousands of years. After all, it is loaded with impeccable health benefits. While we have been told time and again that ginger carries innumerable nutritious benefits, it’s rarely discussed that this magical ingredient can also cause side effects.Although the side effects usually happen after excessive intake of ginger, several cases have been witnessed where it aggravates the health issues. So let’s learn more about the side effects.As ginger carries antiplatelet properties, excessive intake of ginger may cause bleeding. Not just this, but if it is consumed with clove or garlic, it further increases the risk of excessive bleeding.The most common symptoms of basic side effects caused by excessive ginger intake are skin rashes, eye redness, dyspnea, itching, swollen lips, itchy eyes, and throat discomfort. In such circumstances, it is advised to immediately seek medical attention.Consuming ginger beyond the prescribed limit of 1500 mg per day may even lead to the risk of miscarriage. Therefore it is advised to avoid too much ginger during pregnancy and intake it only after consulting the doctor"
//   },
//   {
//     "id": 46,
//     "title": "International Tea Day: Dust tea or whole leaf tea, which is better?",
//     "Image": "https://images.indianexpress.com/2022/05/GettyImages-tea-drinking-benefits-1200.jpg",
//     "category": "Food",
//     "description": "Tea is a must-have drink in the evening, and once in the morning, in many households. On the occasion of International Tea Day today — which is observed annually on May 21, according to the United Nations — we bring to you the difference between dust tea and whole leaf tea, and which is better."
//   },
//   {
//     "id": 45,
//     "title": "Why is Turmeric a strict NO NO for kidney patients?",
//     "Image": "https://static.toiimg.com/thumb/93955189.cms?width=680&height=512&imgsize=67734",
//     "category": "food",
//     "description": "When we wake up, the first thing that comes to put mind is what to have for breakfast. After finishing it, we start thinking about lunch and then about dinner. This shows that food is one of the most important parts of our lives. One day we skip a meal, and our body starts reacting in a different way. While what we eat matters, another thing that plays a part is when we eat our meals. The time of having breakfast, lunch and dinner are vital to determine many health benefits. There is a common saying, “Early to bed, early to rise, makes us healthy, wealthy and wise.” Let’s turn it up a little and say, early dinner and early breakfast are all you need to be healthy and smart.Breakfast: Breakfast is the first meal of the day which makes our guts wake up. Usually, breakfast is eaten after 8 to 10 hours of having our dinner. The best time to have the first meal of the day is between 7 am to 9 am.Lunch: When you eat your breakfast early, it gives your stomach enough time to rest before you go on to your lunch. This aids digestion of breakfast. The best time to have lunch is between 12 noon to 2 pm. Dinner: As you have had your lunch early, you might feel hungry soon in the evening. Many dieticians recommend having early dinner in order to satisfy our hunger as well as boost metabolism. You should have your dinner between 6.30 pm to 8 pm.  If you have all your meals on a scheduled time daily, then it can help you boost your metabolism. In the morning, your metabolic rate works best, and as the day passes, it slows down. Therefore, having an early breakfast gives it a boost and an early dinner help it sustain."
//   },
//   {
//     "id": 46,
//     "title": "What The Fork: Kunal Vijayakar on the Perfect Summer Food to Beat the Heat",
//     "Image": "https://images.news18.com/ibnlive/uploads/2022/05/curd-rice-1-16519277623x2.jpg?impolicy=website&width=510&height=356",
//     "category": "Food",
//     "description": "​​ How soon we renounce age-old traditions in the praxis of food, and succumb to the allure of convenience, short cuts, and finished good-looking products. I’m talking about age old dahi or curd. In my grandmother’s home where I lived for the first 15 years of my life and even when we moved lock stock and tapeli to where my parents made their new home, dahi was always made in the kitchen. It was a daily process. Every day milk would be boiled and cooled to room temperature. A medium-heavy bottomed pot would be greased with the previous day’s dahi, which worked like a bacterial curd starter, and the boiled warm milk would be poured in. A wet cloth kept the milk covered as nature created magic, fermented the milk, added wonderfully healthy probiotic characteristics, thickened it and set it to curd. It would take four to five hours on a normal warm, hot and humid Mumbai day, eight to 12 in cold weather, that was it. Sometimes we’d make curd two times a day, just to be able to have it fresh. There was also a kind of romantic uncertainty about how well the curd would set. Sometimes it could set loosely, separating the water from the milk and sometimes it would be firm and silky. After all milk wasn’t bought homogenised, standardised and in a carton, but was bought at the doorstep from a doodhwala, whose honesty was always in question. So obviously, the better the milk the better the curd. The pot of milk with the curd starter would always be kept in a warm place and most importantly left alone. One old ladies’ tale was that you could add a green chilly with its stem intact to help the curd set faster. Ostensibly, the chilly with the stem would not impart any taste but contained certain bacteria that activated the milk to produce protein curdles that turned milk into curd faster. I’d actually never seen that happening in any of our kitchens."
//   },
//   {
//     "id": 47,
//     "title": "Try this refreshing drink to beat dehydration in summer (recipe inside)",
//     "Image": "https://images.indianexpress.com/2022/04/GettyImages-coconut-water-coconut-drink-1200.jpg",
//     "category": "Food",
//     "description": "While it is advisable to drink water and keep yourself hydrated all throughout the year, the summer season is when the body can quickly lose its water content in the form of sweat."
//   },
//   {
//     "id": 48,
//     "title": "Fruits and Vegetables are Losing Their Nutrient Value, Know the Risks",
//     "Image": "https://images.news18.com/ibnlive/uploads/2021/12/untitled-3-276-16409377143x2.jpg?impolicy=website&width=510&height=356",
//     "category": "Food",
//     "description": "Every now and then, we stress upon the fact of eating lots of fruits and vegetables as they are packed with nutrients. They are said to be the best way to provide nutrition to the body and boost immunity. Every season comes with a variety of grains, vegetables, and fruits and we can’t agree more that they are tastier than the stored ones. However, do you know with time the nutrition value of fruits and vegetables are declining? Yes, you read that right. With time, due to various reasons that nutrition in fruits and vegetables have declined tremendously leaving us with various deficiencies. According to a National Geographic report, the experts find the root of the problem in the quality of soil. In the last few decades, the soil quality has been compromised due to various reasons including excessive chemical use, fertilisers, irrigation and so on. The harvesting methods have changed from natural ways to machineries which has also taken a dig at the health of the soil. Apart from it, due to global warming and climate change, the atmospheric temperature is rising and making the soil lose its moisture even more that do not hold the crops well putting them in risk of losing nutrition.The report also states that due to carbon dioxide increase in the air, the nutrient content of the fruits, vegetables and other crops are pulling down.David R. Montgomery, a professor of geomorphology at the University of Washington in Seattle emphasis on one of the major risks of the lower nutrient value, that is making our immunity low. According to him, “Nutrient decline is going to leave our bodies with fewer of the components they need to mount defences against chronic diseases — it’s going to undercut the value of food as preventive medicine,” state National Geographic."
//   },
//   {
//     "id": 49,
//     "title": "This shake is a ‘powerful combination of healthy fats, protein, carbohydrates’ (recipe inside)",
//     "Image": "https://images.indianexpress.com/2022/05/seeds-mix-nut-milk_200_getty.jpg",
//     "category": "Food",
//     "description": "Even after a restful sleep, many people wake up feeling tired and exhausted. The feeling, sometimes, may even continue throughout the day, making one feel low on energy and unproductive. But worry not, as nutritionist Nidhi Gupta has recommended a ‘powerful’ shake that will not only help you get through the day but also keep you feeling satiated."
//   },
//   {
//     "id": 58,
//     "title": "These Harmless Summer Drinks are Perfect for Diabetic Patients",
//     "Image": "https://images.news18.com/ibnlive/uploads/2022/05/summer-drink-16518193713x2.jpg?impolicy=website&width=510&height=356",
//     "category": "mix",
//     "description": "The summer season is here with soaring temperatures and dehydrating weather. And they call for cold and refreshing drinks. While many of these drinks are healthy and rehydrating, the sugar content in them might not be healthy for diabetic patients. This makes it difficult for people suffering from the chronic disease to stay hydrated and have all essential electrolytes up to their necessary levels. Here are 5 summer coolers that are healthy and contain zero sugar for diabetic patients to enjoy and help stay hydrated. Sattu is a special and popular food in Bihar. One of oldest drinks in India, Sattu cooler is the perfect way to stay hydrated for diabetic patients. It has no carbohydrates and can be enjoyed just by adding sattu powder to cold water along with some black salt and squeezing a few drops of lemon to give it a tangy touch. Spinach, beetroot, fruit juice of choice and some coconut water blended together can be a very beneficial smoothie for you even if you’re non-diabetic. Make sure that the fruit you choose is a low sugar content one and reap the benefits of this wonderful nutritious smoothie.Take 2 cups of chilled curd, a glass of water, some ice cubes and a teaspoon of cumin powder. Blend it all and you have this tasty sugarless drink ready. Salted lassi is a summer cooler that diabetic patients can enjoy without the worry of their disease aggravating.Bel or wood apple is a great source of natural fibre, iron, antioxidants and folates. Along with this it cools your stomach. If you suffer from diabetes, bel sherbet can prove to be very beneficial for you during the scorching summers."
//   },
//   {
//     "id": 50,
//     "title": "Unable to Find Tofu at Local Store? Here’s an Easy Recipe to Make it at Home",
//     "Image": "https://images.news18.com/ibnlive/uploads/2022/04/tofu-16510624083x2.jpg?impolicy=website&width=510&height=356",
//     "category": "Food",
//     "description": "If you are a fitness enthusiast and a vegan, you might be one of the people who have tofu in their meals instead of paneer. While many people find it easily in the supermarket, others may find it difficult to spot tofu at their local stores. If you are one of those people, don’t worry as this simple method can help you make protein-rich tofu at home with just two ingredients – chickpeas and water.Once the tofu is set, you can use it as and when required. It is as tasty as the tofu bought from a store and tofu is as versatile as cottage cheese. It can be used in dry and wet recipes depending on your mood and diet requirements. Chickpea is rich in protein and hence the tofu is a great source of protein to help you complete the daily protein requirement.Soak the chickpeas overnight after thoroughly washing with the help of a strainer under running water.Drain all the water and wash the chickpeas the next day. Add chickpeas with two cups of water in a blender and blend in batches until you have a smooth mixture.Strain the blended chickpeas through a muslin cloth into a bowl. Make a squeezable bag out of the muslin cloth with the mixture in it. Squeeze the blend well to strain it nicely. As the water drains slowly from the mixture, it takes some time to strain the blend.Take the strained blend and put it in a pot. Keep the pot on full flame and let the mixture boil. Once you see bubbles, lower the flame and cook the blend for another half n hour. The mixture will thicken with time. When it is thick enough, put off the flame and let the blend cool down for a while. Leave the mixture in a container for more than 2 hours idle. This will ensure that the mixture sits and the tofu sets properly"
//   },
  
//   ]);
//   return (
//     <div>
//       <store.Provider value={[details, setDetails]}>

//         {props.children}


//       </store.Provider>
//     </div>
//   )
// }

// export default Details