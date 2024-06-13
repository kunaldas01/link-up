"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import { useGetCalls } from "@/hooks/useGetCalls";
import { useEffect, useState } from "react";

const Home = () => {
  const { upcomingCalls } = useGetCalls();
  const [recentCall, setRecentCall] = useState("");
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  useEffect(() => {
    const upcomingCall = upcomingCalls?.map((call, index) => {
      if (index === 0) {
        return call.state.startsAt?.toLocaleString("en-US", {
          dateStyle: "medium",
          timeStyle: "short",
        });
      }
    });

    const upcomingCallString = upcomingCall?.toString() || "";

    setRecentCall(upcomingCallString);
  });

  console.log(recentCall);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-herosm lg:bg-herolg bg-cover bg-no-repeat">
        <div className="flex h-full flex-col justify-between px-5 py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[370px] rounded py-2 text-center text-base font-normal">
            {recentCall
              ? `Upcoming Meeting at: ${recentCall}`
              : "No Upcoming Meetings"}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
