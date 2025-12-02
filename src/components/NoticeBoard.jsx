
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Bell } from 'lucide-react';

interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  category: 'general' | 'academic' | 'event';
}

const NoticeBoard = ({ userRole }: { userRole?: string }) => {
  const notices: Notice[] = [
    {
      id: '1',
      title: 'Mid-term Examinations Schedule',
      content: 'Mid-term examinations will commence from March 15th. Please check your individual timetables.',
      date: '2024-03-01',
      priority: 'high',
      category: 'academic'
    },
    {
      id: '2',
      title: 'Parent-Teacher Conference',
      content: 'Annual parent-teacher conference scheduled for March 20th. All parents are invited.',
      date: '2024-03-02',
      priority: 'medium',
      category: 'event'
    },
    {
      id: '3',
      title: 'Library New Arrivals',
      content: 'New books have arrived in the library. Check out the latest science and literature collections.',
      date: '2024-03-03',
      priority: 'low',
      category: 'general'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <span>Notice Board</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{notice.title}</h4>
                <Badge className={getPriorityColor(notice.priority)}>
                  {notice.priority}
                </Badge>
              </div>
              <p className="text-gray-600 text-sm mb-2">{notice.content}</p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Calendar className="h-3 w-3" />
                <span>{new Date(notice.date).toLocaleDateString()}</span>
                <Badge variant="outline" className="text-xs">
                  {notice.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NoticeBoard;
