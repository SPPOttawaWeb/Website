import { Heart, Book, Users, ChevronRight, ChevronDown } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-b from-amber-50 via-white to-white overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-10xl mx-auto">
            <div className="animate-fadeIn lg:text-left text-center order-2 lg:order-1">
              <div className="inline-block bg-amber-500 text-red-900 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                Byzantine Catholic Tradition
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-red-900">
                Welcome to<br />
                <span className="text-amber-600">Sts. Peter & Paul</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-red-800 leading-relaxed">
                A community rooted in ancient Eastern Christian traditions, celebrating the Divine Liturgy in union with Rome
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                <button
                  onClick={() => onNavigate('worship')}
                  className="bg-amber-500 hover:bg-amber-600 text-red-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center">
                  View Mass Times
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="bg-red-900 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  Learn About Us
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src="/Website/SPP-FrontPOVTrue.png"
                alt="Sts. Peter & Paul Church"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="text-center pb-8">
          <ChevronDown className="h-8 w-8 text-red-900 mx-auto animate-bounce" />
        </div>
      </section>
{/*
       <section className="py-20 bg-white"> 
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-red-900 mb-6">Welcome to Our Parish</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We would like to welcome you to the official website of Saints Peter and Paul Melkite Catholic Church. May God bless you always!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-red-50 to-amber-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-red-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Book className="h-10 w-10 text-amber-400" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">Divine Liturgy</h3>
              <p className="text-gray-700 leading-relaxed">
                Experience the ancient Byzantine liturgy, rich in symbolism and reverence, connecting heaven and earth.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-amber-50 to-red-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">Community</h3>
              <p className="text-gray-700 leading-relaxed">
                Join a warm, welcoming family of believers dedicated to growing in faith together.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-red-50 to-amber-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-red-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="h-10 w-10 text-amber-400" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Live out the Gospel through ministries that serve our parish and the wider community.
              </p>
            </div>
          </div>
        </div>
      </section>
*/}
      <section className="py-20 bg-gradient-to-br from-red-900 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Join Us for Divine Liturgy</h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed">
              All are welcome to experience the beauty and reverence of the Byzantine Catholic tradition. Come as you are and encounter the living God in our sacred worship.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => onNavigate('worship')}
                className="bg-amber-500 hover:bg-amber-600 text-red-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Mass Times & Directions
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-red-900 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
