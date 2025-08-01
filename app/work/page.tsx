"use client";
import WorkCard from "./WorkCard";
import { AnimatePresence } from "framer-motion";
import { Job, jobs, JobCategory } from "../globals/jobs";
import { useEffect, useState } from "react";
import { Button } from "@mond-design-system/theme";
import { useThemeContext } from "../context/theme";

export default function Work() {
  const { isDarkMode } = useThemeContext();
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [filters, setFilters] = useState<JobCategory[]>(Object.values(JobCategory));

  const handleButtonClick = (filter: JobCategory) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  useEffect(() => {
    const updatedFilteredJobs = jobs.filter((job) =>
      filters.includes(job.category),
    );
    setFilteredJobs(updatedFilteredJobs);
  }, [filters]);

  return (
    <div className="flex flex-col items-center space-y-4 pt-4">
      <div
        className={`flex  border-gray-200 
        rounded-lg  w-full md:w-2/3 `}
      >
        <div>
          <p className="pb-1 pl-6 pr-6 text-lg">
            i put a little bit of illustration into my creative writing, a
            little bit of creative writing into my music, a little bit of music
            into my teaching, and a whole lot of all of these crafts into
            coding.
          </p>
        </div>
      </div>
      {/* <div className="border self-center border-sky-500 mb-2 w-1/5" /> */}
      <div className="flex items-center mb-2 space-x-2">
        {Object.values(JobCategory).map((category) => (
          <Button
            key={category}
            onClick={() => handleButtonClick(category)}
            variant={filters.includes(category) ? "primary" : "outline"}
            size="sm"
            isDarkMode={isDarkMode}
          >
            {category}
          </Button>
        ))}
      </div>
      <AnimatePresence>
        {filteredJobs.map((job) => (
          <WorkCard key={job.companyName} job={job} />
        ))}
      </AnimatePresence>
    </div>
  );
}
