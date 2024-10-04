'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, UserRoundPlus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function TeacherRegistrationForm() {
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-2 font-mont text-sm font-bold"
        >
          <UserRoundPlus size={20} className="mr-2 text-accent-foreground" />
          <p>Add Student</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-center font-mont text-2xl">
            Add New Teacher
          </DialogTitle>
          <Separator />
        </DialogHeader>
        <form
          action=""
          method="POST"
          className="space-y-4 rounded-lg font-mont"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="photo" className="block text-center">
                Profile Photo
              </Label>
              <div className="flex justify-center">
                <div className="relative">
                  <Avatar className="size-28">
                    <AvatarImage src={photo || ''} />
                    <AvatarFallback>
                      <Camera size={35} />
                    </AvatarFallback>
                  </Avatar>
                  <Input
                    id="photo"
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    onChange={handlePhotoUpload}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Enter full name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Enter phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Enter subject name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="batches">Batches</Label>
              <Select>
                <SelectTrigger id="batches">
                  <SelectValue placeholder="Select Batches" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a1">A1</SelectItem>
                  <SelectItem value="a2">A2</SelectItem>
                  <SelectItem value="b1">B1</SelectItem>
                  <SelectItem value="b2">B2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="education">Education</Label>
              <Select>
                <SelectTrigger id="education">
                  <SelectValue placeholder="Choose Relation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="higherSecondary">Higher Secondary</SelectItem>
                  <SelectItem value="diploma">Diploma</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="postGraduate">Post Graduate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Enter address" />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button type="submit" className="w-full md:w-1/2">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
