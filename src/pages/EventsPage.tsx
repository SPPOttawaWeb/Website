import { Calendar, Clock, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  image_url: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('Events SPP')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-500 text-red-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Parish Calendar
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Upcoming Events</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Join us in celebrating our faith and building community together
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-900"></div>
                <p className="mt-4 text-gray-600">Loading events...</p>
              </div>
            ) : events.length === 0 ? (
              <div className="bg-white rounded-lg shadow-xl p-12 text-center">
                <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold text-gray-700 mb-2">No Upcoming Events</h3>
                <p className="text-gray-600">Check back soon for new events and celebrations.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      {event.image_url && event.image_url !== 'URL of event image' && (
                        <div className="md:col-span-1">
                          <img
                            src={event.image_url}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className={`p-8 ${event.image_url && event.image_url !== 'URL of event image' ? 'md:col-span-2' : 'md:col-span-3'}`}>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <div className="inline-flex items-center bg-red-100 text-red-900 px-4 py-2 rounded-full text-sm font-semibold">
                            <Calendar className="h-4 w-4 mr-2" />
                            {formatDate(event.date)}
                          </div>
                          {event.time && (
                            <div className="inline-flex items-center bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold">
                              <Clock className="h-4 w-4 mr-2" />
                              {formatTime(event.time)}
                            </div>
                          )}
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-red-900 mb-4">
                          {event.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {event.description && event.description !== 'Event details / notes'
                            ? event.description
                            : 'Join us for this special event.'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-900 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-white-900 mb-6">Liturgical Celebrations</h2>
            <p className="text-white-700 leading-relaxed mb-6">
              Throughout the year, our parish celebrates the great feasts and seasons of the Byzantine liturgical
              calendar. From the joy of Pascha to the solemnity of Great Lent, from the glory of Theophany to the
              wonder of the Nativity, each celebration invites us deeper into the mystery of Christ.
            </p>
            <p className="text-white-700 leading-relaxed">
              Special liturgical events and feast day celebrations are posted regularly. Join us as we journey through
              the Church year together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
