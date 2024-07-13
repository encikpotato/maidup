"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { BookCheck, CalendarIcon, Siren, User } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <div className="h-[200px] bg-blue-700 pt-10">
      <div className="w-full flex justify-center text-white text-2xl font-bold">
        Eva
      </div>
      <div className="absolute top-24 w-full px-3 ">
        <div className="p-3 bg-white rounded-xl border-black shadow-md flex flex-col items-center">
          <Image alt="maid1" src={require("../../../assets/maid1.png")} />
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Bio</TabsTrigger>
              <TabsTrigger value="password">Service</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Biography</CardTitle>
                  <CardDescription>
                    Reliable and professional maid Eva providing thorough
                    cleaning and care.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-row gap-3">
                    <div>
                      <User className="w-9 h-9" />
                    </div>
                    <div>
                      <div className="text-sm">Background check</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 pt-3">
                    <div>
                      <Siren className="w-9 h-9" />
                    </div>
                    <div>
                      <div className="text-sm">Police check</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 pt-3">
                    <div>
                      <BookCheck className="w-9 h-9" />
                    </div>
                    <div>
                      <div className="text-sm">Training</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Add service</CardTitle>
                  <CardDescription>
                    Select service you need and the date
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ToggleGroup type="multiple">
                    <ToggleGroupItem
                      className="data-[state=on]:bg-blue-200"
                      value="a"
                    >
                      Mopping
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      className="data-[state=on]:bg-blue-200"
                      value="b"
                    >
                      Wash Cloth
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      className="data-[state=on]:bg-blue-200"
                      value="c"
                    >
                      Cooking
                    </ToggleGroupItem>
                  </ToggleGroup>

                  <Form {...form}>
                    <form className="space-y-8">
                      <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-[240px] pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => new Date() > date}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                </CardContent>
                <CardFooter>
                  <Link href="/">
                    <Button>Confirm</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
