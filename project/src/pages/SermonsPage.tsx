import { useState } from 'react';
import { FileText, BookOpen } from 'lucide-react';

export default function SermonsPage() {
  const [activeTab, setActiveTab] = useState<'sermons' | 'news'>('sermons');

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-500 text-red-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Resources & Updates
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Sermons & News</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Grow in faith through homilies, teachings, and parish updates
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center space-x-4 mb-12">
              <button
                onClick={() => setActiveTab('sermons')}
                className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                  activeTab === 'sermons'
                    ? 'bg-amber-500 text-red-900 shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md'
                }`}
              >
                <BookOpen className="inline-block h-5 w-5 mr-2 -mt-1" />
                Sermons
              </button>
              <button
                onClick={() => setActiveTab('news')}
                className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                  activeTab === 'news'
                    ? 'bg-amber-500 text-red-900 shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md'
                }`}
              >
                <FileText className="inline-block h-5 w-5 mr-2 -mt-1" />
                Parish News
              </button>
            </div>

            {activeTab === 'sermons' ? (
              <div className="space-y-6">
                <div>
                    <div
                      key={sermon.id}
                      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-serif font-bold text-red-900 mb-2">{sermon.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-amber-600" />
                              <span>{formatDate(sermon.sermon_date)}</span>
                            </div>
                            <div>
                              <span className="font-semibold">Preacher:</span> {sermon.preacher}
                            </div>
                            {sermon.scripture_references && (
                              <div>
                                <span className="font-semibold">Scripture:</span> {sermon.scripture_references}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {sermon.description && (
                        <p className="text-gray-700 leading-relaxed mb-4">{sermon.description}</p>
                      )}

                      <div className="flex flex-wrap gap-3">
                        {sermon.audio_url && (
                          <button className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-red-900 font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                            <Play className="h-4 w-4" />
                            <span>Listen</span>
                          </button>
                        )}
                        {sermon.video_url && (
                          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                            <Play className="h-4 w-4" />
                            <span>Watch</span>
                          </button>
                        )}
                        {sermon.pdf_url && (
                          <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </button>
                        )}
                      </div>
                  <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                    <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">No Sermons Available</h3>
                    <p className="text-gray-600">
                      Check back soon for recorded homilies and teachings from our clergy.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                    <article
                      key={post.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="md:flex">
                        {post.featured_image_url && (
                          <div className="md:w-1/3">
                            <div className="h-64 md:h-full bg-gradient-to-br from-red-900 to-amber-900"></div>
                          </div>
                        )}
                        <div className={`p-8 ${post.featured_image_url ? 'md:w-2/3' : 'w-full'}`}>
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="bg-amber-500 text-red-900 text-xs font-bold px-3 py-1 rounded-full capitalize">
                              {post.category}
                            </span>
                            <span className="text-gray-600 text-sm">{formatDate(post.published_date)}</span>
                          </div>
                          <h3 className="text-3xl font-serif font-bold text-red-900 mb-3">{post.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">By {post.author}</p>
                          {post.excerpt && (
                            <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
                          )}
                          <button className="text-amber-600 hover:text-amber-700 font-semibold flex items-center transition-colors">
                            Read More
                            <span className="ml-2">→</span>
                          </button>
                        </div>
                      </div>
                  <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                    <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">No News Available</h3>
                    <p className="text-gray-600">
                      Check back soon for parish announcements and updates.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-900 to-red-800 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Subscribe to Updates</h2>
              <p className="text-gray-200 mb-6">
                Receive parish news, sermon recordings, and announcements directly to your inbox.
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-red-900 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">The Word of God</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              "Man shall not live by bread alone, but by every word that comes from the mouth of God."
            </p>
            <p className="text-amber-700 font-serif text-lg italic">- Matthew 4:4</p>
          </div>
        </div>
      </section>
    </div>
  );
}
