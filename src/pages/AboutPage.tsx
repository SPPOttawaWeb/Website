import { Mail, BookOpen, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const [isFormerClergyOpen, setIsFormerClergyOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-500 text-red-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Parish
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              A community united in faith, rooted in tradition, and alive in the Holy Spirit
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-red-900 mb-4">Who We Are</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Melkite Greek Catholics - preserving ancient Eastern Christian traditions in full communion with Rome
              </p>
            </div>

            <div className="mb-12">
              <div className="bg-gradient-to-br from-red-50 to-amber-50 p-10 rounded-lg shadow-lg">
                <h3 className="text-3xl font-serif font-bold text-red-900 mb-6 text-center">Catholic Greek-Melkite Church</h3>

                <h4 className="text-xl font-serif font-bold text-red-800 mt-6 mb-4 text-center">Melkites - Origin of the word "melkite"</h4>
                <p className="mb-4 text-lg leading-relaxed text-center">
                  The Greeks-Melkites Catholics are, originally, in the three great Eastern Patriarchates of Antioch, Alexandria and Jerusalem. The word "melkite" comes from the Syriac "malko" and means "royal" or "imperial"; it is a nickname given for the first time in 460, in Egypt, by the monophysites, to the orthodoxes who had taken sides for the legitimate patriarch, Timothée II, supported by the Roman (Byzantine) emperor Leon 1st. It was therefore, at the time, a synonym of political-religious loyalty.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-center">
                  From Egypt, this nickname quickly passed into Syria. Currently, the common usage reserves this name to the Catholics of the Byzantine (Greek) rite of Arabic language in the three patriarchates mentioned above and in emigration. As for the non-Catholics of these same three patriarchates, they are called, in Arabic, "Roum", that is to say Eastern Greeks, while the Melkite Catholics are also called "Roum katholik". Catholicism is so characteristic of Greek Melkite Catholics that, for a commoner, especially in Syria, the term "katholik", without further specification, always refers to Greek Melkite Catholics.
                </p>
                <p className="text-lg leading-relaxed text-center">
                  Today, all the Melkites are of Arabic language. In the past, notably from the 5th to the 12th centuries, there were Melkites of Byzantine origin who still spoke Greek, others of native race who spoke Syriac, and finally others of Arab ethnicity, converted to Christianity from the 5th century, well before Islam, who spoke Arabic. This ethnic and linguistic plurality also existed among the monophysites of the time, but with a predominance of the Syriac language. The Melkites of today, both Catholic and Orthodox, therefore represent the trunk of the two large trees formed by the two great ecclesiastical districts already recognized at the Council of Nicea (325) and which had their centers respectively in Alexandria (for the territories corresponding to the Roman civil "diocese" of Egypt) and to Antioch (for the "diocese" of the East).
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900 to-red-800 text-white p-8 rounded-lg shadow-xl mb-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-red-900" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-serif font-bold mb-3">Our Local History</h3>
                  <p className="text-gray-100 mb-4 leading-relaxed">
                    On November 23, 1961, the church of Sts. Peter & Paul opened her doors and was a spiritual Centre for the middle-eastern Christian                         community. Father Habib Kwaiter, B.S.O. was named the official Pastor in 1970. A new church was constructed in 1979 and on March 30,                       1980 Palm Sunday, the opening ceremony and the first Solemn Liturgy was celebrated in our new church by the Most Reverend Archbishop                       Joseph Raya.
                  </p>
                  <button
                    onClick={() => onNavigate('history')}
                    className="bg-amber-500 hover:bg-amber-600 text-red-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Read Our Full History & Timeline
                  </button>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-red-900 mb-4">Our Spiritual Leader & Clergy</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Spiritual shepherds serving our parish community
              </p>
            </div>

            <div className="flex justify-center mb-16">
              <div className="w-80">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-red-900 to-amber-900 flex items-center justify-center">
                    <img src="/P.-Samir.jpg" alt="Msgr. Samir Sarkis" className="w-full h-auto" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-red-900 mb-1">Msgr. Samir Sarkis</h3>
                    <p className="text-amber-700 font-semibold mb-4">Pastor</p>
                    <a
                      href="mailto:info@melkite.com"
                      className="inline-flex items-center text-red-900 hover:text-amber-600 transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      <span className="text-sm">Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <button
                onClick={() => setIsFormerClergyOpen(!isFormerClergyOpen)}
                className="w-full p-6 flex items-center justify-between bg-gradient-to-r from-red-50 to-amber-50 hover:from-red-100 hover:to-amber-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-red-900">Former Pastors and Clergy</h3>
                </div>
                <ChevronDown
                  className={`h-6 w-6 text-red-900 transition-transform duration-300 ${
                    isFormerClergyOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  isFormerClergyOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="p-8">
                  <p className="text-gray-700 text-center mb-8 leading-relaxed">
                    We honor the faithful shepherds who served our parish through the years, guiding our community in faith and building the foundation we stand on today.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-red-900 to-red-800 text-white">
                          <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Priest Name</th>
                          <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Role</th>
                          <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Year</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-red-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">Fr. Theophile Atalla, BSO</td>
                          <td className="px-6 py-4 text-gray-700">Head Pastor</td>
                          <td className="px-6 py-4 text-gray-700">1964 – 1969</td>
                        </tr>
                        <tr className="hover:bg-red-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">Fr. Habib Kwaiter, BSO</td>
                          <td className="px-6 py-4 text-gray-700">Head Pastor</td>
                          <td className="px-6 py-4 text-gray-700">1970 – 2009</td>
                        </tr>
                        <tr className="hover:bg-red-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">Fr. Fouad Nasr, BSO</td>
                          <td className="px-6 py-4 text-gray-700">Assistant Pastor</td>
                          <td className="px-6 py-4 text-gray-700">1987 – 1995</td>
                        </tr>
                        <tr className="hover:bg-red-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">Fr. Sleiman Hajjar, BSO</td>
                          <td className="px-6 py-4 text-gray-700">Assistant Pastor</td>
                          <td className="px-6 py-4 text-gray-700">1997 – 2001</td>
                        </tr>
                        <tr className="hover:bg-red-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">Fr. Francois Beyrouti</td>
                          <td className="px-6 py-4 text-gray-700">Assistant Pastor</td>
                          <td className="px-6 py-4 text-gray-700">1998 – 2009</td>
                        </tr>
                        <tr className="hover:bg-red-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">Fr. George Iskander, BSO</td>
                          <td className="px-6 py-4 text-gray-700">Assistant Pastor</td>
                          <td className="px-6 py-4 text-gray-700">2001 – 2003</td>
                        </tr>
                        <tr className="hover:bg-red-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">Fr. Nadim Batikh</td>
                          <td className="px-6 py-4 text-gray-700">Assistant Pastor</td>
                          <td className="px-6 py-4 text-gray-700">2005 – 2010</td>
                        </tr>
                        <tr className="hover:bg-red-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">Fr. Makarios Wehbi, BSO</td>
                          <td className="px-6 py-4 text-gray-700">Head Pastor</td>
                          <td className="px-6 py-4 text-gray-700">2009 – 2015</td>
                        </tr>
                        <tr className="hover:bg-red-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">Fr. Ibrahim El Haddad, BSO</td>
                          <td className="px-6 py-4 text-gray-700">Co-Pastor</td>
                          <td className="px-6 py-4 text-gray-700">2010 – 2015</td>
                        </tr>
                        <tr className="hover:bg-red-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">Fr. Antoine Semaan</td>
                          <td className="px-6 py-4 text-gray-700">Assistant Pastor</td>
                          <td className="px-6 py-4 text-gray-700">2017 – 2018</td>
                        </tr>
                        <tr className="bg-amber-50 hover:bg-amber-100 transition-colors border-t-2 border-amber-500">
                          <td className="px-6 py-4 text-red-900 font-bold">Fr. Samir Sarkis</td>
                          <td className="px-6 py-4 text-red-900 font-semibold">Head Pastor</td>
                          <td className="px-6 py-4 text-red-900 font-semibold">2015 – Present</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Our Byzantine Catholic Faith</h2>
            <div className="space-y-4 text-center">
              <p className="text-lg leading-relaxed">
                As Melkite Greek Catholics, we are proud members of the universal Catholic Church, maintaining full
                communion with the Pope while preserving our distinct Eastern liturgical and spiritual traditions.
              </p>
              <p className="text-lg leading-relaxed">
                We believe in the Real Presence of Christ in the Eucharist, celebrate seven sacraments, venerate the
                Blessed Virgin Mary and the saints, and hold fast to the teachings of the Church Fathers and the
                Ecumenical Councils.
              </p>
              <p className="text-amber-300 font-serif text-xl italic mt-6">
                "That they may all be one, as you, Father, are in me and I in you." - John 17:21
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
