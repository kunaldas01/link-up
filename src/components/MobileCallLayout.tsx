"use client";

import {PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right"| "speaker-top"| "speaker-bottom";

const MobileCallLayout = ({layout}:{layout: CallLayoutType}) => {
    
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-bottom":
        return <SpeakerLayout  participantsBarPosition="top" />;
      default:
        return <SpeakerLayout participantsBarPosition="bottom" />;
    }
};

export default MobileCallLayout;