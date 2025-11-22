import { Heart, Church, Users, BookOpen, DollarSign } from 'lucide-react';

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-500 text-red-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Support Our Mission
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Give to Our Parish</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Your generosity helps sustain our worship, ministries, and service to the community
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-red-900 mb-4">Ways to Give</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-amber-500">
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="h-8 w-8 text-amber-600" />
                  <h3 className="text-2xl font-serif font-bold text-red-900">Online Giving</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Sts Peter and Paul Parish Council is pleased to announce a new way for you to contribute and donate to your church, online, throughout the year. You can make a one-time donation or set up automatic weekly or monthly contributions from your credit card. Please note that donations must be from one person for tax receipt purposes. You can dedicate your donation in honor or in memory of someone or use the comment section if the donation is from more than one person.
                </p>
                <div className="bg-amber-50 p-6 rounded-lg mb-6 text-center">
                  <p className="text-gray-700 mb-4">
                    To implement secure online donations, we recommend integrating with Stripe for payment processing.
                  </p>
                  <p className="text-sm text-amber-800 font-semibold">
                    Stripe integration coming soon!
                  </p>
                </div>
                <button className="w-full bg-gray-300 text-gray-600 font-bold py-3 px-6 rounded-lg cursor-not-allowed">
                  Online Giving (Coming Soon)
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-500">
                <div className="flex items-center space-x-3 mb-4">
                  <Church className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-serif font-bold text-blue-900">Traditional Giving</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Continue to support our parish through traditional methods of giving.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Collection Basket</h4>
                    <p className="text-gray-700 text-sm">
                      Place your offering in the collection basket during Divine Liturgy
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Mail</h4>
                    <p className="text-gray-700 text-sm">
                      Send checks payable to "Sts. Peter & Paul Church" to:<br />
                      <span className="font-mono text-xs">1161 N River Rd, Ottawa, ON K1K 2C8</span>
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Parish Office</h4>
                    <p className="text-gray-700 text-sm">
                      Drop off donations during office hours: Monday-Friday, 9am-4pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-red-900 to-red-800 text-white rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold mb-4">Planned Giving & Legacy Gifts</h3>
              <p className="text-gray-200 mb-4 leading-relaxed">
                If you’d like to support the long-term future of our parish, you can include Sts. Peter and Paul in your will or estate plans. These gifts                 help ensure our church remains strong for generations.

              </p>
              <p className="text-gray-300 text-sm">
                For more information about planned giving options, please contact our parish office.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-4">Why Give?</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your financial contributions enable us to maintain our beautiful place of worship, support our
              clergy and staff, provide religious education, assist those in need, and carry out the mission Christ has
              given us. Thank you for being part of our parish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-lg shadow-md">
              <div className="bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Church className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="font-serif font-bold text-red-900 mb-2">Sacred Worship</h3>
              <p className="text-gray-700 text-sm">Maintaining our church and celebrating the Divine Liturgy</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-md">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="font-serif font-bold text-blue-900 mb-2">Education</h3>
              <p className="text-gray-700 text-sm">Religious formation for all ages in our community</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg shadow-md">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">Outreach</h3>
              <p className="text-gray-700 text-sm">Serving the poor and those in need in our area</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-lg shadow-md">
              <div className="bg-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="font-serif font-bold text-red-900 mb-2">Community</h3>
              <p className="text-gray-700 text-sm">Building fellowship and supporting parish life</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">Thank You</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your generous support makes it possible for Sts. Peter & Paul Church to continue its mission of worship,
              education, and service. We are deeply grateful for your partnership in the Gospel. May God bless you
              abundantly for your faithful stewardship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 text-red-900 mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">
              "Give, and it will be given to you"
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              "A good measure, pressed down, shaken together, running over, will be put into your lap. For the measure
              you give will be the measure you get back."
            </p>
            <p className="text-amber-700 font-serif text-lg italic">- Luke 6:38</p>
          </div>
        </div>
      </section>
    </div>
  );
}
