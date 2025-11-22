export default function HistoryPage() {
  const timeline = [
    { year: '1920', event: 'Father Malatios Mufleh of the Basilian Salvatorian Order (B.S.O.) was sent to Ottawa from the Holy Saviour Monastery in Joun, Lebanon (near Sidon). Eight months later, he was transferred to Cleveland, Ohio.' },
    { year: '1920-1960', event: 'Various priests from St. Saviour Parish in Montreal visited the Ottawa community, attending to the spiritual needs of this small community: The late Archimandrite Simon Nasr, B.S.O. The late Archimandrite Maximos Chataoui, B.S.O. The late Father Beshara Thalge. B.S.O. The late Archimandrite Gregory Abboud. B.S.O. Father Theophile Atalla, B.S.O. Archimandrite Cyrill Haddad, B.S.O. Father Elias Kwaiter, B.S.O.' },
    { year: 'June 5, 1958', event: 'Father Elias Kwaiter conducted a petition, signed by all the families concerned and presented it to the Archbishop of Ottawa, His Excellency Marie-Joseph Lemieux, requesting he grant them a church with a residing priest. During part of this most trying period in our parish history, the late Elias Karam (deceased March 30, 1958) was a stable and constant guiding force for our community.' },
    { year: 'September 1959', event: 'The Vicar General of the Archdiocese, Msgr. Gelineau requested a definite answer from the Superior General of St. Saviour, Lebanon “concerning a priest to be exclusively at the service of the Ottawa people.”' },
    { year: 'December 1959', event: 'Father Theophile Atalla was designated resident priest for the Ottawa community and was transferred here from Montreal, March 1, 1960. Father Atalla celebrated the Divine Liturgy in the basement of the Basilica on Sussex Drive and at our Lady of the Sacred Heart Church on Murray Street (since destroyed by fire) for several months until the opening of our own church.' },
   
    { year: 'June 2, 1961', event: 'An offer of $65,000.00 was made to the Reverend Canon Guidon, Bursar of the Archdiocese, to purchase the church and rectory previously known as Our Lady of the Presentation at 1161 Riverside Drive, Ottawa.' },
    { year: 'July 10, 1961', event: 'This offer was accepted and finally approved by the Metropolitan Chapter of the Archdiocese.' },
    { year: 'August 10, 1961', event: 'The church was purchased.' },
    { year: 'November 23, 1961', event: 'The church of Sts. Peter & Paul opened her doors and was a spiritual Centre for all who gathered and prayed there. The parishionners and many friends donated most of the material and over 30,000 hours of free labor to complete the necessary repairs and renovations.' },
    { year: 'November 25, 1962', event: 'The church was officially inaugurated by His excellency Reverend Windle, Auxiliary Bishop of Ottawa.' },
    { year: 'September 14, 1964', event: 'The parish was canonically rected and Father Atalla officially named as founder and first pastor of Sts.Peter & Paul Church.' },
    { year: 'August 1969', event: 'Father Atalla left the parish for Rome.' },
    { year: 'September 26, 1969', event: 'Father Habib Kwaiter, B.S.O., was appointed temporay administrator of the Ottawa parish and was transferred here from Montreal on October 1.' },
    { year: 'January 1, 1970', event: 'Father Habib Kwaiter was officially named pastor.' },
    { year: 'November 21, 1971', event: 'The 10th Anniversary of the foundation of the parish, the community celabrates the Burning of the church mortgage by His Excellency Joseph Aurle Plourde, Archbishop of Ottawa, and the Elevation of Father Kwaiter to the rank of Economos.' },
    { year: 'January 20, 1978', event: 'A loan was requested by the parish from the Archdiocese towards the construction of a new church.' },
    { year: 'July 31, 1978', event: 'The Archdiocese approved a loan of $375,000.00. This amount represented half the total budget, i.e., $750,000.00. This was also approved by the members of the Metropolitan Chapter.' },
    { year: 'October 12, 1978', event: 'According to the architect’s revised estimates, the cost of the new project was to be $900,000.00' },
    { year: 'October 13, 1978', event: 'Msgr. Plourde gave the authorization for the project to be undertaken.' },
    { year: 'May 20, 1979', event: 'Breaking of the Ground Ceremony.' },
    { year: 'July 15, 1979', event: 'Construction began on the new church.' },
    
    { year: 'March 30, 1980', event: 'Palm Sunday, the opening ceremony and the first Solemn Liturgy was celebrated in our new church by the Most Reverend Archbishop Joseph Raya. There was a tremendous crowd that day and one evidenced a sense of great pride, satisfaction and deep joy among our people.' },
    { year: 'July 15, 1980', event: 'Marked the end of the demolition of the old church and rectory.' },
    { year: 'April 6, 1981', event: 'The first Divine Liturgy celebrated by the Most Archbishop Michel Hakim, Apostolic Exarch of the Melkites in Canada.' },
    { year: 'June 28, 1981', event: 'The 20th Anniversary celebration and OFFICIAL DEDICATION CEREMONY…May God be glorified for ever and ever, AMEN.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-500 text-red-900 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              Our Heritage
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our History</h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
              Tracing our roots from ancient Antioch to modern Ottawa
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-red-900 mb-4">Parish Timeline</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">The journey of Sts. Peter & Paul Parish in Ottawa</p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-red-200 to-amber-500"></div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-20 group">
                    <div className="absolute left-0 top-0 w-16 h-16 bg-white rounded-full border-4 border-amber-500 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-900 to-amber-700 rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                      <div className="inline-block bg-gradient-to-r from-red-900 to-red-800 text-amber-400 px-4 py-1.5 rounded-full font-bold text-sm mb-3 shadow-sm">
                        {item.year}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-red-900 mb-4">The Melkite Catholic Church</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">A rich heritage spanning centuries, from the early Church to the present day</p>
            </div>

            <div className="space-y-12">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-900 to-amber-900 px-8 py-6">
                  <h3 className="text-3xl font-serif font-bold text-white">Melkites from the 5th to the 17th Centuries</h3>
                </div>
                <div className="p-8 md:p-10">
                  <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p>
                      The Patriarchate of Alexandria, recognized as such, in confirmation of what had been decided at Nicea, by the second Ecumenical Council (Constantinople, 381), was divided by the schism consecutive to the spread of monophysism into two branches: one Orthodox or Melkite, the other Copt (the Copts, for partly political reasons, had adhered to monophysism). It was not until modern times, in the 18th century, that each of these two branches was, in turn, split in two.
                    </p>
                    <p>
                      We have thus, currently, for Alexandria, an Orthodox Patriarchate of the Byzantine rite, with faithful who, in Egypt, are for the most part Greeks more or less recently immigrants, and an Arabic-speaking minority (there has also been, for quite a while recent, faithful of this Patriarchate in various French-speaking and English-speaking countries of Africa), a Greek-Melkite Catholic Patriarchate (of the same rite, but entirely Arabic-speaking, with faithful originating in Syria, Lebanon, Palestine and Jordan, and linked to the Greek-Melkite Catholic Patriarchate of Antioch), a Coptic Orthodox Patriarchate (monophysite) and a Coptic Catholic Patriarchate.
                    </p>
                    <p>
                      The other Eastern Catholic Churches all have communities in Egypt, whose ecclesiastical organization depends on their respective patriarchs, who reside in Lebanon (Armenian, Maronite and Syrian) or in Iraq (Chaldean).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-900 to-amber-900 px-8 py-6">
                  <h3 className="text-3xl font-serif font-bold text-white">The Successive Divisions of the Patriarchate of Antioch</h3>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    The Patriarchate of Antioch, as it was in 416, has given rise, since that time, to several other Churches, which are its "emancipated" daughters.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-xl border-l-4 border-amber-500 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-red-900 mb-3 text-xl">1. Cyprus (416)</h4>
                      <p className="text-gray-700 leading-relaxed">
                        In 416, the island of Cyprus, already politically independent, received from Pope Innocent I (401-417) a conditioned autonomy from his Church; this autonomy became autocephaly at the Council of Ephesus (431), practically established in 488 under the reign of the emperor Zeno. Trained in the schism of Michel Cérulaire (1054), the Orthodox Church of Cyprus, at present, is still autocephalous; there are some 10,000 Catholics on the island, mainly Maronites, with a Latin minority.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-xl border-l-4 border-amber-500 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-red-900 mb-3 text-xl">2. The Church of Persia (424)</h4>
                      <p className="text-gray-700 leading-relaxed">
                        The Church of Persia has its origins in the metropolis of Edessa, which depended on Antioch, although it never had a very solid hierarchical link with the capital of the Eastern Orient; it proclaimed its independence in 424 (it is from there that comes the current Chaldean Church, catholic since the XVth century).
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-xl border-l-4 border-amber-500 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-red-900 mb-3 text-xl">3. Jerusalem (451)</h4>
                      <p className="text-gray-700 leading-relaxed">
                        In 451, at the ecumenical council of Chalcedon, Juvenal, bishop of Jerusalem, obtained the amplification of the honorary prerogatives granted at his seat by the council of Nicea, that is to say the patriarchal title, with jurisdiction over three provinces of Palestine. The Orthodox Patriarchate of Jerusalem was governed, from 1543, by an exclusively Greek hierarchy (with rare exceptions), with patriarchs and metropolites belonging to the Brotherhood of the Holy Sepulcher and originating in Greece or Cyprus, while the faithful are overwhelmingly Arab. The Latin Patriarchate of Jerusalem, created at the time of the Crusades, in 1099, became purely titular from 1191, then became residential again in 1847, with jurisdiction over the Latin faithful of Palestine, Israel, Jordan and Cyprus, partly recent immigrants, partly indigenous, Catholics of old date or converted in the 19th century (at a time when the Greek-Melkite Catholic clergy, too few in these territories, were unable to welcome them into the Church that should have been theirs).
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-xl border-l-4 border-amber-500 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-red-900 mb-3 text-xl">4. The Archbishopric of Sinai (1575)</h4>
                      <p className="text-gray-700 leading-relaxed">
                        From the Patriarchate of Jerusalem stood out, in 1575, the small archbishopric of Sinai, whose jurisdiction is limited to the famous Greek monastery of Saint Catherine (whose archbishop is Higoumene) and to some Arab villages in the surroundings. He is autonomous, but his archbishop still receives the episcopal chirotony of the Greek Orthodox patriarch of Jerusalem.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-xl border-l-4 border-amber-500 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-red-900 mb-3 text-xl">5. Georgia (470)</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Around 470, Georgia, converted to Christianity, especially by missionaries from the Patriarchates of Antioch and Constantinople, formed a Catholicossate which, towards the middle of the eighth century, obtained almost complete autonomy, with which the Patriarchate 'Antioch communicated through the Melkite metropolitan headquarters of Theodosiopolis (Erzeroum), in Armenia; these relationships continued, albeit sporadically until the 18th century. In 1736 a Greek-Melkite Catholic archbishop of Tiflis was appointed, who then had to go into exile and had no successor.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-xl border-l-4 border-amber-500 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-red-900 mb-3 text-xl">6. The Monophysite Schism (543-544)</h4>
                      <p className="text-gray-700 leading-relaxed">
                        The most important schism in 543-544, was that due to monophysism; and created, in opposition to the Orthodox hierarchy, another Patriarchate of Antioch (whose patriarch almost never resided in Antioch). Of the four million inhabitants in Syria at the time, some two million adhered to monophysism, under the jurisdiction of this new Patriarchate.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-xl border-l-4 border-amber-500 hover:shadow-md transition-shadow md:col-span-2">
                      <h4 className="font-bold text-red-900 mb-3 text-xl">7. The Maronite Church (701-742)</h4>
                      <p className="text-gray-700 leading-relaxed">
                        The (Orthodox) Patriarchate of Antioch having been vacant from 701 to 742, because of a wave of persecutions, the monks of the great monastery of Saint-Maron, in Syria, near the sources of the Orontes, which shared with the Melkites the defense of the Chalcedonian faith against the monophysites, took advantage of the long vacancy of the patriarchal siege to give themselves their own patriarch, in circumstances which are not very clear. In 742, the caliph Hicham allowed the election of the Melkite patriarch Etienne III, but the successor of this one, Théophylacte Bar Qambara, protected by the caliph Marouan II, resorted to violence to put an end to this double jurisdiction, following what the monks of Saint-Maron and their patriarch, supported by a certain number of faithful and priests linked to their community, resisted on the spot, then took refuge in Lebanon, almost independent at the time, where they formed a new Church , first bringing together a small number of the faithful, who then progressed due to a fertile demography and today form the Maronite Church. Weakened by all these losses, the Orthodox Patriarchate of Antioch could count, at the time of the crusades, about half a million faithful. The Byzantines had taken over Antioch in 969 and kept the city until the arrival of the crusaders in 1098: Prince Bohemond, despite the promises made to the Byzantine emperor Alexis Comnene, kept it for himself and obliged the Melkite patriarch Jean V to abandon the city. It was at this time that the Melkite patriarchs of Antioch (all Greeks during this period) went to reside in Constantinople, and this until the reconquest of Antioch in 1268 by the Mamluk sultan of Egypt Baibars.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-900 to-amber-900 px-8 py-6">
                  <h3 className="text-3xl font-serif font-bold text-white">Evolution</h3>
                </div>
                <div className="p-8 md:p-10">
                  <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p>
                      The domination of the Byzantines had a first consequence, of a liturgical order: until then, the Patriarchate of Antioch, even in its Orthodox (Chalcedonian) branch, had observed the Antiochian rite, very influenced by that of Jerusalem, and which is still now followed by the Syrian Orthodox Church and (with various modifications) by the Syrian Catholic Church and the Maronite Church. Gradually, there was interaction between the Antiochian liturgy and that of Constantinople, until the end of the 13th century; it was the same in Jerusalem and Alexandria.
                    </p>
                    <p>
                      As a good part of the population spoke Syriac, the Byzantine liturgical books were translated into this language (the libraries of Europe have more than two hundred Melkite manuscripts in Syriac, of this time, the most recent dating from the middle of the XVIIth century). But the progression of Arabic as a language spoken by the majority of the population resulted in the introduction of Arabic into the liturgy. At the beginning of the 17th century, the Metropolitan of Aleppo Meletios Karmé revised the Arabic translations of the liturgical texts and gave them the form which has been preserved until today, with some improvements.
                    </p>
                    <p>
                      The second consequence of the stay of the Melkite patriarchs of Antioch in Constantinople, from 1098 to 1268, was the introduction of the schism of Michel Cérulaire, despite the well-known resistance of the patriarch of Antioch Peter III. The installation of a Latin patriarch in Antioch after the departure of John V, the antagonism of Bohemond and the Byzantine emperor, the forced subordination of the Eastern hierarchy to the Latin hierarchy, were all elements which pushed the Melkites to the opposition.
                    </p>
                    <p>
                      As for the precise moment of separation, which was more political than religious, it is not possible to date it exactly. From 1268, the patriarchs were again almost all indigenous; but relations with the West were severely prohibited by the sultans of Egypt, to whom Syria was then subject; moreover, the Melkite πatriarch was much more watched than the Maronite πatriarch, more independent in its mountains of Lebanon.
                    </p>
                    <p>
                      One notes nevertheless the union with Rome in 1098, in 1242 and during the years which followed and from 1274 to 1283; the union was reestablished at the Council of Florence (1439) and lasted until around 1443; was again restored in 1457 by the Patriarchate of Antioch and in 1460 by the Patriarchate of Alexandria and Jerusalem by means of a delegation of Moses Giblet who went to Pope Pius II in Siena. This union seems to have lasted until the conquest of Syria by the Ottomans in 1517.
                    </p>
                    <p>
                      From 1517, relations with Rome again became practically impossible; the influence of the Greeks of Constantinople increased and the Union fell into oblivion. In the other two Patriarchates, the Cerular schism was not immediately accepted. In the Patriarchate of Jerusalem, without a resident holder since the city was taken by the crusaders (1098), the Greco-Melkite hierarchy was subordinated to the Latin Patriarchate according to a modus vivendi which gradually established itself. After Saladin's conquest of the Holy City in 1187, the Greek patriarch returned to his seat, and relations with the Latins ceased, if only for political necessity. In the Patriarchate of Alexandria, it was very difficult to know the name of the reigning Pope of Rome. The historian Yahya ibn Saïd (11th century), who was a Melkite from Antioch, reports, at the beginning of his work, how, from 685 to the year 1000, in Egypt, people always remembered Pope Benedict II (684- 685) because the names of his successors were unknown, and this until John XVIII (l003-1009), and the author apologizes for not giving the names of the popes who were missing for this reason. However, still in the first half of the 14th century, the official diploma given by the Fatimid caliphs of Cairo to the Melkite patriarch of Alexandria made explicit mention of his submission to the Pope of Rome, while forbidding him any relationship whatsoever with the West. 
                    </p>
                    <p>
                      After its destruction by Baibars in 1268, Antioch lost its importance, and the patriarch Pacôme I transferred his residence to Damascus between 1375 and 1386. Consequently, little by little, Damascus ceased to have its own metropolitan and became a patriarchal eparchy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-900 to-amber-900 px-8 py-6">
                  <h3 className="text-3xl font-serif font-bold text-white">Melkites since the 18th Century</h3>
                </div>
                <div className="p-8 md:p-10">
                  <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p>
                      Sent to the East by Pope Gregory XIII, the titular (Latin) bishop of Sidon, Leonardo Abel, Maltese, between 1583 and 1587 won to the Catholic faith the old patriarch emeritus of Antioch, Michael VII, who resigned in 1582 and retired to Aleppo. It is very likely that this mission of the Maltese bishop dates back to the constitution in Aleppo of a small Catholic nucleus, which gradually grew in number when the Jesuits and Capuchins (1625), then the Carmelites (1626) opened. residences in Aleppo.
                    </p>
                    <p>
                       In 1634, the patriarch Euthyme II (Karmé) sent his profession of Catholic faith to Rome, but died before receiving papal confirmation. In 1653, there were some 7,000 Catholics in Damascus. In 1664, Macaire III (Zaim), patriarch of Antioch from 1637 to 1672, imitated the example of Euthyme II, but without declaring himself publicly, and without interrupting his relations with the other Orthodox patriarchs. In 1687, Athanase III (Dabbas), competitor of Cyrille V (Zaim), did the same, then retired in 1694 to Aleppo, city become the citadel of Catholicism in Syria. 
                    </p>
                    <p>
                      In 1701, the metropolitan of Beirut and the bishop of Baalbek formally adhered to the Catholic faith. Those who were in communion with Rome had become numerous enough for the Congregation for the Propagation of the Faith (from Propaganda Fide) to openly name, in 1684, the metropolitan of Tire and Saida, Euthyme Saïfi (disciple of the Jesuits and Catholic at heart for a long time), as apostolic administrator of the Melkite Catholics scattered throughout the Patriarchate of Antioch; this metropolitan, founder of the Basilian order of the Holy Savior, was a great propagator of Catholicism in Syria outside Damascus and Aleppo. In 1716, the patriarch Cyrille V, hitherto opposed to Rome, having been won by his friend Poullard, consul of France in Saïda, sent his profession of Catholic faith to Rome, at the same time as the bishop of Seidnaya, Gerasimos, then died in 1720, leaving the Patriarchate to Athanasius III. The latter, although he had shown himself favorable to Catholics when he retired to Aleppo, then behaved differently.
                    </p>
                    <p>
                      When he died in 1724, the Catholic party, which had become quite powerful, quickly chose as patriarch, failing the metropolitan Euthyme Saïfi (died in 1723), his nephew Seraphim Tanas, who took the name of Cyrille VI. The Greeks of Constantinople immediately opposed the Cypriot Sylvester to him, and a bitter struggle ignited for the possession of the Patriarchate. Expelled from Damascus, Cyrille VI found asylum in Lebanon, then semi-independent. The union with Rome could easily spread to Lebanon and always remained solid in Aleppo and Damascus, despite the sometimes violent persecutions; in the rest of Syria, the opposition of the orthodox hierarchy paralyzed the efforts, while the successors of Cyrille VI were all native Melkites, those of the Greek Sylvester were all Greeks until 1899, year during which the party native, supported by Russia, managed to exclude the Greeks. In the Patriarchates of Alexandria and Jerusalem, the Melkite Catholics, dispersed and in small numbers, were entrusted to the Franciscans of the Custody of the Holy Land. On May 19, 1772, at the request of the clergy and the faithful, Rome entrusted them, as apostolic administrator, to the Greek Melkite Catholic Patriarch of Antioch, then residing in Lebanon.
                    </p>
                    <p>
                      In 1832, the Egyptians seized Damascus and all Syria, which they kept until 1841. Taking advantage of this, the patriarch Maximos III (Mazloum), elected in 1833, returned to Damascus in 1834; until his death in 1855, he spent a good part of his patriarchy preparing and then applying, not without vigorous struggles, the civil emancipation he obtained from the Sublime Porte for his Church in 1848. In 1838, he had obtained from Pope Gregory XVI the personal privilege of carrying, in addition to that of patriarch of Antioch, the titles of patriarch of Alexandria and Jerusalem.
                    </p>
                    <p>
                    In 1894, Pope Leo XIII extended the jurisdiction of the Greek Melkite Catholic Patriarch, beyond the limits of the three Patriarchates, to his followers living throughout the rest of the Ottoman Empire. The too hasty introduction of the Gregorian calendar by the patriarch Clement I (Bahouth), in 1857, was the pretext of a small schism caused in reality by other reasons, and quickly absorbed by the wise administration (1864-1897) , cautious and energetic of the patriarch Gregorios II (Youssef-Sayyour), under whom the Greek-Melkite Catholic community made great progress, especially in the Tripoli regions of Lebanon and Jdeidet Marjeyoun; under his successors, from Pierre IV (Géraigiry) to Cyrille IX (Moghabghab), this progress extended in particular to Galilee, Transjordan and in the region of Homs, in compensation for the serious losses caused by the famine during the first world war and consequent emigrations. At the same time, these patriarchs had to face the consequences throughout the Near East of the decomposition of the Ottoman Empire and the two world wars of 1914-1918 and 1939-1945.
                    </p>
                    <p>
                      Maximos IV (Saïgh), patriarch from 1947 to 1967, is especially remembered for the eminent role he had, with the support of the entire Greek-Melkite Catholic episcopate, at Vatican Council II, a role recognized and appreciated by all, in particular by popes John XXIII and Paul VI; he was the forerunner of several initiatives and developments contained in the documents of the council, notably on collegiality, on the place of the Eastern Churches in the Catholic Church, on ecumenism, on the liturgy, etc.
                    </p>
                    <p>
                      His successor Maximos V (Hakim), from 1967 to 2000, great builder, set out to respond to the new challenges posed to the Greek Melkite Catholic Church, particularly in terms of pastoral assistance to the faithful in the diaspora, now more numerous than those of the Near East, and of dialogue with the Greek-Orthodox Patriarchate of Antioch.
                    </p>
                    <p>
                      Finally, the patriarch Gregorios III (Laham), elected on November 29, 2000, wants to be a continuation of his predecessors. with special emphasis on the place of Christians in Arab society and the need to stem emigration, dialogue with Islam, ecumenism, hard work in liturgy (chairman of the patriarchal liturgical commission from the epoch when he was patriarchal vicar in Jerusalem: renewal and publication of liturgical books, texts and psaltic annotation), as well as the clarification of the relations of the Greek-Melkite Catholic Church with the Apostolic Holy See in Rome.
                    </p>
                    <div className="bg-gradient-to-r from-amber-50 to-red-50 p-6 rounded-xl border-l-4 border-red-900 mt-8">
                      <p className="font-semibold text-red-900 text-lg">
                        Currently, five patriarchs bear the title of Antioch; these are, in addition to the patriarch of the Greek Melkite Catholic Church: that of the Greek Orthodox Patriarchate of Antioch (His Beatitude Ignatius IV Hazim), that of the Syrian-Orthodox Church (His Holiness Ignatius Zakka I Iwas) of the Maronite Church (His Eminent Beatitude Cardinal Boutros Nasrallah Sfeir) and that of the Syrian-Catholic Church (His Beatitude Ignatius Joseph III Younan).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
