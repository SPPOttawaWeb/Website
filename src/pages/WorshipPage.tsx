import { Clock, MapPin, Calendar, Book } from 'lucide-react';

interface WorshipPageProps {
  onNavigate?: (page: string) => void;
}

export default function WorshipPage({ onNavigate }: WorshipPageProps) {
  const sacraments = [
    {
      name: 'Baptism',
      //href: 'https://www.vatican.va/archive/ENG0015/__P3O.HTM',
      description: 'Holy Baptism is the basis of the whole Christian life, the gateway to life in the Spirit (vitae spiritualis ianua), and the door which gives access to the other sacraments. Through Baptism we are freed from sin and reborn as sons of God; we become members of Christ, are incorporated into the Church and made sharers in her mission: "Baptism is the sacrament of regeneration through water in the word."',
      number: 'I',
    },
    {
      name: 'Confirmation',
      //href: 'https://www.vatican.va/archive/ENG0015/__P3V.HTM',
      description: 'Confirmation perfects Baptismal grace; it is the sacrament which gives the Holy Spirit in order to root us more deeply in the divine filiation, incorporate us more firmly into Christ, strengthen our bond with the Church, associate us more closely with her mission, and help us bear witness to the Christian faith in words accompanied by deeds.',
      number: 'II',
    },
    {
      name: 'Holy Eucharist',
      //href: 'https://www.vatican.va/archive/ENG0015/__P44.HTM',
      description: "The Eucharist is the heart and the summit of the Church's life, for in it Christ associates his Church and all her members with his sacrifice of praise and thanksgiving offered once for all on the cross to his Father; by this sacrifice he pours out the graces of salvation on his Body which is the Church. By the consecration the transubstantiation of the bread and wine into the Body and Blood of Christ is brought about. Under the consecrated species of bread and wine Christ himself, living and glorious, is present in a true, real, and substantial manner: his Body and his Blood, with his soul and his divinity.",
      number: 'III',
    },
    {
      name: 'Reconciliation (Confession)',
      //href: 'https://www.vatican.va/archive/ENG0015/__P4I.HTM',
      description: "The sacrament of Penance or Reconciliation is a whole consisting in three actions of the penitent and the priest's absolution. the penitent's acts are repentance, confession or disclosure of sins to the priest, and the intention to make reparation and do works of reparation. Repentance (also called contrition) must be inspired by motives that arise from faith. If repentance arises from love of charity for God, it is called \"perfect\" contrition; if it is founded on other motives, it is called \"imperfect.\" 1493 One who desires to obtain reconciliation with God and with the Church, must confess to a priest all the unconfessed grave sins he remembers after having carefully examined his conscience. the confession of venial faults, without being necessary in itself, is nevertheless strongly recommended by the Church.",
      number: 'IV',
    },
    {
      name: 'Anointing of the Sick',
      //href: 'https://www.vatican.va/archive/ENG0015/__P4P.HTM',
      description: 'By the sacred anointing of the sick and the prayer of the priests the whole Church commends those who are ill to the suffering and glorified Lord, that he may raise them up and save them. and indeed she exhorts them to contribute to the good of the People of God by freely uniting themselves to the Passion and death of Christ',
      number: 'V',
    },
    {
      name: 'Holy Orders',
      //href: 'https://www.vatican.va/archive/ENG0015/__P4Z.HTM',
      description: 'Holy Orders is the sacrament through which the mission entrusted by Christ to his apostles continues to be exercised in the Church until the end of time: thus it is the sacrament of apostolic ministry. It includes three degrees: episcopate, presbyterate, and diaconate.',
      number: 'VI',
    },
    {
      name: 'Matrimony (Marriage)',
      //href: 'https://www.vatican.va/archive/ENG0015/__P57.HTM',
      description: 'The matrimonial covenant, by which a man and a woman establish between themselves a partnership of the whole of life, is by its nature ordered toward the good of the spouses and the procreation and education of offspring; this covenant between baptized persons has been raised by Christ the Lord to the dignity of a sacrament.',
      number: 'VII',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-500 text-red-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Sacred Worship
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Divine Liturgy & Sacraments</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Experience the beauty and reverence of Byzantine Catholic worship
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-red-900 mb-4">Mass Schedule</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Join us for the celebration of the Divine Liturgy
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-lg text-center mb-12">
              <Book className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-red-900 mb-2">Calendar Mass Schedule Coming Soon</h3>
              <p className="text-gray-700">Solemn Liturgy every Sunday at 11 a.m. / Solemn Liturgy during the week at 7 p.m. on the occasion of a feast day / Solemn Liturgy on the second Wednesday of the month at 7 pm (OUZKOURNI)</p>
            </div>

            <div className="bg-gradient-to-br from-red-900 to-red-800 text-white p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Find Us</h3>
                  <p className="text-gray-200 mb-4">
                    1161 N River Rd<br />
                    Ottawa, ON K1K 2C8
                  </p>
                  <p className="text-sm text-gray-300">
                    Free parking is available in the church lot. The entrance is accessible for all visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-serif font-bold text-red-900 mb-4">The Divine Liturgy</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Church uses the Byzantine Liturgy of St. John Chrysostom which differs in tradition than the modern day Roman Catholic Mass. The Melkites, or Byzantine (Greek) Catholics of Middle Eastern origin, are descendants of the early Christians of Antioch (cf. Acts 11:26). Today, the term Melkite is used to refer to those Catholics whose ancestry is Middle Eastern and who follow the Byzantine Tradition in worship, theology, and spirituality. The Melkites are under the authority of the Catholic Pope Leo XIV and therefore adhere to all the core beliefs of the Holy Catholic Church. 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-16xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-red-900 mb-4">The Seven Sacraments</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Mysteries of grace that sanctify our lives and draw us closer to God
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sacraments.map((sacrament, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500">
                  <div className="w-16 h-16 rounded-full bg-red-900 flex items-center justify-center mb-4">
                    <span className="text-3xl font-serif font-bold text-amber-400">{sacrament.number}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-red-900 mb-3">{sacrament.name}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{sacrament.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-br from-amber-50 to-red-50 p-8 rounded-lg text-center">
              <Calendar className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">Schedule a Sacrament</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                To schedule a baptism, wedding, or other sacramental celebration, or to learn more about preparation
                requirements, please contact our parish office.
              </p>
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-amber-500 hover:bg-amber-600 text-red-900 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Contact Parish Office
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-900 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Come and See</h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              "Taste and see that the Lord is good; blessed is the one who takes refuge in him." - Psalm 34:8
            </p>
            <p className="text-lg text-gray-300">
              All are welcome to experience the beauty and depth of Byzantine Catholic worship. No registration required
              - simply come and allow the liturgy to speak to your heart.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
