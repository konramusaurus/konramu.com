export interface Voice {
  slug: string;
  voice_url: string;
  tags: string[];
}

export interface VoiceMap {
  title: string;
  publish_date: string;
  video_url: string;
  voices: Voice[];
}
