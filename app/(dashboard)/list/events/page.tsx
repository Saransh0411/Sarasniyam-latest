'use client';

import { useState, useEffect } from 'react';
import { IndianRupee, FileText, CreditCard, Receipt, Clock, CalendarDays } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DonationForm() {
  const [receiptNo, setReceiptNo] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Generate a random receipt number
    setReceiptNo(Math.floor(100000 + Math.random() * 900000).toString());

    // Set current date and time
    const now = new Date();
    setCurrentDate(now.toLocaleDateString());
    setCurrentTime(now.toLocaleTimeString());
  }, []);

  return (
    <Card className="mx-auto w-full max-w-4xl border-2 border-blue-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Donation Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form action="/devotee" method='POST' className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="amount" className="flex items-center gap-2">
              <IndianRupee size={20} />
              Donation Amount
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter donation amount"
              className="bg-blue-700/10"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="purpose" className="flex items-center gap-2">
              <FileText size={20} />
              Purpose of Donation
            </Label>
            <Textarea
              id="purpose"
              placeholder="Enter the purpose of donation"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="paymentMode" className="flex items-center gap-2">
              <CreditCard size={20} />
              Payment Mode
            </Label>
            <Select>
              <SelectTrigger id="paymentMode">
                <SelectValue placeholder="Select payment mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="upi">UPI</SelectItem>
                <SelectItem value="bank">Bank Transfer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="receiptNo" className="flex items-center gap-2">
              <Receipt size={20} />
              Receipt No.
            </Label>
            <Input
              id="receiptNo"
              value={receiptNo}
              className="bg-blue-700/10"
              readOnly
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center gap-2">
              <CalendarDays size={20} />
              Date
            </Label>
            <Input
              id="date"
              value={currentDate}
              className="bg-blue-700/10"
              readOnly
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time" className="flex items-center gap-2">
              <Clock size={20} />
              Time
            </Label>
            <Input
              id="time"
              value={currentTime}
              className="bg-blue-700/10"
              readOnly
            />
          </div>
          <div className="col-span-full flex justify-end space-x-2">
            <Button variant="outline">Cancel</Button>
            <Button>Submit Donation</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
