import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/navigation';
import { PieChart, Wallet, Trophy, Target } from 'lucide-react';

const userProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  dob: '15 March 1990',
  joinedDate: 'Member since January 2024',
  avatar: 'https://github.com/shadcn.png',
  stats: [
    { label: 'Total Investment', value: '₹15,43,872', icon: Wallet },
    { label: 'Portfolio Return', value: '+12.5%', icon: PieChart },
    { label: 'Successful Trades', value: '156', icon: Trophy },
    { label: 'Investment Goals', value: '4/5', icon: Target },
  ],
};

export default function Profile() {
  return (
    <div className="flex h-screen">
      <Navigation className="hidden lg:block" />
      
      <div className="flex-1 overflow-auto">
        <div className="container py-6">
          <h1 className="mb-8 text-3xl font-bold">Profile</h1>
          
          {/* Profile Overview */}
          <div className="mb-8">
            <Card>
              <CardContent className="flex flex-col items-center p-6 sm:flex-row sm:items-start sm:gap-8">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={userProfile.avatar} />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="mt-4 text-center sm:mt-0 sm:text-left">
                  <h2 className="text-2xl font-bold">{userProfile.name}</h2>
                  <p className="text-muted-foreground">{userProfile.email}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Born {userProfile.dob}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {userProfile.joinedDate}
                  </p>
                  <Button className="mt-4" variant="outline">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {userProfile.stats.map((stat) => (
              <Card key={stat.label}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.label}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}