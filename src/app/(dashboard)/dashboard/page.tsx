"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

import FileUpload from "./components/Fileupload";
import GetIcon from "@/utils/getIcon";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";

export const ProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  designNumber: z.string().min(1, "Design number is required"),
  heroName: z.string().optional(),
  bio: z.string().optional(),
  rollCount: z.number().int().nonnegative(),
  colorVariationCount: z.number().int().nonnegative(),
  totalMeter: z.number().nonnegative(),
  width: z.number().positive(),
  price: z.number().nonnegative(),
  roomNo: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  dealer: z.string().optional(),
  media: z.array(
    z.object({
      type: z.enum(["Video", "Image", "Poster"]),
      url: z.string().url(),
    }),
  ),
});

const Page = () => {
  const [Files, SetFiles] = useState<IKUploadResponse[]>([]);
  const ImageInputRef = useRef<HTMLInputElement | null>(null);
  const VideoInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      designNumber: "",
      heroName: "",
      bio: "",
      rollCount: 0,
      colorVariationCount: 0,
      totalMeter: 0,
      price: 0,
      roomNo: "0",
      category: "Man Shirt",
      dealer: "",
      media: [],
    },
  });
  useEffect(() => {
    if (Files.length > 0) {
      form.setValue(
        "media",
        Files.map((file) => ({
          type: file.fileType === "image" ? "Image" : "Video",
          url: file.url,
        })),
      );
    }
  }, [Files, form]);

  const handleCancel = async (fileId: string) => {
    try {
      const response = await axios.delete("/api/v1/Imagekitfile-delete", {
        data: { fileId },
      });
      if (response.data.success) {
        SetFiles(Files.filter((file) => file.fileId !== fileId));
        toast.success("File deleted!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong deleting file");
    }
  };

  function getPreviewUrl(file: IKUploadResponse): string {
    if (file.filePath.startsWith("/videos/")) {
      console.log("filem", file);
      return `${file.thumbnailUrl}`;
    }
    return file.url;
  }

  const handleOnsuccess = (response: IKUploadResponse) => {
    SetFiles((state) => [...state, response]);
  };

  const handleProgress = (progress: number) => {
    if (progress === 0) {
      SetFiles((state) => [
        ...state,
        {
          fileId: "placeholder",
          filePath: "",
          fileType: "image",
          name: "loading",
          url: "",
          thumbnailUrl: "",
          height: 0,
          width: 0,
          size: 0,
          $ResponseMetadata: {
            statusCode: 0,
            headers: {},
          },
        } as IKUploadResponse,
      ]);
    } else if (progress === 90) {
      SetFiles((state) =>
        state.filter((file) => file.fileId !== "placeholder"),
      );
    }
  };

  const onSubmit: SubmitHandler<z.infer<typeof ProductSchema>> = async (
    data,
  ) => {
    const response = await axios.post("/api/v1/product", {
      ...data,
    });
    if (response) {
      toast.success("Form Submitted!");
    }
    console.log("Response", response);
  };
  const onError = (errors: unknown) => {
    console.error("❌ Validation Errors:", errors);
    toast.error("Please fix the form errors!");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center p-4 w-full"
    >
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">
            Add New Product
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, onError)}
              className="space-y-6"
            >
              {/* Upload Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  type="button"
                  className="flex gap-2 bg-sky-500 hover:bg-sky-600 text-white rounded-xl shadow"
                  onClick={() => ImageInputRef.current?.click()}
                >
                  <GetIcon name="Image" className="w-4 h-4" /> Upload Photos
                  <FileUpload
                    fileType="image"
                    ref={ImageInputRef}
                    onSuccess={handleOnsuccess}
                    onProgress={handleProgress}
                  />
                </Button>
                <Button
                  type="button"
                  className="flex gap-2 bg-purple-500 hover:bg-purple-600 text-white rounded-xl shadow"
                  onClick={() => VideoInputRef.current?.click()}
                >
                  <GetIcon name="FilePlay" className="w-4 h-4" /> Upload Video
                  <FileUpload
                    fileType="video"
                    ref={VideoInputRef}
                    onSuccess={handleOnsuccess}
                    onProgress={handleProgress}
                  />
                </Button>
                <div>
                  {Object.values(form.formState.errors).map((err) => (
                    <p key={err.message} className="text-red-500">
                      {err.message}
                    </p>
                  ))}
                </div>
              </div>

              {/* Uploaded Previews */}
              <div className="flex gap-3 flex-wrap">
                {Files?.map((file, index) => (
                  <motion.div
                    key={file.fileId || index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative group"
                  >
                    {file.fileType === "image" ? (
                      <Avatar className="w-20 h-20 rounded-md shadow-md">
                        <AvatarImage src={getPreviewUrl(file)} />
                        <AvatarFallback>
                          <Skeleton className="w-full h-full" />
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="w-20 h-20 rounded-md shadow-md overflow-hidden bg-gray-200">
                        <video
                          className="w-full h-full object-cover"
                          src={file.url}
                          muted
                        />
                        {/* Skeleton fallback */}
                        {!file.thumbnailUrl && (
                          <Skeleton className="w-full h-full absolute top-0 left-0" />
                        )}
                      </div>
                    )}

                    <X
                      onClick={() => handleCancel(file.fileId)}
                      className="absolute top-1 right-1 group-hover:block cursor-pointer text-red-600 bg-white rounded-full"
                      size={16}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Responsive Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Product Name"
                          {...field}
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="designNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Design Number"
                          {...field}
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="heroName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Hero Name"
                          {...field}
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dealer"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Dealer Name"
                          {...field}
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Product Bio"
                        {...field}
                        className="rounded-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Numeric Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="rollCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roll count</FormLabel>

                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Roll Count"
                          value={field.value ?? ""}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="colorVariationCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color varient Count</FormLabel>

                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Color Variants"
                          value={field.value ?? ""}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="totalMeter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Meter</FormLabel>

                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Total Meters"
                          value={field.value ?? ""}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Select Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="width"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Width</FormLabel>
                      <Select
                        onValueChange={(val) => field.onChange(Number(val))}
                        defaultValue={field.value?.toString()}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Width" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="36">36</SelectItem>
                          <SelectItem value="58">58</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Man Shirt">Man Shirt</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Price + Room */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Price per meter"
                          value={field.value ?? ""}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="roomNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Room No</FormLabel>

                      <FormControl>
                        <Input
                          type="string"
                          placeholder="Room No."
                          {...field}
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md"
                >
                  Submit Product
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Page;
