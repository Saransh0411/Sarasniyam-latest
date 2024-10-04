'use client';

import { useState, useMemo } from 'react';
import { ArrowDownUp, FilterIcon, UserRoundPlus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { StudentsData, Batches, FeeStatuses } from '@/lib/Student';

export default function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('name');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterBatch, setFilterBatch] = useState('');
  const [filterFeeStatus, setFilterFeeStatus] = useState('');

  const filteredAndSortedStudents = useMemo(() => {
    let result = [...StudentsData];

    if (filterBatch) {
      result = result.filter((student) => student.batch === filterBatch);
    }
    if (filterFeeStatus) {
      result = result.filter(
        (student) => student.feeStatus === filterFeeStatus,
      );
    }

    if (searchTerm) {
      result = result.filter((student) => {
        if (searchBy === 'name') {
          return student.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
          return student.rollNo.includes(searchTerm);
        }
      });
    }

    if (sortBy) {
      result.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [searchTerm, searchBy, sortBy, sortOrder, filterBatch, filterFeeStatus]);

  const handleSort = (field: any) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const resetSort = () => {
    setSortBy(null);
    setSortOrder('asc');
  };

  const resetFilters = () => {
    setFilterBatch('');
    setFilterFeeStatus('');
  };

  const isFilterActive = filterBatch !== '' || filterFeeStatus !== '';

  return (
    <div className="container mx-auto max-w-7xl px-1">
      <div className="overflow-hidden rounded-xl bg-muted shadow-lg">
        <div className="flex flex-row items-center justify-between bg-gradient-to-b from-cyan-500 to-blue-700 p-3">
          <h1 className="mb-2 text-2xl font-bold tracking-wider text-white sm:mb-0 sm:text-3xl">
            Students Dashboard
          </h1>
          <Button asChild variant="secondary" className="border-2 text-xl">
            <Link href="#">
              <UserRoundPlus className="mr-2 text-accent-foreground" />
              Add Student
            </Link>
          </Button>
        </div>
        <div className="space-y-6 p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            <div className="relative grid-cols-4 max-md:hidden sm:col-span-2 md:grid-cols-2">
              <Input
                placeholder="Search by name or roll number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-2 border-muted-foreground py-2 pl-10 pr-4 text-lg"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                size={20}
              />
            </div>
            <div className="relative grid grid-cols-4 gap-3 md:hidden">
              <Input
                placeholder="Search by name or roll number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="col-span-2 w-full border-2 border-muted-foreground py-2 pl-10 pr-4 text-lg placeholder:max-md:text-sm"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                size={20}
              />
              <Button
                onClick={() => setSearchBy('name')}
                variant={searchBy === 'name' ? 'default' : 'outline'}
                className="col-span-1 w-full border-2 border-muted-foreground text-lg"
              >
                By Name
              </Button>
              <Button
                onClick={() => setSearchBy('rollNo')}
                variant={searchBy === 'rollNo' ? 'default' : 'outline'}
                className="w-full border-2 border-muted-foreground text-lg"
              >
                By Roll No
              </Button>
            </div>
            <div className="flex flex-wrap items-center space-x-2 sm:col-span-4">
              <ArrowDownUp size={20} className="text-accent-foreground" />
              <span className="mr-2 font-sans text-lg font-semibold tracking-wider">
                Sort :
              </span>
              <div className="flex flex-grow flex-wrap gap-2">
                <Button
                  onClick={() => handleSort('feeStatus')}
                  variant={sortBy === 'feeStatus' ? 'default' : 'outline'}
                  className="flex-grow border-2 border-muted-foreground font-sans text-xs sm:text-lg"
                >
                  Fee Status{' '}
                  {sortBy === 'feeStatus' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Button>
                <Button
                  onClick={() => handleSort('batch')}
                  variant={sortBy === 'batch' ? 'default' : 'outline'}
                  className="flex-grow border-2 border-muted-foreground font-sans text-xs sm:text-lg"
                >
                  Batch{' '}
                  {sortBy === 'batch' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Button>
                <Button
                  onClick={() => handleSort('dateOfAdmission')}
                  variant={sortBy === 'dateOfAdmission' ? 'default' : 'outline'}
                  className="flex-grow border-2 border-muted-foreground font-sans text-xs sm:text-lg"
                >
                  Date of Admission{' '}
                  {sortBy === 'dateOfAdmission' &&
                    (sortOrder === 'asc' ? '↑' : '↓')}
                </Button>
                <Button
                  onClick={resetSort}
                  variant={sortBy === null ? 'default' : 'outline'}
                  className="text-md flex-grow border-2 border-muted-foreground font-sans sm:text-lg"
                >
                  Reset Sort
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            <div className="grid grid-cols-2 gap-2 max-md:hidden sm:col-span-2">
              <Button
                onClick={() => setSearchBy('name')}
                variant={searchBy === 'name' ? 'default' : 'outline'}
                className="w-full border-2 border-muted-foreground text-lg"
              >
                By Name
              </Button>
              <Button
                onClick={() => setSearchBy('rollNo')}
                variant={searchBy === 'rollNo' ? 'default' : 'outline'}
                className="w-full border-2 border-muted-foreground text-lg"
              >
                By Roll No.
              </Button>
            </div>
            <div className="flex flex-wrap items-center space-x-2 sm:col-span-4">
              <FilterIcon size={20} className="text-accent-foreground" />
              <span className="mr-2 text-lg font-semibold tracking-wider">
                Filter :
              </span>
              <div className="flex flex-grow flex-wrap gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={filterBatch ? 'default' : 'outline'}
                      className="flex-grow border-2 border-muted-foreground text-lg"
                    >
                      {filterBatch || 'Batch'}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel className="text-center">
                      Select Batch
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {Batches.map((batch) => (
                      <DropdownMenuItem
                        key={batch}
                        onClick={() => setFilterBatch(batch)}
                      >
                        {batch}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={filterFeeStatus ? 'default' : 'outline'}
                      className="flex-grow border-2 border-muted-foreground text-lg"
                    >
                      {filterFeeStatus || 'Fee Status'}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel className="text-center">
                      Select Fee Status
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {FeeStatuses.map((status: any) => (
                      <DropdownMenuItem
                        key={status}
                        onClick={() => setFilterFeeStatus(status)}
                      >
                        {status}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  onClick={resetFilters}
                  variant={isFilterActive ? 'default' : 'outline'}
                  className="flex-grow border-2 border-muted-foreground text-lg"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border-2 border-accent-foreground">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-accent-foreground">
                    <thead className="bg-accent-foreground">
                      <tr className="text-center">
                        <th
                          scope="col"
                          className="border-r border-accent px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-primary-foreground"
                        >
                          Roll No
                        </th>
                        <th
                          scope="col"
                          className="border-r border-accent px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-primary-foreground"
                        >
                          Full Name
                        </th>
                        <th
                          scope="col"
                          className="border-r border-accent px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-primary-foreground"
                        >
                          Batch
                        </th>
                        <th
                          scope="col"
                          className="border-r border-accent px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-primary-foreground"
                        >
                          Date of Admission
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-primary-foreground"
                        >
                          Fee Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="scrollbar-thin scrollbar-thumb-slate-500 max-h-[400px] min-w-full divide-y divide-accent-foreground overflow-y-scroll bg-muted">
                      {filteredAndSortedStudents.map((student) => (
                        <tr
                          key={student.rollNo}
                          className="text-center hover:bg-muted-foreground/10"
                        >
                          <td className="whitespace-nowrap border-r border-accent-foreground px-6 py-2 text-sm font-medium">
                            {student.rollNo}
                          </td>
                          <td className="cursor-pointer whitespace-nowrap border-r border-accent-foreground px-6 py-2 text-sm underline-offset-2 hover:text-primary hover:underline">
                            {student.name}
                          </td>
                          <td className="whitespace-nowrap border-r border-accent-foreground px-6 py-2 text-sm">
                            {student.batch}
                          </td>
                          <td className="whitespace-nowrap border-r border-accent-foreground px-6 py-2 text-sm">
                            {student.dateOfAdmission}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 text-sm">
                            <span
                              className={`inline-flex rounded-full px-2 text-sm font-semibold leading-5 ${
                                student.feeStatus === 'Paid'
                                  ? 'bg-green-100 text-green-800'
                                  : student.feeStatus === 'Unpaid'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {student.feeStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
