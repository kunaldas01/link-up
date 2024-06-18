"use client";

import { PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right"| "speaker-top"| "speaker-bottom";

const CallLayout = ({layout}:{layout: CallLayoutType}) => {
    
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout  participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
};

export default CallLayout;