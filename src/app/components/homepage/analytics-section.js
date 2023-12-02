"use client";
import { useRef, useEffect } from "react";

export default function Analytics() {
    const containerRef = useRef(null);
    const numberRefs = useRef([]);
    const targetValues = [1941, 150570, 1400, 140];
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                numberRefs.current.forEach((numberRef, index) => {
                    animateNumber(index, 0, targetValues[index], 2000);
                });
                observer.disconnect();
            }
        });
        observer.observe(containerRef.current);
        return () => {
            observer.disconnect();
        };
    }, []);
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
            className="w-full h-72 bg-analytics-bg bg-cover flex flex-wrap px-10 gap-x-4 justify-evenly items-center text-white"
        >
            <div className="flex flex-col items-center gap-2">
                <p
                    ref={(el) => (numberRefs.current[0] = el)}
                    className="font-inter text-[42px] font-extrabold"
                >
                    0
                </p>
                <p className="text-xl font-semibold">Members</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <p
                    ref={(el) => (numberRefs.current[1] = el)}
                    className="font-inter text-[42px] font-extrabold"
                >
                    0
                </p>
                <p className="text-xl font-semibold">Members</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <p
                    ref={(el) => (numberRefs.current[2] = el)}
                    className="font-inter text-[42px] font-extrabold"
                >
                    0
                </p>
                <p className="text-xl font-semibold">Units</p>
            </div>
            <div className="flex flex-col items-center">
                <div>
                <span
                    ref={(el) => (numberRefs.current[3] = el)}
                    className="font-inter text-[42px] font-extrabold"
                >
                0
                </span>
                <span className="font-inter text-[42px] font-extrabold">K</span>
                </div>
                <p className="text-xl font-semibold">Activities</p>
            </div>
        </div>
    );
}
