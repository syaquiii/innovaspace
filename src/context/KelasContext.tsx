"use client";
import { getAllCourses, getCourseDetail } from "@/api/services/course";
import { Course } from "@/type/Tkelas";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";

export interface CourseContextProps {
  courses: Course[];
  isLoading: boolean;
  error: Error | null;
  fetchCourseDetail: (courseId: string) => Promise<Course | null>;
}

interface CourseProviderProps {
  children: ReactNode;
}

export const CourseContext = createContext<CourseContextProps | undefined>(
  undefined
);

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourseContext must be used within a CourseProvider");
  }
  return context;
};

export const CourseProvider: React.FC<CourseProviderProps> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();
        console.log("API response:", response.data);
        if (response.data) {
          setCourses(response.data);
        } else {
          console.error("Unexpected API response structure", response.data);
          setError(new Error("Unexpected API response structure"));
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const fetchCourseDetail = async (courseId: string) => {
    try {
      const response = await getCourseDetail(courseId);
      return response.data;
    } catch (error) {
      console.error("Error fetching course detail:", error);
      return null;
    }
  };

  const value = useMemo(
    () => ({ courses, isLoading, error, fetchCourseDetail }),
    [courses, isLoading, error]
  );

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};
