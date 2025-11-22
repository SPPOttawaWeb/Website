import { Users, Music, BookOpen, Heart, UserCheck, Waves, HandHeart } from 'lucide-react';

interface MinistriesPageProps {
  onNavigate?: (page: string) => void;
}

export default function MinistriesPage({ onNavigate }: MinistriesPageProps) {
  const ministries = [
    {
      name: 'St. Theresa Sodality',
      schedule: 'Tusedays at 6:30pm',
      contact: 'Salwa Saab',
      phone: '613-884-4366',
      icon: <Heart className="h-8 w-8" />,
    },
    {
      name: 'Knights of Columbus',
      schedule: 'Tusedays at 7pm',
      contact: 'Elias Abou-Samra',
      phone: '819-328-1191',
      icon: <Users className="h-8 w-8" />,
    },
    {
      name: 'Ouzkourni fi Malakoutika',
      schedule: 'Wednesdays at 7pm',
      contact: 'Maggie Jarawan',
      phone: '819-664-1022',
      icon: <Music className="h-8 w-8" />,
    },
    {
      name: 'MCYO Bible Study',
      schedule: 'Thursdays at 8pm',
      contact: 'Tarek Rassi',
      phone: '613-979-5335',
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      name: "Kids' Bible Study",
      schedule: 'Fridays at 6pm',
      contact: 'Nathalie Hanna',
      phone: '613-265-2226',
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      name: 'TCG',
      schedule: 'Fridays at 6pm',
      contact: 'Antoinette Rassi',
      phone: '613-355-8919',
      icon: <Users className="h-8 w-8" />,
    },
    {
      name: 'Couples Group',
      schedule: 'Fridays at 6pm',
      contact: 'Antoinette Rossi',
      phone: '613-355-8919',
      icon: <Heart className="h-8 w-8" />,
    },
    {
      name: 'Prayer Group',
      schedule: 'Saturdays at 10:30am',
      contact: 'Najwa Mansour',
      phone: '819-712-3219',
      icon: <HandHeart className="h-8 w-8" />,
    },
    {
      name: 'Scouts',
      schedule: 'Saturdays at 1:30pm',
      contact: 'Joseph Hajj',
      phone: '613-302-4142',
      icon: <Users className="h-8 w-8" />,
    },
    {
      name: 'Church Band',
      schedule: 'Saturdays at 3pm',
      contact: 'Joseph Khawaja',
      phone: '613-404-9998',
      icon: <Music className="h-8 w-8" />,
    },
    {
      name: 'MCYO',
      schedule: 'Sundays at 6:30pm',
      contact: 'Jessica El-Salibi',
      phone: '613-263-3154',
      icon: <Users className="h-8 w-8" />,
    },
  ];

  return (

    
      <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-500 text-red-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Serve & Grow
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Parish Ministries</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Join our vibrant community groups and discover your calling to serve
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-red-900 mb-4">Liturgical Ministries</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Serving directly in our worship through music and assistance at the altar
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-900 hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-br from-red-900 to-red-800 w-20 h-20 rounded-xl flex items-center justify-center mb-6 text-amber-400 mx-auto">
                  <Music className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-4 text-center">SPP Choir</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Join our choir in singing the ancient hymns and responses of the Divine Liturgy. We welcome all who wish to serve through sacred music.
                </p>
                <div className="text-center space-y-3 pt-4 border-t border-gray-200">
                  <p className="text-gray-700 font-semibold">Contact Father Joe</p>
                  <a
                    href="tel:613-746-6091"
                    className="inline-block text-red-900 hover:text-amber-700 font-medium transition-colors"
                  >
                    613-746-6091
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-900 hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-br from-red-900 to-red-800 w-20 h-20 rounded-xl flex items-center justify-center mb-6 text-amber-400 mx-auto">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-4 text-center">Altar Servers</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Please if you like, come and assist the priest during Divine Liturgy, learning to serve with reverence and participating more fully in the sacred mysteries.
                </p>
                <div className="text-center space-y-3 pt-4 border-t border-gray-200">
                  <p className="text-gray-700 font-semibold">Contact Abouna Samir</p>
                  <a
                    href="tel:613-746-6091"
                    className="inline-block text-red-900 hover:text-amber-700 font-medium transition-colors"
                  >
                    613-746-6091
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-4">Parish Groups & Activities</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every member of our parish is called to participate in the life and mission of the Church. Find a group that fits your schedule and interests.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ministries.map((ministry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 group"
                >
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-red-900 to-red-800 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
                      {ministry.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-red-900 mb-3">{ministry.name}</h3>

                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <p className="text-amber-700 font-semibold text-sm mb-2">{ministry.schedule}</p>
                      {ministry.dates && ministry.dates.length > 0 && (
                        <>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {ministry.dates.slice(0, 6).map((date, idx) => (
                              <span key={idx} className="bg-red-50 text-red-900 px-2 py-0.5 rounded text-xs font-medium">
                                {date}
                              </span>
                            ))}
                          </div>
                          {ministry.dates.length > 6 && (
                            <p className="text-xs text-gray-500 italic">+{ministry.dates.length - 6} more dates</p>
                          )}
                        </>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="text-gray-700 font-semibold text-sm">{ministry.contact}</p>
                      <a
                        href={`tel:${ministry.phone}`}
                        className="text-red-900 hover:text-amber-700 font-medium text-sm block transition-colors"
                      >
                        {ministry.phone}
                      </a>
                    </div>

                    <button
                      onClick={() => onNavigate?.('contact')}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-red-900 font-bold py-3 px-4 rounded-lg transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                    >
                      Get Involved
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-900 to-red-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <Users className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Join a Ministry Today</h2>
              <p className="text-gray-100 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
                Whether you have a few hours a month or can make a regular commitment, there's a ministry that needs your gifts and talents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="bg-amber-500 hover:bg-amber-600 text-red-900 font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </button>
                <a
                  href="tel:613-746-6091"
                  className="bg-white hover:bg-gray-100 text-red-900 font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
                >
                  Call: 613-746-6091
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">Gifts of the Holy Spirit</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              "Now there are varieties of gifts, but the same Spirit; and there are varieties of service, but the same Lord; and there are varieties of working, but it is the same God who inspires them all in every one."
            </p>
            <p className="text-amber-700 font-serif italic text-xl">- 1 Corinthians 12:4-6 RSV</p>
          </div>
        </div>
      </section>
    </div>
  );
}
