"use client";
import { useRef, useEffect, useState } from "react";
export default function Analytics() {
    const containerRef = useRef(null);
    const numberRefs = useRef([]);
    const [analyticsData, setAnalyticsData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/api/analytics");
            const data = await response.json();
            setAnalyticsData(data);
        };
        fetchData();
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && analyticsData) {
                numberRefs.current.forEach((numberRef, index) => {
                    animateNumber(index, 0, analyticsData[index].count, 2000);
                });
                observer.disconnect();
            }
        });
        observer.observe(containerRef.current);
        return () => {
            observer.disconnect();
        };
    }, [analyticsData]);
    const animateNumber = (index, start, end, duration) => {
        const startTime = performance.now();
        const updateNumber = () => {
            const currentTime = performance.now();
            const progress = (currentTime - startTime) / duration;
            if (progress < 1) {
                const value = start + progress * (end - start);
                numberRefs.current[index].textContent = Math.round(value);
                requestAnimationFrame(updateNumber);
            } else {
                numberRefs.current[index].textContent = end;
            }
        };
        updateNumber();
    };
    return (
        <div
            ref={containerRef}
            className="w-full h-72 bg-analytics-bg bg-cover flex flex-wrap mobile:px-10 gap-x-4 justify-evenly items-center text-white"
        >
            {analyticsData &&
                analyticsData.map((analytic, index) => (
                    <div
                        key={analytic._id}
                        className="flex flex-col items-center gap-2 w-fit"
                    >
                        <p
                            ref={(el) => (numberRefs.current[index] = el)}
                            className="font-inter text-[42px] font-extrabold"
                        >
                            0
                        </p>
                        {/* {index === analyticsData.length - 1 && (
                            <span className="font-inter text-[42px] font-extrabold">
                                K
                            </span>
                        )} */}
                        <p className="text-xl font-semibold">
                            {analytic.title}
                        </p>
                    </div>
                ))}
        </div>
    );
}
