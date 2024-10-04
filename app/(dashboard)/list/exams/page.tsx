import {
  User,
  Calendar,
  Phone,
  Mail,
  Home,
  MapPin,
  Building,
  MapPinned,
  Briefcase,
  GraduationCap,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function Componet() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 rounded-xl border-2 border-blue-700 p-6">
      <h1 className="text-2xl font-bold">Personal Information Form</h1>
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User size={20} />
            Name
          </Label>
          <Input
            id="name"
            placeholder="Enter your name"
            className="bg-blue-700/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob" className="flex items-center gap-2">
            <Calendar size={20} />
            Date of Birth
          </Label>
          <Input id="dob" type="date" className="bg-blue-700/10" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone size={20} />
            Phone No.
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="bg-blue-700/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail size={20} />
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="bg-blue-700/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address" className="flex items-center gap-2">
            <Home size={20} />
            House No./Area
          </Label>
          <Input
            id="address"
            placeholder="Enter your house number and area"
            className="bg-blue-700/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city" className="flex items-center gap-2">
            <Building size={20} />
            City
          </Label>
          <Input
            id="city"
            placeholder="Enter your city"
            className="bg-blue-700/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="district" className="flex items-center gap-2">
            <MapPin size={20} />
            District
          </Label>
          <Input
            id="district"
            placeholder="Enter your district"
            className="bg-blue-700/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pincode" className="flex items-center gap-2">
            <MapPinned size={20} />
            PinCode
          </Label>
          <Input
            id="pincode"
            placeholder="Enter your pincode"
            className="bg-blue-700/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="profession" className="flex items-center gap-2">
            <Briefcase size={20} />
            Profession
          </Label>
          <Input
            id="profession"
            placeholder="Enter your profession"
            className="bg-blue-700/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="education" className="flex items-center gap-2">
            <GraduationCap size={20} />
            Education
          </Label>
          <Input
            id="education"
            placeholder="Enter your education"
            className="bg-blue-700/10"
          />
        </div>
        <div className="col-span-full flex justify-end space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
}
