
import React from 'react';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, School } from "lucide-react";
import { toast } from "sonner";
import * as XLSX from 'xlsx';

const formSchema = z.object({
  studentName: z.string().min(2, "Name must be at least 2 characters"),
  parentName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  grade: z.string().min(1, "Please select a grade"),
  subject: z.string().min(1, "Please select a subject"),
});

const InterestForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      parentName: "",
      email: "",
      grade: "",
      subject: "",
    },
  });

  const downloadExcel = (data: z.infer<typeof formSchema>) => {
    // Create a worksheet with the form data
    const worksheet = XLSX.utils.json_to_sheet([
      {
        "Student Name": data.studentName,
        "Parent Name": data.parentName,
        "Email": data.email,
        "Grade": data.grade,
        "Subject": data.subject,
        "Submission Date": new Date().toLocaleString(),
      }
    ]);
    
    // Set column widths for better readability
    const columnWidths = [
      { wch: 20 }, // Student Name
      { wch: 20 }, // Parent Name
      { wch: 30 }, // Email
      { wch: 10 }, // Grade
      { wch: 15 }, // Subject
      { wch: 20 }, // Submission Date
    ];
    worksheet["!cols"] = columnWidths;

    // Create a workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Interest Form Data");

    // Generate filename with student name and date
    const fileName = `GradeChamp_Interest_${data.studentName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.xlsx`;
    
    // Download the file
    XLSX.writeFile(workbook, fileName);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.success("Thank you for your interest! We'll reach out soon.");
    console.log(values);
    
    // Download the Excel file
    downloadExcel(values);
    
    // Reset form
    form.reset();
  };

  return (
    <section id="interest-form" className="section-padding bg-gradechamp-softpurple/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join GradeChamp Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out this form to express your interest, and we'll help create a personalized learning plan for your child.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="studentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student's Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter student's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="parentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent's Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter parent's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grade</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[5, 6, 7, 8, 9, 10].map((grade) => (
                          <SelectItem key={grade} value={grade.toString()}>
                            Grade {grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject of Interest</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["Mathematics", "Science", "English", "History", "Geography"].map((subject) => (
                          <SelectItem key={subject} value={subject.toLowerCase()}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full flex items-center justify-center gap-2">
                <span>Submit Interest</span>
                <Download size={16} />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default InterestForm;
